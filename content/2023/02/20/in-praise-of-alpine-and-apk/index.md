---
title: "对 Alpine 系统 和 apk包管理器的赞美"
date: 2023-02-20T17:28:00+08:00
updated: 2023-02-20T17:28:00+08:00
taxonomies:
  tags: []
extra:
  source: https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/
  hostname: whynothugo.nl
  author: 
  original_title: "In praise of Alpine and apk"
  original_lang: en
---

Since the change of year, I’ve been using Alpine Linux on my main computing device (a new desktop PC that I assembled in December). These are some notes on in, some niceties and caveats.  

自从一年的变化以来，我一直在我的主要计算设备（我在12月组装的新台式电脑）上使用Alpine Linux。这些是关于在的一些说明，一些好处和注意的问题。

I used ArchLinux for over a decade before, so keep in mind that my main point of reference/background is using Arch+pacman. However, this _is not_ an “Arch vs Alpine” article.  

我之前使用ArchLinux超过十年，所以请记住，我的主要参考点/背景是使用Arch+pacman。然而，这并不是一篇 "Arch vs Alpine "的文章。

[](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#my-woes-with-package-management)

## [My woes with package management](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#my-woes-with-package-management)

Over the years, I’ve experimented with many ways of “keeping a list of the list of packages installed”. The main goal is to be able to quickly recreate my installation, and also understand how it changed over time (e.g.: being able to roll back to a previous state with just the list of packages), but I also very much prefer a declarative approach to installed packages (rather than an imperative approach).  

多年来，我尝试了许多 "保存已安装软件包列表 "的方法。主要目标是能够快速重建我的安装，同时了解它是如何随时间变化的（例如：能够仅凭软件包列表回滚到以前的状态），但我也非常喜欢对已安装的软件包采用声明式方法（而不是命令式方法）。

The idea behind a declarative approach is to basically have a list of packages I want installed, and let the package manager install/remove anything so that installed package match exactly that list (plus any required dependencies, of course).  

声明式方法背后的想法是，基本上有一个我想要安装的软件包列表，让软件包管理器安装/删除任何东西，使安装的软件包与该列表完全一致（当然，加上任何必要的依赖关系）。

Over the last couple of years I tried a lot of approaches for this. One such approach was a couple of scripts that analysed system state and added/removed packages to make it converge to the desired state. This kind of worked, but meant a lot of maintenance and operational overhead and was orthogonal to how pacman was designed to be used. I also tried having a meta-package, which has my “list of wanted packages” as dependencies, and then remove anything no required my it. Again, I needed extra scripts and complexity on top of the package manager itself.  

在过去的几年里，我为此尝试了很多方法。其中一个方法是用几个脚本来分析系统状态，并添加/删除软件包以使其收敛到所需的状态。这有点奏效，但意味着大量的维护和操作费用，而且与pacman的设计使用方式正交。我也试过有一个元包，其中有我的 "想要的包的列表 "作为依赖，然后删除任何不需要的东西。同样，我需要额外的脚本和软件包管理器本身的复杂性。

I’ll mention that I also tried NixOS, but found it to be far too complex and too distant from the KISS philosophy for my taste.  

我想说的是，我也试过NixOS，但发现它太复杂了，而且与KISS哲学的距离太远，不符合我的口味。

[](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#apk-and-etcapkworld)

## [`apk` and `/etc/apk/world`](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#apk-and-etcapkworld)

`apk` (literally “alpine package keeper) is Alpine’s package manager. I was very pleased to learn about `apk`’s `/etc/apk/world`.  

`apk` （字面意思是 "阿尔卑斯山包的守护者"）是阿尔卑斯山的包管理器。我非常高兴地了解到 `apk` 的 `/etc/apk/world` 。

In essence, this file is a list of desired packages, and apk will install and uninstall packages so that the system state converges to the list. Exactly what I’d been looking for, but built right into the package manager. Actually it’s not just built into the package manager: it’s the very foundation of how it works. `apk add` actually adds a package to that list, and then installs any that are not present. `apk del` removes a package from that list, and only uninstalls it if it’s not a dependency for anything else.  

从本质上讲，这个文件是一个所需软件包的列表，apk将安装和卸载软件包，使系统状态与列表一致。这正是我一直在寻找的东西，但却直接内置于软件包管理器中。事实上，这不仅仅是内置于软件包管理器中：这是它工作方式的基础。 `apk add` 实际上是将一个软件包添加到该列表中，然后安装任何不存在的软件包。 `apk del` 从该列表中删除一个包，并且只在它不是其他东西的依赖项时才卸载它。

Understanding this also explains why `apk` uses `add` and `del` rather than the more traditional `install` and `uninstall`. I extremely pleased by this design and how well it works. Additionally, one can edit the `world` file manually and run `apk fix`, which will install/uninstall any packages required to converge to the declared list.  

理解这一点也解释了为什么 `apk` 使用 `add` 和 `del` ，而不是更传统的 `install` 和 `uninstall` 。 我对这种设计和它的工作效果非常满意。此外，人们可以手动编辑 `world` 文件并运行 `apk fix` ，这将安装/卸载任何需要收敛到声明列表的软件包。

I also admit it’s a breath of fresh air to have “normal” verbs as subcommands rather than `pacman -Syu`, even if I already know of most `pacman`’s flags.  

我也承认，把 "普通 "动词作为子命令而不是 `pacman -Syu` ，是一种新鲜的空气，即使我已经知道大多数 `pacman` 的标志。

[](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#the-edge-branch)

## [The `edge` branch](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#the-edge-branch)

Alpine has releases every six months (each called a “branch”, e.g.: the “3.17 branch”), but also has a special branch called `edge`. Alpine edge is basically a rolling release with the latest versions of packages. I don’t really like the idea of point releases for a desktop system, and very much prefer a rolling release distro, and Alpine edge is exactly that.  

Alpine每6个月发布一次版本（每个版本称为一个 "分支"，例如："3.17分支"），但也有一个特殊的分支叫做 `edge` 。Alpine edge基本上是一个包含最新版本软件包的滚动发布。我不太喜欢桌面系统的点式发布的想法，我非常喜欢滚动发布的发行版，而Alpine edge正是如此。

Software is updated and rolled out continuously on `edge`, and I really care about this, especially given that I’ll often submit patches (or just bug reports) upstream to all kinds of projects, and want to see these changes on my system today, not in a few months.  

软件在 `edge` 上不断地更新和推出，我真的很关心这一点，特别是考虑到我经常会向各种项目的上游提交补丁（或只是错误报告），并希望今天就能在我的系统上看到这些变化，而不是几个月后。

[](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#the-aports-tree)

## [The `aports` tree](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#the-aports-tree)

All of Alpine’s package definitions (`APKBUILD`s) are kept in a single git repository called `aports`. This approach that is apparently becoming more and more common these days across distributions, and I can understand why: it makes maintenance a lot easier, and makes fetching the entire ports tree very simple (just a single `git clone`).  

所有Alpine的软件包定义（ `APKBUILD` ）都保存在一个叫做 `aports` 的git仓库里。这种方法最近在各发行版中显然越来越普遍，我可以理解：它使维护工作变得更容易，并使获取整个 ports 树变得非常简单（只需一个 `git clone` ）。

`APKBUILD` files look extremely similar to `PKGBUILD` files, so learning how they work was trivial. They’re actually so similar, that it bothers me to know that they’ll likely never converge into one single format. The main difference is that `APKBUILD` files are `sh` scripts, and `PKGBUILD`s are `bash` scripts (and rely on several bash-specific feature), but there are other differences too.  

`APKBUILD` 文件看起来与 `PKGBUILD` 文件极其相似，所以学习它们的工作原理是微不足道的。它们实际上是如此的相似，以至于我知道它们很可能永远不会融合成一种单一的格式，这让我很困扰。主要的区别是， `APKBUILD` 文件是 `sh` 脚本，而 `PKGBUILD` 文件是 `bash` 脚本（并且依赖于几个bash特有的功能），但也有其他的区别。

The tooling for building packages is substantially different from Arch’s. I dare say it’s a bit more straightforward and simpler. I’m honestly feeling comfortable with `abuild` very quickly, though it does bother me a lot that it doesn’t have a `man` page.  

构建软件包的工具与Arch的有很大不同。我敢说它更直接，更简单。老实说，我很快就对 `abuild` 感到舒服了，尽管它没有 `man` 页面确实让我很困扰。

Given that the ports tree is a single git repository hosted on Alpine’s GitLab instance, anybody can submit patches very easily (via [Merge Requests](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/)), which makes contributing back very easy for anyone interested.  

鉴于 ports 树是一个托管在 Alpine 的 GitLab 实例上的单一 git 仓库，任何人都可以非常容易地提交补丁 (通过合并请求)，这使得有兴趣的人可以非常容易地做出贡献。

[](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#the-testing-repository)

## [The `testing` repository](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#the-testing-repository)

Aside from the usual packages, Alpine also has a `testing` package repository. Packages in this repository are contributed and maintained by any member of the community. I’ve already submitted a few and am actually pretty happy with how easy it is to contribute. Submissions are reviews by a human to check the quality of the package and if they’re good quality get merged in.  

除了常规的软件包，Alpine还有一个 `testing` 软件包库。这个资源库中的软件包由社区中的任何成员贡献和维护。我已经提交了几个，并且对它的贡献是如此简单感到非常满意。提交的软件包会被人工审查，以检查软件包的质量，如果质量好，就会被合并进来。

Binary packages become available shortly after change to `APKBUILD`s being merged.  

在修改为 `APKBUILD` 后不久，二进制包就可以使用了。

This somewhat reminds me of the [AUR](https://wiki.archlinux.org/title/Arch_User_Repository), though it’s not quite the same. Alpine’s `testing` repository is more curated (e.g.: there’s a review process), which has both its upsides and downsides. It implies that package quality have quite a bit more oversight, but it also implies you won’t find packages for patched versions of software, or `*-git` packages (ones that build from the latest upstream source). It’s easy to patch an `APKBUILD` locally and build a package oneself, though a bit more work than finding a `PKGBUILD` where somebody has already done it for you.  

这有点让我想起了AUR ，尽管它不太一样。Alpine的 `testing` 资源库更有计划性（例如：有一个审查过程），这有它的好处和坏处。它意味着软件包的质量有更多的监督，但它也意味着你不会找到软件的补丁版本的软件包，或 `*-git` 软件包（从最新的上游源代码构建的软件包）。在本地打一个 `APKBUILD` 的补丁并自己构建一个软件包是很容易的，虽然比找到一个有人已经为你做了的 `PKGBUILD` 的软件包要费点劲。

[](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#subpackages)

## [Subpackages](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#subpackages)

Packages can contain subpackages (something that’s definitely not exclusive to Alpine). However, there’s a few extra features built on top of them which I’ve found very nice.  

包可以包含子包（这绝对不是Alpine独有的东西）。然而，在它们之上还有一些额外的功能，我发现它们非常好。

First of all, if a package contains man pages and a `*-doc` subpackage, the man pages are automatically moved into that subpackage. If a package contains `*-zsh-completion` or `*-bash-completion` subpackage, the completion files are moved into those. This keeps package sizes minimal, while making these extras available to anyone who wants them.  

首先，如果一个软件包包含man页和 `*-doc` 子包，man页会自动移到该子包中。如果一个软件包包含 `*-zsh-completion` 或 `*-bash-completion` 子包，完成文件会被移到这些子包中。这样可以保持软件包的最小尺寸，同时使这些额外的东西对任何想要它们的人来说都是可用的。

The second feature is what makes it all round up though. If I install the `docs` metapackage, then the `*-doc` subpackage is installed for any package that I have installed. In other words, if I install `docs` and `darkman`, then `darkman-doc` (e.g.: it’s man page) is automatically installed. And so is every other man page relevant to my setup.  

第二个特点是使它成为一个整体。如果我安装了 `docs` 元包，那么对于我所安装的任何包， `*-doc` 子包都会被安装。换句话说，如果我安装了 `docs` 和 `darkman` ，那么 `darkman-doc` （例如：它的手册页）就会自动安装。其他所有与我的设置有关的man page也是如此。

Since I have `zsh` installed, all the `*-zsh-completion` subpackages are installed too – so anything that I install automatically has zsh completion.  

由于我安装了 `zsh` ，所有的 `*-zsh-completion` 子包也都安装了--所以我安装的任何东西都自动有zsh完成。

This strikes a great balance, where it’s trivial to make a tiny Alpine installation with no extras (e.g.: you don’t want man pages on docker images or embedded systems), but it’s very easy to get these extras on a desktop or laptop installation.  

这达到了一个很好的平衡，在这里，做一个没有额外内容的小阿尔卑斯山安装是很容易的（例如：你不希望在docker镜像或嵌入式系统上有man page），但在桌面或笔记本电脑上安装这些额外内容是很容易的。

And it’s all very nicely designed and works very seamlessly (this features uses an `install_if=` field).  

而且这一切都设计得非常好，工作起来非常无缝（这个功能使用了一个 `install_if=` 字段）。

[](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#glibc-vs-musl)

## [glibc vs musl](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#glibc-vs-musl)

Something that makes Alpine really different is that it uses [`musl`](https://musl.libc.org/) instead of `glibc`. `musl` focuses on being lightweight, fast, simple and standards-compliant. This results in a few practical implications:  

使Alpine真正与众不同的是，它使用 `musl` 而不是 `glibc` 。 `musl` 专注于轻量级、快速、简单和符合标准。这导致了一些实际的影响。

The first is that using a different libc helps finds bugs in programs that _assume_ that every system uses `glibc`. This helps write portable software and spot portability issues faster.  

首先，使用不同的 libc 有助于发现那些假定每个系统都使用 `glibc` 的程序中的错误。这有助于编写可移植的软件并更快地发现可移植性问题。

The second notable difference, is that binaries that link to `glibc` won’t run. This is mostly a pain for proprietary software, and, in particular, Steam. Steam simply won’t run natively on Alpine, although there’s two workarounds: (1) running it in a chroot/container with another Linux distro, or (2) running it via Flatpak. I opted for the second choices, and it works fine without any further hassles.  

第二个明显的区别是，链接到 `glibc` 的二进制文件将不会运行。这对专有软件来说是个麻烦，特别是Steam。Steam根本不能在Alpine上运行，尽管有两个解决方法：（1）在另一个Linux发行版的chroot/container中运行它，或者（2）通过Flatpak运行它。我选择了第二种方法，而且运行良好，没有任何其他麻烦。

The third and final difference, is that musl has not multilib support. This means no support for running 32-bit binaries on 64-bit systems. Again, this realistically only affects proprietary software, which you can’t rebuild for another architecture. In particular, this can be a nuisance for games ran via wine, where installers (and launchers) might be 32-bit, but the game itself 64-bit. The workaround are the same as above, and I use [Bottles](https://usebottles.com/) via Flatpak as a workaround which has also had no issues. Flatpak is, indeed, a great solution to running proprietary software on Linux (just games in my case).  

第三个也是最后一个区别，是musl没有multilib支持。这意味着不支持在64位系统上运行32位二进制文件。同样，这实际上只影响到专有软件，你不能为另一个架构重建这些软件。特别是，这对通过wine运行的游戏来说是个麻烦，安装程序（和启动程序）可能是32位的，但游戏本身是64位的。解决方法与上述相同，我通过Flatpak使用Bottles作为解决方法，也没有问题。Flatpak的确是在Linux上运行专利软件的一个很好的解决方案（在我的例子中只是游戏）。

Note that the wine situation is likely to change in future, since wine is looking to avoid using native 32-bit dependencies for 32-bit binaries and seeks to solve the interoperability issue internally.  

请注意，wine的情况在未来可能会发生变化，因为wine正在寻求避免对32位二进制文件使用原生的32位依赖，并寻求在内部解决互操作性问题。

[](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#alpine-is-bare-bones)

## [Alpine is bare bones](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#alpine-is-bare-bones)

Alpine installs just a base system out of the box and feels a bit like installing a BSD more than a typical Linux distro. It’s up to the user to install anything that’s needed, and this is one of the reasons it’s so popular as a base for docker images and servers: it’s super minimal and small by default.  

Alpine开箱后只安装了一个基础系统，感觉有点像安装BSD，而不是典型的Linux发行版。这取决于用户安装任何需要的东西，这也是它作为docker镜像和服务器的基础如此受欢迎的原因之一：默认情况下，它是超级最小和小的。

The default shell, `login`, `grep` and other basic Unix utilities are provided by [BusyBox](https://www.busybox.net/about.html). It’s possible to install `pam`, `udev`, `dbus` and `polkit` , but it needs to be done explicitly (most of it is pretty straightforward). I plan on a separate article soon with all my notes on setting up a new desktop system.  

默认的shell, `login` , `grep` 和其他基本的Unix工具是由BusyBox提供的。可以安装 `pam` , `udev` , `dbus` 和 `polkit` ，但需要明确地进行安装（大部分是很简单的）。我计划不久后单独写一篇文章，介绍我在设置新桌面系统方面的所有注意事项。

[](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#regular-applications-work-as-usual)

## [Regular applications work as usual](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#regular-applications-work-as-usual)

Normally desktop applications (e.g.: `swaywm`, `firefox`, `foot`, `neovim`, etc) all work the same with not issues. There’s nothing special to mention here; it’s still just another Linux distro after all.  

通常情况下，桌面应用程序（例如： `swaywm` ， `firefox` ， `foot` ， `neovim` ，等等）都是一样的，没有问题。这里没有什么特别值得一提的，毕竟它仍然只是另一个Linux发行版。

[](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#supported-architectures)

## [Supported architectures](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#supported-architectures)

Alpine supports quite a few architectures, including ARM and RISCV. While ArchLinuxARM (a.k.a.: ALARM) exists, I’ve never quite been convinced by the development model. ArchLinux and ArchLinuxARM don’t work as a single project, but feel more like a project and its fork. Patches on one aren’t unstreamed to the other nor made in an upstream-friendly and ALARM didn’t feel to open to contributions. I found obvious packaging issues, but never managed to collaborate to get them fixed (and a lot of the build infrastructure is kind of a mystery). I ran one system with Arch and another with ALARM for many months, and I felt like I was running two entirely different distros (technically, they are different distros).  

Alpine支持相当多的体系结构，包括ARM和RISCV。虽然ArchLinuxARM（又名：ALARM）是存在的，但我一直对其开发模式不太信服。ArchLinux和ArchLinuxARM并不是作为一个单独的项目工作，而是感觉更像是一个项目和它的分叉。一个项目的补丁并没有流向另一个项目，也没有以对上游友好的方式制作，而且ALARM也没有感觉到对贡献的开放。我发现了明显的包装问题，但从来没有设法通过合作来解决这些问题（而且很多构建基础结构都是一种神秘的东西）。我在一个系统中使用Arch，在另一个系统中使用ALARM，运行了好几个月，我感觉我在运行两个完全不同的发行版（从技术上讲，它们是不同的发行版）。

Alpine supports multiple architectures upstream, so even packages that I submit to `testing` are immediately available as binary packages on ARM.  

Alpine在上游支持多种架构，所以即使是我提交给 `testing` 的软件包，在ARM上也能立即获得二进制软件包。

[](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#postmarketos)

## [postmarketOS](https://whynothugo.nl/journal/2023/02/18/in-praise-of-alpine-and-apk/#postmarketos)

Finally, I’ve been experimenting with postmarketOS recently quite a bit. It’s an Alpine-based Linux distribution for smartphones (see their [list of devices](https://wiki.postmarketos.org/wiki/Devices)).  

最后，我最近对postmarketOS进行了不少实验。这是一个基于阿尔卑斯山的Linux发行版，用于智能手机（见他们的设备列表）。

Using Alpine and pmOS has better synergy. Scripts and configurations that I write for one work on the other, and the package manager is the same for both.  

使用Alpine和pmOS有更好的协同作用。我为一个系统编写的脚本和配置在另一个系统上也能使用，而且两个系统的软件包管理器都是一样的。

More details on this are a bit out-of-scope, but I’ll have a separate article on pmOS and my history with #LinuxMobile [soon](https://developer.valvesoftware.com/wiki/Valve_Time)™.  

这方面的更多细节有点超出范围，但我很快会有一篇关于pmOS和我与#LinuxMobile的历史的单独文章™。

Have comments or want to discuss this topic?  

有意见或想讨论这个话题？  

Send an email to [~whynothugo/public-inbox@lists.sr.ht](mailto:~whynothugo/public-inbox@lists.sr.ht&subject=Re:%20In%20praise%20of%20Alpine%20and%20apk) ([mailing list etiquette](https://man.sr.ht/lists.sr.ht/etiquette.md))  

发送电子邮件至 ~whynothugo/public-inbox@lists.sr.ht ( 邮件列表礼仪 )
