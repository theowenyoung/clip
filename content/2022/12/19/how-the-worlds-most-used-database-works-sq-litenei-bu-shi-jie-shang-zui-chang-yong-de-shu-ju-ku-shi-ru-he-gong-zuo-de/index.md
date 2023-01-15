---
title: ' SQLite内部：世界上最常用的数据库是如何工作的'
date: 2022-12-18T21:40:41.000Z
updated: 2022-12-18T21:40:41.000Z
taxonomies:
  tags:
    - Dev
extra:
  source: https://www.compileralchemy.com/books/sqlite-internals/
  hostname: www.compileralchemy.com
  author: compileralchemy
  original_title: How The World's Most Used Database Works --- SQLite内部：世界上最常用的数据库是如何工作的
  original_lang: en

---

1.  [Foreword 前言](https://www.compileralchemy.com/books/sqlite-internals/#foreword)
2.  [Introduction  
    引言](https://www.compileralchemy.com/books/sqlite-internals/#intro)
3.  [Contributors  
    贡献者](https://www.compileralchemy.com/books/sqlite-internals/#contribs)
4.  [The Story Behind  
    背后的故事](https://www.compileralchemy.com/books/sqlite-internals/#story)
5.  [Technical Context  
    技术背景](https://www.compileralchemy.com/books/sqlite-internals/#technical-context)
6.  [Overview 概述](https://www.compileralchemy.com/books/sqlite-internals/#overview)
7.  [File & Record Format  
    文件和记录格式](https://www.compileralchemy.com/books/sqlite-internals/#file-record)
8.  [Rollback & WAL mode  
    回滚模式(&W)](https://www.compileralchemy.com/books/sqlite-internals/#rollback-wal)
9.  [Interesting Features  
    有趣的功能](https://www.compileralchemy.com/books/sqlite-internals/#interesting-features)
10.  [Knowing Internals  
    了解内部结构](https://www.compileralchemy.com/books/sqlite-internals/#knowing-internals)
11.  [The Future 未来](https://www.compileralchemy.com/books/sqlite-internals/#the-future)
12.  [How SQLite Is modified  
    如何修改SQLite](https://www.compileralchemy.com/books/sqlite-internals/#modifications)
13.  [References 参考文献](https://www.compileralchemy.com/books/sqlite-internals/#refs)

## Chapter: Foreword  
第一章：前言  

To all SQLite lovers.  
致所有SQLite爱好者。  

You can view \[ [compileralchemy.com](https://www.compileralchemy.com/) \] or \[ [contribute to the book](https://github.com/compileralchemy/compileralchemy.github.io/blob/source/data/books/sqlite_internals.md) \] or \[ [download the book](https://www.compileralchemy.com/assets/books/foss_sqlite_internals.pdf) \] It is OpenSource! Feel free to contribute a section, propose rewrites, fix typos etc. If you have comments, mail them to `arj.python at gmail dot com`.

您可以查看\[编译器\]或\[对书有贡献\]或\[下载书\]，它是开源的！如果你有什么意见，可以发邮件给`arj.python at gmail dot com`，建议改写，改写等等。

The book is  
这本书是  
in progress 正在进行中 as of now!  
从现在开始！

Particular thanks to the [LibSQL](https://github.com/libsql/libsql) maintainers. Started this book as a series of presentations to DevFest and the LibSQL community. I wanted to contribute to LibSQL. A book is far better than presentation slides.

尤其要感谢LibSQL的维护者。本书一开始是对DevFest和LibSQL社区的一系列演示。我想为LibSQL做出贡献。一本书比演示幻灯片好得多。

I also owe much to Dan Shearer from [LumoSQL](https://github.com/LumoSQL/lumosql). For his time reviewing a pre-run of the presentation.

我还欠LumoSQL的丹·希勒很多。感谢他花时间回顾了演示文稿的预演。

Also, i just could not find a sane free book on SQLite internals! Free books help keep human legacy around. Without books, you burn time, a lot of it.

而且，我就是找不到一本关于SQLite内部原理的免费书！免费书籍有助于保留人类遗产。没有书，你会浪费时间，很多时间。

If you want to discuss dbs all day long, i recommend joining the [Multiprocess communnity #db](https://discord.gg/CjYMRrySNq) (Phil Eaton).

如果你想整天讨论DBS，我建议加入多进程社区#db(菲尔·伊顿)。

Since i scrapped my notes together, this did not start as a proper book. PRs welcome.

因为我把笔记扔在一起，这本书一开始就不是一本像样的书。欢迎光临。

## Chapter: Introduction  
第一章：引言  

SQLite is a file-based database which is extremely reliable and stable. It is the world’s most used database. It’s used on military devices, on planes (the A350 for instance) and in space. The codebase and mechanisms it uses is extremely complex. The seemingly simple nature of it and adoption makes a good case for deep diving into in a fascinating piece of software.

SQLite是一个基于文件的数据库，非常可靠和稳定。它是世界上使用最多的数据库。它被用于军事设备、飞机(例如A350)和太空中。它使用的代码库和机制极其复杂。它看似简单的本质和被采用，为深入研究一款迷人的软件提供了一个很好的理由。

It also implemented many features years ahead of popular databases like partial indices.

它还比流行的数据库提前几年实现了许多功能，如部分索引。

It’s pronounced S-Q-L-ite, like mineral. But whatever is easy to pronounce is fine \[10\].

它的发音是S-Q-L-ite，像矿物一样。但任何容易发音的词都可以\[10\]。

## Chapter: Contributors  
章节：投稿人  

```
Abdur-Rahmaan Janhangeer, https://github.com/Abdur-RahmaanJ    Main content
```

Thanks 谢谢

```
Stephan Beal, https://github.com/sgbeal   Reporting and correcting the contribution linkJakub Martin, Author of OctoSQL, https://github.com/cube2222/octosql   For popularising the book
```

General improvements  
总体改进  

```
Jaime Terreu, https://github.com/Confidenceman02
```

## Chapter: The Story Behind  
章节：背后的故事  

SQLite was written by Dwayne Richard Hipp. It is not uncommon to see it being abbreviated to D. Richard Hipp or DRH for short. The story of how the database came around is fascinating. It sheds light on the author’s mindset and SQLite general coding culture.

SQLite是由德韦恩·理查德·希普编写的。它被缩写为D.Richard Hipp或DRH的情况并不少见。数据库是如何出现的，这个故事很有趣。它揭示了作者的心态和SQLite通用编码文化。

DRH holds a computer science doctorate in computational linguistics whithout taking prior programming courses. He also has a masters in electrical engineering and went to work for Bell Labs! \[9\]

DRH拥有计算语言学的计算机科学博士学位，没有参加过以前的编程课程。他还拥有电气工程硕士学位，并在贝尔实验室工作！

Since his early days he was very dedicated. He dropped out of academia as the race was full of candidates. He turned to consulting. During that time, he was signed a software contract with shipyard _Bath Iron Works_. His work involved finding the solution to pipe burst failure by controlling valves on a warship: the _DDG-79 Oscar Austin_.

从他早年起，他就非常敬业。由于竞争中充满了候选人，他退出了学术界。他转向了咨询业。在此期间，他与造船厂Bath Iron Works签署了一份软件合同。他的工作包括通过控制一艘军舰上的阀门来找到管道破裂故障的解决方案：DDG-79奥斯卡·奥斯汀号。

![](oscar_austin.jpg)

Richard had a problem. The software often did not work as the database server was down all the time. The ship was using _Informix_. So, he thought of spinning his own database.

理查德遇到了麻烦。由于数据库服务器一直处于停机状态，该软件经常无法运行。这艘船使用的是Informix。因此，他想到了旋转自己的数据库。

> one of the guys I was working with says, “Richard, why don’t you just write one?” “Okay, I’ll give it a try.
> 
> 一个和我一起工作的人说：“理查德，你为什么不写一本呢？”“好的，我会试一试。
> 
> … …
> 
> all government contracts got shut down, so I was out of work for a few months, and I thought, “Well, I’ll just write that database engine now.”
> 
> 所有的政府合同都被关闭了，所以我有几个月没有工作，我想，“好吧，我现在就写那个数据库引擎。”

Contrary to many popular projects, Richard thought of a bytecode-driven engine since the begining. This shows his previous exposure to compiler crafstmanship.

与许多流行的项目相反，Richard从一开始就想到了字节码驱动的引擎。这表明他以前接触过编译器工艺。

> so I wrote a byte code engine that would actually run a query and then I wrote a compiler that would translate SQL into that byte code and voila, SQLite was born.
> 
> 所以我编写了一个实际运行查询的字节码引擎，然后我编写了一个编译器，将SQL转换为字节码，瞧，SQLite诞生了。

## How SQLite picked up speed  
SQLite如何提升速度  

SQLite was not an overnight success though people did realise it’s potential since the early days. This is a list of some milestones which led to SQLite what it is today.

SQLite不是一蹴而就的，尽管人们从早期就意识到了它的潜力。这是一些里程碑的清单，这些里程碑导致了SQLite成为今天的样子。

**2000 - The Internet:** Since the shipyard was adamant on _Informix_, SQLite was not used on the warship. Robert put the code out in the wild on the internet. One great moment was a personal initiative from a user running it on his _Palm Pilot_.

2000年的今天，互联网：由于造船厂坚持在Informix上使用SQLite，这艘军舰上没有使用SQLite。罗伯特在互联网上公开了密码。一个伟大的时刻是一个用户在他的Palm Pilot上运行它的个人倡议。

**2001 - Motorola OS:** Motorola was a phone manufacturing company. The operating system they were using had SQLite on it. They wanted some help. During the whole time, Richard has been working on the project as an OpenSource one. So, they proposed an $80k contract to Richard for support and enhancements. It was the first time that the author realized that OpenSource can bring in money. He rounded his OSS team and shipped the project. This would be the first in a series of long-lasting relationship with phone companies.

2001年的今天，摩托罗拉操作系统：摩托罗拉是一家手机制造公司。他们使用的操作系统上安装了SQLite。他们需要一些帮助。在整个过程中，Richard一直将该项目作为一个开源项目进行工作。因此，他们向理查德提出了一份8万美元的合同，以获得支持和增强功能。这是作者第一次意识到开源可以带来金钱。他召集了他的OSS团队，并将项目付诸实施。这将是与电话公司一系列长期合作关系的第一步。

**200x - America Online:** The next serious company to reach out was America Online. They wanted the database on CDs they were mailing to customers. Richard enthusiastically accepted the offer and midway realized the solution he had in mind would not work. These types of challenges helped SQLite grow into a robust product. At one point they also requested to be able to handle binary data, the feature was incorporated in SQLite3.

200x-美国在线：下一家认真接触的公司是美国在线。他们想要他们邮寄给客户的CD上的数据库。理查德热情地接受了这个提议，中途意识到他心目中的解决方案不会奏效。这些类型的挑战帮助SQLite成长为一个健壮的产品。在某种程度上，他们还要求能够处理二进制数据，该功能被合并到SQLite3中。

**2005 - Symbian OS:** Symbian flew Richard to their office in London. Among many databases they evaluated, both OSS and closed-source, SQLite was chosen among 10 dbs \[10\]. Symbian was a great company but they had a problem. They wanted to ensure that the project lives on even if Richard is no longer around. They wanted to increase the bus factor by having a SQLite consortium.

2005年的今天，塞班操作系统：塞班将理查德送到他们在伦敦的办公室。在他们评估的许多数据库中，包括OSS和闭源数据库，SQLite被选为10个数据库\[10\]。塞班是一家伟大的公司，但他们有一个问题。他们想确保即使理查德不在了，这个项目也能继续下去。他们希望通过拥有一个SQLite联盟来增加总线因素。

**200x - SQLite Consortium:** Richard liked the idea of a consortium. He started devising a plan of his own. Luckily someone from the Mozilla foundation (Mitchell Baker) reached out to him. They did not like the way he was setting up the framework around the consortium by giving members voting rights. They proposed keeping the direction of the project in developers hand. The friend from Mozilla being a lawyer was adamant on this point and saw through the implementation of the current setup. It is the consortium which really helped SQLite keep going, stay current, relevent and vibrant.

200x-SQLite联盟：Richard喜欢联盟的想法。他开始设计自己的计划。幸运的是，Mozilla基金会的某个人(Mitchell Baker)联系了他。他们不喜欢他通过赋予成员投票权来围绕财团建立框架的方式。他们建议将项目的方向掌握在开发商手中。这位来自Mozilla的朋友是一名律师，在这一点上很坚定，并看透了当前设置的实施。正是这个联盟帮助SQLite继续前进，与时俱进，与时俱进，充满活力。

**200x - Google & Android:** Google was a complete outsider to the phone game. Soon, they approached Richard for a daring project. Having a phone connected to the internet with a robust software lifecycle was something extraordinary. They wanted SQLite to behave perfectly on this innovation. Richard’s experience with the phone industry knew that Android was going to be a huge hit.

200x-谷歌和安卓：谷歌在手机游戏中完全是局外人。不久，他们为一个大胆的项目找到了理查德。让一部手机连接到互联网，并拥有强大的软件生命周期，这是一件非同寻常的事情。他们希望SQLite在这项创新上表现完美。理查德在手机行业的经验知道，Android将会大获成功。

> We were going around boasting to everybody naively that SQLite didn’t have any bugs in it, or no serious bugs, but Android definitely proved us wrong. … It’s amazing how many bugs will crop up when your software suddenly gets shipped on millions of devices.
> 
> 我们天真地到处向每个人吹嘘SQLite中没有任何错误，或者没有严重的错误，但Android肯定证明了我们错了。…当你的软件突然出现在数百万台设备上时，会突然出现多少错误，这是令人惊讶的。

**200x - Rockwell Collins:** Rockwell Collins was a multinational corporation providing avionics and information technology systems and services to government agencies and aircraft manufacturers. They wanted the _DO-178B_ aviation quality standard for SQLite. It meant 100% MCDC test coverage. This helped shaped SQLite test-backed approach to development.

200x-罗克韦尔柯林斯：罗克韦尔柯林斯是一家跨国公司，为政府机构和飞机制造商提供航空电子和信息技术系统和服务。他们想要SQLite的DO-178B航空质量标准。这意味着MCDC测试覆盖率达到100%。这有助于形成SQLite测试支持的开发方法。

SQLite tests are better than even postgres which relies on peer reviews \[3\]. This allows the developers to experiment and change code fearlessly.

SQLite测试甚至比依赖同行评审的Postgres更好\[3\]。这使开发人员可以无所畏惧地进行试验和更改代码。

## Chapter: Technical Context  
第二章：技术背景  

SQLite is notorious for implenting a bunch of functionalities from scratch. It’s a daring, amazing, bold and crazy spirit which requires confidence and professionalism. People also call it the _From First Principles_ approach. With no internet at the tips of the fingers and no wikipedia to consult, the author deserves massive respect. His teachers must have been proud to have their student be the living embodiment of what computer science and software engineering should be about.

SQLite以从头开始实现大量功能而臭名昭著。这是一种大胆、令人惊叹、大胆和疯狂的精神，需要自信和专业精神。人们也称它为从第一原则开始的方法。由于没有互联网可用，也没有维基百科可供查阅，作者理应受到极大的尊重。他的老师一定很自豪，因为他们的学生是计算机科学和软件工程应该是什么的活生生的化身。

DRH does look for alternatives. He does try out libraries. But, at the end of the day he ends up coding from scratch.

DRH确实在寻找替代方案。他确实尝试过图书馆。但是，到了最后，他还是从头开始编写代码。

**Engine:** First, he needed a database engine, he looked around, was not satisfied and went on to pull off his own implementation.

引擎：首先，他需要一个数据库引擎，他环顾四周，并不满意，继续完成自己的实现。

**B-tree implementation:** The same goes for the b-tree layer. Much like a hero from a movie, he pulled Donald Knuth’s algorithm book from the shelf and coded the b-tree he needed. He also completed the book’s exercise about deleting elements.

B-树实现：同样适用于B-树层。就像电影中的英雄一样，他从书架上拿出唐纳德·努斯的算法书，编写了他需要的b-树。他还完成了这本书中关于删除元素的练习。

**Parser:** He doesn’t understand the use of YACC, Bison and Lex when anybody can code their own parsers. He coded his own parser-generator called _Lemon_.

解析器：当任何人都可以编写自己的解析器时，他不理解YACC、Bison和Lex的用法。他编写了自己的解析器生成器，名为Lemon。

**Version Control System:** He was using Git, but some functionalities were scratching his itch to build his own Version Control System. So, as usual, he wrote _Fossil_. It’s the CVS you would download and configure if you download the source as is from the website.

版本控制系统：他使用的是Git，但一些功能让他很想构建自己的版本控制系统。所以，像往常一样，他写了《化石》。如果你按原样从网站下载源代码，那就是你要下载和配置的CVS。

> … And it’s GPL, and so SQLite Version 1 was GPL, it had to be because it was linking against the GPL library. But GDBM is only key-value, I can’t do range queries with it. Then I said, “I’m gonna write my own B-tree layer
> 
> …它是GPL，所以SQLite版本1就是GPL，这一定是因为它链接到GPL库。但是GDBM只是键-值，我不能用它进行范围查询。然后我说，“我要写我自己的B树层

Disassembling and re-building is really in his DNA. He had failed episodes of course, but it demonstrates an incredible spirit.

拆解和重建真的是他的基因。当然，他有失败的情节，但这展示了一种令人难以置信的精神。

> Printing was not an option. I looked at ways of making my own printer. … , there was not much electrical interface to it. So that didn’t work out well. \[10\]
> 
> 打印不是一种选择。我在寻找制造我自己的打印机的方法。…，它没有太多的电气接口。所以结果并不是很好。\[10\]

To drive the point home, i think we can leave it at this one.  
为了把这一点讲清楚，我认为我们可以把它留在这里。  

> And the text editor that I used to write SQLite is one that I wrote myself. \[10\]
> 
> 我用来编写SQLite的文本编辑器是我自己编写的。\[10\]

### Why implement from scratch?  
为什么要从头开始实施呢？  

The from scratch spirit is much preferred as it enables the developers to have the freedom they want. They can choose what they want or how they implement things. Just wrapping over another library might be a problem waiting to happen.

从头开始的精神更受欢迎，因为它使开发人员能够拥有他们想要的自由。他们可以选择自己想要的东西，也可以选择如何实施。仅仅是包装另一个库可能就是一个即将发生的问题。

We can expect the library to be fairly complex as there are several components present which require knowledge of their own.

我们可以预料到这个库将相当复杂，因为有几个组件需要了解它们自己的知识。

At one point, DRH also notes that they were going to use the Berkeley DB at some point but decided against it due to vague documentation \[10\] and coded their own implementation. The were amused that sometimes after the licensing changed causing lots of people to forsake the DB.

在某一时刻，DRH还注意到他们打算在某个时刻使用Berkeley DB，但由于文档不明确\[10\]而决定不使用它，并编写了自己的实现。他们感到好笑的是，有时在许可发生变化后，会导致许多人放弃数据库。

> I never understood lex because it’s so easy to write a bunch of C codes faster then Lex \[1\]
> 
> 我从来不了解lex，因为编写一组C代码比lex快太容易了\[1\]

## Competing with f-open  
与F-OPEN竞争  

SQLite advertises itself as being in competition not with other databases but with saving custom data on file. If you want to save data to a file, just use and share SQLite databases.

SQLite宣称自己不是在与其他数据库竞争，而是在将定制数据保存在文件上。如果要将数据保存到文件，只需使用和共享SQLite数据库即可。

## Relationship with Postgres  
与波斯格雷斯的关系  

SQLite tries hard to keep up to the SQL standard postgres adopts as the team considers the db as the best reference platform \[11\]. DRH was the keynote speaker at PGCon 2014 with a talk entitled “SQLite: Protégé of PostgreSQL”.

SQLite努力跟上Postgres采用的SQL标准，因为团队认为数据库是最好的参考平台\[11\]。DRH是PGCon 2014的主旨演讲人，他的演讲题为“SQLite：PostgreSQL的门生”。

## Relationship with TCL  
与TCL的关系  

Sometimes, SQLite talks are given at TCL conferences. This might be tripping from a conceptual and search point of view. SQLite started as a TCL extension.

有时，SQLite演讲是在TCL会议上进行的。从概念和搜索的角度来看，这可能是一种绊倒。SQLite最初是作为TCL扩展的。

## The spirit of typing  
打字的精神  

SQLite preferred to be called flexibly typed rather than weakly typed. By design, the author aimed not to get in the way of the programmer by allowing data of a different type to be inserted in the db. It’s directly inspired by scripting languages.

SQLite更喜欢被称为灵活类型，而不是弱类型。通过设计，作者的目的是不允许在数据库中插入不同类型的数据，从而不妨碍程序员。它直接受到脚本语言的启发。

## The symbiotic relationship between SQLite And Fossil  
SQLite与化石的共生关系  

SQLite’s code is managed by Fossil, it’s Version Control System. And, Fossil uses SQLite.

SQLite的代码由Fossil管理，这是它的版本控制系统。而且，Fossil使用SQLite。

## Open licensing  
开放许可  

Being in the public domain by waiving rights to the code is an incredible decision. Add to it no external dependencies it means that people using SQLite have the peace of mind that the SQLite authors are not going to sue them over some piece of code or worry about some 3rd party companies talking about stealing code.

通过放弃代码的权利而进入公共领域是一个令人难以置信的决定。此外，它没有外部依赖，这意味着使用SQLite的人可以放心，SQLite的作者不会因为某段代码而起诉他们，也不会担心一些第三方公司谈论窃取代码。

## One big source file  
一个很大的源文件  

SQLite also provides a source file where all files are amalgamated into so that SQLite can be inserted easily into projects and compiled.

SQLite还提供了一个源文件，所有文件都合并到其中，以便可以轻松地将SQLite插入到项目中并进行编译。

## Stats 统计数据

SQLite is about 160k lines of code as now, with some 230k if comments and blank lines are included.

与现在一样，SQLite大约有160K行代码，如果包括注释和空行，则大约有23万行代码。

## Chapter: Overview  
章节：概述  

A rough overview of SQLite is as follows  
以下是对SQLite的大致概述  

```
--------------     ------------| SQLite lib |  ⇐  | SQL code |--------------     ------------      ⇑ ⇓ ---------------| Binary file |---------------
```

A brief overview of the compilation step is as follows. The compiler takes the SQL code and outputs bytecodes. The Virtual Machine (VM) takes the bytecode and executes it.

以下是编译步骤的简要概述。编译器获取SQL代码并输出字节码。虚拟机(VM)获取字节码并执行它。

```
+----------+     +----------+     +----+| Compiler | --> | bytecode | --> | VM |+----------+     +----------+     +----+
```

## The compilation and execution process  
编译和执行过程  

A better view of the process might be  
对这一过程的更好的看法可能是  

```
  SQL   |   v[ parser ]   |   v[ code generator ]    |   v[ VM ]   |   v[ btree ]   |   v[ pager ]   |   v[ shim ]   |   v[ OS Interface ]
```

The first part of the library is called the compiler. It is executed using the `sqlite3_prepare_v2()` function and outputs prepared statements aka bytecodes.

库的第一部分称为编译器。它使用`sqlite3_prepare_v2()`函数执行，并输出准备好的语句，也称为字节码。

```
[ parser ]          \   |                 \ compiler    v                 /[ code generator ]  /    |   v[ VM ]     |         v       [ btree ]    |         v      [ pager ]      |         v      [ shim ]    |       v              [ OS Interface ] 
```

The second part of the library runs the program. It is executed using the `sqlite3_step()` function.

库的第二部分运行该程序。它使用`sqlite3_step()`函数执行。

```
[ parser ]            |                  v               [ code generator ]    |   v[ VM ]              \   |                 \   v                  \[ btree ]              \   |                    \ run the program   v                    /[ pager ]              /   |                  /   v                 /[ shim ]            /   |               /   v              / [ OS Interface ] /
```

The btree layer and onward is called the storage engine.  
Btree层及以上层称为存储引擎。  

```
[ parser ]          |                  v               [ code generator ]   |   v[ VM ]                |                   v               [ btree ]        \              |              \                v               \          [ pager ]           \            |                 \ storage engine   v                 /[ shim ]            /   |               /   v              /[ OS Interface ] /
```

## Steps explanation  
步骤说明  

-   **Tokeniser - Parser:** The parser is a push-down automaton parser. It is reentrant and thread-safe. It is generated by lemon. Relevent files include `parse.y`, `tool/lemon.c`. Outputs AST (`sqliteInt.h`).
    
    Tokeniser-Parser：该解析器是一个下推自动机解析器。它是可重入的并且是线程安全的。它是由柠檬产生的。相关文件包括`parse.y`、`tool/lemon.c`。输出AST(`sqliteInt.h`)。
    
-   **Code generator:** It does semantic analysis. It does AST transformation using `select.c`. It determines join order using `where*.c`, `whereInt.h`. It does query planning using `select.c`. It outputs bytecodes using `build.c`, `delete.c`, `expr.c`, `insert.c`, `update.c`. It is the section with the most lines of code.
    
    代码生成器：它进行语义分析。它使用`select.c`进行AST转换。它使用`where*.c`、`whereInt.h`来确定联接顺序。它使用`select.c`进行查询规划。它使用`build.c`、`delete.c`输出字节码。它是代码行最多的部分。
    
-   **Virtual Machine:** It is the section with the 2nd most number of lines of code. Relevant files includes `vdbe.c`, `vdbe.h`, `vdbeLnt.h`, `vdbe*.c`, `func.c`, `date.c`. It executes bytecode instructions from the previous step.
    
    虚拟机：它是代码行数第二多的部分。相关文件包括`vdbe.c`、`vdbe.h`。它执行上一步中的字节码指令。
    

```
[ parser ]    |   v[ code generator ]   |   v[ VM ]    | Interface defined by btree.h   v[ btree ]   |   v[ pager ]   |   v[ shim ]   |   v[ OS Interface ]
```

-   **B-tree:** SQLite uses both B+ and B- trees. B+ tree is used for storing tables and B- is used for indexes. There can be multiple btrees per database file. It is read using a cursor. Concurrent reads and writes on same table is done using different cursors.
    
    B树：SQLite同时使用B+树和B树。B+树用于存储表，B-用于索引。每个数据库文件可以有多个Bree。它是使用游标读取的。对同一个表的并发读取和写入是使用不同的游标完成的。
    
-   **Pager:** Also called page cache. Prevents from data corruption in case of power loss. It uses two mutually exclusive modes to achieve this. The Roll back mode or the Write Ahead Log (WAL) mode. It also enforces concurrency control. It is responsible for dealing with in-memory cache. Relevent files include `pager.c`, `pager.h`, `pcache1.c`, `pcache.c`, `pcache.h`, `wal.c`, `wal.h`.
    
    分页器：亦称页面快取。在断电情况下防止数据损坏。它使用两种相互排斥的模式来实现这一点。回滚模式或提前写入日志(WAL)模式。它还强制执行并发控制。它负责处理内存中的缓存。相关文件包括`pager.c`、`pager.h`、`pcache1.c`。
    
-   **Shim:** The Shim layer is responsible for compression, logging and encryption. It is used to emulate an OS layer. It is used for tests to simulate hardware failures. Relevant files include `test_multiplex.c`, `test_vfstrace.c`
    
    Shim：Shim层负责压缩、日志记录和加密。它用于模拟操作系统层。它用于模拟硬件故障的测试。相关文件包括`test_multiplex.c`、`test_vfstrace.c`
    
-   **OS Interface:** It is used for os-specific interfacing. It can be changed at runtime. It is responsible for I/O (`test_onefile.c`). Relevant files include `os.c`, `os_unix.c`, `os_win.c`, `os*.h`. The Virtual File System VFS is impemented at this layer.
    
    操作系统接口：用于特定操作系统的接口。它可以在运行时更改。它负责I/O(`test_onefile.c`)。相关文件包括`os.c`、`os_unix.c`。虚拟文件系统VFS是在这一层实现的。
    

## Important concepts  
重要概念  

Those are some concepts which occur frequently and it pays to know about the in advance.

这些都是经常出现的概念，提前了解是有好处的。

**Bytes 字节数**

A byte consists of 8 bits.  
一个字节由8位组成。  

**B-tree B-树**

A B-tree is a data structure providing logarithmmic operation time. SQLite keeps the depth as low as possible. It plays on the breadth of the 2nd and 3rd layers. It provides storage in this usecase for key/data storage with unique and ordered keys.

B树是一种提供对数运算时间的数据结构。SQLite将深度保持在尽可能低的水平。它在第二层和第三层的广度上发挥作用。它以唯一和有序的密钥为密钥/数据存储提供本使用案例中的存储。

**Big and small endian  
大尾数和小尾数  
**

TODO 待办事项

**Var int 变量整型**

TODO 待办事项

A variable-length integer or “varint” is a static Huffman encoding of 64-bit twos-complement integers that uses less space for small positive values. A varint is between 1 and 9 bytes in length. The varint consists of either zero or more bytes which have the high-order bit set followed by a single byte with the high-order bit clear, or nine bytes, whichever is shorter. The lower seven bits of each of the first eight bytes and all 8 bits of the ninth byte are used to reconstruct the 64-bit twos-complement integer. Varints are big-endian: bits taken from the earlier byte of the varint are more significant than bits taken from the later bytes.

可变长度整数或“varint”是64位二进制补码整数的静态哈夫曼编码，它对较小的正值使用较少的空间。VARINT的长度在1到9字节之间。Varint由设置了高阶位的零个或多个字节组成，后跟一个清除了高阶位的单字节，或者由9个字节组成，以较短的值为准。前8个字节中每一个的低7位和第9字节的所有8位用于重建64位二进制补码整数。Varint是大端的：取自varint的前一个字节的位比取自后一个字节的位更重要。

## Chapter: File & Record Format  
章节：文件和记录格式  

A SQLite file is a series of bytes.  
SQLite文件是一系列字节。  

```
[b1 b2 b3 b4 b5 ...]
```

It is divided into equally-sized chuncks called pages. There can be one or more pages.

它被分成大小相等的块，称为页面。可以有一页或多页。

```
----------------------------------------------| page 1 | page 2 | page 3 | page 4 | page 5 |----------------------------------------------
```

The first page is the most important. It declares vital information about the file. The first page looks like this. The first 16 bytes contains the string `SQLite format 3`. In hex it is like this `53 51 4c 69 74 65 20 66 6f 72 6d 61 74 20 33 00`, including the null terminator at the end `\000`.

第一页是最重要的。它声明有关文件的重要信息。第一页如下所示。前16个字节包含字符串`SQLite format 3`。在十六进制中，它类似于下面的`53 51 4c 69 74 65 20 66 6f 72 6d 61 74 20 33 00`，包括末尾`\000`处的空终止符。

The next two bytes states the file size. Before 3.7.0.1 it had to be a power of two between 512 and 32768. As from 3.7.1 it can be of size 65536. Since such a large number cannot fit in 2 bytes, the value is set to `0x00 0x01`. This represents big-indian 1 and is used to specify a size of 65536.

接下来的两个字节表示文件大小。在3.7.0.1之前，它必须是512到32768之间的2的幂。从3.7.1开始，它的大小可以是65536。由于2个字节无法容纳如此大的数字，因此将该值设置为`0x00 0x01`。它表示BIG-Indi1，用于指定大小为65536。

```
0                 16       18------------------------------| SQLite format 3 |  400   |------------------------------[                     page 1        ..
```

**The first page  
第一页  
**

Here is a complete table about what the first page contains.  
下面是关于第一页所包含内容的完整表格。  

```
start byte - offset byte - description00  16  The header string: "SQLite format 3\000"16  02  The database page size in bytes. Must be a power of two         between 512 and 32768 inclusive, or the value 1         representing a page size of 65536.18  01  File format write version. 1 for legacy; 2 for WAL.19  01  File format read version. 1 for legacy; 2 for WAL.20  01  Bytes of unused "reserved" space at the end of each page.         Usually 0.21  01  Maximum embedded payload fraction. Must be 64.22  01  Minimum embedded payload fraction. Must be 32.23  01  Leaf payload fraction. Must be 32.24  04  File change counter.28  04  Size of the database file in pages.         The "in-header database size".32  04  Page number of the first freelist trunk page.36  04  Total number of freelist pages.40  04  The schema cookie.44  04  The schema format number.Supported schema formats are         1, 2, 3, and 4.48  04  Default page cache size.52  04  The page number of the largest root b-tree page when         in auto-vacuum or incremental-vacuum modes, or zero         otherwise.56  04  The database text encoding. A value of 1 means UTF-8.         A value of 2 means UTF-16le. A value of 3 means UTF-16be.60  04  The "user version" as read and set by the         user_version pragma.64  04  True (non-zero) for incremental-vacuum mode. False         (zero) otherwise.68  04  The "Application ID" set by PRAGMA application_id.72  20  Reserved for expansion. Must be zero.92  04  The version-valid-for number.96  04  SQLITE_VERSION_NUMBER
```

The first page contains 100 bytes less storage space.  
第一页包含的存储空间减少了100个字节。  

```
[ db header | free space ]    |            |   100 bytes     --- Can be any type of page
```

The free space can be of any type of page, but, it will contain less information than a typical page handles. This needs some adjustments in some cases in the way information is stored for that type of page.

可用空间可以是任何类型的页面，但它包含的信息将少于典型的页面句柄。在某些情况下，这需要对该类型页面的信息存储方式进行一些调整。

## Types of pages  
页面类型  

In this section we pass over the different types of pages used by SQLite. Any page will be one of these types:

在本节中，我们将略过SQLite使用的不同类型的页面。任何页面都将是以下类型之一：

-   The lock-byte page  
    锁字节页  
    
-   A freelist page  
    自由列表页面  
    
-   A b-tree page  
    一个b树页面  
    
-   A payload overflow page  
    有效负载溢出页面  
    
-   A pointer map page  
    指针图页面  
    

### The Lock-Byte Page  
锁字节页  

This page is retained only to preserve backward compatibility. It was conceived for Microsoft 95. When it is present, it occurs at bytes offset 1073741824 and 1073742335. If the file doesn’t have that many bytes, the page does not exist. If it does have the necessary bytes, there is only one such page. It’s dealt with by the VFS layer rather than SQLite core.

保留此页面只是为了保持向后兼容性。它是为微软95设计的。当它存在时，它出现在字节偏移量1073741824和1073742335处。如果文件没有那么多字节，则页面不存在。如果它确实有必要的字节，则只有一个这样的页面。它由VFS层处理，而不是由SQLite核心处理。

### Freelist pages  
自由列表页面  

```
             has              manyA freelist -------- freelist trunk page [ n1, n2, n3 ]   page                                   |   |   |                  A freelist leaf page ----   |   |                                              |   ---- A freelist                  A freelist leaf page --------        leaf page
```

Unused pages are stored on the freelist. It is a linked list of trunk pages with each page containing page numbers for zero or more freelist leaf pages, which contain nothing. These pages can be reused. When using the `VACCUM` command, the freelist is purged and a new database file is written. When auto-vaccum is enabled, freelist is not used a new compacted db is written on each commit.

未使用的页面存储在自由列表中。它是主干页面的链接列表，每个页面包含零个或多个自由列表叶子页面的页码，这些页面不包含任何内容。这些页面可以重复使用。使用`VACCUM`命令时，将清除自由列表并写入新的数据库文件。启用自动真空时，不使用自由列表，每次提交时都会写入新的压缩数据库。

### B-Tree pages  
B-树页面  

```
               can be eitherA b-tree page ---------------                     \                       either                     --- table b-tree page --------- leaf page                     |                          \                     |                           \__ interior page                     |                     |                       either                     --- index b-tree page ---------- leaf page                                                 \                                                  \__ interior page
```

B-tree pages can be either a table page or an index page. A page is always either a leaf pae of an interior page.

B树页可以是表页，也可以是索引页。页面始终是内部页面的叶子PAE。

A btree looks like this  
一棵btree看起来像这样  

```
                     root page                     ---------------------------                      | key | data | key | data |                     ---------------------------                               | data: interior page key                 ---------------                |interior page   |           interior page               interior page--------------------------- --------------------------- ------------| key | data | key | data | | key | data | key | data | | key | --------------------------- --------------------------- --------- ...                      |                      -----            leaf page     |         leaf page                 leaf page----------------------  ----------------------   ----------------------| key |    data      |  | key |    data      |   | key |    data      | ----------------------  ----------------------   ----------------------|     key   |  data  |  |     key   |  data  |   | key |    data      |----------------------  ----------------------   ----------------------|   key   |   data   |  |   key   |   data   |   | key |    data      |----------------------  ----------------------   ----------------------
```

Keys are integers. The data of a root page is the key of an interior page. The data of an interior page is the key of a leaf page. Database records are stored in the data section of a leaf page.

密钥是整数。根页面的数据是内部页面的关键。内部页面的数据是叶子页面的关键。数据库记录存储在叶页的数据部分中。

A key in a leaf table is a 64-bit signed int  
叶表中的密钥是64位有符号整型  

An interior page contains k number of keys, at least 2, upto how many fits on page. This is unless page 1 is an interior b-tree page in which case it can handle one key only. It also contains k+1 number of pointers to child b-tree pages A pointer is a 32-bit unsigned integer page number of the child page.

一个内部页面包含k个键，至少2个，最多可以容纳多少个键。除非页面1是内部B树页面，在这种情况下它只能处理一个密钥。它还包含指向子B树页面的k+1个指针。指针是子页面的32位无符号整数页码。

Conceptually speaking, in an interior b-tree page, the pointers and keys logically alternate with a pointer on both ends, keys in ascending order from left to right.

从概念上讲，在内部b树页面中，指针和键在逻辑上与两端的指针交替，键按从左到右的升序排列。

```
[  pointer  -  key  - pointer - key - pointer - ... - pointer ]    |           |                                        |    --- cell ----                    stored separately ---   
```

> A leaf page can be a root page. Root pages are identified by their root page number
> 
> 叶页可以是根页。根页面由它们的根页号标识

There is one table b-tree in each db file for each rowid table.  
对于每个行ID表，在每个DB文件中有一个表B-树。  

A rowid table is a table which has a unique key to access data in the b-tree strorage engine.

行ID表是具有唯一键以访问B树存储引擎中的数据的表。

### About overflowing  
关于溢出  

If the data section in a leaf page becomes bigger than the space available in a page, it is linked to another page. If it’s size exceeds the other page, it is added to yet other another page.

如果叶页中的数据节大于页中的可用空间，则会链接到另一页。如果它的大小超过了另一个页面，它就会被添加到另一个页面。

```
part of leaf page----------------------------------------------| key |          data          | page 23     |--------------------------------------------------   |                                                 |overflow page                                    |----------------------------------------------   ||                  page 23                   |   ||                                            |----|                                            ||                                            |--------------------------------------------------   |                                                 |overflow page                                    |----------------------------------------------   ||                  page 27                   |   ||                                            |----|                                            ||                                            |----------------------------------------------
```

Large keys on index b-trees are split up into overflow pages so that no single key uses more than one fourth of the available storage space on the page and hence every internal page is able to store at least 4 keys

索引b树上的大键被分成多个溢出页，因此没有单个键使用超过页上可用存储空间的四分之一，因此每个内部页能够存储至少4个键

The integer keys of table b-trees are never large enough to require overflow, so key overflow only occurs on index b-trees.

表b-树的整数键永远不会大到需要溢出，因此键溢出只发生在索引b-树上。

### Record format  
记录格式  

The data part of a leaf page is stored in binary format and consists of 3 parts:

叶子页的数据部分以二进制格式存储，由3个部分组成：

-   The header 标题
-   The type part  
    打字部分  
    
-   The data part  
    数据部分  
    

```
[ key ][ data ]          |          v        [ header size | type1 | type2 | data1 | data2 ]
```

A row such as this  
像这样的争吵  

```
id     0price  3name   shoe
```

Would be encoded as  
将被编码为  

```
[ 04 | 01 | 01 | 21 ] [ 00 | 03 | shoe ]
```

Here’s the table SQLite consults for encoding and decoding  
以下是SQLite为编码和解码而咨询的表  

```
Serial Type, Content Size,   Value meaning0            0          NULL1            1          8-bit twos-complement integer.2            2          big-endian 16-bit twos-complement integer.3            3          big-endian 24-bit twos-complement integer.4            4          big-endian 32-bit twos-complement integer.5            6          big-endian 48-bit twos-complement integer.6            8          big-endian 64-bit twos-complement integer.7            8          big-endian IEEE 754-2008 64-bit floating , number.8            0          integer 0. (Only available for schema format >= 4)9            0          integer 1. (Only available for schema format >= 4)10,11        variable   Reserved for internal use. These serial type codes                         will never appear in a well-formed database file,                         but they might be used in transient and temporary                         database files that SQLite sometimes generates for                        its own use. The meanings of these codes can shift                        from one release of SQLite to the next.N≥12, even   (N-12)/2   Value is a BLOB that is (N-12)/2 bytes in length.N≥13, odd    (N-13)/2   Value is a string in the text encoding and                         (N-13)/2 bytes in length. The nul terminator is not                        stored.
```

So, here’s what the record means  
所以，这就是记录的含义  

```
[ 04 ] header size, including the size itself[ 01 ] type 8-bit twos-complement integer.[ 01 ] type 8-bit twos-complement integer.[ 21 ] As 21 >= 13 and is odd,       (N-13)/2 == length of string shoe in encoding defined in db                    here we are assuming utf8       (N-13)/2 == 4       N == 4 * 2 + 13       N == 21[ 00 ] value of id field[ 03 ] value of price field[ shoe ] value of name field
```

### Btree page format  
B树页面格式  

This is what a b-tree page looks like.  
这就是一个b树页面的样子。  

```
----------------------| 100 byte header    | (if page 1)----------------------| 8 or 12 byte       | b-tree page header----------------------       08: leaf page| cell pointer array |       12: interior page----------------------| free space         |----------------------| cell content area  |----------------------| reserved region    |----------------------
```

The reserved region is found in all pages except the locking page. It can be used by extensions to write per-page information. It’s size is defined in the database header at an offset of bytes 20.

在除锁定页之外的所有页中都可以找到保留区域。扩展可以使用它来写入每页信息。它的大小在数据库头中的偏移量为20字节处定义。

Here is the format of the b-tree page header.  
下面是b树页眉的格式。  

```
Offset  Size    Description0   1   The one-byte flag at offset 0 indicating         the b-tree page type.            02 (0x02): page is an interior index b-tree page.            05 (0x05): page is an interior table b-tree page.            10 (0x0a): page is a leaf index b-tree page.            13 (0x0d): page is a leaf table b-tree page.            Any other value for the b-tree page type is an error.1   2   The two-byte integer at offset 1 gives the start of the         first freeblock on the page, or is zero if there are no         freeblocks.3   2   The two-byte integer at offset 3 gives the number of cells         on the page.5   2   The two-byte integer at offset 5 designates the start of the         cell content area. A zero value for this integer is interpreted         as 65536.7   1   The one-byte integer at offset 7 gives the number of fragmented         free bytes within the cell content area.8   4   The four-byte page number at offset 8 is the right-most pointer.         This value appears in the header of interior b-tree pages only         and is omitted from all other pages.
```

TOADD: Freeblock  
TOADD：自由块  

## Chapter: Rollback & WAL mode  
章节：回滚和WAL模式  

In case of power cuts, SQLite ensures that data is not lost. The pager layer responsible for executing these two modes. The Write Ahead Log (WAL) mode is better than the Rollback for for two reasons:

在停电的情况下，SQLite确保数据不会丢失。负责执行这两种模式的寻呼机层。预写日志(WAL)模式优于回滚模式的原因有两个：

-   It is faster  
    它更快  
    
-   It allows reads and writes at the same time  
    它允许同时读取和写入  
    

The Rollback mode is the default primarily due to these reasons  
回滚模式是默认模式，主要原因如下  

-   Some computers are still around which have weird memory mappings  
    一些计算机仍然存在，它们有奇怪的内存映射  
    
-   Several computers accessing the file might cause issues  
    访问该文件的多台计算机可能会导致问题  
    
-   Backward compatibility is not guaranteed. Waiting until WAL is even more stable.
    
    不能保证向后兼容。等到沃尔的情况更加稳定。
    
-   Hash lookup for page in WAL mode is in shared memory  
    WAL模式下的页面散列查找在共享内存中  
    

## The Rollback mode  
回滚模式  

When reading occurs, the process acquires a shared lock.  
当读取发生时，该进程获得一个共享锁。  

```
|            |          |      || user space | os cache | disk ||      a     |    a     |   x  ||      a     |          |   x  ||            |    a     |   x  ||            |          |   x  |                 🔒 shared*
```

A shared lock prevents processes from changing data.  
共享锁可防止进程更改数据。  

When **writing**, a reserved lock is acquired. A journal is also created. Journals in the this mode have the `.database-journal` extension.

当写入时，获取保留的锁。还会创建日记帐。此模式下的日记帐的扩展名为`.database-journal`。

```
|            |          |      || user space | os cache | disk ||      a     |    a     |   x  ||      a     |          |   x  ||            |    a     |   x  ||            |          |   x  |                 🔒 reserved*|            |          |      | file.database-journal|            |          |      | |            |          |      ||            |          |      ||            |          |      |            
```

Then the data is copied to the journal cache  
然后将数据拷贝到日志缓存  

```
|            |          |      || user space | os cache | disk ||      a     |    a     |   x  ||      a     |          |   x  ||            |    a     |   x  ||            |          |   x  |                 🔒 reserved|            |          |      | file.database-journal|            |          |      | |            |          |      | |            |    a*    |      ||            |    a*    |      |  
```

Then the data is changed  
然后更改数据  

```
|            |          |      || user space | os cache | disk ||      b*    |    a     |   x  ||      b*    |          |   x  ||            |    a     |   x  ||            |          |   x  |                 🔒 reserved|            |          |      | journal|            |          |      | |            |          |      | |            |    a     |      ||            |    a     |      |  
```

Then the data in the journal cache is flushed to the journal on disk.  
然后将日志缓存中的数据刷新到磁盘上的日志。  

```
|            |          |      || user space | os cache | disk ||      b     |    a     |   x  ||      b     |          |   x  ||            |    a     |   x  ||            |          |   x  |                 🔒 reserved|            |          |      | journal|            |          |      | |            |          |      | |            |    a     |   a* ||            |    a     |   a* |  
```

This takes some times and can be turned off but, won’t guarantee that data is safe during power failure.

这需要一些时间，并且可以关闭，但不能保证数据在停电时是安全的。

The an exlclusive lock is acquired. This stops writing completely!  
获得了独占锁。这完全停止了写作！  

```
|            |          |      || user space | os cache | disk ||      b     |    a     |   x  ||      b     |          |   x  ||            |    a     |   x  ||            |          |   x  |                 🔒 exclusive*|            |          |      | journal|            |          |      | |            |          |      | |            |    a     |   a  ||            |    a     |   a  |  
```

The new values are flushed to the os cache.  
新值被刷新到OS高速缓存。  

```
|            |          |      || user space | os cache | disk ||      b     |    b*    |   x  ||      b     |          |   x  ||            |    b*    |   x  ||            |          |   x  |                 🔒 exclusive|            |          |      | journal|            |          |      | |            |          |      | |            |    a     |   a  ||            |    a     |   a  |  
```

Then it is flushed to disk  
然后将其刷新到磁盘  

```
|            |          |      || user space | os cache | disk ||      b     |    b     |   b* ||      b     |          |   x  ||            |    b     |   b* ||            |          |   x  |                 🔒 exclusive|            |          |      | journal|            |          |      | |            |          |      | |            |    a     |   a  ||            |    a     |   a  |  
```

When a commit occurs, it deletes the journal.  
当发生提交时，它会删除日志。  

```
|            |          |      || user space | os cache | disk ||      b     |    b     |   b  ||      b     |          |   x  ||            |    b     |   b  ||            |          |   x  |                 🔒 exclusive|            |          |      | journal|            |          |      | |            |          |      | |            |          |      ||            |          |      |  
```

### If power loss before commit  
如果提交前断电  

Now, if there is a power loss before commit, the situation would be as follows.

现在，如果在提交之前出现断电，则情况如下。

```
|            |          |      || user space | os cache | disk ||            |          |   b  ||            |          |   x  ||            |          |   x  ||            |          |   x  ||            |          |      | journal|            |          |      | |            |          |      | |            |          |   a  ||            |          |   a  |  
```

When power is restored, a shared lock is acquired.  
当电源恢复时，将获得共享锁。  

```
|            |          |      || user space | os cache | disk ||            |          |   b  ||            |          |   x  ||            |          |   x  ||            |          |   x  |                 🔒 shared*        |            |          |      | journal|            |          |      | |            |          |      | |            |          |   a  ||            |          |   a  |  
```

Then an exclusive lock is acquired.  
则获得排他锁。  

```
|            |          |      || user space | os cache | disk ||            |          |   b  ||            |          |   x  ||            |          |   x  ||            |          |   x  |                 🔒 exclusive*       |            |          |      | journal|            |          |      | |            |          |      | |            |          |   a  ||            |          |   a  |  
```

Then data is copied from the journal disk to the journal cache.  
然后将数据从日志磁盘复制到日志缓存。  

```
|            |          |      || user space | os cache | disk ||            |          |   b  ||            |          |   x  ||            |          |   x  ||            |          |   x  |                 🔒 exclusive       |            |          |      | journal|            |          |      | |            |          |      | |            |    a*    |   a  ||            |    a*    |   a  |  
```

Then it is copied from the journal cache to the OS cache.  
然后将其从日志缓存复制到操作系统缓存。  

```
|            |          |      || user space | os cache | disk ||            |    a*    |   b  ||            |    a*    |   x  ||            |          |   x  ||            |          |   x  |                 🔒 exclusive       |            |          |      | journal|            |          |      | |            |          |      | |            |    a     |   a  ||            |    a     |   a  |  
```

Then it is flushed to disk  
然后将其刷新到磁盘  

```
|            |          |      || user space | os cache | disk ||            |    a     |   a* ||            |    a     |   a* ||            |          |   x  ||            |          |   x  |                 🔒 exclusive       |            |          |      | journal|            |          |      | |            |          |      | |            |    a     |   a  ||            |    a     |   a  |  
```

## The Write Ahead Log (WAL) mode  
预写日志(WAL)模式  

Just as in Rollback mode, first a shared lock is acquired. WAL journals have a `.database-wal` extension.

就像在回滚模式中一样，首先获取一个共享锁。WAL期刊有一个`.database-wal`扩展名。

```
|            |          |      || user space | os cache | disk ||      a     |    a     |   x  ||      a     |          |   x  ||            |    a     |   x  ||            |          |   x  |                 🔒 shared*|            |          |      | file.database-wal|            |          |      | |            |          |      ||            |          |      ||            |          |      |            
```

Then, the value is changed  
然后，该值被更改  

```
|            |          |      || user space | os cache | disk ||      b*    |    a     |   x  ||      b*    |          |   x  ||            |    a     |   x  ||            |          |   x  |                 🔒 shared|            |          |      | file.database-wal|            |          |      | |            |          |      ||            |          |      ||            |          |      |            
```

Now, if another process is accessing the db, the old value is flushed to the journal cache.

现在，如果另一个进程正在访问数据库，则会将旧值刷新到日志缓存。

```
|            |            |          |      || user2      | user space | os cache | disk ||     b*     |      b     |    a     <-  x  ||     a*     |      b     |          |   x  ||            |            |    a     <-  x  ||            |            |          |   x  |                 🔒 shared                          |          |      |                           |          |      | wal                          |          |      |                          |    b*    |      |                          |    b*    |      |            
```

The new process gets a snapshot of the data. For illustration purposes below, `b` from wal cache, `a` from os cache.

新流程将获取数据的快照。出于下面的说明目的，从WAL高速缓存读取`b`，从OS高速缓存读取`a`。

```
|            |            |          |      || user2      | user space | os cache | disk ||     b      |      b     |    a     |   x  ||     c*     |      b     |          |   x  ||            |            |    a     |   x  ||            |            |          |   x  |                 🔒 shared                          |          |      |                           |          |      | wal                          |          |      |                          |    b     |      |                          |    c*    |      |            
```

Different reads and writes with snapshot isolation can occur.  
可以使用快照隔离进行不同的读取和写入。  

```
|            |            |          |      || user2      | user space | os cache | disk ||     b      |      b     |    a     |   x  ||     c      |      b     |          |   x  ||            |            |    a     |   x  ||            |            |          |   x  |                 🔒 shared                          |          |      |                           |          |      | wal                          |          |      |                          |    b     |   b* |                          |    c     |   c* |            
```

A checkpoint operation truncates the journal cache and disk content.  
检查点操作将截断日志缓存和磁盘内容。  

```
|            |          |      || user space | os cache | disk ||            |    c     |   x  ||            |    b     |   x  ||            |    c     |   x  ||            |    a     |   x  |                 🔒 shared             |          |      |              |          |      | wal             |          |      |             |          |      |             |          |      |            
```

## Chapter: Interesting Features  
章节：有趣的功能  

## Virtual Tables  
虚拟表格  

## Common Table Expressions  
公用表表达式  

Oracle needed recursive queries and they added common table expressions.

Oracle需要递归查询，他们添加了公用表表达式。

## Save points 保存点

## Partial Indices  
部分指数  

Developed for Expensify.  
为花费而开发的。  

## Chapter: Knowing The Internals  
章节：了解内部结构  

## WebSQL WebSQL

-   WebStorage on the web  
    Web上的Web存储  
    
-   Not going to implement an engine from scratch: Use SQLite  
    不打算从头开始实现引擎：使用SQLite  
    
-   “User agents must implement the SQL dialect supported by Sqlite 3.6.19”
    
    “用户代理必须实现Sqlite 3.6.19支持的SQL方言”
    
-   Example exploit: Omer Gull - SELECT code execution FROM USING SQLite \[4\]
    
    利用漏洞示例：Omer Gull-使用SQLite选择代码执行\[4\]
    
-   Need upated version of SQLite -> conflict with requirement of 3.6.19  
    需要升级的SQLite版本->与3.6.19的要求冲突  
    
-   Aug 2022 Chrome: Deprecating and Removing webSQL \[5\]  
    2022年8月Chrome：弃用并删除WebSQL\[5\]  
    
-   Memory corruption available from JS  
    JS提供的内存损坏  
    
-   Replaced by the beautiful IndexedDB written by a developer from the noble house of Oracle
    
    取而代之的是由甲骨文贵族家族的开发人员编写的美丽的IndexedDB
    

## Chapter: The Future  
章节：未来  

## LibSQL LibSQL

LibSQL is a great fork of SQLite with the aim of making SQLite Open Source. Currently, SQLite operates in a Source Open rather than OpenSource mode. It aims to state compatible with SQLite.

LibSQL是SQLite的一个重要分支，其目标是使SQLite开源。目前，SQLite在源代码开放而不是开放源代码模式下运行。它的目标是与SQLite兼容。

> With the advent of Wasm, SQL or NoSQL solutions can come to the web. One example is DuckDB-Wasm, another is absurd-sql. Based on these creations, we feel that the developer community can iterate on and create new storage solutions faster and better than browser vendors.
> 
> 随着WASM的出现，SQL或NoSQL解决方案可以出现在Web上。一个例子是DuckDB-WASM，另一个是荒谬的-SQL。基于这些创造，我们觉得开发人员社区可以比浏览器供应商更快、更好地迭代并创建新的存储解决方案。

libSQL introduced native WASM support to SQLite  
LibSQL向SQLite引入了本机WASM支持  

## LumoSQL LumoSQL

LumoSQL is a clone that is 100% on time. It does not rely on merging the master. It has swappable db engine and btree. It has an edge on cryptography.

LumoSQL是一个100%准时的克隆。它不依赖于合并主服务器。它有可切换的数据库引擎和btree。它在密码学方面具有优势。

## Distributed clones  
分布式克隆  

TOADD TOADD

## Chapter: How SQLite Is modified  
章节：如何修改SQLite  

## Bloomberg 布隆伯格

Bloomberg uses the SQLite code generator and storage engine. The replaced the layers after by their own implementation of a scaled, massively concurrent, multi-data center storage engine.

彭博使用SQLite代码生成器和存储引擎。之后，他们用自己实施的可扩展、大规模并发的多数据中心存储引擎取代了这些层。

## Chapter: Ending Quotes  
章节：结束引语  

> I had this crazy idea that I’m going to build a database engine that does not have a server, that talks directly to disk, and ignores the data types, and if you asked any of the experts of the day, they would say, “That’s impossible. That will never work. That’s a stupid idea.” Fortunately, I didn’t know any experts and so I did it anyway, so this sort of thing happens. I think, maybe, just don’t listen to the experts too much and do what makes sense. Solve your problem.
> 
> 我有一个疯狂的想法，我要构建一个没有服务器的数据库引擎，它直接与磁盘对话，并忽略数据类型。如果你问当时的任何专家，他们会说，“这是不可能的。这是行不通的。这是个愚蠢的想法。幸运的是，我不认识任何专家，所以我还是做了，所以这种事情发生了。我认为，也许，不要太多地听取专家的意见，做有意义的事情。解决你的问题。

> If I’d known how hard it would be I probably never would’ve have written it \[3\]
> 
> 如果我知道它会有多难，我可能永远不会写它\[3\]

> Apple I came out, and I was about to buy the Apple I and the Apple II came out. And I bought just the motherboard for an Apple II. Got it.
> 
> 苹果我出来了，我正要买苹果一号，苹果二号出来了。我只买了苹果II的主板。明白了。
> 
> Had to build my own keyboard, my own power supply, soldered it altogether. The first board I got didn’t work. I called up Apple, they put me through the technical support
> 
> 我不得不自己制作键盘，自己的电源，把它全部焊接起来。我拿到的第一块冲浪板不起作用。我给苹果公司打了电话，他们让我通过技术支持
> 
> and Steve Wozniak answers the phone  
> 史蒂夫·沃兹尼亚克接电话  
> . and said, “Oh, yeah. Send it back. We’ll send you another board.” They sent me another motherboard and that one worked. \[10\] (About his Apple II) With just 4k of RAM i could understand everything that was going on in that computer. I can understand everything the computer was doing there but now you know with the smallest computer having 4GB of RAM, there’s no way someone coming into this now can understand everything that’s going on in that computer. So, i started very simple. \[9\]
> 
> 。他说：“哦，是啊。把它送回去。我们会再给你寄一块牌子。“他们给我寄来了另一块主板，那块主板起作用了。\[10\](关于他的Apple II)只要有4K的内存，我就能理解那台计算机上发生的一切。我可以理解计算机在那里所做的一切，但现在你知道，最小的计算机有4 GB的RAM，现在进入这一领域的人不可能理解这台计算机中发生的一切。所以，我开始的时候很简单。\[9\]

> I accumulated all this knowledge in the course of four decades, five decades almost. How do you learn that in 4 years of university? I don’t know. … you have some things take that as an article of faith, yeah this works believe it. \[9\]
> 
> 我在四十年的时间里积累了所有这些知识，差不多五十年了。在大学的四年里，你是怎么学到这些的？我不知道。…你有一些东西，把它作为信仰的一部分，是的，这些作品相信它。\[9\]

## References 参考文献

-   \[1\] SQLite, A Database for the Edge of the Network, DRH, Databaseology Lectures, Carnegie Mellon (2015)
    
    \[1\]SQLite，网络边缘数据库，DRH，数据库学讲座，卡内基梅隆大学(2015)
    
-   \[2\] CORECURSIVE Podcast, Episode #066, The Untold Story of SQLite  
    \[2\]CORECURSIVE播客，第066集，SQLite的秘密故事  
    
-   \[3\] Richard Hipp Speaks Out on  
    \[3\]理查德·希普直言  
      
    SQLite, ACM SIGMOD interviews with DB people, Marianne Winslett and Vanessa Braganholo (2019), https://sigmodrecord.org/publications/sigmodRecord/1906/pdfs/06\_Profiles\_Hipp.pdf
    
    SQLite，ACM SIGMOD采访DB People，Marianne Winslett和Vanessa Braganholo(2019年)，https://sigmodrecord.org/publications/sigmodRecord/1906/pdfs/06\_Profiles\_Hipp.pdf
    
-   \[4\] DEF CON 27 - Omer Gull - SELECT code execution FROM USING SQLite, https://www.youtube.com/watch?v=JokZUjwGj4M
    
    \[4\]DEF CON 27-Omer Gull-使用SQLite、https://www.youtube.com/watch?v=JokZUjwGj4M选择代码执行
    
-   \[5\] Deprecating and removing Web SQL, https://developer.chrome.com/blog/deprecating-web-sql/
    
    \[5\]不推荐使用并删除Web SQL、https://developer.chrome.com/blog/deprecating-web-sql/
    
-   \[6\] Craft vulnerable db https://github.com/CheckPointSW/QueryOrientedProgramming/blob/master/qop.py
    
    \[6\]易受攻击的手工艺数据库https://github.com/CheckPointSW/QueryOrientedProgramming/blob/master/qop.py
    
-   \[7\] https://www.sqlite.org/fileformat.html#record\_format  
    \[7\]https://www.sqlite.org/fileformat.html#record\_format  
    
-   \[8\] https://fly.io/blog/sqlite-internals-btree/  
    \[8\]https://fly.io/blog/sqlite-internals-btree/  
    
-   \[9\] Richard Hipp, SQLite main author - Two Weeks of Database, https://www.youtube.com/watch?v=2eaQzahCeh4
    
    \[9\]理查德·希普，SQLite主要作者--两周的数据库，https://www.youtube.com/watch?v=2eaQzahCeh4
    
-   \[10\] Changelog podcast Episode 201, Why SQLite succeeded as a database https://changelog.com/podcast/201
    
    \[10\]ChangeLog播客第201集，为什么SQLite成功成为数据库https://changelog.com/podcast/201
    
-   \[11\] https://www.pgcon.org/2014/schedule/attachments/319\_PGCon2014OpeningKeynote.pdf
    
    \[11\]https://www.pgcon.org/2014/schedule/attachments/319\_PGCon2014OpeningKeynote.pdf
    

Images 图片

-   DGG-79: https://news.usni.org/2019/06/04/uss-oscar-austin-fire-damage-repairs-will-stretch-into-2022
    
    DGG-79：https://news.usni.org/2019/06/04/uss-oscar-austin-fire-damage-repairs-will-stretch-into-2022
