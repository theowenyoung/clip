// read from
import * as fs from "https://deno.land/std@0.159.0/fs/mod.ts";
import { extract } from "https://deno.land/std@0.159.0/encoding/front_matter.ts";
import { DateTimeFormatter } from "https://deno.land/std@0.159.0/datetime/formatter.ts";
import * as path from "https://deno.land/std@0.159.0/path/mod.ts";
import * as posixPath from "https://deno.land/std@0.159.0/path/posix.ts";
import { stringify } from "https://deno.land/std@0.159.0/encoding/toml.ts";
import { gfm } from "https://esm.sh/micromark-extension-gfm@2.0.1";
import {
  gfmFromMarkdown,
  gfmToMarkdown,
} from "https://esm.sh/mdast-util-gfm@2.0.1";
// import { default as kebabCase } from "https://jspm.dev/lodash@4.17.21/kebabCase";
import { toMarkdown } from "https://esm.sh/mdast-util-to-markdown@1.3.0";
import { fromMarkdown } from "https://esm.sh/mdast-util-from-markdown@1.2.0";
import { visit } from "https://esm.sh/unist-util-visit@4.1.1";
import { default as groupBy } from "https://deno.land/x/lodash@4.17.15-es/groupBy.js";
import { serve } from "https://deno.land/std@0.159.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.159.0/http/file_server.ts";
import { parse } from "https://deno.land/std@0.159.0/flags/mod.ts";
export const SECOND = 1e3;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
const DAYS_PER_WEEK = 7;
enum Day {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
export interface WeekOfYear {
  year: number;
  week: number;
  number: number;
  path: string;
  date: Date;
  id: string;
  name: string;
  days: string[];
}
interface Chapter {
  relativePath: string;
  path: string;
  title: string;
  date: Date;
  updated: Date;
  content: string;
  day: string;
}
interface OutputOptions {
  epub?: Record<string, unknown>;
  html: Record<string, unknown>;
  markdown?: Record<string, unknown>;
  pdf?: Record<string, unknown>;
  latex?: Record<string, unknown>;
}
interface BookConfig {
  book: Record<string, unknown>;
  output: OutputOptions;
}
interface SubSection {
  title: string;
  path: string;
}
interface SummarySection {
  title: string;
  path: string;
  rules?: Rule[];
  subSections?: SubSection[];
}
interface Rule {
  condition: string;
  key: string;
  value: string;
}
interface Book {
  config: BookConfig;
  introduction: SummarySection;
  summary: SummarySection[];
}

const markdownSourcePath = "./content";
const markdownRootPath = "./";
const bookDist = "./book-dist";
const host = "https://www.owenyoung.com";
async function main() {
  const args = Deno.args;
  const flags = parse(Deno.args, {
    boolean: [
      "today",
      "yesterday",
      "thisweek",
      "lastweek",
      "serve",
      "archive",
      "key",
    ],
    string: ["day", "week"],
  });
  const isBuildArchive = flags.archive;
  const now = new Date();
  // if env
  let blogRepoPath = "../../blog/content/blog/journals";
  if (Deno.env.get("BLOG_PATH")) {
    blogRepoPath = path.join(
      Deno.env.get("BLOG_PATH")!,
      "content/blog/journals",
    );
  }
  let serveDistDir = "";
  let dayBooks: Record<string, string[]> = {};
  if (flags.today) {
    const today = formatBeijing(now, "yyyy-MM-dd");
    dayBooks[`${today}`] = [today];
  } else if (flags.yesterday) {
    const yesterday = formatBeijing(
      new Date(now.getTime() - DAY),
      "yyyy-MM-dd",
    );
    dayBooks[`${yesterday}`] = [yesterday];
  } else if (flags.day) {
    // split by comma
    const allDays = flags.day.trim().split(",").map((day) => day.trim());
    for (const day of allDays) {
      dayBooks[`${day}`] = [day];
    }
  } else if (flags.thisweek) {
    // get week
    const week = getWeekOfYear(now);

    const allDays = week.days;
    const weekName = week.id;
    dayBooks[`${weekName}`] = allDays;
  } else if (flags.lastweek) {
    const lastWeek = getWeekOfYear(new Date(now.getTime() - WEEK));
    const allDays = lastWeek.days;
    const weekName = lastWeek.id;
    dayBooks[`${weekName}`] = allDays;
  } else if (flags.week) {
    // get week
    const allWeeks = flags.week.trim().split(",").map((day) => day.trim());
    for (const week of allWeeks) {
      const week = getWeekOfYear(new Date(flags.week));
      const allDays = week.days;
      dayBooks[`${week.id}`] = allDays;
    }
  }

  if (flags.key) {
    const keys = Object.keys(dayBooks);
    console.log(keys.join(","));
    return;
  }
  // console.log("dayBooks", dayBooks);

  const workDir = new URL(".", import.meta.url).pathname;
  const binDir = new URL("./bin", import.meta.url).pathname;
  const isServe = flags.serve;
  // walk content directory
  let outputOptions: OutputOptions = {
    html: {
      "git-repository-url": "https://github.com/theowenyoung/blog",
      "edit-url-template":
        "https://github.com/theowenyoung/blog/edit/main/{path}",
      "search": {
        "enable": false,
      },
    },
    markdown: {
      enable: true,
    },
  };
  if (!isServe) {
    outputOptions = {
      ...outputOptions,
      epub: {
        "cover-image": "cover.jpg",
        "command": binDir + "/mdbook-epub",
        "use-default-css": false,
      },
      // pdf: {
      //   enable: true,
      //   "command": binDir + "/mdbook-pdf",
      // },
    };
  }

  /*
  const books: Record<string, Book> = {
    "owen-blog": {
      tags: ["Random Book"],
      chapters: [],
      introduction: {
        title: "简介",
        path: "README.md",
      },
      summary: [
        {
          title: "随笔",
          path: "random-intro.md",
          rules: [
            {
              condition: "contains",
              key: "category",
              value: "Random",
            },
          ],
        },
        {
          title: "短想法",
          path: "thoughts.md",
        },
        {
          title: "笔记",
          path: "notes-intro.md",
          rules: [
            {
              condition: "contains",
              key: "category",
              value: "Notes",
            },
            {
              condition: "notContains",
              key: "relativePath",
              value: "content/thoughts.md",
            },
            {
              condition: "notContains",
              key: "relativePath",
              value: "content/pages/now.md",
            },
            {
              condition: "notContains",
              key: "relativePath",
              value: "content/pages/about.md",
            },
          ],
        },
        {
          title: "读书笔记",
          path: "books-intro.md",
          rules: [
            {
              condition: "contains",
              key: "category",
              value: "Books",
            },
          ],
        },
        {
          title: "文章笔记",
          path: "articles-intro.md",
          rules: [
            {
              condition: "contains",
              key: "category",
              value: "Articles",
            },
          ],
        },
        {
          title: "关于我",
          path: "pages/about.md",
          subSections: [
            {
              title: "现在",
              path: "pages/now.md",
            },
          ],
        },
      ],
      config: {
        book: {
          "title": "Owen博客节选",
          "description": "Owen的博客节选电子书版",
          "src": "content",
          "language": "zh",
          "authors": ["Owen Young"],
        },
        output: outputOptions,
      },
    },
    "owen-blog-archive": {
      tags: [],
      chapters: [],
      introduction: {
        title: "简介",
        path: "README.md",
      },
      summary: [],
      config: {
        book: {
          "title": "Owen的博客存档",
          "description": "Owen的博客存档电子书版",
          "src": "content",
          "language": "zh",
          "authors": ["Owen Young"],
        },
        output: outputOptions,
      },
    },
  };
  */

  const books: Record<string, Book> = {};
  const allChapters: Chapter[] = [];

  const daysBooksKeys = Object.keys(dayBooks);
  if (daysBooksKeys.length > 0) {
    const keys = Object.keys(dayBooks);
    for (const key of keys) {
      const days = dayBooks[key];
      // check if the day exists

      const validDays: string[] = [];
      console.log("days", days);
      for (const dayString of days) {
        const year = dayString.split("-")[0];
        const month = dayString.split("-")[1];
        const day = dayString.split("-")[2];
        const dayDir = path.join(workDir, "content", year, month, day);
        if (fs.existsSync(dayDir)) {
          validDays.push(dayString);
        }
      }
      if (validDays.length > 0) {
        const summary: SummarySection[] = [];
        for (const dayString of validDays) {
          const year = dayString.split("-")[0];
          const month = dayString.split("-")[1];
          const day = dayString.split("-")[2];
          summary.push({
            title: dayString,
            path: `${year}/${month}/${day}/index.md`,
            rules: [
              {
                condition: "contains",
                key: "day",
                value: dayString,
              },
            ],
          });
        }
        books[`${key}`] = {
          introduction: {
            title: "简介",
            path: "README.md",
          },
          summary,
          config: {
            book: {
              "title": `Owen的博客${key}节选`,
              "description": `Owen的博客${key}节选电子书版`,
              "src": "content",
              "language": "zh",
              "authors": ["Owen Young"],
            },
            output: outputOptions,
          },
        };
      } else {
        console.log(`no valid days for ${key}`);
        throw new Error(`no valid days for ${key}`);
      }
    }
  }

  if (isBuildArchive || daysBooksKeys.length === 0) {
    // all
    books["archive"] = {
      summary: [],
      introduction: {
        title: "简介",
        path: "README.md",
      },
      config: {
        book: {
          "title": "Owen阅读笔记",
          "description": "Owen阅读笔记",
          "src": "content",
          "language": "zh",
          "authors": ["Owen Young"],
        },
        output: outputOptions,
      },
    };
  }

  // clear current book dist
  try {
    await Deno.remove(bookDist, { recursive: true });
  } catch (_e) {
    // ignore
  }
  const booksKeys = Object.keys(books);

  for await (
    const entry of fs.walk(markdownSourcePath, {
      includeDirs: false,
    })
  ) {
    if (entry.isFile && !entry.name.startsWith(".")) {
      const filepath = entry.path;
      const filename = path.basename(filepath);
      const ext = path.extname(filepath);
      if (
        ext === ".md" && !filename.startsWith("_")
      ) {
        let fileLanguage = "zh";

        const filenameParts = filename.split(".");
        if (filenameParts.length > 2) {
          fileLanguage = filenameParts[filenameParts.length - 2];
        }

        // read file
        const file = await Deno.readTextFile(entry.path);
        // extract front matter
        const parsed = extract(file);
        const { body } = parsed;
        const attrs = parsed.attrs as {
          title: string;
          date: string;
          updated?: string;
          draft?: boolean;
          taxonomies: {
            tags?: string[];
            categories?: string[];
          };
          extra: Record<string, string>;
        };
        if (attrs.draft) {
          continue;
        }
        const taxonomies = attrs.taxonomies;
        const tags = taxonomies?.tags || [];
        const categories = taxonomies?.categories;
        const category = categories?.[0];
        const relativePath = path.relative(markdownRootPath, filepath);
        const chapter = {
          path: filepath,
          relativePath,
          title: attrs.title,
          date: new Date(attrs.date),
          updated: attrs.updated
            ? new Date(attrs.updated)
            : new Date(attrs.date),
          category,
          content: body,
          day: formatBeijing(new Date(attrs.date), "yyyy-MM-dd"),
        };
        // add to archive
        if (attrs.date) {
          allChapters.push(chapter);
          // if books day
        }
      }
    }
  }
  for (const key of booksKeys) {
    let keyType = "";
    if (key === "archive") {
      keyType = "archive";
    } else if (key.length === 4) {
      keyType = "yearly";
    } else if (key.length === 7) {
      keyType = "weekly";
    } else if (key.length === 10) {
      keyType = "daily";
    }
    if (!keyType) {
      throw new Error(`invalid book key ${key}`);
    }
    const book = books[key];
    // console.log("book", book);
    const bookConfig = book.config;
    const bookSourceFileDist = path.join(bookDist, key);

    const chapters = allChapters;
    // console.log("chapters", chapters);
    // sort by date
    chapters.sort((a, b) => b.date.getTime() - a.date.getTime());
    // write to file
    const targetMarkdownFiles: Record<string, string> = {};
    const allFiles: string[] = [];
    for (const chapter of chapters) {
      // console.log(chapter.path);
      const markdownContent = `# ${chapter.title}\n\n${chapter.content}`;
      targetMarkdownFiles[chapter.relativePath] = markdownContent;
      if (!allFiles.includes(chapter.relativePath)) {
        allFiles.push(chapter.relativePath);
      }
      // if chapter is a folder, also copy assets
      if (/index.(\w+\.)?md$/.test(chapter.path)) {
        const folder = path.dirname(chapter.path);
        const assets = fs.walk(folder, { includeDirs: false });
        for await (const asset of assets) {
          if (
            asset.isFile && !asset.path.endsWith(".md") &&
            !asset.name.startsWith(".")
          ) {
            const assetRelativePath = path.relative(
              markdownRootPath,
              asset.path,
            );
            const assetDistPath = path.join(
              bookSourceFileDist,
              assetRelativePath,
            );
            await fs.ensureDir(path.dirname(assetDistPath));
            await Deno.copyFile(asset.path, assetDistPath);
          }
        }
      }
    }

    // format markdown and write to dist
    for (const relativePath of Object.keys(targetMarkdownFiles)) {
      const distPath = path.join(
        bookSourceFileDist,
        relativePath,
      );
      // ensure folder exists
      const markdownContent = targetMarkdownFiles[relativePath];
      const formatted = formatMarkdown(relativePath, markdownContent, allFiles);
      await fs.ensureDir(path.dirname(distPath));
      await Deno.writeTextFile(distPath, formatted);
    }

    // gen summary

    for (const chapter of chapters) {
      for (const summarySection of book.summary) {
        const rules = summarySection.rules;
        if (rules) {
          let match = true;
          for (const rule of rules) {
            const actualValue =
              (chapter as unknown as Record<string, string>)[rule.key];
            if (rule.condition === "contains") {
              if (
                Array.isArray(actualValue) && !actualValue.includes(rule.value)
              ) {
                match = false;
              } else if (actualValue !== rule.value) {
                match = false;
              }
            }

            // notContains
            if (rule.condition === "notContains") {
              if (
                Array.isArray(actualValue) && actualValue.includes(rule.value)
              ) {
                match = false;
              } else if (actualValue === rule.value) {
                match = false;
              }
            }
          }
          if (match) {
            const relativePathToSummary = chapter.relativePath.replace(
              /^content\//,
              "",
            );

            if (!summarySection.subSections) {
              summarySection.subSections = [];
            }
            // TODO
            summarySection.subSections.push({
              title: chapter.title,
              path: relativePathToSummary,
              // subSections: groups[day].map((chapter: Chapter) => {
              //   const relativePathToSummary = chapter.relativePath.replace(
              //     /^content\//,
              //     "",
              //   );
              //   return {
              //     title: chapter.title,
              //     path: relativePathToSummary,
              //   };
              // }),
            });
          }
        }
      }
    }

    // for archive book gropu by year and month
    if (key === "archive") {
      const groups = groupBy(chapters, (chapter: Chapter) => {
        return chapter.date.getUTCFullYear() + "" +
          addZero(chapter.date.getUTCMonth() + 1) +
          addZero(chapter.date.getUTCDate());
      });
      const days = Object.keys(groups).sort((a, b) => {
        return parseInt(b) - parseInt(a);
      });
      for (const day of days) {
        // split 4,2
        const yearStr = day.slice(0, 4);
        const monthStr = day.slice(4, 6);
        const dayStr = day.slice(6, 8);
        book.summary.push({
          title: yearStr + "-" + monthStr + "-" + dayStr,
          path: `${yearStr}/${monthStr}/${dayStr}/index.md`,
          subSections: groups[day].map((chapter: Chapter) => {
            const relativePathToSummary = chapter.relativePath.replace(
              /^content\//,
              "",
            );
            return {
              title: chapter.title,
              path: relativePathToSummary,
            };
          }),
        });
      }
    }

    let summary = `# Summary\n\n`;
    summary += `[${book.introduction.title}](${book.introduction.path})\n\n`;
    for (const section of book.summary) {
      summary += `- [${section.title}](${section.path})\n`;

      if (section.subSections) {
        for (const subSection of section.subSections) {
          summary += `  - [${subSection.title}](${subSection.path})\n`;
        }
      }
    }
    // write summary
    await Deno.writeTextFile(
      path.join(
        bookSourceFileDist,
        bookConfig.book.src as string,
        "SUMMARY.md",
      ),
      summary,
    );

    // copy book assets
    const bookAssetsPath = path.join("templates", keyType);

    for await (
      const asset of fs.walk(bookAssetsPath, {
        includeDirs: false,
      })
    ) {
      if (asset.isFile && !asset.name.startsWith(".")) {
        const assetRelativePath = path.relative(bookAssetsPath, asset.path);
        const assetDistPath = path.join(
          bookSourceFileDist,
          bookConfig.book.src as string,
          assetRelativePath,
        );
        await fs.ensureDir(path.dirname(assetDistPath));
        await Deno.copyFile(asset.path, assetDistPath);
      }
    }

    // add summary sections to section file
    for (const section of book.summary) {
      if (section.subSections && section.subSections.length > 0) {
        // check blog folder is there is links markdown, if not, create one
        const dayIntroPath = path.join(blogRepoPath, section.title + ".md");
        let newSectionContent = "";
        const sectionPath = path.join(
          bookSourceFileDist,
          bookConfig.book.src as string,
          section.path,
        );
        let subSectionsMarkdown = "";

        for (const subSection of section.subSections) {
          subSectionsMarkdown +=
            `- [${subSection.title}](/${subSection.path})\n`;
        }

        let sectionContent = `# ${section.title}\n\n`;
        try {
          sectionContent = await Deno.readTextFile(sectionPath);
        } catch (_e) {
          // ignore
        }
        newSectionContent = `${sectionContent}

## 包含以下文章

${subSectionsMarkdown}
`;

        if (fs.existsSync(dayIntroPath)) {
          const dayIntroContent = await Deno.readTextFile(dayIntroPath);
          const parsed = extract(dayIntroContent);
          const { body } = parsed;
          newSectionContent += `
## 当日笔记 ([原文](https://www.owenyoung.com/blog/journals/${section.title}/))

${body}
`;
        }
        await fs.ensureDir(path.dirname(sectionPath));
        await Deno.writeTextFile(
          sectionPath,
          newSectionContent,
        );
      }
    }

    // write book.toml
    const bookToml = stringify(
      book.config as unknown as Record<string, unknown>,
    );
    const bookTomlPath = path.join(bookSourceFileDist, "book.toml");
    await Deno.writeTextFile(bookTomlPath, bookToml);
    console.log(`build book ${key} source files success`);

    const p = Deno.run({
      cmd: ["./bin/mdbook", "build", bookSourceFileDist],
    });
    await p.status();
    const distDir = path.join(workDir, "dist", key);
    serveDistDir = distDir;
    await fs.ensureDir(distDir);
    // clean dist folder
    await Deno.remove(distDir, {
      recursive: true,
    });
    const htmlPath = path.join(bookSourceFileDist, "book/html");
    if (!isServe && key !== "archive") {
      // copy epub file
      const epubPath = path.join(
        bookSourceFileDist,
        `book/epub/${book.config.book.title}.epub`,
      );
      await fs.ensureDir(distDir);
      const epubNewPath = path.join(
        distDir,
        `owen-clip-${keyType}-${key}.epub`,
      );
      await Deno.copyFile(epubPath, epubNewPath);

      // // copy pdf file
      // const pdfPath = path.join(bookSourceFileDist, "book/pdf/output.pdf");
      // const pdfDistPath = path.join(distDir, `${key}.pdf`);
      // await Deno.copyFile(pdfPath, pdfDistPath);

      // zip html files to dist
      const zipProcess = Deno.run({
        cmd: [
          "zip",
          "-r",
          "-q",
          path.join(distDir, `owen-clip-${keyType}-${key}-html.zip`),
          "./",
        ],
        cwd: htmlPath,
      });
      await zipProcess.status();
    }
    // copy all html files to distDir
    await fs.copy(htmlPath, distDir, { overwrite: true });
    console.log("build book success");
  }

  if (isServe) {
    serve((req) => {
      return serveDir(req, {
        fsRoot: serveDistDir,
      });
    });
  }
}

if (import.meta.main) {
  await main();
}

function formatMarkdown(filepath: string, content: string, allFiles: string[]) {
  const tree = fromMarkdown(content, "utf8", {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  });
  visit(tree, "link", (node) => {
    const { url } = node;
    if (
      url && url.startsWith("/content/") &&
      url.endsWith(".md")
    ) {
      // if url ends with _index.md or _index.en.md, transform to absolute url
      const basename = path.basename(url);
      if (/_index\.(\w+\.)?md/.test(basename)) {
        const finalUrl = internalMarkdownLinkToAbsoluteUrl(url);
        // remove _index.md
        node.url = finalUrl;
      } else {
        // replace to relative html link
        // get relative path
        // transform to absolute path
        // remove /content
        const targetPathWithoutRoot = url.replace(/^\/content/, "content");
        if (allFiles.includes(targetPathWithoutRoot)) {
          const relativePath = path.relative(
            path.dirname(path.join("/", filepath)),
            url,
          );
          const finalUrl = relativePath.replace(/\.md$/, ".html");
          node.url = finalUrl;
        } else {
          // do not include, transform to absolute url
          const finalUrl = internalMarkdownLinkToAbsoluteUrl(url);
          node.url = finalUrl;
        }
      }
    }
  });

  const markdownDist = toMarkdown(tree, {
    extensions: [gfmToMarkdown()],
  });
  return markdownDist;
}

function internalMarkdownLinkToAbsoluteUrl(link: string): string {
  const basename = path.basename(link);
  let langPath = "";
  const basenameArr = basename.split(".");
  const relativePath = posixPath.relative("/content", link);

  let filenameWithoutExt = basenameArr.slice(0, -1).join();
  if (basenameArr.length > 2) {
    // yse lang
    langPath = basenameArr[basenameArr.length - 2] + "/";
    filenameWithoutExt = basenameArr.slice(0, -2).join();
  }
  let finalUrl = "";
  if (filenameWithoutExt === "_index" || filenameWithoutExt === "index") {
    // section
    finalUrl = `${host}/${langPath}${posixPath.dirname(relativePath)}/`;
  } else {
    finalUrl = `${host}/${langPath}${
      posixPath.dirname(relativePath)
    }/${filenameWithoutExt}/`;
  }
  return finalUrl;
}
function addZero(num: number): string {
  if (num < 10) {
    return "0" + num;
  } else {
    return "" + num;
  }
}
function formatBeijing(date: Date, formatString: string) {
  date = new Date(date.getTime() + 8 * 60 * 60 * 1000);
  const formatter = new DateTimeFormatter(formatString);
  return formatter.format(date, {
    timeZone: "UTC",
  });
}
export function getWeekOfYear(date: Date): WeekOfYear {
  const beijingDate = formatBeijing(date, "yyyy-MM-dd");
  const beijingDateArr = beijingDate.split("-");
  const workingDate = new Date(
    Date.UTC(
      Number(beijingDateArr[0]),
      Number(beijingDateArr[1]) - 1,
      Number(beijingDateArr[2]),
    ),
  );

  const day = workingDate.getUTCDay();

  const nearestThursday = workingDate.getUTCDate() +
    Day.Thu -
    (day === Day.Sun ? DAYS_PER_WEEK : day);

  workingDate.setUTCDate(nearestThursday);

  // Get first day of year
  const yearStart = new Date(Date.UTC(workingDate.getUTCFullYear(), 0, 1));
  const weekYear = workingDate.getUTCFullYear();
  // return the calculated full weeks to nearest Thursday
  const week = Math.ceil(
    (workingDate.getTime() - yearStart.getTime() + DAY) / WEEK,
  );
  const weekRangeInfo = weekToRange(Number(`${weekYear}${addZero(week)}`));
  return {
    year: weekYear,
    week: week,
    path: `${workingDate.getUTCFullYear()}/${addZero(week)}`,
    number: Number(`${weekYear}${addZero(week)}`),
    date: weekNumberToDate(Number(`${weekYear}${addZero(week)}`)),
    id: `${weekYear}-${addZero(week)}`,
    name: weekRangeInfo[1],
    days: weekRangeInfo[0],
  };
}
export function weekToRange(weekNumber: number): [string[], string] {
  let year = Math.floor(weekNumber / 100);
  let week = weekNumber % 100;
  // Get first day of year
  const yearStart = new Date(Date.UTC(year, 0, 1));

  // year start monday date

  const yearStartMondayDate = startDateOfWeek(yearStart);

  const yearStartMondayFullYear = yearStartMondayDate.getUTCFullYear();

  let yearFirstWeekMonday = yearStartMondayDate;
  if (yearStartMondayFullYear !== year) {
    // then year first week monday is next +7
    yearFirstWeekMonday = new Date(yearStartMondayDate.getTime() + WEEK);
  }

  const weekMonday = yearFirstWeekMonday.getTime() + WEEK * (week - 1);
  const weekSunday = weekMonday + WEEK - 1;

  const weekStartYear = new Date(weekMonday).getUTCFullYear();
  const start = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  }).format(weekMonday);

  const end = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  }).format(weekSunday);

  const weekName = `${start} - ${end}, ${weekStartYear}`;
  const days: string[] = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(weekMonday + DAY * i);
    days.push(
      `${day.getUTCFullYear()}-${day.getUTCMonth() + 1}-${day.getUTCDate()}`,
    );
  }
  return [days, weekName];
}
export function weekNumberToDate(weekNumber: number): Date {
  const year = Math.floor(weekNumber / 100);
  const week = weekNumber % 100;
  // Get first day of year
  const yearStart = new Date(Date.UTC(year, 0, 1));

  // year start monday date

  const yearStartMondayDate = startDateOfWeek(yearStart);

  const yearStartMondayFullYear = yearStartMondayDate.getUTCFullYear();

  let yearFirstWeekMonday = yearStartMondayDate;
  if (yearStartMondayFullYear !== year) {
    // then year first week monday is next +7
    yearFirstWeekMonday = new Date(yearStartMondayDate.getTime() + WEEK);
  }

  const weekMonday = yearFirstWeekMonday.getTime() + WEEK * (week - 1);
  const weekSunday = weekMonday + WEEK - 1;
  return new Date(weekMonday);
}
export function startDateOfWeek(date: Date, start_day = 1): Date {
  // Returns the start of the week containing a 'date'. Monday 00:00 UTC is
  // considered to be the boundary between adjacent weeks, unless 'start_day' is
  // specified. A Date object is returned.

  date = new Date(date.getTime());
  const day_of_month = date.getUTCDate();
  const day_of_week = date.getUTCDay();
  const difference_in_days = (
    day_of_week >= start_day
      ? day_of_week - start_day
      : day_of_week - start_day + 7
  );
  date.setUTCDate(day_of_month - difference_in_days);
  date.setUTCHours(0);
  date.setUTCMinutes(0);
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);
  return date;
}