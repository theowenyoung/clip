---
title: "用 Nix 管理整个电脑环境"
date: 2023-08-28T01:05:26+08:00
updated: 2023-08-28T01:05:26+08:00
taxonomies:
  tags: []
extra:
  source: https://alexpearce.me/2021/07/managing-dotfiles-with-nix/
  hostname: alexpearce.me
  author: 
  original_title: "Managing dotfiles with Nix"
  original_lang: en
---

For several years I’ve been [managing my dotfiles with GNU Stow](https://alexpearce.me/2016/02/managing-dotfiles-with-stow/), but there are a few things about it that bug me:  

几年来，我一直用 GNU Stow 管理我的点文件，但它有一些地方让我很不爽：

-   You have to install the relevant programs separately.  
    
    您必须单独安装相关程序。
-   You end up with many configurations files in many different languages.  
    
    你最终会得到许多不同语言的配置文件。
-   It’s tricky to manage configurations which you want to differ slightly for different machines and environments, e.g. macOS and Linux.  
    
    要管理不同机器和环境（如 macOS 和 Linux）中略有不同的配置，非常棘手。

For the first point I’ve long used [Homebrew](https://brew.sh/) on macOS to install system-wide programs. It is user-friendly but is pretty slow and it’s hard to remember what packages I installed for what purpose.  

关于第一点，我一直使用 MacOS 上的 Homebrew 来安装全系统程序。它对用户很友好，但速度很慢，而且很难记住我为什么目的安装了哪些软件包。

To address these issues, I recently moved my dotfiles configuration to one based on [Nix](https://nixos.org/) and [Home Manager](https://github.com/nix-community/home-manager) and I’m really enjoying using them.  

为了解决这些问题，我最近将我的 dotfiles 配置转移到了基于 Nix 和 Home Manager 的配置上，我非常喜欢使用它们。

In this post I’d like to walk you through how to set up Nix and Home Manager for managing programs and configuration on your own machine.  

在这篇文章中，我将教你如何设置 Nix 和 Home Manager，以便在自己的机器上管理程序和配置。

## Nix? Home Manager? 尼克斯？家庭经理？

Let’s first go over what the tools we’ll be using actually are.  

让我们先来了解一下我们要使用的工具到底是什么。

[Nix](https://nixos.org/) is a package management and build system. Package and environment definitions are written in the [Nix Expression Language](https://nixos.wiki/wiki/Nix_Expression_Language).  

Nix 是一个软件包管理和构建系统。软件包和环境定义是用 Nix 表达式语言编写的。

Nix aims to make building packages fully reproducible by explicitly defining every input. Each package is placed in a file-system path which contains a cryptographic checksum constructed from all inputs. Because a package’s source is itself an input Nix can install multiple versions of any package side by side. Environments can then be defined by choosing which versions of certain packages you want to use. This paves the way for development environments without system-wide conflicts!  

Nix 的目标是通过明确定义每个输入，使软件包的构建完全可重现。每个软件包都放置在一个文件系统路径中，该路径包含一个由所有输入构建的加密校验和。由于软件包的源代码本身就是一个输入，因此 Nix 可以同时安装多个版本的软件包。通过选择要使用的特定软件包版本，就可以定义环境。这为开发环境铺平了道路，避免了系统范围内的冲突！

[Home Manager](https://github.com/nix-community/home-manager) combines the package management prowess of Nix with a system for generating program configuration from a Nix file.  

Home Manager 结合了 Nix 的软件包管理功能和从 Nix 文件生成程序配置的系统。

This Home Manager configuration installs a few packages and sets some custom configuration:  

家庭管理器配置安装了一些软件包，并设置了一些自定义配置：

```
{ config, pkgs, ... }:

{
  home = {
    username = "apearce";
    homeDirectory = "/Users/apearce";
    # Specify packages not explicitly configured below
    packages = with pkgs; [
      jq
      neovim
      ripgrep
    ];
    sessionVariables = {
      EDITOR = "neovim";
    };
    stateVersion = "21.11";
  };

  programs = {
    fish = {
      enable = true;
      shellAliases = {
        rm = "rm -i";
        cp = "cp -i";
        mv = "mv -i";
        mkdir = "mkdir -p";
      };
      shellAbbrs = {
        g = "git";
        m = "make";
        n = "nvim";
        o = "open";
        p = "python3";
      };
    };

    home-manager.enable = true;
  };
}
```

We’ll go over the details later, but you might be able to pick out a few interesting features already:  

我们稍后会详细介绍，但你可能已经能挑出一些有趣的功能：

1.  The `packages` key defines a list of programs we want Home Manager to install.  
    
    `packages` 键定义了我们希望 Home Manager 安装的程序列表。
2.  The `programs` key defines a list of programs we want Home Manager to install _and configure_ in some custom way.  
    
    `programs` 键定义了我们希望 Home Manager 以某种自定义方式安装和配置的程序列表。

The second point is how Home Manager manages our ‘dotfiles’ for us: there are no longer any dotfiles!  

第二点是 Home Manager 如何为我们管理 "点文件"：不再有任何点文件！

Home Manager reads the configuration and figures out what programs need to be installed and what dotfiles need to be generated. This is a _declarative_ approach and contracts with the imperative approach of using your OS’s package manager and GNU Stow.  

Home Manager 会读取配置，并找出需要安装的程序和需要生成的点文件。这是一种声明式方法，与使用操作系统软件包管理器和 GNU Stow 的命令式方法不同。

## Installing Nix 安装 Nix

The [official installation instructions](https://nixos.org/download.html) are the best place to start. Linux and macOS (on x86 and ARM) are both well supported.  

最好从官方安装说明开始。Linux 和 macOS（x86 和 ARM）都支持得很好。

```
$ curl -L https://nixos.org/nix/install -o install.sh
$ sh install.sh
…
Installation finished!  To ensure that the necessary environment
variables are set, either log in again, or type

  . /Users/apearce/.nix-profile/etc/profile.d/nix.sh

in your shell.
```

The installer will quickly setup your system with the `/nix` folder, where packages will be installed, and the binaries we’ll use to administer it.  

安装程序会快速设置系统，在 `/nix` 文件夹中安装软件包，以及我们用来管理它的二进制文件。

If your default shell is **bash** or **zsh** then you should be able to start a new shell and verify that you now have Nix installed:  

如果你的默认 shell 是 bash 或 zsh，那么你应该可以启动一个新 shell，并验证你现在已经安装了 Nix：

```
$ nix-shell -p nix-info --run "nix-info -m"
…
 - system: `"aarch64-darwin"`
 - host os: `Darwin 21.5.0, macOS 12.4`
 - multi-user?: `yes`
 - sandbox: `no`
 - version: `nix-env (Nix) 2.9.2`
 - channels(root): `"nixpkgs"`
 - nixpkgs: `/nix/var/nix/profiles/per-user/root/channels/nixpkgs`
```

If your default shell is [**fish**](https://fishshell.com/) (heck yeah! 🐟) then this won’t work as the Nix installer [does not inject hooks for fish](https://github.com/NixOS/nix/issues/1512). You can run a bash or zsh sub-shell instead though:  

如果您的默认 shell 是 fish（太棒了！🐟），那么这将不起作用，因为 Nix 安装程序不会为 fish 注入钩子。不过，你可以运行一个 bash 或 zsh 子 shell 来代替：

```
$ zsh -c 'nix-shell -p nix-info --run "nix-info -m"'
```

Luckily there is a nice [fish plugin](https://github.com/lilyball/nix-env.fish) that fixes this for us. We’ll include this as part of our fish configuration in Home Manager later. Until then you can drop in to a bash or zsh sub-shell for the upcoming examples.  

幸运的是，有一个不错的鱼插件可以帮我们解决这个问题。我们稍后将把它作为家庭管理器中 fish 配置的一部分。在此之前，你可以使用 bash 或 zsh 子 shell 来查看接下来的示例。

### Trying out Nix 试用尼克斯

We can already try some of the cool features of Nix before we install Home Manager.  

在安装家庭管理器之前，我们已经可以试用 Nix 的一些很酷的功能。

One of the neatest things is that we can ask Nix to start a sub-shell with some specific programs included. Once we leave that sub-shell the programs will no longer be available.  

最巧妙的一点是，我们可以要求 Nix 启动一个包含某些特定程序的子外壳。一旦我们离开该子外壳，这些程序将不再可用。

```
# See that `cowsay` is not available on our machine
$ which cowsay

$ nix-shell -p cowsay
these paths will be fetched (7.62 MiB download, 48.87 MiB unpacked):
  /nix/store/frs6r654963v8klf875n8755a24x4z66-cowsay-3.04
  /nix/store/v1aja3gzmzxr112ndr2dbm9km82bv9rb-perl-5.34.0
copying path '/nix/store/v1aja3gzmzxr112ndr2dbm9km82bv9rb-perl-5.34.0' from 'https://cache.nixos.org'...
copying path '/nix/store/frs6r654963v8klf875n8755a24x4z66-cowsay-3.04' from 'https://cache.nixos.org'...

[nix-shell:~]$ which cowsay
/nix/store/frs6r654963v8klf875n8755a24x4z66-cowsay-3.04/bin/cowsay

[nix-shell:~]$ cowsay 'Moo?'
 ______
< Moo? >
 ------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

[nix-shell:~]$ exit

# Back in the original shell, `cowsay` is still not available
$ which cowsay
```

Nix: 尼克斯

1.  Downloads and installs the `cowsay` Nix package.  
    
    下载并安装 `cowsay` Nix 软件包。
2.  Creates an environment in which the `cowsay` Nix package is available (i.e. in our executable `PATH`).  
    
    创建一个 `cowsay` Nix 软件包可用的环境（即在我们的可执行文件 `PATH` 中）。
3.  Starts a sub-shell which knows about the custom environment.  
    
    启动了解自定义环境的子外壳。

(This technique can be extended to create [ad-hoc development environments](https://nix.dev/tutorials/ad-hoc-developer-environments) if you want to try to the latest hotness without having to worry about anything conflicting with your usual tools. I hope to expand on this further in a future post.)  

(如果你想尝试最新的热门工具，而不必担心与常用工具发生冲突，那么这种技术还可以扩展到创建临时开发环境。我希望在今后的文章中进一步阐述）。

Home Manager leverages this infrastructure to create a user-specific environment, pulling in the packages we ask for.  

家庭管理器利用这一基础架构来创建用户特定的环境，调入我们所需的软件包。

## Installing Home Manager 安装家庭管理器

The [Home Manager installation](https://github.com/nix-community/home-manager#installation) starts by including a specific Nix ‘channel’ (a repository of Nix package definitions):  

Home Manager 安装开始时会包含一个特定的 Nix "通道"（Nix 软件包定义库）：

```
$ nix-channel --add https://github.com/nix-community/home-manager/archive/master.tar.gz home-manager
$ nix-channel --update
```

Then run the installer using the `install` definition from the new channel:  

然后使用新通道中的 `install` 定义运行安装程序：

```
$ nix-shell '<home-manager>' -A install
```

We can check that Home Manager has been installed:  

我们可以检查是否已安装家庭管理器：

```
$ nix-env --query --installed
home-manager-path
```

And we can then run the `home-manager` binary and see the default configuration that was installed:  

然后，我们就可以运行 `home-manager` 二进制文件，查看已安装的默认配置：

```
$ home-manager --version
21.11
$ cat ~/.config/nixpkgs/home.nix
```

It’ll look something like this:  

看起来是这样的

```
{ config, pkgs, ... }:

{
  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;

  # Home Manager needs a bit of information about you and the
  # paths it should manage.
  home.username = "apearce";
  home.homeDirectory = "/Users/apearce";

  # This value determines the Home Manager release that your
  # configuration is compatible with. This helps avoid breakage
  # when a new Home Manager release introduces backwards
  # incompatible changes.
  #
  # You can update Home Manager without changing this value. See
  # the Home Manager release notes for a list of state version
  # changes in each release.
  home.stateVersion = "21.11";
}
```

All that’s left for us to do is edit this to suit our needs.  

我们要做的就是根据自己的需要进行编辑。

## Configuring Home Manager  

配置家庭管理器

There are two jobs we’ll use Home Manager to take care of:  

我们将使用 Home Manager 来处理两项工作：

1.  Installing programs. 安装程序
2.  Creating and installing program configuration files (dotfiles).  
    
    创建和安装程序配置文件（dotfiles）。

Home Manager will automatically install programs which we define configuration for, so we’ll start with the programs we don’t need to configure explicitly.  

家庭管理器会自动安装我们定义配置的程序，因此我们将从无需明确配置的程序开始。

### Programs 计划

I don’t have any configuration files for utilities like [ripgrep](https://github.com/BurntSushi/ripgrep). For programs like this we can just tell Home Manager to install the corresponding Nix package, which looks like this in your `~/.config/nixpkgs/home.nix`:  

我没有 ripgrep 等实用程序的配置文件。对于这样的程序，我们只需告诉 Home Manager 安装相应的 Nix 软件包，在 `~/.config/nixpkgs/home.nix` 中是这样的：

```
{ config, pkgs, ... }:

{
  home.username = "apearce";
  # <...>

  packages = with pkgs; [
    ripgrep
  ];
}
```

We then ask Home Manager to build and deploy the environment defined by our `home.nix` with a single command:  

然后，我们只需使用一条命令，就能让 Home Manager 构建和部署由 `home.nix` 定义的环境：

```
$ home-manager switch
```

Once that’s finished we can verify that the `rg` binary is now available under Home Manager’s installation path:  

完成后，我们就可以验证 `rg` 二进制文件是否已在 Home Manager 的安装路径下可用：

```
$ which rg
/Users/apearce/.nix-profile/bin/rg
```

We can install any Nix package this way; [search through them](https://search.nixos.org/packages) to see what’s available.  

我们可以用这种方法安装任何 Nix 软件包；搜索它们，看看有什么可用的。

Uninstalling a package just means removing it from the list and running `home-manager switch` as usual.  

卸载软件包只意味着将其从列表中删除，然后像往常一样运行 `home-manager switch` 。

### Configuration 配置

Home Manager is able to convert configuration in `home.nix` into program-specific configuration files.  

Home Manager 能够将 `home.nix` 中的配置转换为特定程序的配置文件。

This `home.nix` enables the [bat](https://github.com/sharkdp/bat) Home Manager _module_ and sets some configuration:  

此 `home.nix` 可启用 bat Home Manager 模块并设置一些配置：

```
{ config, pkgs, ... }:

{
  home.username = "apearce";
  # ...

  programs.bat = {
    enable = true;
    config = {
      theme = "GitHub";
      italic-text = "always";
    };
  };
}
```

After running `home-manager switch` we see we have the `bat` binary _and_ a bat configuration file:  

运行 `home-manager switch` 后，我们可以看到 `bat` 二进制文件和一个 bat 配置文件：

```
$ which bat
/Users/apearce/.nix-profile/bin/bat
$ ls -l ~/.config/bat
total 0
lrwxr-xr-x  1 apearce  staff  81 26 Jul 14:22 config -> /nix/store/j6vkynxy202rlgznwlcghhyydif277yl-home-manager-files/.config/bat/config
$ cat ~/.config/bat/config
--italic-text="always"
--theme="GitHub"
```

Notice how the `~/.config/bat/config` file is just a [symbolic link](https://en.wikipedia.org/wiki/Symbolic_link) to a file managed by Home Manager. Home Manager will create, update, and remove these files as necessary whenever we run `home-manager switch`. We no longer need to manager dotfiles by hand!  

请注意 `~/.config/bat/config` 文件只是 Home Manager 管理的文件的符号链接。每当我们运行 `home-manager switch` 时，Home Manager 都会根据需要创建、更新和删除这些文件。我们不再需要手动管理 dotfiles！

The full list of Home Manager modules is best discovered by [browsing the source](https://github.com/nix-community/home-manager/tree/master/modules/programs), so it’s useful to be able to skim these files to learn how to configure the programs you care about.  

主页管理器模块的完整列表最好通过浏览源代码来了解，因此能够略读这些文件以了解如何配置您所关心的程序是非常有用的。

The [`bat.nix`](https://github.com/nix-community/home-manager/blob/f6f6990fc811454cb3082ba3662b711488fd0554/modules/programs/bat.nix) file, for example, has an `options.programs.bat` member which contains the possible options we can set:  

例如， `bat.nix` 文件中有一个 `options.programs.bat` 成员，其中包含我们可以设置的选项：

```
options.programs.bat = {
  enable = mkEnableOption "bat, a cat clone with wings";

  config = mkOption {
    type = types.attrsOf types.str;
    default = { };
    example = {
      theme = "TwoDark";
      pager = "less -FR";
    };
    description = ''
      Bat configuration.
    '';
  };

  # ...
};
```

We set `programs.bat.enable = true` to tell Home Manager to generate the default configuration. (Home Manager will, rather sensibly, also install bat in this case; we don’t need to include it in the `packages` list.)  

我们将 `programs.bat.enable = true` 设置为告诉 Home Manager 生成默认配置。(在这种情况下，Home Manager 也会相当明智地安装 bat；我们不需要将其包含在 `packages` 列表中）。

For the `programs.bat.config` member, the `typesAttrsOf types.str` value for the `config.type` member tells us that we can set `programs.bat.config` to an [attribute set](https://nixos.org/guides/nix-pills/basics-of-language.html#idm140737320585856) of strings, which is what we did above.  

对于 `programs.bat.config` 成员， `config.type` 成员的 `typesAttrsOf types.str` 值告诉我们，我们可以将 `programs.bat.config` 设置为字符串属性集，这就是我们上面所做的。

The [`config` member](https://github.com/nix-community/home-manager/blob/f6f6990fc811454cb3082ba3662b711488fd0554/modules/programs/bat.nix#L47-L57) in the `bat.nix` file defines how Home Manager will go from our Nix configuration to dotfiles. You don’t normally need to know the details of how this is done, but looking at the `config` member can be a good approach to understanding how to reproduce the dotfiles you already have with Home Manager: reverse engineering!  

`bat.nix` 文件中的 `config` 成员定义了 Home Manager 如何从我们的 Nix 配置转到 dotfiles。通常情况下，你不需要知道如何完成的细节，但查看 `config` 成员可以很好地了解如何用 Home Manager 重现已有的 dotfiles：逆向工程！

Let’s go through a few more configurations to demonstrate more complex structures.  

让我们再通过一些配置来演示更复杂的结构。

#### Git

Git is primarily driven through the `~/.gitconfig` and `~/.gitignore` files, also stored as `~/.config/git/{config,ignore}`.  

Git 主要通过 `~/.gitconfig` 和 `~/.gitignore` 文件（也存储为 `~/.config/git/{config,ignore}` ）驱动。

A fairly standard Git configuration with Home Manager might look like this:  

使用 Home Manager 的标准 Git 配置可能是这样的

```
programs.git = {
  enable = true;
  userName = "Your Name";
  userEmail = "email@example.com";
  aliases = {
    prettylog = "...";
  };
  extraConfig = {
    core = {
      editor = "nvim";
    };
    color = {
      ui = true;
    };
    push = {
      default = "simple";
    };
    pull = {
      ff = "only";
    };
    init = {
      defaultBranch = "main";
    };
  };
  ignores = [
    ".DS_Store"
    "*.pyc"
  ];
};
```

Some members get mapped to specific configuration values in Git’s dotfiles, e.g. setting `userName` results in:  

有些成员会被映射到 Git 的 dotfile 中的特定配置值，例如设置 `userName` 的结果：

```
[user]
name = "Alex Pearce"
```

For configuration values without specific members the `extraConfig` attribute set can be used.  

对于没有特定成员的配置值，可使用 `extraConfig` 属性集。

The list of strings in the `ignores` member get placed in the `ignores` configuration file.  

`ignores` 成员中的字符串列表会放到 `ignores` 配置文件中。

One last trick is that we can easily integrate the [delta diff utility](https://github.com/dandavison/delta) utility into our Git configuration:  

最后一个技巧是，我们可以轻松地将 delta diff 实用工具集成到 Git 配置中：

```
programs.git = {
  # ...
  delta = {
    enable = true;
    options = {
      navigate = true;
      line-numbers = true;
      syntax-theme = "GitHub";
    };
  };
};
```

With this, Home Manager will take care of ensuring that delta is installed and that Git’s `config` file contains entries for enabling delta.  

这样，Home Manager 就能确保 delta 已安装，并且 Git 的 `config` 文件中包含启用 delta 的条目。

The fact that _nested_ configuration, with the `delta` member being inside the `git` member, is able to affect not only the parent configuration (`git`) is a neat feature of Home Manager modules. This technique can be used by other modules to install handy aliases in your Home-Manager-managed shell, for example.  

嵌套配置（ `delta` 成员位于 `git` 成员内部）不仅能够影响父配置（ `git` ），这也是 Home Manager 模块的一大特色。例如，其他模块可以利用这一技术在 Home-Manager 管理的 shell 中安装方便的别名。

#### Fish shell 鱼壳

I mentioned earlier that we can use the [fish shell](https://fishshell.com/) with Nix if we also use the [`nix-env.fish`](https://github.com/lilyball/nix-env.fish) plugin.  

我在前面提到过，如果我们同时使用 `nix-env.fish` 插件，就可以在 Nix 中使用鱼壳。

As you might expect by now, we can tell Home Manager to install this plugin for us, along with giving Home Manager the rest of our fish configuration.  

正如你现在所期望的，我们可以告诉 Home Manager 为我们安装这个插件，同时向 Home Manager 提供我们鱼类的其他配置。

```
fish = {
  enable = true;
  plugins = [
    # Need this when using Fish as a default macOS shell in order to pick
    # up ~/.nix-profile/bin
    {
      name = "nix-env";
      src = pkgs.fetchFromGitHub {
        owner = "lilyball";
        repo = "nix-env.fish";
        rev = "00c6cc762427efe08ac0bd0d1b1d12048d3ca727";
        sha256 = "1hrl22dd0aaszdanhvddvqz3aq40jp9zi2zn0v1hjnf7fx4bgpma";
      };
    }
  ];
  shellInit = ''
    # Set syntax highlighting colours; var names defined here:
    # http://fishshell.com/docs/current/index.html#variables-color
    set fish_color_autosuggestion brblack
  '';
  shellAliases = {
    rm = "rm -i";
    cp = "cp -i";
    mv = "mv -i";
    mkdir = "mkdir -p";
  };
  shellAbbrs = {
    g = "git";
    m = "make";
    n = "nvim";
    o = "open";
    p = "python3";
  };
  functions = {
    fish_greeting = {
      description = "Greeting to show when starting a fish shell";
      body = "";
    };
    mkdcd = {
      description = "Make a directory tree and enter it";
      body = "mkdir -p $argv[1]; and cd $argv[1]";
    };
  };
};
```

After running `home-manager switch` I just needed two steps to switch my default shell on macOS:  

运行 `home-manager switch` 后，我只需两步就能切换 macOS 的默认外壳：

1.  Add the full path `/Users/apearce/.nix-profile/bin/fish` to the end of the `/etc/shells` file.  
    
    在 `/etc/shells` 文件末尾添加完整路径 `/Users/apearce/.nix-profile/bin/fish` 。
2.  Change shell with `chsh -s ~/.nix-profile/bin/fish`.  
    
    使用 `chsh -s ~/.nix-profile/bin/fish` 更改外壳。

I could then open a new terminal window and be dropped into a fish shell which had access to all my Home-Manager-installed programs. 🎉  

然后，我就可以打开一个新的终端窗口，进入一个可以访问所有已安装的 Home-Manager 程序的鱼形外壳。🎉

My final tweak was to include [iTerm2’s shell integration](https://iterm2.com/documentation-shell-integration.html) as a fish plugin. Fish plugins are installed to `~/.config/fish/conf.d/<plugin folder>` and these are [sourced _before_](https://fishshell.com/docs/current/#configuration-files) the main `config.fish` file, so I needed a few tweaks:  

我最后的调整是将 iTerm2 的 shell 集成作为 Fish 插件。Fish 插件安装在 `~/.config/fish/conf.d/<plugin folder>` ，而这些插件的源文件在 `config.fish` 主文件之前，因此我需要做一些调整：

1.  Download the integration script using the [instructions](https://iterm2.com/documentation-shell-integration.html).  
    
    使用说明下载集成脚本。
2.  Wrap the contents of the integration script in a `function iterm2_shell_integration...end` block.  
    
    用 `function iterm2_shell_integration...end` 代码块封装集成脚本的内容。
3.  Place the script in a folder structure next to the `home.nix` file as `config/fish/iterm2_shell_integration/functions/iterm2_shell_integration.fish`. This mimics the folder structure of fish plugins.  
    
    将脚本放在 `home.nix` 文件旁边的文件夹结构中，如 `config/fish/iterm2_shell_integration/functions/iterm2_shell_integration.fish` 。这模仿了鱼类插件的文件夹结构。
4.  Call the integration function in `config.fish`.  
    
    调用 `config.fish` 中的积分函数。

The Nix configuration looks like this:  

Nix 配置如下

```
fish = {
  enable = true;
  plugins = [
    {
      name = "iterm2-shell-integration";
      src = ./config/fish/iterm2_shell_integration;
    }
    # ...
  ];
  interactiveShellInit = ''
    # Activate the iTerm 2 shell integration
    iterm2_shell_integration
  '';
  # ...
};
```

I hope to get around to packaging the integration script as a bona fide fish plugin.  

我希望能把集成脚本打包成一个真正的鱼插件。

#### Neovim

I recently migrated my [Neovim](https://neovim.io/) configuration to Lua, which means having an `init.lua` file rather than an `init.vim` file.  

我最近将 Neovim 配置迁移到了 Lua，这意味着有了 `init.lua` 文件，而不是 `init.vim` 文件。

Home Manager [always creates an `init.vim`](https://github.com/nix-community/home-manager/issues/1907) but Neovim will complain if an `init.lua` file is also found. So for now I manage my Neovim dotfiles explicitly in my `home.nix`, which means I also need to install `neovim` explicitly.  

Home Manager 始终会创建 `init.vim` ，但如果同时找到 `init.lua` 文件，Neovim 就会抱怨。因此，目前我在 `home.nix` 中明确管理 Neovim dotfiles，这意味着我还需要明确安装 `neovim` 。

```
{ config, pkgs, ... }:

{
  home = {
    # ...
    packages = with pkgs; [
      neovim
    ];
  };

  # ...

  xdg.configFile.nvim = {
    source = ./config/neovim;
    recursive = true;
  };
}
```

My `init.lua` and other Neovim files live in a folder next to my `home.nix` called `config/neovim`. Home Manager effectively copies those files to the location Neovim expects to see them:  

我的 `init.lua` 和其他 Neovim 文件存放在 `home.nix` 旁边的文件夹中，名为 `config/neovim` 。Home Manager 可以有效地将这些文件复制到 Neovim 希望看到的位置：

```
$ ls -l ~/.config/nvim
lrwxr-xr-x 84 apearce 27 Jul 14:34 init.lua -> /nix/store/vxw9a54wykhyyi67hqkf6xmixxmpfxb1-home-manager-files/.config/nvim/init.lua
drwxr-xr-x  - apearce 27 Jul 14:34 lua
drwxr-xr-x  - apearce 25 Jul 20:17 plugin
```

Any updates to my `config/neovim/init.lua` must be followed by `home-manager switch` for Neovim to see the changes.  

对我的 `config/neovim/init.lua` 的任何更新都必须通过 `home-manager switch` 才能让 Neovim 看到更改。

### Putting it all together: migrating from Homebrew  

整合：从 Homebrew 移植

We’ve now gone through all the building blocks you’ll need to manage all of your programs and their configuration with Home Manager.  

现在，我们已经介绍了使用 Home Manager 管理所有程序及其配置所需的所有构件。

One of my goals was to move away from Homebrew and manage programs on my laptop exclusively with Home Manager.  

我的目标之一是摆脱 Homebrew，只用 Home Manager 管理笔记本电脑上的程序。

I first dumped the list of packages I had installed with Homebrew:  

我首先把用 Homebrew 安装的软件包列表倒了出来：

```
$ brew bundle dump
```

The resulting `Brewfile` looks like this:  

由此产生的 `Brewfile` 看起来是这样的：

```
tap "homebrew/bundle"
tap "homebrew/core"
brew "cargo-instruments"
# ...
brew "stow"
```

There were lots of entries I didn’t remember installing explicitly, but it was still a much shorter and more comprehensible list than the output of `brew list`.  

虽然有很多条目我不记得是否明确安装过，但与 `brew list` 的输出结果相比，它仍然是一个更简短、更易懂的列表。

I then went through this list and for each item:  

然后，我逐一查看了这份清单：

1.  [Searched](https://search.nixos.org/packages) the corresponding Nix package.  
    
    搜索相应的 Nix 软件包。
2.  Added the Nix package name to the `home.packages` list in my `home.nix` file.  
    
    在 `home.nix` 文件的 `home.packages` 列表中添加了 Nix 软件包名称。
3.  Ran `home-manager switch`. Ran `home-manager switch` .
4.  Verified that the program was picked up by my shell (`which <executable name>`) and was runnable (`<executable name> --version` or similar).  
    
    验证程序是否被我的 shell ( `which <executable name>` ) 接收并可运行 ( `<executable name> --version` 或类似程序)。
5.  Looked at the corresponding [Home Manager module](https://github.com/nix-community/home-manager/tree/master/modules/programs), if it existed, to see if I could port over any dotfiles.  
    
    查看了相应的家庭管理器模块（如果存在的话），看看是否可以移植任何点文件。

## Summary 摘要

With Home Manager I was able to:  

有了家庭管理器，我可以

-   Switch to a configuration-as-code system, which will allow me to define configuration depending on the system it is being deployed on.  
    
    改用 "配置即代码 "系统，这样我就可以根据部署的系统来定义配置。
-   Define almost all of my dotfile-like configuration in a [single file](https://github.com/alexpearce/dotfiles/blob/d444f75b1ae800ce4dc2f70dea4357cedd245263/home.nix).  
    
    在一个文件中定义几乎所有类似于 dotfile 的配置。
-   Remove Homebrew from my system. (This is particularly cool as I could then also remove Xcode, which is huge and takes _ages_ to update.)  
    
    从我的系统中移除 Homebrew。(这一点特别酷，因为我还可以删除 Xcode，因为它体积庞大，更新起来需要很长时间）。

These are big pluses, and I’m happy with the result overall, but there are downsides.  

这些都是很大的优点，我对总体效果很满意，但也有缺点。

-   Understanding the philosophy of Nix, the various terms and commands, as well as the Expression Language in depth is not strictly necessary, but some time is needed to at least get to grips with a new way of working.  
    
    严格来说，了解 Nix 的理念、各种术语和命令以及表达式语言并不是必须的，但至少需要一些时间来掌握一种新的工作方式。
-   Nix typically requires root privileges for the initial installation and you may not have this on all the machines you work on.<sup data-immersive-translate-effect="1" data-immersive_translate_walked="24b36a0a-0ab0-4085-bddc-3267b3e4e71c"><a href="https://alexpearce.me/2021/07/managing-dotfiles-with-nix/#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label" xt-marked="ok">1</a></sup> There are [workarounds for root-less Nix installs](https://nixos.wiki/wiki/Nix_Installation_Guide#Installing_without_root_permissions) but these may not work on your system (e.g. if user namespaces are disabled, or if your home directory is on a networked file system).  
    
    Nix 通常需要 root 权限才能进行初始安装，但您可能无法在所有机器上都拥有 root 权限。 <sup data-immersive-translate-effect="1" data-immersive_translate_walked="24b36a0a-0ab0-4085-bddc-3267b3e4e71c"><a href="https://alexpearce.me/2021/07/managing-dotfiles-with-nix/#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label" xt-marked="ok">1</a></sup> 对于无 root 权限的 Nix 安装，有一些变通方法，但这些方法在你的系统上可能不起作用（例如，如果禁用了用户命名空间，或者如果你的主目录位于网络文件系统上）。
-   Your exact configuration may not be reproducible in Home Manager as [by design](https://nix-community.github.io/home-manager/index.html#sec-guidelines-valuable-options) it does not always support every possible configuration flag. I have to manage Lua-based Neovim configuration in a more ‘manual’ way, for example.  
    
    您的确切配置可能无法在 Home Manager 中重现，因为根据设计，它并不总是支持所有可能的配置标志。例如，我必须以更 "手动 "的方式管理基于 Lua 的 Neovim 配置。
-   [Fish shell](https://fishshell.com/) does not have first-class support in Nix.  
    
    鱼壳在 Nix 中没有一流的支持。

All that said, I had a lot of fun! 🛠 I’m looking forward to reading more of other people’s experiences with Nix.  

总之，我玩得很开心！🛠 我期待着阅读更多其他人使用 Nix 的经验。

As ever, my configuration is [available on GitHub](https://github.com/alexpearce/dotfiles).  

和以往一样，我的配置可以在 GitHub 上查看。

### Learning more 了解更多

Unlike [using Stow](https://alexpearce.me/2016/02/managing-dotfiles-with-stow/), using Home Manager requires getting to grips with a new language and considerably more complex infrastructure. The following resources helped me along the way.  

与使用 Stow 不同，使用 Home Manager 需要掌握一种新语言和复杂得多的基础设施。在使用过程中，我得到了以下资源的帮助。

-   [A tour of Nix](https://nixcloud.io/tour/) for learning the Nix Expression Language.  
    
    学习 Nix 表达语言的 Nix 之旅。
-   The [Nixology](https://www.youtube.com/watch?v=NYyImy-lqaA&list=PLRGI9KQ3_HP_OFRG6R-p4iFgMSK1t5BHs) playlist. Nixology 播放列表
-   The NixOS [reddit](https://www.reddit.com/r/NixOS) and [Discourse](https://discourse.nixos.org/) community discussions.  
    
    NixOS reddit 和 Discourse 社区讨论。

___

## Updates 更新

There was a bit of churn around Nix installation on macOS mid-2021. This post was updated in November 2021 to move away from temporary fixes to more stable installers. Some Home Manager workarounds are no longer needed and so were removed.  

2021 年年中，Nix 在 macOS 上的安装出现了一些问题。本帖于 2021 年 11 月更新，从临时修复转向更稳定的安装程序。一些 "家庭管理器 "变通方法已不再需要，因此已被删除。

1.  I used to build programs on such machines myself and install them into `~/usr`. By building and installing Stow I could then manage my dotfiles in a similar way as on my personal machine.  
    
    我曾经自己在这种机器上构建程序，然后将它们安装到 `~/usr` 。通过构建和安装 Stow，我就可以像在个人计算机上一样管理我的 dotfile。
