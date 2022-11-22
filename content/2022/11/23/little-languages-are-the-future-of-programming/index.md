---
title: "小语言是编程的未来"
date: 2022-11-23T00:04:26+08:00
updated: 2022-11-23T00:04:26+08:00
taxonomies:
  tags: []
extra:
  source: https://chreke.com/little-languages.html
  hostname: chreke.com
  author: 
  original_title: "Little Languages Are The Future Of Programming"
  original_lang: en
---


![一位穿着印有麦克斯韦方程式 T 恤的时尚](maxwell-fashion.png)

I’ve become convinced that “little languages”—small languages designed to solve very specific problems—are the future of programming, particularly after reading Gabriella Gonzalez’s [The end of history for programming](https://www.haskellforall.com/2021/04/the-end-of-history-for-programming.html) and watching Alan Kay’s [Programming and Scaling](https://www.youtube.com/watch?v=YyIQKBzIuBY) talk. You should go check them out because they’re both excellent, but if you stick around I’ll explain just what I mean by “little languages” and why they’re important.

我开始相信“小语言”——设计用于 解决非常具体的问题——是编程的未来，尤其是在 阅读 Gabriella Gonzalez 的 [编程](https://www.haskellforall.com/2021/04/the-end-of-history-for-programming.html) 和观看 历史的终结 Alan Kay 的 [编程和扩展](https://www.youtube.com/watch?v=YyIQKBzIuBY) 演讲。 你应该去看看 因为他们都很优秀，但如果你坚持下去，我会解释到底是什么 我的意思是“小语言”以及为什么它们很重要。

## What is a “little language”?

## 什么是“小语种”？

I believe Jon Bentley coined the term “little language” in his eponymous [Little Languages](https://dl.acm.org/doi/10.1145/6424.315691) article, where he gave the following definition:

我相信乔恩·本特利 (Jon Bentley) 在他的同名著作中创造了“小语言”一词 [Little Languages](https://dl.acm.org/doi/10.1145/6424.315691) 文章，他给出了以下定义：

> \[…\] a little language is specialized to a particular problem domain and does not include many features found in conventional languages.

For example, SQL is a little language for describing database operations. Regular expressions is a little language for text matching. [Dhall](https://dhall-lang.org/) is a little language for configuration management, and so on.

例如，SQL 是一种描述数据库操作的小语言。 正则表达式是一种用于文本匹配的小语言。 [达尔](https://dhall-lang.org/) 有点 配置管理语言等。

There are a few other names for these languages: Domain-specific languages (DSL:s), problem-oriented languages, etc. However, I like the term “little languages”, partially because the term “DSL” has become overloaded to mean anything from a library with a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) to a full-blown query language like SQL, but also because “little languages” emphasizes their diminutive nature.

这些语言还有一些其他名称： 领域特定语言 (DSL:s)、面向问题的语言等。然而，我喜欢“小”这个词 语言”，部分原因是术语“DSL”已变得超载以表示 从具有 [流畅界面](https://en.wikipedia.org/wiki/Fluent_interface) 的库到成熟的查询 SQL之类的语言，也是因为“小语言”强调它们 矮小的性质。

## Why do we need little languages?

## 为什么我们需要小语言？

> If you look at software today, through the lens of the history of engineering, it’s certainly engineering of a sort—but it’s the kind of engineering that people without the concept of the arch did. Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.
> 
> 如果你看看今天的软件，通过历史的镜头 工程，它当然是某种工程——但它是那种 没有拱门概念的人所做的工程。 大多数软件 今天很像埃及金字塔，上面堆了数百万块砖 彼此叠加，没有结构完整性，但只是通过蛮力完成的 武力和成千上万的奴隶。
> 
> —Alan Kay, from [A Conversation with Alan Kay](https://queue.acm.org/detail.cfm?id=1039523)
> 
> ——艾伦·凯，来自 [《与艾伦·凯的对话》](https://queue.acm.org/detail.cfm?id=1039523)

We have a real problem in the software engineering community: As an application grows in complexity its source code also grows in size. However, our capacity for understanding large code bases remains largely fixed. According to [The Emergence of Big Code](https://info.sourcegraph.com/hubfs/CTA%20assets/sourcegraph-big-code-survey-report.pdf), a 2020 survey by Sourcegraph, the majority of respondents said that the size of their code base caused one or more of the following problems:

我们在软件工程社区中遇到了一个真正的问题：作为一个应用程序 随着复杂性的增加，其源代码的大小也随之增加。 然而，我们的能力 用于理解大型代码库的方法在很大程度上仍然是固定的。 根据 [\_ Big Code](https://info.sourcegraph.com/hubfs/CTA%20assets/sourcegraph-big-code-survey-report.pdf) 的出现，Sourcegraph 在 2020 年进行的一项调查，大多数 受访者表示，他们的代码库规模导致了一种或多种 以下问题：

-   Hard to onboard new hires
-   难以入职新员工
-   Code breaks because of lack of understanding of dependencies
-   由于缺乏对依赖关系的理解而导致代码中断
-   Code changes become harder to manage
-   代码更改变得更难管理

What’s worse, applications seem to grow at an alarming rate: Most respondents in the Sourcegraph survey estimated that their code base had grown between _100 to 500 times_ in the last ten years. As a concrete example, the Linux kernel started out at about 10 000 lines of code in 1992. Twenty years later, it weighs in at about 30 million lines [\[1\]](https://chreke.com/little-languages.html#kernelstats).

更糟糕的是，应用程序似乎以惊人的速度增长：大多数受访者 在 Sourcegraph 调查中估计他们的代码库增长了 _100 增加到 500 倍_ 在过去十年中 。 作为一个具体的例子，Linux 内核 1992 年开始时大约有 10,000 行代码。二十年后，它 重约 3000 万行 [\[1\]](https://chreke.com/little-languages.html#kernelstats) 。

Where does all this code come from? I don’t believe “more features” is sufficient to explain these increases in code volume; rather, I think it has to do with the way we build software. The general approach for adding new features to a program is to stack them on top of what you already have, not unlike how you would construct a pyramid. The problem is that—just like a pyramid—each subsequent layer will require more bricks than the last one.

所有这些代码从何而来？ 我不相信“更多功能”是 足以解释这些代码量的增加； 相反，我认为它必须 用我们构建软件的方式来做。 添加新功能的一般方法 对一个程序来说就是把它们叠加在你已经拥有的东西之上，就像 你会建造一个金字塔。 问题是——就像金字塔一样——每个 后续层将需要比最后一层更多的砖。

### Bucking the trend

### 逆势而上

Do you really _need_ millions of lines of code to make a modern operating system? In 2006, Alan Kay and his collaborators in the [STEPS](http://www.vpri.org/pdf/rn2006002_nsfprop.pdf) program set out to challenge that assumption:

您真的 _需要_ 数百万行代码来实现现代操作 吗？ 系统？ 2006 年，Alan Kay 和他在 [STEPS](http://www.vpri.org/pdf/rn2006002_nsfprop.pdf) 项目中的合作者开始了 挑战这个假设：

> Science progresses by intertwining empirical investigations and theoretical models, so our first question as scientists is: if we made a working model of the personal computing phenomena could it collapse down to something as simple as Maxwell’s Equations for all of the electromagnetic spectrum, or the US Constitution that can be carried in a shirt pocket, or is it so disorganized (or actually complex) to require “3 cubic miles of case law”, as in the US legal system (or perhaps current software practice)? The answer is almost certainly in between, and if so, it would be very interesting if it could be shown to be closer to the simple end than the huge chaotic other extreme.
> 
> 科学通过交织经验调查和理论进步 模型，所以我们作为科学家的第一个问题是：如果我们制作了一个工作模型 个人计算现象是否可以崩溃为某种东西 像麦克斯韦方程组一样简单，适用于所有电磁波谱，或者 可以放在衬衫口袋里的美国宪法，还是这样 杂乱无章（或实际上复杂）需要“3立方英里的判例法”， 就像在美国的法律体系（或者可能是当前的软件实践）中一样？ 这 答案几乎肯定在两者之间，如果是这样，那将是非常 如果它能被证明比 巨大的混沌之极。
> 
> So we ask: is the personal computing experience (counting the equivalent of the OS, apps, and other supporting software) intrinsically 2 billion lines of code, 200 million, 20 million, 2 million, 200,000, 20,000, 2,000?
> 
> 所以我们问：是个人计算体验（算上等价物 操作系统、应用程序和其他支持软件）本质上是 20 亿 代码行数，2亿，2000万，200万，20万，2万，2000？
> 
> [STEPS 2007 Progress Report](http://www.vpri.org/pdf/tr2007008_steps.pdf), p. 4-5
> 
> [STEPS 2007 年进度报告](http://www.vpri.org/pdf/tr2007008_steps.pdf) ，p. 4-5

[Maxwell’s Equations](https://en.wikipedia.org/wiki/Maxwell%27s_equations), which Dr. Kay was referring to, is a set of equations that describe the foundations of electromagnetism, optics and electric circuits. A cool thing about them is that even though they have such a wide scope, they’re compact enough to fit on a t-shirt:

[的 Maxwell's Equations](https://en.wikipedia.org/wiki/Maxwell%27s_equations) Kay 博士所指 是一组方程 描述电磁学、光学和电学的基础 电路。 他们的一个很酷的事情是，即使他们有如此广泛的 范围，它们足够紧凑以适合 T 恤：

One reason they’re so terse is the use of the [Del](https://en.wikipedia.org/wiki/Del) notation (e.g. ) to describe vector calculus operations. Important to note is that Del isn’t really an operator—it’s more like a shorthand to make some equations in vector calculus easier to work with.

它们如此简洁的原因之一是使用了 [Del](https://en.wikipedia.org/wiki/Del) 符号（例如 ) 来描述向量微积分运算。 需要注意的是 Del 并不是真正的操作员——它更像是一个简写 矢量微积分中的方程更容易使用。

What if it’s possible to create the equivalent of Del notation for programming? Just as Del could help make vector calculus more manageable, are there notations that could help us reason about programs in much the same way? This question was one of the “powerful ideas” that powered the STEPS project:

如果可以为编程创建等效的 Del 符号怎么办？ 正如 Del 可以帮助使向量演算更易于管理一样，是否有 可以帮助我们以几乎相同的方式对程序进行推理的符号？ 这个 问题是推动 STEPS 项目的“强大想法”之一：

> We also think that creating languages that fit the problems to be solved makes solving the problems easier, makes the solutions more understandable and smaller, and is directly in the spirit of our “active-math” approach. These “problem-oriented languages” will be created and used for large and small problems, and at different levels of abstraction and detail.
> 
> 我们还认为，创建适合要解决的问题的语言 使解决问题更容易，使解决方案更容易理解 更小，这直接符合我们“主动数学”方法的精神。 这些“面向问题的语言”将被创建并用于大型和 小问题，以及不同层次的抽象和细节。
> 
> [STEPS 2007 Progress Report](http://www.vpri.org/pdf/tr2007008_steps.pdf), p. 6
> 
> [STEPS 2007 年进度报告](http://www.vpri.org/pdf/tr2007008_steps.pdf) ，p. 6个

The idea is that as you start to find patterns in your application, you can encode them in a little language—this language would then allow you to express these patterns in a more compact manner than would be possible by other means of abstraction. Not only could this buck the trend of ever-growing applications, it would actually allow the code base to _shrink_ during the course of development!

这个想法是，当您开始在应用程序中寻找模式时，您可以 用一种小语言对它们进行编码——这种语言可以让你表达 这些模式以比其他方式更紧凑的方式 的抽象。 这不仅可以逆转不断增长的趋势 应用程序，它实际上允许代码 _库_ 在 发展历程！

One result from the STEPS program that I find particularly impressive was [Nile](https://github.com/damelang/nile), a little language for describing graphics rendering and compositing. The goal was to use Nile to reach feature parity with [Cairo](https://en.wikipedia.org/wiki/Cairo_(graphics))—an open-source renderer used in various free software projects—which weighs in at about 44 000 lines of code. The Nile equivalent ended up being about 300 lines. [\[2\]](https://chreke.com/little-languages.html#steps2009)

我发现特别令人印象深刻的 STEPS 计划的一个结果是 [Nile](https://github.com/damelang/nile) ，一种描述图形渲染和合成的小语言。 这 目标是使用 Nile 达到与 [Cairo](https://en.wikipedia.org/wiki/Cairo_(graphics)) 相同的功能——一个开源的 各种免费软件项目中使用的渲染器——重量约为 44 000 行代码。 相当于尼罗河最终大约有 300 行。 [\[2\]](https://chreke.com/little-languages.html#steps2009)

## Why not high-level languages?

## 为什么不是高级语言？

> Nevertheless, Ada will not prove to be the silver bullet that slays the software productivity monster. It is, after all, just another high-level language, and the biggest payoff from such languages came from the first transition, up from the accidental complexities of the machine into the more abstract statement of step-by-step solutions. Once those accidents have been removed, the remaining ones are smaller, and the payoff from their removal will surely be less.
> 
> 然而，Ada 不会被证明是杀戮的灵丹妙药 软件生产力怪物。 毕竟，它只是另一个高级 语言，而这些语言的最大收益来自于第一个 过渡，从机器的偶然复杂性到 逐步解决方案的更抽象的陈述。 一旦发生那些意外 已被删除，其余的较小，而收益 他们的移除肯定会更少。
> 
> —Frederick P. Brooks, [No Silver Bullet](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf)
> 
> ——弗雷德里克·P·布鲁克斯， [《没有银弹》](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf)

“Hey, wait a minute” you might say “why can’t we just invent a higher-level, general-purpose language?” Personally, I believe we have reached diminishing returns for the expressiveness of general-purpose languages. If there is a higher level, what would it even look like? Take Python, for example—it’s so high-level it pretty much looks like pseudocode already. [\[3\]](https://chreke.com/little-languages.html#norvig)

“嘿，等一下”你可能会说“为什么我们不能发明一个更高层次的， 通用语言？” 就个人而言，我相信我们已经达到递减 返回通用语言的表现力。 如果有一个 更高的水平，它甚至会是什么样子？ 以 Python 为例——它是如此 高级它看起来已经很像伪代码了。 [\[3\]](https://chreke.com/little-languages.html#norvig)

The problem with general-purpose languages is that you still have to translate your problem to an algorithm, and then express the algorithm in your target language. Now, high-level languages are great at describing algorithms, but unless the _goal_ was to implement the algorithm then it’s just accidental complexity.

通用语言的问题是你仍然需要翻译 你的问题到一个算法，然后在你的目标中表达这个算法 语。 现在，高级语言非常擅长描述算法，但是 除非 _目标_ 是实现算法，否则这只是偶然的 复杂。

Writing this post reminded me of a story about Donald Knuth: Knuth had been asked to demonstrate his literate programming style in Jon Bentley’s Programming Pearls column; Doug McIlroy was also invited to provide critique of Knuth’s program. [\[4\]](https://chreke.com/little-languages.html#knuthpearls) The task at hand was to count word frequencies in a given text.

写这篇文章让我想起了一个关于 Donald Knuth 的故事： Jon Bentley 要求展示他的文学编程风格 编程明珠专栏； Doug McIlroy 也应邀提供评论 Knuth 的程序。 [\[4\]](https://chreke.com/little-languages.html#knuthpearls) 手头的任务是计算词频 在给定的文本中。

Knuth’s solution was meticulously written in WEB, his own literate programming variant of Pascal. He had even included a purpose-built data structure just for keeping track of word counts, and it all fit within ten pages of code. While McIlroy was quick to praise the craftsmanship of Knuth’s solution, he was not very impressed with the program itself. As part of his critique, he wrote his own solution in a creole of shell script, Unix commands and little languages:

Knuth 的解决方案是用 WEB 精心编写的，他自己的文学编程 Pascal 的变体。 他甚至包括了一个专门构建的数据结构，只是为了 跟踪字数，这一切都在十页代码之内。 尽管 McIlroy 很快就称赞了 Knuth 解决方案的精湛工艺，但他并不是 对程序本身印象深刻。 作为他的批评的一部分，他写了他的 在 shell 脚本、Unix 命令和小语言的克里奥尔语中自己的解决方案：

```
tr -cs A-Za-z '\n' |
tr A-Z a-z |
sort |
uniq -c |
sort -rn |
sed ${1}q

```

While it might not the most readable code for non-Unix hackers—and McIlroy would probably admit as much, as he saw fit to include an annotated version— this summary response is arguably easier to understand than a ten-page program.

虽然对于非 Unix 黑客和 McIlroy 来说，它可能不是最易读的代码 可能会承认，只要他认为合适，就包括一个带注释的版本—— 可以说，这个摘要响应比十页的程序更容易理解。

Unix commands are designed for manipulating text, which is why it’s possible to write such a compact word-counting program—maybe shell script could be considered the “Del notation” of text manipulation?

Unix 命令是为操作文本而设计的，这就是为什么它可以 编写这样一个紧凑的字数统计程序——也许 shell 脚本可以 考虑过文本操作的“Del notation”？

## Less is more

## 少即是多

The Unix command example above illustrates another characteristic of little languages: Less powerful languages and more powerful runtimes. Gonzalez had noted the following trend in [The end of history for programming](https://www.haskellforall.com/2021/04/the-end-of-history-for-programming.html):

上面的 Unix 命令示例说明了 little 的另一个特征 语言：不那么强大的语言和更强大的运行时。 冈萨雷斯有 注意到以下趋势 [在编程历史的终结中](https://www.haskellforall.com/2021/04/the-end-of-history-for-programming.html) ：

> A common pattern emerges when we study the above trends:
> 
> 当我们研究上述趋势时，会出现一个共同的模式：
> 
> -   Push a userland concern into a runtime concern, which:
> -   将用户空间关注点推入运行时关注点，它：
> -   … makes programs more closely resemble pure mathematical expressions, and:
> -   …使程序更像纯数学表达式， 和：
> -   … significantly increases the complexity of the runtime.
> -   ……显着增加了运行时的复杂性。

Regular expressions and SQL won’t let you express anything but text search and database operations, respectively. This is in contrast to a language like C where there is _no_ runtime and you can express anything that’s possible on a von Neumann architecture. High-level languages like Python and Haskell fall somewhere in between: Memory management is handled for you, but you still have the full power of a [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness) language at your disposal, which means you can express any computation possible.

正则表达式和 SQL 不会让你表达任何东西，除了文本搜索和 分别进行数据库操作。 这与像 C 这样的语言形成对比 没有 _运行时，你可以表达任何_ 可能的东西 冯·诺依曼架构。 Python 和 Haskell 等高级语言下降 介于两者之间：内存管理是为你处理的，但你仍然有 语言的全部功能 [您可以使用图灵完备](https://en.wikipedia.org/wiki/Turing_completeness) ，这意味着您 可以表达任何可能的计算。

Little languages are at the opposite end of the power spectrum from C: Not only is the architecture of the computer abstracted away, but some of these languages also limit the kinds of program you can express—they’re Turing-incomplete by design. This might sound awfully limiting, but in fact it opens up a whole new dimension of possibilities for optimization and static analysis. And, like abstracting away memory management erases a whole class of bugs, it might be possible to erase yet more bugs by abstracting away as much of the algorithmic work as possible.

小语言与 C 处于功率谱的另一端：不仅 是抽象出来的计算机架构，但其中一些 语言也限制了你可以表达的程序种类——它们是 图灵设计不完整。 这听起来可能非常有限，但实际上它 为优化和静态开辟了一个全新的可能性维度 分析。 而且，就像抽象内存管理一样，擦除一整类 错误，通过抽象尽可能多的错误可能会消除更多的错误 尽可能的算法工作。

### Static analysis

### 静态分析

Less powerful languages are easier to reason about, and can provide stronger guarantees than general-purpose languages. For example, [Dhall](https://dhall-lang.org/) is a [total functional programming](https://en.wikipedia.org/wiki/Total_functional_programming) language for generating configuration files. Since you don’t want to risk crashing your deployment scripts or putting them into an infinte loop, Dhall programs are guaranteed to:

不太强大的语言更容易推理，并且可以提供更强大的 保证比通用语言。 例如， [Dhall](https://dhall-lang.org/) 是一个 [总 函数式编程](https://en.wikipedia.org/wiki/Total_functional_programming) 用于生成配置文件的 语言。 自从你 不想冒险让您的部署脚本崩溃或将它们放入 无限循环，Dhall 程序保证：

1.  Not crash, and
2.  Terminate in a finite amount of time.

1.  不崩溃，并且
2.  在有限的时间内终止。

The first point is accomplished by not throwing exceptions; any operation that can fail (e.g. getting the first element of a potentially empty list) returns an Optional result, which may or may not contain a value. The second point—guaranteed termination—is accomplished by not allowing recursive definitions [\[6\]](https://chreke.com/little-languages.html#dhallnote). In other functional programming languages recursion is the primary way you would express loops, but in Dhall you have to rely on the built-in [fold](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) function instead. The lack of a general loop construct also means Dhall is not Turing-complete; but since it’s not a general-purpose programming language it doesn’t need to be (unlike CSS, apparently [\[7\]](https://chreke.com/little-languages.html#cssturingcomplete)).

第一点是通过不抛出异常来实现的； 任何操作 可能会失败（例如获取潜在空列表的第一个元素）返回 。 可选 结果，可能包含也可能不包含值 第二 点——保证终止——是通过不允许递归来实现的 定义 [\[6\]](https://chreke.com/little-languages.html#dhallnote) 。 在其他函数式编程语言中递归 是表达循环的主要方式，但在 Dhall 中你必须依赖 内置的 [折叠](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) 功能。 也缺少通用循环结构 意味着 Dhall 不是图灵完备的； 但因为它不是通用的 它不需要是编程语言（显然不像 CSS [\[7\]](https://chreke.com/little-languages.html#cssturingcomplete) ）。

If the languages are small, reasoning about them becomes even easier. For example, to determine whether an arbitrary Python program is free of side-effects is hard, but in SQL it’s trivial—just check if the query starts with SELECT [\[5\]](https://chreke.com/little-languages.html#sqlnote).

如果语言很小，对它们的推理就变得更容易了。 为了 例如，确定任意 Python 程序是否没有 副作用很难，但在 SQL 中它是微不足道的——只要检查查询是否开始 用 SELECT [\[5\]](https://chreke.com/little-languages.html#sqlnote) 。

For Nile, the STEPS team saw the need for a graphical debugger [\[9\]](https://chreke.com/little-languages.html#steps2012-12). Bret Victor (yes, the same Bret Victor who did the [Inventing on Principle](https://www.youtube.com/watch?v=PUv66718DII) talk) came up with a tool that would tell you the _exact lines of code_ that was involved in drawing a specific pixel on the screen. You can watch [Alan Kay demo it on YouTube](https://youtu.be/ubaX1Smg6pY?t=3304), but you can also [try it yourself](http://tinlizzie.org/dbjr/high_contrast.html). Tools like these are possible because Nile is a small language that’s easy to reason about—imagine trying to do the same thing with graphics code written in C++!

对于 Nile，STEPS 团队看到了对图形调试器的需求 [\[9\]](https://chreke.com/little-languages.html#steps2012-12) 。 Bret Victor（是的，就是发明发明的 Bret [Victor 在 Principle](https://www.youtube.com/watch?v=PUv66718DII) talk 上）想出了一个工具，可以告诉你 _确切的线路 的代码_ 涉及在屏幕上绘制特定像素 。 你可以 观看 [在 YouTube 上](https://youtu.be/ubaX1Smg6pY?t=3304) Alan Kay 的演示，但是 你也可以 [自己试试](http://tinlizzie.org/dbjr/high_contrast.html) 。 像这样的工具是可能的，因为尼罗河是一种易于使用的小型语言 原因——想象一下用 编写的图形代码尝试做同样的事情 C++！

### The need for speed

### 对速度的需求

More powerful programming languages not only increase the potential for bugs, it can also be detrimental to performance. For example, if a program isn’t expressed in terms of an algorithm, the runtime is free to choose its own; slow expressions can be substituted for faster ones if we can prove that they produce the same result.

更强大的编程语言不仅增加了错误的可能性， 它也可能不利于性能。 例如，如果一个程序不是 用算法表达，运行时可以自由选择； 减缓 如果我们能证明它们 产生相同的结果。

For example, a SQL query doesn’t dictate _how_ a query should be executed—the database engine is free to use whichever query plan it deems most appropriate, e.g. whether it should use an index, a combination of indices, or just scan the entire database table. Modern database engines also collect statistics on the value distributions of its columns, so they can choose a statistically optimal query plan on the fly. This wouldn’t be possible if the query was described by the way of an algorithm.

例如，SQL 查询并没有规定 _应该如何_ 执行查询—— 数据库引擎可以自由使用它认为最合适的查询计划， 例如，它是否应该使用一个索引、多个索引的组合，或者只是扫描 整个数据库表。 现代数据库引擎还收集统计信息 其列的值分布，因此他们可以选择统计 即时优化查询计划。 如果查询是，这是不可能的 用算法的方式来描述。

One part of the “secret sauce” that allowed the [Nile](https://github.com/damelang/nile) language to be so compact was [Jitblt](http://www.vpri.org/pdf/tr2008002_jitblt.pdf), a just-in-time compiler for graphics rendering. From discussions between the [STEPS](http://www.vpri.org/pdf/rn2006002_nsfprop.pdf) and [Cairo](https://en.wikipedia.org/wiki/Cairo_(graphics)) teams it became clear that a lot of the Cairo code was dedicated to hand-optimization of pixel compositing operations; work that could, in theory, be offloaded to a compiler. Dan Amelang from the Cairo team volunteered to implement such a compiler, and the result was [Jitblt](http://www.vpri.org/pdf/tr2008002_jitblt.pdf). This meant that the optimization work in the graphics pipeline could be decoupled from the purely mathematical descriptions of what to render, which allowed Nile to run about as fast as the original, hand-optimized Cairo code. [\[8\]](https://chreke.com/little-languages.html#steps2007-12)

的“秘方”的一部分 [让尼罗河](https://github.com/damelang/nile) 语言如此紧凑 是 [Jitblt](http://www.vpri.org/pdf/tr2008002_jitblt.pdf) ，一个用于图形渲染的即时编译器。 来自讨论 在 [STEPS](http://www.vpri.org/pdf/rn2006002_nsfprop.pdf) 和 [Cairo](https://en.wikipedia.org/wiki/Cairo_(graphics)) 团队之间很明显，很多 Cairo 代码专门用于像素合成操作的手动优化； 工作 从理论上讲，可以将其卸载到编译器。 来自开罗的 Dan Amelang 团队自愿实现了这样一个编译器，结果就是 [Jitblt](http://www.vpri.org/pdf/tr2008002_jitblt.pdf) 。 这个 意味着图形管道中的优化工作可以解耦 从对渲染内容的纯数学描述，这让 Nile 运行速度与原始的、手动优化的 Cairo 代码一样快。 [\[8\]](https://chreke.com/little-languages.html#steps2007-12)

## Small languages, big potential

## 小语言，大潜力

So what happened with the STEPS project? Did they end up with the code equivalent of “3 cubic miles of case law”, or did they manage to create an operating system small enough to fit on a t-shirt? The end result of STEPS was KSWorld, a complete operating system including both a document editor and spreadsheet editor, which ended up being about 17 000 lines of code [\[10\]](https://chreke.com/little-languages.html#steps2012-32). While you would need a really big t-shirt to fit all of that in, I would still call it a success.

那么 STEPS 项目发生了什么？ 他们最终得到了代码吗 相当于“3立方英里的判例法”，或者他们是否设法创造了一个 操作系统小到可以装在 T 恤上？ STEPS 的最终结果是 KSWorld，一个完整的操作系统，包括文档编辑器和 电子表格编辑器，最终大约有 17000 行代码 [\[10\]](https://chreke.com/little-languages.html#steps2012-32) 。 虽然你需要一件非常大的 T 恤来适应所有这些 在，我仍然称之为成功。

The creation of KSWorld seems to indicate that there’s big potential in little languages. However, there are still many unanswered questions, such as: How should these little languages talk to each other? Should they compile to a common intermediate representation? Or should different runtimes exist in parallel and communicate with each other via a common protocol (e.g. UNIX pipes or TCP/IP)? Or maybe each language is small enough to be re-implemented in a variety of different host languages (like regular expressions)? Maybe the way forward is a combination of all of these? In any case, I’m convinced that we need to come up with a different way of building software. Maybe little languages will be part of that story, or maybe they won’t—the important thing is that we stop trying to pile bricks on top of each other for long enough to come up with something better.

KSWorld的创建似乎表明小事大有可为 语言。 但是，仍有许多未解决的问题，例如：如何 这些小语言应该互相交谈吗？ 他们应该编译成 通用中间表示？ 或者是否应该存在不同的运行时 并行并通过通用协议相互通信（例如 UNIX 管道 或 TCP/IP）？ 或者，也许每种语言都足够小，可以重新实现 各种不同的宿主语言（如正则表达式）？ 也许路 forward 是所有这些的组合？ 无论如何，我相信我们 需要想出一种不同的构建软件的方法。 也许很少 语言将成为这个故事的一部分，也可能不会——重要的是 是我们停止尝试将砖块堆放在彼此之上足够长的时间 想出更好的办法。

## Further reading

## 延伸阅读

-   [Connexion](https://github.com/spec-first/connexion) is an open-source API framework from Zazzle; what makes it stand out is that it can generate endpoints automatically from an [OpenAPI](https://www.openapis.org/) spec; usually you would use [OpenAPI](https://www.openapis.org/) to describe the endpoints of an existing HTTP service, but [Connexion](https://github.com/spec-first/connexion) does it the other way around: Given an OpenAPI schema it will set up an API server with endpoints, validation logic and live documentation.
-   [Connexion](https://github.com/spec-first/connexion) 是 Zazzle 的开源 API 框架； 是什么让它站立 out 是它可以根据 [OpenAPI](https://www.openapis.org/) 规范自动生成端点； 通常您会使用 [OpenAPI](https://www.openapis.org/) 来描述现有 HTTP 的端点 服务，但 [Connexion](https://github.com/spec-first/connexion) 以相反的方式进行：给定一个 OpenAPI schema 它将设置一个带有端点、验证逻辑和 实时文档。
-   [Catala](https://law.mit.edu/pub/ideaflow8/release/5) is a declarative language for translating law text into an executable specification. Because it supports non-monotonic reasoning (i.e. a later statement can cancel out or further qualify a previous statement) it allows expressing programs in much the same way legal texts are written, e.g. as a set of statements that can be amended or extended by adding new statements.
-   [Catala](https://law.mit.edu/pub/ideaflow8/release/5) 是一种声明性语言，用于将法律文本翻译成可执行文件 规格。 因为它支持非单调推理（即后来 语句可以抵消或进一步限定先前的语句）它允许 以与编写法律文本大致相同的方式表达程序，例如作为 一组可以通过添加新语句来修改或扩展的语句。
-   [Racket](https://racket-lang.org/) is a Lisp dialect that’s specifically designed for creating new languages (a technique sometimes referred to as [language-oriented programming](https://beautifulracket.com/appendix/why-lop-why-racket.html)). I haven’t had time to play around much with Racket myself, but it looks like a very suitable tool for creating “little languages”. If you’re curious, you can check out the [Creating Languages in Racket](https://queue.acm.org/detail.cfm?id=2068896) tutorial.
-   [Racket](https://racket-lang.org/) 是一种 Lisp 方言，专门用于创建新的 语言（有时称为 [面向语言 的技术 编程](https://beautifulracket.com/appendix/why-lop-why-racket.html) ）。 我自己没有时间和 Racket 玩太多， 但它看起来像一个非常适合创建“小语言”的工具。 如果 你很好奇，你可以查看 [在 Racket 中创建语言](https://queue.acm.org/detail.cfm?id=2068896) 教程。
-   While the STEPS project wrapped up in 2018, all the results are available online at the [VPRI Writings](http://vpri.org/writings.php) page.
-   STEPS 项目于 2018 年结束，所有结果均可用 在 [VPRI 著作](http://vpri.org/writings.php) 页面在线。

<table id="kernelstats" data-translationmark="copiedNode"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-1">[1]</a></td><td>See <a href="https://www.phoronix.com/news/Linux-Git-Stats-EOY2019">https://www.phoronix.com/news/Linux-Git-Stats-EOY2019</a></td></tr></tbody></table>

<table id="kernelstats"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-1"><span>[1]</span></a></td><td><span>请参阅 </span><a href="https://www.phoronix.com/news/Linux-Git-Stats-EOY2019"><span>https://www.phoronix.com/news/Linux-Git-Stats-EOY2019</span></a></td></tr></tbody></table>

<table id="steps2009" data-translationmark="copiedNode"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-2">[2]</a></td><td><a href="http://www.vpri.org/pdf/tr2009016_steps09.pdf">STEPS 2009 Progress Report</a>, p. 4-6</td></tr></tbody></table>

<table id="steps2009"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-2"><span>[2]</span></a></td><td><a href="http://www.vpri.org/pdf/tr2009016_steps09.pdf"><span>STEPS 2009 年进度报告 </span></a><span>，p. 4-6</span></td></tr></tbody></table>

<table id="norvig" data-translationmark="copiedNode"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-3">[3]</a></td><td>To quote Peter Norvig: “I came to Python not because I thought it was a better / acceptable / pragmatic Lisp, but because it was better pseudocode.” See: <a href="https://news.ycombinator.com/item?id=1803815">https://news.ycombinator.com/item?id=1803815</a></td></tr></tbody></table>

<table id="norvig"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-3"><span>[3]</span></a></td><td><span>引用 Peter Norvig 的话：“我来到 Python 并不是因为我认为它 是一个更好/可接受/实用的 Lisp，但因为它更好 伪代码。” 请参阅： </span><a href="https://news.ycombinator.com/item?id=1803815"><span>https ://news.ycombinator.com/item?id=1803815</span></a></td></tr></tbody></table>

<table id="knuthpearls" data-translationmark="copiedNode"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-4">[4]</a></td><td><a href="https://homepages.cwi.nl/~storm/teaching/reader/BentleyEtAl86.pdf">Programming Pearls, in Communications of the ACM June 1986</a></td></tr></tbody></table>

<table id="knuthpearls"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-4"><span>[4]</span></a></td><td><a href="https://homepages.cwi.nl/~storm/teaching/reader/BentleyEtAl86.pdf"><span>编程珍珠，ACM 通讯，1986 年 6 月</span></a></td></tr></tbody></table>

<table id="sqlnote" data-translationmark="copiedNode"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-7">[5]</a></td><td>Warranty void if you don’t stick to ISO SQL</td></tr></tbody></table>

<table id="sqlnote"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-7"><span>[5]</span></a></td><td><span>如果您不遵守 ISO SQL，则保修无效</span></td></tr></tbody></table>

<table id="dhallnote" data-translationmark="copiedNode"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-5">[6]</a></td><td>There’s an interesting Hacker News thread about recursion in Dhall here: <a href="https://news.ycombinator.com/item?id=15187150">https://news.ycombinator.com/item?id=15187150</a></td></tr></tbody></table>

<table id="dhallnote"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-5"><span>[6]</span></a></td><td><span>这里有一个关于 Dhall 中递归的有趣的 Hacker News 线程： </span><a href="https://news.ycombinator.com/item?id=15187150"><span>https://news.ycombinator.com/item?id=15187150</span></a></td></tr></tbody></table>

<table id="cssturingcomplete" data-translationmark="copiedNode"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-6">[7]</a></td><td>Yes, it does look like <a href="https://accodeing.com/blog/2015/css3-proven-to-be-turing-complete">CSS is Turing-complete</a></td></tr></tbody></table>

<table id="cssturingcomplete"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-6"><span>[7]</span></a></td><td><span>是的，看起来 </span><a href="https://accodeing.com/blog/2015/css3-proven-to-be-turing-complete"><span>CSS 确实是图灵完备的</span></a></td></tr></tbody></table>

<table id="steps2007-12" data-translationmark="copiedNode"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-9">[8]</a></td><td><a href="http://www.vpri.org/pdf/tr2007008_steps.pdf">STEPS First Year Progress Report, Dec 2007</a>, p. 12</td></tr></tbody></table>

<table id="steps2007-12"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-9"><span>[8]</span></a></td><td><a href="http://www.vpri.org/pdf/tr2007008_steps.pdf"><span>STEPS 第一年进度报告，2007 年 12 月 </span></a><span>，p. 12</span></td></tr></tbody></table>

<table id="steps2012-12" data-translationmark="copiedNode"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-8">[9]</a></td><td><a href="http://www.vpri.org/pdf/tr2012001_steps.pdf">STEPS 2012 Final Report</a>, p. 12</td></tr></tbody></table>

<table id="steps2012-12"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-8"><span>[9]</span></a></td><td><a href="http://www.vpri.org/pdf/tr2012001_steps.pdf"><span>STEPS 2012 最终报告 </span></a><span>，p. 12</span></td></tr></tbody></table>

<table id="steps2012-32" data-translationmark="copiedNode"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-10">[10]</a></td><td><a href="http://www.vpri.org/pdf/tr2012001_steps.pdf">STEPS 2012 Final Report</a>, p. 32</td></tr></tbody></table>

<table id="steps2012-32"><colgroup><col><col></colgroup><tbody><tr><td><a href="https://chreke.com/little-languages.html#footnote-reference-10"><span>[10]</span></a></td><td><a href="http://www.vpri.org/pdf/tr2012001_steps.pdf"><span>STEPS 2012 最终报告 </span></a><span>，p. 32</span></td></tr></tbody></table>

___
