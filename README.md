# Owen's Clip

这里会保存我平时阅读的文章的 Markdown 全文，如果是英文文章的话，会有中文的译文附在每个段落后面，只保存我觉得值得收藏的，更新频率大约是一周 2-4 次。

## 我的大概收集流程

1. 浏览网页，比如 <https://www.owenyoung.com/inspires/>
2. 如果是英文文章，我使用 [Immersive Translate](https://github.com/immersive-translate/immersive-translate) 扩展将网页翻译为双语，然后再用这个 [markdownload](https://github.com/theowenyoung/markdownload) 扩展，把双语文章保存下来。
3. 使用 Git 把本地文件同步到远程仓库
4. 使用[Github Actions](https://github.com/theowenyoung/clip/blob/main/.github/workflows/build-site.yml) 自动发布网页到 [Cloudflare Pages](https://pages.cloudflare.com/)

## 复制该项目

如果你也想按照该项目的方式来收集和发布你的网页，我已经将这个项目抽出来一个模板，请参见模板项目的[说明文档](https://github.com/theowenyoung/clip-template)进行操作。

## RSS 订阅

可以通过 RSS 订阅最新的文章： <https://clip.owenyoung.com/feed.xml>

## 发送到 Kindle 邮箱的每日 Epub 电子书

在这个 Github 的 Repo 里有一个每日任务: <https://github.com/theowenyoung/clip/blob/main/.github/workflows/build-daily.yml>，它会自动把每日更新的文章打包成一个 epub 电子书，然后推送到我 Kindle 绑定的邮箱。

我在遛狗的时候用 Kindle 再次阅读/朗读双语文章，以此来学习英语。如果你想在你的 Kindle 邮箱里收到我的每日文章收藏的全文 epub 的话，可以给我发一个私信: <https://twitter.com/OwenYoungZh>, 我会手动把你的邮件地址也加入到推送列表。

> 注意：在 Kindle 上使用的话，需要把`bot@owenyoung.com`添加进你的信任邮箱列表： `Kindle Approved Personal Document E-mail List`，地址： <https://www.amazon.com/hz/mycd/myx#/home/settings/payment>

我使用 Mailjet 的免费额度进行邮件推送，每日限额 200 封，足够我个人使用: <https://app.mailjet.com/>

你可以直接在线阅读所有的文章： <https://clip.owenyoung.com>

或者在这里下载每日的 epub 文件:<https://github.com/theowenyoung/clip/releases>
