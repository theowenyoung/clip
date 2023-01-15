---
title: Julia 语言有什么好？
date: 2022-12-08T08:28:28.000Z
updated: 2022-12-08T08:28:28.000Z
taxonomies:
  tags:
    - Dev
extra:
  source: https://viralinstruction.com/posts/goodjulia/
  hostname: viralinstruction.com
  author: null
  original_title: 朱莉娅有什么好？
  original_lang: en

---

## [What's great about Julia?](https://viralinstruction.com/posts/goodjulia/#whats_great_about_julia)

## [朱莉娅有什么好？](https://viralinstruction.com/posts/goodjulia/#whats_great_about_julia)

_Written 2022-12-07, updated 2022-12-07_

_撰写于 2022-12-07，更新于 2022-12-07_

The first post on this blog was "[What's bad about Julia](https://viralinstruction.com/posts/badjulia/)" - a collection of the worst things about my favourite language, which turned out to be quite the Hacker News bait. The most commmon responses I got was along the lines of: "If Julia has all these flaws, why not just use another language?". At the time, I just said that despite its flaws, Julia was still amazing, that it would take another 4,000 word post to elaborate on why, and then I left it at that.

这个博客上的第一篇文章是“ [Julia 有什么不好的](https://viralinstruction.com/posts/badjulia/) 地方”——关于我最喜欢的语言的一系列最糟糕的事情，结果证明它完全是 Hacker News 的诱饵。 我得到的最常见的回答是：“如果 Julia 有所有这些缺陷，为什么不使用另一种语言呢？”。 当时，我只是说，尽管有缺陷，但 Julia 仍然很棒，需要另外 4,000 字的帖子来详细说明原因，然后我就此打住。

Recently I've been thinking a lot about one of Julia's major drawbacks, and have been drafting up a post that goes in depth about the subject. But honestly, posting _another_ verbose criticism of Julia would risk giving a misleadingly bad impression of my experience with the lovely language, even if I bracket a wall of criticism with a quick endorsement. After all, I've chosen to use the language for my daily work about two years ago, and I don't regret that choice in the slightest.

最近我一直在思考 Julia 的一个主要缺点，并且一直在起草一篇深入探讨该主题的文章。 但老实说，再发表 _一次_ 对 Julia 的冗长批评可能会给我使用这门可爱语言的经历留下误导性的坏印象，即使我用快速的认可来表达批评。 毕竟，我在大约两年前就选择了在日常工作中使用该语言，而且我一点也不后悔那个选择。

Now is the right time for that 4,000 word post on the _best_ parts of Julia.

现在正是发布 4,000 字的关于 _Julia最佳_ 部分的帖子的最佳时机。

1.  [It's both fast and dynamic](https://viralinstruction.com/posts/goodjulia/#its_both_fast_and_dynamic)
2.  [The package manager is amazing](https://viralinstruction.com/posts/goodjulia/#the_package_manager_is_amazing)
3.  [Optimising Julia code is pure joy](https://viralinstruction.com/posts/goodjulia/#optimising_julia_code_is_pure_joy)
4.  [Multiple dispatch is correct, everything else an approximation](https://viralinstruction.com/posts/goodjulia/#multiple_dispatch_is_correct_everything_else_an_approximation)
5.  [The Julia REPL is amazing](https://viralinstruction.com/posts/goodjulia/#the_julia_repl_is_amazing)
6.  [Strong ecosystem tooling consensus](https://viralinstruction.com/posts/goodjulia/#strong_ecosystem_tooling_consensus)
7.  [Multithreading is easy](https://viralinstruction.com/posts/goodjulia/#multithreading_is_easy)
8.  [The type system works well](https://viralinstruction.com/posts/goodjulia/#the_type_system_works_well)
9.  [It just keeps getting better](https://viralinstruction.com/posts/goodjulia/#it_just_keeps_getting_better)
10.  [It's weirdly fun](https://viralinstruction.com/posts/goodjulia/#its_weirdly_fun)

1.  [它既快速又动态](https://viralinstruction.com/posts/goodjulia/#its_both_fast_and_dynamic)
2.  [包管理器很棒](https://viralinstruction.com/posts/goodjulia/#the_package_manager_is_amazing)
3.  [优化 Julia 代码是纯粹的快乐](https://viralinstruction.com/posts/goodjulia/#optimising_julia_code_is_pure_joy)
4.  [多重分派是正确的，其他一切都是近似值](https://viralinstruction.com/posts/goodjulia/#multiple_dispatch_is_correct_everything_else_an_approximation)
5.  [Julia REPL 很棒](https://viralinstruction.com/posts/goodjulia/#the_julia_repl_is_amazing)
6.  [强大的生态系统工具共识](https://viralinstruction.com/posts/goodjulia/#strong_ecosystem_tooling_consensus)
7.  [多线程很容易](https://viralinstruction.com/posts/goodjulia/#multithreading_is_easy)
8.  [类型系统运行良好](https://viralinstruction.com/posts/goodjulia/#the_type_system_works_well)
9.  [它只是不断变得更好](https://viralinstruction.com/posts/goodjulia/#it_just_keeps_getting_better)
10.  [这很有趣](https://viralinstruction.com/posts/goodjulia/#its_weirdly_fun)

## [It's both fast and dynamic](https://viralinstruction.com/posts/goodjulia/#its_both_fast_and_dynamic)

## [它既快速又动态](https://viralinstruction.com/posts/goodjulia/#its_both_fast_and_dynamic)

Julia's speed is _the_ first selling point of Julia, and for a reason. Speed is not the most groundbreaking or novel feature or Julia - that award probably goes to making multiple dispatch the only dispatch paradigm - but it's the aspect that makes using Julia an un-ignorable option for some use cases. Simply put, for dynamic languages like Python, R or Perl, there are no good options for performance, only a wide selection of poor choices. Before moving my work to Julia, I've had the misfortune of being exposed to several of the awkward performance hacks of Python:

Julia 的速度是 Julia 的 _第_ 一个卖点，这是有原因的。 速度不是最具开创性或新颖的功能或 Julia——该奖项可能是为了使多重分派成为唯一的分派范例——但它是使使用 Julia 成为某些用例不可忽视的选择的一个方面。 简单地说，对于像 Python、R 或 Perl 这样的动态语言，没有性能好的选择，只有广泛的选择。 在将我的工作转移到 Julia 之前，我不幸遇到了 Python 的几个尴尬的性能黑客：

-   I've shoehorned my program logic to be vectorizable by Numpy, and ran into plenty problems when I reached fundamentally serial code
    
-   I've shoehorned my program logic to be vectorizable by Numpy, and ran into plenty problems when I reached fundamentally serial code
    
    我把我的程序逻辑强行塞进了 Numpy 向量化的程序逻辑中，当我达到基本的串行代码时遇到了很多问题
    
-   I've used Numba and run into its arbitrary limitations to support normal Python code, such as custom classes
    
-   I've used Numba and run into its arbitrary limitations to support normal Python code, such as custom classes
    
    我使用过 Numba 并遇到了它的任意限制以支持普通的 Python 代码，例如自定义类
    
-   I've used Cython and experienced un-debuggable errors, linker issues on package installation, the inability to distribute my package as source code, and the clunkiness of a separate compilation step in a scripting language.
    
-   I've used Cython and experienced un-debuggable errors, linker issues on package installation, the inability to distribute my package as source code, and the clunkiness of a separate compilation step in a scripting language.
    
    我使用过 Cython 并经历过不可调试的错误、包安装的链接器问题、无法将我的包作为源代码分发以及脚本语言中单独编译步骤的笨拙。
    

After having dealt with all those bullshit workarounds, moving my work to Julia was like suddenly breathing in fresh air. I just wrote my code - and optimised it - and then it was as fast as I could want it. And suddenly, all the awkward gymnastics I had been doing simply due to the limitation of Python seemed silly.

在处理了所有这些狗屁的变通办法之后，将我的工作转移到 Julia 就像突然呼吸到新鲜空气一样。 我刚刚编写了我的代码 - 并对其进行了优化 - 然后它的速度达到了我想要的速度。 突然之间，由于 Python 的限制，我一直在做的所有笨拙的体操看起来都很愚蠢。

That great combination of speed and dynamism is sometimes phrased as "As easy as Python, as fast as C". The phrase is a little off, in my opinion - it's not really possible to have a language where you write as carelessly as you do for a casual Python script, and it still runs like optimised C code. Code can only ever be fast if it's written with [the contraints of computer hardware](https://viralinstruction.com/posts/hardware/) in mind, and idiomatic Python isn't.

这种速度和活力的完美结合有时被称为“像 Python 一样简单，像 C 一样快”。 在我看来，这个短语有点不合时宜 - 真的不可能有一种语言可以让你像编写随意的 Python 脚本一样粗心大意，而且它仍然像优化的 C 代码一样运行。 代码才能永远很快 [只有在编写代码时考虑到计算机硬件的限制，](https://viralinstruction.com/posts/hardware/) ，而惯用的 Python 则不然。

A better catchphrase for Julia might be "The best expressiveness / performance tradeoff you have ever seen". Idiomatic Julia code remains high-level, generic and readable when being optimised - only at the most extreme optimisation, when you have to micro-optimise assembly code or manually unroll loops does the code degrade and begin to appear low-level and clunky.

A better catchphrase for Julia might be "The best expressiveness / performance tradeoff you have ever seen". Idiomatic Julia code remains high-level, generic and readable when being optimised - only at the most extreme optimisation, when you have to micro-optimise assembly code or manually unroll loops does the code degrade and begin to appear low-level and clunky.

The gradual and subtle difference between high-level Python-like Julia code and high-performance Julia means that it feels natural to prototype and iterate on inefficient, carelessly thrown together code, and then incrementally optimise only the bottlenecks once performance become an issue. Often, you'll find only a small fraction of the code actually needs to be optimised for the whole program to run fast. This kind of _gradual performance_ is not something I've seen in the other languages I've coded in. They tend to be _either_ slow but expressive, like Perl and Python, _or_ fast but rigid, like Rust and Zig.

The gradual and subtle difference between high-level Python-like Julia code and high-performance Julia means that it feels natural to prototype and iterate on inefficient, carelessly thrown together code, and then incrementally optimise only the bottlenecks once performance become an issue. Often, you'll find only a small fraction of the code actually needs to be optimised for the whole program to run fast. This kind of _gradual performance_ is not something I've seen in the other languages I've coded in. They tend to be _either_ slow but expressive, like Perl and Python, _or_ fast but rigid, like Rust and Zig.

The "dynamic" half of the "fast and dynamic" duo should not be understated, either. I'm a scientist, which means my job description can be paraphrased as working with stuff I don't understand, trying to make sense of it. In that context, it's critically important to be able to pivot and iterate on a small script quickly as you test out and explore ideas - preferrably in an interactive manner on a dataset already in memory.

“快速和动态”二人组的“动态”一半也不应被低估。 我是一名科学家，这意味着我的工作描述可以解释为与我不理解的东西打交道，试图弄清它的意义。 在这种情况下，在您测试和探索想法时能够快速调整和迭代小脚本至关重要 - 最好在内存中的数据集上以交互方式进行。

This process is cumbersome and awkward to do with static languages. Rust, for example, may have a wonderfully expressive type system, but it's also boilerplate heavy, and its borrowchecker makes writing any code that compiles at all quite a time investment. An investment, which most of the time gives no returns when you're trying to figure how to approach the problem in the first place. It's also not entirely clear how I would interactively visualise and manipulate a dataset using a static language like Rust.

对于静态语言来说，这个过程既麻烦又笨拙。 例如，Rust 可能有一个极富表现力的类型系统，但它的样板代码也很重，而且它的 borrowchecker 使得编写任何可以编译的代码都需要相当多的时间投资。 一项投资，当您首先尝试弄清楚如何解决问题时，大部分时间都没有回报。 我也不完全清楚我将如何使用像 Rust 这样的静态语言以交互方式可视化和操作数据集。

## [The package manager is amazing](https://viralinstruction.com/posts/goodjulia/#the_package_manager_is_amazing)

## [包管理器很棒](https://viralinstruction.com/posts/goodjulia/#the_package_manager_is_amazing)

These days, the package manager is probably the most central piece of software written for a programming language, other than the compiler itself. Here, Julia shines: Pkg.jl is an absolute joy to work with. Even after having used Julia for about 5 years, I'm still occasionally surprised by the thoughtfullness and convenience of Pkg. Coming from Python, which admittedly has a particularly bad package management story, Pkg is an absolute godsend.

如今，除了编译器本身，包管理器可能是为编程语言编写的最核心的软件部分。 在这里，Julia 大放异彩：与 Pkg.jl 一起工作绝对是一种乐趣。 即使在使用 Julia 大约 5 年之后，我仍然偶尔会对 Pkg 的周到和便利感到惊讶。 来自 Python，公认有一个特别糟糕的包管理故事，Pkg 绝对是天赐之物。

Like the Rust manager Cargo, but unlike, say, Python's Conda, Pkg separates the environment specification (the "project") from the resolved environment (the "manifest"). This allows you do distinguish between direct and indirect dependencies, and means that unused indirect dependencies are automatically removed. For software engineering, only the project is necessary, and the manifest can be considered ephemeral. If you're a scientist and want to completely reproduce the environment that the code was originally run with, you can simply command Pkg to instantiate an exact environment from the manifest.

Like the Rust manager Cargo, but unlike, say, Python's Conda, Pkg separates the environment specification (the "project") from the resolved environment (the "manifest"). This allows you do distinguish between direct and indirect dependencies, and means that unused indirect dependencies are automatically removed. For software engineering, only the project is necessary, and the manifest can be considered ephemeral. If you're a scientist and want to completely reproduce the environment that the code was originally run with, you can simply command Pkg to instantiate an exact environment from the manifest.

Pkg is also delightfully fast. Resolving environments feels instant, as opposed to the glacially slow Conda that Python offers. The global "general" registry is downloaded as a single gzipped tarball, and read directly from the zipped tarball, making registry updates way faster than updating Cargo's crates.io. Or, if you want, you can easily toggle Pkg to offline mode and skip updating the index alltogether. The ease and speed of making environments and installing packages into them encourages users to create many separate environments for each little experiment or task, which in turns leads to smaller environments, which reduces the risk of upgrade deadlock.

Pkg 也非常快。 解决环境感觉是即时的，这与 Python 提供的冰川般缓慢的 Conda 截然不同。 全局“通用”注册表作为单个 gzip 压缩包下载，并直接从压缩包中读取，使注册表更新比更新 Cargo 的 crates.io 快得多。 或者，如果您愿意，您可以轻松地将 Pkg 切换到离线模式，并完全跳过更新索引。 创建环境并将包安装到其中的简便性和速度鼓励用户为每个小实验或任务创建许多单独的环境，这反过来会导致更小的环境，从而降低升级死锁的风险。

Beside specifying a version or a range of versions of a package you want to install, Pkg also allows you to install specific git commits or git branches. You can seamlessly install packages from remote git repositories, from local files, or from various registries. I say "various" registries, because Pkg is federated, and allows you to easily and freely mix multiple public and private package registries, even if they have no knowledge of each others and contain different packages with the same names.

除了指定要安装的包的版本或版本范围之外，Pkg 还允许您安装特定的 git 提交或 git 分支。 您可以从远程 git 存储库、本地文件或各种注册表无缝安装包。 我说“各种”注册表，因为 Pkg 是联合的，允许您轻松自由地混合多个公共和私有包注册表，即使它们彼此不了解并且包含具有相同名称的不同包。

The ease of making and using custom registries makes it attractive for even small organisations to maintain their own private registry of Julia packages, instead of using large Julia monorepositories. For example, in my last job, I created my own registry to keep track of the software used in my department. This way, different packages in the same code base can pick their own versions of internal packages to use. This makes incremental upgrades, or simultanous development of two interdependent packages, much easier.

创建和使用自定义注册表的简便性使得即使是小型组织也有吸引力维护他们自己的 Julia 包私有注册表，而不是使用大型 Julia 单一存储库。 例如，在我的上一份工作中，我创建了自己的注册表来跟踪我部门使用的软件。 这样，同一代码库中的不同包可以选择他们自己的内部包版本来使用。 这使得增量升级或同时开发两个相互依赖的包变得更加容易。

The package manager also manages arbitrary binary artifacts, such as compiled libraries and executables. The BinaryBuilder package allows you to cross-compile the same program to all platforms supported by Julia, and automatically create a small Julia library (jll) package which automatically selects and wraps the correct binary depending on platform, allowing it to be executed with a single Julia function. This means you can create Julia packages which depend on, say, C++ executables, and still have it automatically installed by Pkg. In my experience it has been much, much easier to create binary packages compared to using Conda.

包管理器还管理任意二进制工件，例如已编译的库和可执行文件。 BinaryBuilder 包允许您将同一程序交叉编译到 Julia 支持的所有平台，并自动创建一个小型 Julia 库 (jll) 包，该包会根据平台自动选择和包装正确的二进制文件，从而使其可以通过单个程序执行茱莉亚函数。 这意味着您可以创建依赖于 C++ 可执行文件的 Julia 包，并且仍然由 Pkg 自动安装它。 根据我的经验，与使用 Conda 相比，创建二进制包要容易得多。

## [Optimising Julia code is pure joy](https://viralinstruction.com/posts/goodjulia/#optimising_julia_code_is_pure_joy)

## [优化 Julia 代码是纯粹的快乐](https://viralinstruction.com/posts/goodjulia/#optimising_julia_code_is_pure_joy)

Julia code is not exactly the _fastest_ compiled language, but it's throughly enjoyable to optimise, meaning that at least the Julia code I write tends to be fast.

Julia 代码并不是 _最快_ 的编译语言，但优化起来非常愉快，这意味着至少我编写的 Julia 代码往往很快。

There is a reason half my posts are about writing optimised Julia code. The joy comes both from the _gradual performance_ characteristic of Julia I explained above, where you optimise only what you need to, and also from the smooth developer experience of optimising Julia code, where the experience of Julia is second to none.

我的一半帖子都是关于编写优化的 Julia 代码是有原因的。 快乐既来自我上面解释的 Julia 的 _渐进性能_ 特征，您只优化需要的东西，也来自优化 Julia 代码的流畅开发体验，Julia 的体验是首屈一指的。

You can do most optimisations interactively, and _without having to shutdown your running session_. This can be a huge time saver if your code operates on a complex dataset in memory, or relies on state that is complicated to recreate. For example, if you are optimising a single function in a deep call stack, because the language is dynamic, it is easy to just call and benchmark it from the REPL without having to run your whole program.

您可以交互式地进行大多数优化， _而不必关闭正在运行的会话_ 。 如果您的代码在内存中的复杂数据集上运行，或者依赖于重新创建复杂的状态，这可以节省大量时间。 例如，如果您正在优化深度调用堆栈中的单个函数，因为语言是动态的，所以很容易从 REPL 调用它并对其进行基准测试，而无需运行整个程序。

Suppose you have a program which runs slowly - how would you go about it in Julia?

假设你有一个运行缓慢的程序——你会如何在 Julia 中处理它？

You might start optimisation with profiling: With the VSCode extension installed, simply call `@profview foo(arg)`, and you get a flamegraph of time spent, with heap allocations and type instability highlighted for all functions in a single overview. In fact, you can get a profile of an _already running_ process with minimal runtime overhead by sending a `SIGUSR1` signal to the process.

您可以通过分析开始优化：安装 VSCode 扩展后，只需调用 `@profview foo(arg)`，你会得到一个花费时间的火焰图，在一个概览中突出显示所有函数的堆分配和类型不稳定性。 事实上，您可以 _通过_ 发送一个 `SIGUSR1`向进程发出信号。

Then, suppose you narrow your performance woes to a certain function `bar`. If it's not immediately obvious why that function runs slow, you might check Julia's type inference using `@code_warntype bar(arg)`, where any problematic inference is colored red. Then, if you want to dig deeper, you can examine `bar` in every step of the compilation pipeline:

Then, suppose you narrow your performance woes to a certain function `bar`. If it's not immediately obvious why that function runs slow, you might check Julia's type inference using `@code_warntype bar(arg)`, where any problematic inference is colored red. Then, if you want to dig deeper, you can examine `bar` in every step of the compilation pipeline:

-   `@code_lowered` return Julia's IR of the function's content
    
-   `@code_lowered` return Julia's IR of the function's content
    
    `@code_lowered` return Julia's IR of the function's content
    
-   `@code_typed optimize=false` reports Julia's type inference on the IR
    
-   `@code_typed optimize=false` reports Julia's type inference on the IR
    
    `@code_typed optimize=false` reports Julia's type inference on the IR
    
-   `@code_typed` shows the optimised IR after Julia's own passes such as inlining
    
-   `@code_typed` shows the optimised IR after Julia's own passes such as inlining
    
    `@code_typed`显示经过 Julia 自己的传递（例如内联）后的优化 IR
    
-   `@code_llvm optimize=false` shows the LLVM IR generated by Julia
    
-   `@code_llvm optimize=false` shows the LLVM IR generated by Julia
    
    `@code_llvm optimize=false`显示由 Julia 生成的 LLVM IR
    
-   `@code_llvm` shows the optimised LLVM
    
-   `@code_llvm` shows the optimised LLVM
    
    `@code_llvm`显示优化的 LLVM
    
-   `@code_native` shows the native assembly of the function
    
-   `@code_native` shows the native assembly of the function
    
    `@code_native`显示函数的本机程序集
    

From here, you can repeatedly modify and run the function, and immediately see the resulting impact on inference and codegen. This makes even micro-optimising Julia code is laughably easy.

从这里，您可以反复修改和运行该函数，并立即查看对推理和代码生成产生的影响。 这使得 Julia 代码的微优化变得简单得可笑。

Julia is often critisised for its lacklustre developer tooling. That's true in some areas of development, but certainly not profiling and optimisation. The many excellent packages useful for optimisation include, beside the ones I've already mentioned, a [memory profiler](https://docs.julialang.org/en/v1/manual/profile/#Memory-allocation-analysis), [inference debugger](https://github.com/JuliaDebug/Cthulhu.jl), [inference issue detector](https://aviatesk.github.io/JET.jl/stable/optanalysis/), [compiler profiler](https://github.com/timholy/SnoopCompile.jl), [benchmarker](https://github.com/JuliaCI/BenchmarkTools.jl), and probably many other tools I've forgotten.

Julia 经常因其乏善可陈的开发工具而受到批评。 在某些开发领域确实如此，但肯定不是分析和优化。 许多对优化有用的优秀软件包包括，除了我已经提到的那些之外， [内存分析器](https://docs.julialang.org/en/v1/manual/profile/#Memory-allocation-analysis) 、 [推理调试器](https://github.com/JuliaDebug/Cthulhu.jl) 、 [推理问题检测器](https://aviatesk.github.io/JET.jl/stable/optanalysis/) 、 [编译器分析器](https://github.com/timholy/SnoopCompile.jl) 、 [基准测试](https://github.com/JuliaCI/BenchmarkTools.jl) 器，以及可能我忘记的许多其他工具。

## [Multiple dispatch is correct, everything else an approximation](https://viralinstruction.com/posts/goodjulia/#multiple_dispatch_is_correct_everything_else_an_approximation)

## [多重分派是正确的，其他一切都是近似值](https://viralinstruction.com/posts/goodjulia/#multiple_dispatch_is_correct_everything_else_an_approximation)

Consider how Python works: `a + b` resolves to `a.__add__(b)`, whereas `b + a` means `b.__add__(a)`. In other words, the first argument to `+` decides what `+` means - this is what we call single dispatch.

考虑 Python 的工作原理： `a + b`决心 `a.__add__(b)`， 然而 `b + a`方法 `b.__add__(a)`. 换句话说，第一个参数 `+`决定什么 `+`意思是——这就是我们所说的单次调度。

But here's the thing about addition: It's commutative - precisely meaning that there is no order to `a + b` - it's exactly the same as `b + a`. By what authority does the first - really, just leftmost - argument have to decide the meaning of `+` for all the other arguments?

但这是关于加法的事情：它是可交换的——恰恰意味着没有顺序 `a + b`\- 完全一样 `b + a`. 第一个 - 实际上，只是最左边的 - 论点必须根据什么权威来决定的含义 `+`对于所有其他论点？

None, of course. It's an artifact of how Python dispatch works, which has nothing to do with - and indeed, is at odds with - how addition is defined.

没有，当然。 它是 Python 分派工作方式的人工制品，与加法的定义方式无关——实际上是不一致的。

Consider the Python dunder method `__radd__`. Why does this exist? It's a hack, added solely so that you can write a class which defines the meaning of `+` when it's the _second_ argument. In other words, `__radd__` is a workaround of the limitations of Python's dispatch model. A workaround, which only exists for a handful of hardcoded functions.

考虑 Python dunder 方法 `__radd__`. 为什么会这样？ 这是一个 hack，添加只是为了让你可以编写一个定义的含义的类 `+`当它是 _第二个_ 参数时。 换句话说， `__radd__`是 Python 调度模型限制的解决方法。 一种解决方法，仅适用于少数硬编码函数。

Or consider the method `",".join(my_strings)`. Why is this a method of `","`? Surely, we would say that the _array of strings_ is being joined. We would not say that the comma joins the strings. The (boring) answer is that it's yet another artificial limitation of Python's dispatch: Because the `join` method ought to work with all kinds of iterables, there is no single class the method can be tied to, and so the iterable _can't_ be the first element.

或者考虑方法 `",".join(my_strings)`. 为什么这是一个方法 `","`？ 当然，我们会说 _字符串数组_ 正在连接 。 我们不会说逗号连接字符串。 （无聊的）答案是它是 Python 调度的另一个人为限制：因为 `join`方法应该与所有类型的可迭代对象一起工作，没有可以绑定该方法的单一类，因此可迭代对象 _不能_ 是第一个元素。

It's almost as if it doesn't make sense to define a function based only on one of its arguments.

似乎只根据其中一个参数定义一个函数是没有意义的。

Why not simply dispatch on every argument? No need for that `__radd__` business, or the forced inversions of arguments to `join`. `+` would simply be defined by - wait for it - _its arguments_, and `join` could be defined straightforwardly: `join(things, separator)`.

为什么不简单地调度每个参数？ 没那个必要 `__radd__`业务，或强制倒置的论点 `join`. `+`将简单地由 - 等待它 - _它的参数_ 定义，并且 `join`可以直接定义： `join(things, separator)`.

My experience with learning how Julia's dispatch system worked was a weird sense of familiarity: This is how it was _supposed to work_ all along. Of _course_ a method should be defined by a function and _its arguments_.

我在学习 Julia 的调度系统如何工作时有一种奇怪的熟悉感：这就是它 _应该一直工作_ 的方式。 当然 _，_ 方法应该由函数 _及其参数_ 来定义。

I don't think it's a coincidence that it feels so natural. After all, multiple dispatch (MD) is a natural solution to [the expression problem](https://en.wikipedia.org/wiki/Expression_problem) which so many languages suffer from. The adoptation of MD has been defining for Julia, in a way that was not clear to the developers when the language was concieved. For example, it has turned out that MD has [enabled a shocking amount of code reuse in the Julia ecosystem](https://www.youtube.com/watch?v=kc9HwsxE1OY).

我不认为它感觉如此自然是巧合。 毕竟，多重分派 (MD) 是 [的表达式问题](https://en.wikipedia.org/wiki/Expression_problem) 许多语言都遇到 的自然解决方案。 MD 的采用一直是 Julia 的定义，其方式在构思该语言时开发人员并不清楚。 例如，事实证明，MD [在 Julia 生态系统中实现了惊人数量的代码重用](https://www.youtube.com/watch?v=kc9HwsxE1OY) 。

Sometimes, multiple dispatch (MD) and single dispatch (SD) will behave the same, because the first argument happens to be sufficient to determine the right method. And sometimes, when you're aquianted with MD and are coding in a SD language, you notice you have to twist your functions to make it fit into the SD mold. It's never the other way around: Because MD is a natural generalization of SD, you never wish you had SD when you code in an MD language.

有时，多分派 (MD) 和单分派 (SD) 的行为相同，因为第一个参数恰好足以确定正确的方法。 有时，当您熟悉 MD 并使用 SD 语言编码时，您会注意到您必须扭曲函数以使其适合 SD 模型。 绝对不会反过来：因为 MD 是 SD 的自然概括，所以当您使用 MD 语言编码时，您永远不会希望拥有 SD。

## [The Julia REPL is amazing](https://viralinstruction.com/posts/goodjulia/#the_julia_repl_is_amazing)

## [Julia REPL 很棒](https://viralinstruction.com/posts/goodjulia/#the_julia_repl_is_amazing)

Python has had a REPL for 30 years. So why does it still suck? Python's REPL is the REPL equivalent of [the `ed` editor](https://www.gnu.org/fun/jokes/ed-msg.en.html). You might _technically_ be able to write code in it, but that's about all the good there is to say about it.

Python has had a REPL for 30 years. So why does it still suck? Python's REPL is the REPL equivalent of [the `ed`编辑](https://www.gnu.org/fun/jokes/ed-msg.en.html) 。 ，您可能 _从技术上讲_ 能够在其中编写代码，但这就是关于它的所有好处。

Did you accidentally indent by hitting the space button 11 times instead of 12 in the block you just wrote in the REPL? Sorry, Python won't run that because reasons. Want to rerun the block above? Have fun re-typing it one line at a time. Want to edit single line above the one you just wrote? Edit your expectations.

在您刚刚在 REPL 中编写的块中，您是否不小心按了 11 次空格键而不是 12 次缩进？ 抱歉，由于某些原因，Python 不会运行它。 想重新运行上面的块？ 享受一次一行重新输入的乐趣。 想要编辑您刚写的那一行之上的单行？ 编辑您的期望。

Compare to Julia's REPL, which feels like a proper editor: It has advanced tab-completion, including of system paths and keys of a dictionary. It allows navigating and editing entire blocks of code at a time. You can edit these blocks with several convenient editor-like keybindings. If you don't like the keybindings, they're customisable, of course.

与 Julia 的 REPL 相比，它感觉像是一个合适的编辑器：它具有高级制表符完成功能，包括系统路径和字典键。 它允许一次导航和编辑整个代码块。 您可以使用几个方便的类似编辑器的键绑定来编辑这些块。 如果您不喜欢键绑定，当然可以自定义它们。

And in fact, since the REPL is simply a stdlib package with an interface, it's easily extensible. For example, I use the package `OhMyREPL`, which extends the default REPL to have syntax highlighting and a REPL history browser with fuzzy search.

事实上，由于 REPL 只是一个带有接口的 stdlib 包，所以它很容易扩展。 例如，我使用包 `OhMyREPL`，它扩展了默认的 REPL 以具有语法突出显示和具有模糊搜索的 REPL 历史浏览器。

Julia sometimes get flak for having poor documentation. But let's compare the documentation you get in the Python REPL vs what you get in Julia: In Python, you have the `help` function:

Julia 有时会因为文档质量差而受到抨击。 但是让我们比较一下您在 Python REPL 中获得的文档与您在 Julia 中获得的文档：在 Python 中，您有 `help`功能：

```
>>> help(set)
class set(object)
 |  set() -> new empty set object
 |  set(iterable) -> new set object
 |
 |  Build an unordered collection of unique elements.
 |
 |  Methods defined here:

 [ list of methods ]
```

Which returns characteristically terse summaries. Compare to Julia, which has a dedicated `help` mode in the REPL:

它返回典型的简洁摘要。 与 Julia 相比，它有专门的 `help`REPL 中的模式：

```
help?> Set
search: Set setenv setdiff setdiff! setfield! setindex! setglobal! setrounding setproperty!

  Set{T} <: AbstractSet{T}


  Sets are mutable containers that provide fast membership testing.

  Sets have efficient implementations of set operations such as in, union and intersect.
  Elements in a Set are unique, as determined by the elements' definition of isequal.
  The order of elements in a Set is an implementation detail and cannot be relied on.

  See also: AbstractSet, BitSet, Dict, push!, empty!, union!, in, isequal

  Examples
  ≡≡≡≡≡≡≡≡≡≡

  julia> s = Set("aaBca")
  Set{Char} with 3 elements:
    'a'
    'c'
    'B'

  julia> push!(s, 'b')
  Set{Char} with 4 elements:
    'a'
    'c'
    'b'
    'B'

  julia> s = Set([NaN, 0.0, 1.0, 2.0]);

  julia> -0.0 in s # isequal(0.0, -0.0) is false
  false

  julia> NaN in s # isequal(NaN, NaN) is true
  true
```

The docstring for `Set` - unlike's Python's - shows:

的文档字符串 `Set`\- 不像 Python 的 - 显示：

-   Similarly-named types and methods, in case you mistyped your query
    
-   Similarly-named types and methods, in case you mistyped your query
    
    Similarly-named types and methods, in case you mistyped your query
    
-   A one-line summary with the type and its supertype
    
-   A one-line summary with the type and its supertype
    
    A one-line summary with the type and its supertype
    
-   A more thorough description
    
-   A more thorough description
    
    A more thorough description
    
-   A list of related functions and types
    
-   A list of related functions and types
    
    A list of related functions and types
    
-   Examples, which are tested
    
-   Examples, which are tested
    
    测试过的例子
    

Unlike Python, it does not show a comprehensive list of methods. Remember - in Julia, methods are not tied to single classes.

与 Python 不同，它不显示完整的方法列表。 请记住——在 Julia 中，方法不依赖于单个类。

But then again, Julia's REPL is actually helpful, so you can simply query these from the REPL. For example, if you want to get all the methods of `Set` and its supertypes, you can use `methodswith`:

但话又说回来，Julia 的 REPL 实际上很有用，所以你可以简单地从 REPL 中查询这些。 例如，如果你想获得所有的方法 `Set`及其超类型，您可以使用 `methodswith`:

```
julia> methodswith(Set, supertypes=true)
[1] <(a::AbstractSet, b::AbstractSet) @ Base abstractset.jl:484
[2] <=(a::AbstractSet, b::AbstractSet) @ Base abstractset.jl:485
[3] ==(a::AbstractSet, b::AbstractSet) @ Base abstractset.jl:481
[4] allequal(c::Union{AbstractDict, AbstractSet}) @ Base set.jl:535
[5] allunique(::Union{AbstractDict, AbstractSet}) @ Base set.jl:475
[ etc ]
```

You can search for objects in Julia and all loaded packages that uses a certain string or regex in their docstring, simply by typing the string or regex in help mode:

您可以在 Julia 中搜索对象以及所有在其文档字符串中使用特定字符串或正则表达式的已加载包，只需在帮助模式下键入字符串或正则表达式即可：

```
help?> r" (Abstract)?Set"
Base.KeyError
Base.union!
Base.setcpuaffinity
Base.Set
Base.Cmd
Base.replace!
```

You can also run shell commands directly from the REPL by switching to shell mode:

您还可以通过切换到 shell 模式直接从 REPL 运行 shell 命令：

```
shell> ls
404.md  about.md  _assets  config.md  _css  index.md  _layout  _libs  Manifest.toml  posts  Project.toml  _rss  __site  todo.md  utils.jl

julia>
```

When I used Python to do my day-to-day work, I used Jupyter Notebooks. I thought I liked notebooks - [but I don't, really](https://www.youtube.com/watch?v=7jiPeIFXb6U). I simply couldn't be productive in the Python REPL, because is so manifestly awful. These days, I do all my Julia work in an editor connected to the REPL.

当我使用 Python 进行日常工作时，我使用的是 Jupyter Notebooks。 我以为我喜欢笔记本—— [但我不喜欢，真的](https://www.youtube.com/watch?v=7jiPeIFXb6U) 。 我根本无法在 Python REPL 中高效工作，因为它太糟糕了。 这些天，我在连接到 REPL 的编辑器中完成所有 Julia 工作。

Nowadays, there are a lot of demands on modern programming languages. It's not enough to simply provide a working compiler: People want editor plugins with syntax highlighting, a profiler and benchmarking software, a debugger, a static type checker, a large stdlib, a documentation system with doctests that can generate a searchable HTML site, a test framework with CI hooks and code coverage, a feature-rich package manager, and much else. All for free, of course.

如今，对现代编程语言有很多需求。 仅仅提供一个可用的编译器是不够的：人们需要带有语法高亮显示的编辑器插件、一个分析器和基准测试软件、一个调试器、一个静态类型检查器、一个大型标准库、一个带有可以生成可搜索 HTML 站点的 doctest 的文档系统、一个具有 CI 挂钩和代码覆盖率的测试框架、功能丰富的包管理器等等。 当然，一切都是免费的。

The advantage of all these demands is that when a new language materializes, there is already a standard approach to all these things: In Julia, there is a single default test framework, a default way of running CI, and one go-to documentation system: `Documenter`. As a user, it makes it easy to just use what everyone else uses. This leads to best practices being more widely adopted.

所有这些需求的优势在于，当一种新语言实现时，所有这些事情都已经有了一种标准方法：在 Julia 中，有一个默认的测试框架，一种运行 CI 的默认方式，以及一个首选文档系统: `Documenter`. 作为用户，使用其他人使用的东西很容易。 这导致最佳实践被更广泛地采用。

For example, most Julia packages tends to be well-tested and documented:

例如，大多数 Julia 包往往经过充分测试和记录：

-   88% of packages has documentation, 33% of packages has more than 10% of their content be documentation
    
-   88% of packages has documentation, 33% of packages has more than 10% of their content be documentation
    
    88% 的包有文档，33% 的包有超过 10% 的内容是文档
    
-   89% of registered Julia packages has at least 10 lines of tests
    
-   89% of registered Julia packages has at least 10 lines of tests
    
    89% 的注册 Julia 包至少有 10 行测试
    
-   95% of packages has registered CI
    
-   95% of packages has registered CI
    
    95% 的包已注册 CI
    

Pretty good numbers, considering that this is for _all_ registered Julia packages, including beginner programmers' packages. I'm not sure how these numbers look for e.g. PyPI, but I'd be surprised if they were anywhere close to as good.

Pretty good numbers, considering that this is for _all_ registered Julia packages, including beginner programmers' packages. I'm not sure how these numbers look for e.g. PyPI, but I'd be surprised if they were anywhere close to as good.

The picture does not fit with the Julia's reputation for having poor documentation, so what's up with that?

The picture does not fit with the Julia's reputation for having poor documentation, so what's up with that?

In my view, Julia has this reputation because it has far fewer huge flagship packages like PyTorch or Numpy, which again is simply because Julia is much younger, less popular, and with less corporate backing. So, people naturally compare the documentation of PyTorch - a huge flagship package authored by Facebook (reportedly worked on by 300 paid developers at one time!) with 1.5 million lines C and C++ code and 1 million lines of Python code - with Flux.jl, a 10,000 LOC package, maintained by a handful of people, most of whom are not paid to do so. Obviously, they find Flux's documentation lacklustre in comparison.

在我看来，Julia 之所以享有这样的声誉，是因为它没有像 PyTorch 或 Numpy 这样的大型旗舰包，这又是因为 Julia 更年轻、不那么受欢迎，而且公司支持也少。 因此，人们很自然地将 PyTorch 的文档与 Flux.jl 进行比较——这是 Facebook 编写的一个巨大的旗舰包（据报道一次有 300 名付费开发人员共同开发！）与 150 万行 C 和 C++ 代码以及 100 万行 Python 代码，一个 10,000 LOC 的包，由少数人维护，其中大多数人没有报酬。 显然，相比之下，他们发现 Flux 的文档乏善可陈。

## [Multithreading is easy](https://viralinstruction.com/posts/goodjulia/#multithreading_is_easy)

## [多线程很容易](https://viralinstruction.com/posts/goodjulia/#multithreading_is_easy)

In my experience, multithreading in Julia - unlike _some other dynamic languages_ - is usually as easy as slapping `@threads` in front of a for loop, which will cause each iteration to be scheduled in a separate thread.

以我的经验，Julia 中的多线程——不像 _其他一些动态语言_ ——通常就像打耳光一样简单 `@threads`在 for 循环之前，这将导致每个迭代都安排在一个单独的线程中。

```
julia> @threads for i in 1:16
           print(i, ',') # IO is thread-safe
       end
1,2,13,14,5,11,7,12,6,9,10,8,15,16,3,4,
```

For programs with a more complicated control flow structure, Julia exposes low-level threading primitives through a convenient and flexible interface. Julia uses "green threading", which means the language runtime manages multiple virtual threads (in Julia called tasks) on top of the operating system. Avoiding OS-overhead makes spawning tasks lightweight, so thousands or millions can be spawned with no particular performance implications. For example, it takes only 2 seconds to spawn and finish 1 million tasks which all atomically modify the same integer:

对于具有更复杂控制流结构的程序，Julia 通过方便灵活的接口公开低级线程原语。 Julia 使用“绿色线程”，这意味着语言运行时在操作系统之上管理多个虚拟线程（在 Julia 中称为任务）。 避免 OS 开销使生成任务变得轻量级，因此可以生成数千或数百万，而没有特别的性能影响。 例如，仅需 2 秒即可生成并完成 100 万个任务，这些任务全部以原子方式修改相同的整数：

```
julia> @time begin
           atom = Atomic{Int}()
           local task
           for i in 1:1_000_000
               task = @spawn atomic_add!(atom, 1)
           end
           wait(task)
           atom[]
       end
  2.033598 seconds (8.00 M allocations: 503.630 MiB, 33.43% gc time, 0.43% compilation time)
1000000
```

I don't know much about the intricasies of multithreading, so I couldn't tell you if Julia's approach to multithreading is groundbreaking or well designed. What I _can_ tell you, is that in Julia, it is _so easy_ to use multiple threads effectively, that even though I don't feel that confident writing complex multithreaded code, most my performance sensitive scripts are multithreaded where it's obvious to do so.

我对多线程的复杂性知之甚少，所以我无法告诉您 Julia 的多线程方法是开创性的还是经过精心设计的。 我 _可以_ 告诉你的是，在 Julia 中， _有效地使用多线程非常容易_ ，即使我对编写复杂的多线程代码没有信心，我的大多数性能敏感脚本都是多线程的，这是显而易见的。

## [The type system works well](https://viralinstruction.com/posts/goodjulia/#the_type_system_works_well)

## [The type system works well](https://viralinstruction.com/posts/goodjulia/#the_type_system_works_well)

There's a section on my original "What's bad about Julia" blogpost called "The type system works poorly". It's the one place where I most regret being imprecise. What I gripe about in that post is Julia's system of abstract types and subtyping, and I stand by my condemnation of that. But there is more to a type system than subtyping, and in so many other ways, Julia's type system is great.

There's a section on my original "What's bad about Julia" blogpost called "The type system works poorly". It's the one place where I most regret being imprecise. What I gripe about in that post is Julia's system of abstract types and subtyping, and I stand by my condemnation of that. But there is more to a type system than subtyping, and in so many other ways, Julia's type system is great.

The type system is nice and _expressive_ with its union types, generic types, variadic types and all that other jazz, but having a nice, expressive type system is hardly special for modern languages. What feels special about the Julia type system is that it manages to be both strict and excellent at dealing with uncertaincy.

类型系统 _很好并且富有表现力_ 通过其联合类型、泛型类型、可变类型和所有其他爵士乐 ，但是拥有一个很好的、富有表现力的类型系统对于现代语言来说并不是特别的。 Julia 类型系统的特别之处在于它在处理不确定性方面既严格又出色。

Dynamic languages often don't have a real type system. For example, Python's type system only exists in your IDE's type checker, not really at runtime. If I do a typecast or type assertion in Python, it will be ignored at runtime. In contrast, in Julia, these type operations are enforced. This means it's possible to, for example, assert that "this variable really _must_ be this type, even if the compiler can't do type inference here". If you're wrong, it throws an exception. If you're right, compiler will take advantage of the knowledge given by the type assert and produce more efficient code.

动态语言通常没有真正的类型系统。 例如，Python 的类型系统只存在于 IDE 的类型检查器中，而不是真正存在于运行时。 如果我在 Python 中进行类型转换或类型断言，它将在运行时被忽略。 相反，在 Julia 中，这些类型操作是强制执行的。 这意味着可以断言“这个变量确实 _必须_ 是这个类型，即使编译器不能在这里进行类型推断”。 如果你错了，它会抛出异常。 如果你是对的，编译器将利用断言类型提供的知识并生成更高效的代码。

Julia also allows you to query the compiler for types at compile time. Unlike third-party type checkers, the answer is guaranteed to be correct (to the extent the compiler is), and the querying can can leverage all the inference and tricks of the compiler.

Julia 还允许您在编译时查询编译器的类型。 与第三方类型检查器不同，答案保证是正确的（在编译器的范围内），并且查询可以利用编译器的所有推理和技巧。

So, Julia has a type system quite recognisable by users of modern, static languages. At the same time, unlike most static languages, Julia does not require types to be known at compile time. When trying out a quick experiment, or iterating on a half-baked idea, it's completely fine to hammer out code where the compiler has no idea what is going on.

因此，Julia 拥有一个现代静态语言用户非常熟悉的类型系统。 同时，与大多数静态语言不同，Julia 不需要在编译时就知道类型。 在尝试快速实验或迭代半生不熟的想法时，敲定编译器不知道发生了什么的代码是完全可以的。

This combination of both enforcing types where required, and being comfortable with type uncertainty makes _gradual typing_ natural, such that the user can get the best of both the dynamic and static world: You can quickly iterate on untyped or poorly inferred code, and then when you settle down on a design, it takes only small changes to lock down the types. Once the compiler can completely infer the program, you can use Julia's own compiler to statically analyse your entire program and find errors.

This combination of both enforcing types where required, and being comfortable with type uncertainty makes _gradual typing_ natural, such that the user can get the best of both the dynamic and static world: You can quickly iterate on untyped or poorly inferred code, and then when you settle down on a design, it takes only small changes to lock down the types. Once the compiler can completely infer the program, you can use Julia's own compiler to statically analyse your entire program and find errors.

Analogous to Julia's favourable position w.r.t. gradual performance, Julia is uniquely suited for a kind of gradual safety, where a program can begin its development as dynamically typed with few guarantees, and be incrementally hardened against type errors and other logical errors as the program matures. Gradual safety would give Julia a unique and compelling selling point: Just like Julia has already broken the tradeoff between expressiveness and speed, it will hopefully also in the future break the tradeoff between expressiveness and safety, where other languages are forced to choose.

类似于 Julia 在渐进性能方面的有利地位，Julia 非常适合一种渐进的安全性，在这种情况下，程序可以在几乎没有保证的情况下以动态类型开始其开发，并随着程序的成熟逐渐加强以防止类型错误和其他逻辑错误。 渐进的安全性会给 Julia 一个独特而引人注目的卖点：就像 Julia 已经打破了表达能力和速度之间的权衡一样，它也有望在未来打破其他语言被迫选择的表达能力和安全性之间的权衡。

Julia is not yet ready for this gradual safety, because we lack the tooling to exploit the inherent ability of Julia code to be statically checked. This tooling is a long-term goal of the core developers, and I'm confident the situation will improve the following years, as it already has improved the last few years.

Julia 还没有为这种渐进的安全性做好准备，因为我们缺乏工具来利用 Julia 代码的固有能力进行静态检查。 这个工具是核心开发人员的长期目标，我相信情况会在接下来的几年有所改善，因为它在过去几年已经有所改善。

## [It just keeps getting better](https://viralinstruction.com/posts/goodjulia/#it_just_keeps_getting_better)

## [它只是不断变得更好](https://viralinstruction.com/posts/goodjulia/#it_just_keeps_getting_better)

For better and worse, Julia is not yet an old, established language. The "better" side is that Julia is being actively developed, so there are still many improvements on the horizon which hopefully will make Julia an even nicer language in the next few years.

不管是好是坏，Julia 还不是一种古老的、成熟的语言。 “更好”的一面是 Julia 正在积极开发中，因此仍有许多改进即将出现，希望在未来几年内使 Julia 成为更好的语言。

The improvements mentioned below are not of the hypothetical "sufficiently smart compiler" kind which may never arrive. Even though the developers are also looking at some speculative cutting-edge compiler technologies, I'll not write about them here. Instead, the improvements below are merely the adoptation of already existing technologies into Julia. Adopdation, which I'm confident will happen eventually.

The improvements mentioned below are not of the hypothetical "sufficiently smart compiler" kind which may never arrive. Even though the developers are also looking at some speculative cutting-edge compiler technologies, I'll not write about them here. Instead, the improvements below are merely the adoptation of already existing technologies into Julia. Adopdation, which I'm confident will happen eventually.

Julia latency will continue to improve. First, by being able to cache native code between sessions. Later, by enabling multithreading in the compiler, and possibly a tiered JIT that enables code to start quick using an interpreter, and incrementally hot-load optimised code being compiled in a background process. I expect the latency of most large packages will fall by 10x in the next two to three years due to only the improvements already on the way.

Julia 延迟将继续改善。 首先，能够在会话之间缓存本机代码。 后来，通过在编译器中启用多线程，可能还有一个分层的 JIT，它使代码能够使用解释器快速启动，并在后台进程中逐步热加载优化代码。 我预计大多数大型包的延迟在未来两到三年内将下降 10 倍，这仅仅是因为已经在进行中的改进。

It's not currently possible to compile static binaries from inferrible Julia code, but Julia is fundamentally a compiled language, and there is no deep reason you shouldn't be able to compile Julia code to an executable binary instead of into RAM. Indeed, work to enable static compilation to produce large Go-like binaries which include the runtime and garbage collector has already been underway for some time.

目前不可能从可推断的 Julia 代码编译静态二进制文件，但 Julia 从根本上说是一种编译语言，没有任何深层原因你不应该将 Julia 代码编译成可执行二进制文件而不是编译到 RAM 中。 事实上，启用静态编译以生成包含运行时和垃圾收集器的大型类 Go 二进制文件的工作已经进行了一段时间。

## [It's weirdly fun](https://viralinstruction.com/posts/goodjulia/#its_weirdly_fun)

## [这很有趣](https://viralinstruction.com/posts/goodjulia/#its_weirdly_fun)

There's something nebulous about the language that makes it really fun to write code in. Maybe it's that it's easy to get started with, and highly expressive such that you quickly get working code between your fingers to play with, similar to Python.

这种语言的一些模糊之处使编写代码变得非常有趣。也许是因为它很容易上手，并且具有很强的表现力，因此您可以像 Python 一样快速地在指间获得工作代码。

Or maybe it's that, once you do have working code, you don't need to leave it at simply _working_, but you can optimise to your heart contend. I'm not the first to notice how Julia provides an addictive slippery slope to learn high-performance computing.

或者也许是这样，一旦你有了工作代码，你就不需要让它简单地 _工作_ ，但你可以根据自己的想法进行优化。 我不是第一个注意到 Julia 如何提供令人上瘾的滑坡来学习高性能计算的人。

Honestly, it's not clear to me just _why_ Julia is so fun to use, but I found it expressed well by one of the Julia co-creators Stefan Karpinski:

老实说，我不清楚 _为什么_ Julia 使用起来如此有趣，但我发现 Julia 的一位联合创始人 Stefan Karpinski 表达得很好：

> I did a lot of Perl programming back in the day, which probably serves more as a "what not to do" example than anything else, in terms of language design, but one thing that's kind of hard to put your finger on that I always loved about Perl is that it's just FUN to use. People have told me that Julia is fun in the same way that Perl is. I think this has something to do with the language letting you do subversive things that might be dangerous or questionable but which work and let you play with the computer in interesting ways.
> 
> 那天我做了很多 Perl 编程，就语言设计而言，这可能更像是一个“不该做什么”的例子，但有一件事你很难说清楚，我总是之所以喜欢 Perl，是因为它使用起来很有趣。 人们告诉我，Julia 和 Perl 一样有趣。 我认为这与语言有关，它允许你做颠覆性的事情，这些事情可能是危险的或有问题的，但这些事情是有效的，让你以有趣的方式玩电脑。

That sums up the experience of Julia quite well. It's eminently hackable, expressive, and enjoyable, but sometimes too clever for its own good.

这很好地总结了 Julia 的经验。 它非常易于破解、富有表现力和令人愉悦，但有时太聪明了。
