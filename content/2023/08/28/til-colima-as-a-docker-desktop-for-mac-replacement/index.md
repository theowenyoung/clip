---
title: "TIL：Colima 作为 Docker Desktop for Mac 的替代品"
date: 2023-08-28T01:06:22+08:00
updated: 2023-08-28T01:06:22+08:00
taxonomies:
  tags: []
extra:
  source: https://alexpearce.me/2022/07/colima-docker-desktop-replacement/
  hostname: alexpearce.me
  author: 
  original_title: "TIL: Colima as a Docker Desktop for Mac replacement"
  original_lang: en
---

I have never really loved [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/).  

我一直都不太喜欢 Mac 版的 Docker Desktop。

It seems to want to download and install huge updates every other day, each offering little user-facing benefit, comes with a clunky management UI I never use,<sup data-immersive-translate-effect="1" data-immersive_translate_walked="c04730ef-4271-4205-ae2e-14e9c79e2751"><a href="https://alexpearce.me/2022/07/colima-docker-desktop-replacement/#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label" xt-marked="ok">1</a></sup> and requires you to accept an [onerous license agreement](https://docs.docker.com/subscription/#docker-desktop-license-agreement).  

它似乎每隔一天就想下载并安装大量更新，而每个更新对用户都没有什么好处，它还带有一个我从来不用的笨拙的管理用户界面， <sup data-immersive-translate-effect="1" data-immersive_translate_walked="c04730ef-4271-4205-ae2e-14e9c79e2751"><a href="https://alexpearce.me/2022/07/colima-docker-desktop-replacement/#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label" xt-marked="ok">1</a></sup> ，并要求你接受一份繁琐的许可协议。

So why use it? To run containers, of course! And although there are [several](https://www.docker.com/products/container-runtime/) [container](https://containerd.io/) [runtime](https://github.com/opencontainers/runc) interfaces, Docker is particularly common. Whether you’re a sole developer or working as part of a team, chances are it’s Docker you’ll reach for first. Docker Desktop for Mac is an easy way to get access to all the components needed to start working with containers.  

那么，为什么要使用它呢？当然是为了运行容器！虽然有多种容器运行时接口，但 Docker 尤为常见。无论你是独立开发者还是团队成员，都有可能首先使用 Docker。Mac 版 Docker Desktop 可以让你轻松访问使用容器所需的所有组件。

Containers are a feature of the Linux kernel, and so a lot of what Docker Desktop for Mac does is managing a Linux virtual machine for you using macOS’s virtualisation framework. Your containers will run within that VM.  

容器是 Linux 内核的一项功能，因此 Mac 版 Docker Desktop 的大部分工作就是使用 macOS 的虚拟化框架为你管理一个 Linux 虚拟机。你的容器将在该虚拟机中运行。

[Lima](https://github.com/lima-vm/lima) is a tool to run and manage Linux virtual machines on macOS. [Colima](https://github.com/abiosoft/colima) builds on top of Lima to provide simple access to container runtimes, including Docker. It runs a Docker-compatible process inside the Linux VM (a ‘Docker daemon’) allowing us to use all the `docker` CLI commands we’re familiar with, including [Docker Compose](https://docs.docker.com/compose/), without needing to install Docker Desktop for Mac.  

Lima 是在 macOS 上运行和管理 Linux 虚拟机的工具。Colima 建立在 Lima 的基础之上，提供对容器运行时（包括 Docker）的简单访问。它在 Linux 虚拟机内运行一个与 Docker 兼容的进程（"Docker 守护进程"），允许我们使用我们熟悉的所有 `docker` CLI 命令，包括 Docker Compose，而无需安装 Mac 版 Docker Desktop。

## Installation 安装

If you [use Nix and/or home-manager](https://alexpearce.me/2021/07/managing-dotfiles-with-nix/) you can easily try out Colima in a subshell:  

如果你使用 Nix 和/或 home-manager，你可以很容易地在子壳中试用 Colima：

```
$ nix shell nixpkgs#colima nixpkgs#docker nixpkgs#kubectl
```

Or you can include the packages in your home-manager configuration to make them always available:  

或者，你也可以在 home-manager 配置中包含软件包，使它们始终可用：

```
{ config, pkgs, ... }:

{
  home = {
    packages = with pkgs; [
      colima
      docker
      kubectl
    ];
  };
}
```

If you use Homebrew you can install Colima in a similar way.  

如果你使用 Homebrew，可以用类似的方法安装 Colima。

```
$ brew install colima docker kubectl
```

Note that Colima provides a Docker-compatible runtime but does not ship with the `docker` or `kubectl` CLIs, so we must install those separately.  

请注意，Colima 提供了与 Docker 兼容的运行时，但并不随附 `docker` 或 `kubectl` CLI，因此我们必须单独安装。

## Usage 使用方法

All that’s required to get going is to tell Colima to start the Linux VM.  

只需告诉 Colima 启动 Linux 虚拟机即可。

```
$ colima start
INFO[0000] starting colima
INFO[0000] runtime: docker
INFO[0000] preparing network ...                         context=vm
INFO[0000] starting ...                                  context=vm
INFO[0021] provisioning ...                              context=docker
INFO[0022] starting ...                                  context=docker
INFO[0027] done
```

This will download the VM’s base image and boot it. Once the machine is running Colima will start a Docker daemon inside of it and advertise a socket on the host (macOS) to the Docker CLI.  

这将下载虚拟机的基础镜像并启动它。一旦机器开始运行，Colima 就会在其中启动一个 Docker 守护进程，并在主机（macOS）上向 Docker CLI 通告一个套接字。

We can verify that `docker` can see Colima’s daemon by using the [`context` command](https://docs.docker.com/engine/context/working-with-contexts/).<sup data-immersive-translate-effect="1" data-immersive_translate_walked="c04730ef-4271-4205-ae2e-14e9c79e2751"><a href="https://alexpearce.me/2022/07/colima-docker-desktop-replacement/#user-content-fn-2" id="user-content-fnref-2" data-footnote-ref="" aria-describedby="footnote-label" xt-marked="ok">2</a></sup>  

我们可以使用 `context` 命令来验证 `docker` 能否看到 Colima 的守护进程。 <sup data-immersive-translate-effect="1" data-immersive_translate_walked="c04730ef-4271-4205-ae2e-14e9c79e2751"><a href="https://alexpearce.me/2022/07/colima-docker-desktop-replacement/#user-content-fn-2" id="user-content-fnref-2" data-footnote-ref="" aria-describedby="footnote-label" xt-marked="ok">2</a></sup>

```
$ docker context list
NAME       DESCRIPTION                               DOCKER ENDPOINT                                      KUBERNETES ENDPOINT                ORCHESTRATOR
colima *   colima                                    unix:///Users/username/.colima/default/docker.sock
default    Current DOCKER_HOST based configuration   unix:///var/run/docker.sock                          https://127.0.0.1:6443 (default)   swarm
```

As promised, we can now use the `docker` commands we’re familiar with.  

按照约定，我们现在可以使用我们熟悉的 `docker` 命令。

```
$ docker run --rm grycap/cowsay /usr/games/cowsay 'Hello, Colima!'
 ________________
< Hello, Colima! >
 ----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

Colima even includes supports for running a local Kubernetes cluster!  

Colima 甚至支持运行本地 Kubernetes 集群！

```
$ colima kubernetes start
INFO[0000] installing ...                                context=kubernetes
INFO[0005] loading oci images ...                        context=kubernetes
INFO[0010] updating config ...                           context=kubernetes
INFO[0010] Switched to context "colima".                 context=kubernetes
```

As Colima will add the necessary connection details to our `$HOME/.kube/config` file, we can immediately interact with the cluster using `kubectl` as usual.  

Colima 会将必要的连接详细信息添加到 `$HOME/.kube/config` 文件中，因此我们可以像往常一样立即使用 `kubectl` 与集群交互。

```
$ kubectl config get-contexts
CURRENT   NAME     CLUSTER   AUTHINFO   NAMESPACE
*         colima   colima    colima

$ kubectl get all --output wide
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE   SELECTOR
service/kubernetes   ClusterIP   10.43.0.1    <none>        443/TCP   52s   <none>
```

To stop the cluster or base VM, use the corresponding `stop` commands.  

要停止群集或基本虚拟机，请使用相应的 `stop` 命令。

```
$ colima kubernetes stop

$ colima stop
INFO[0000] stopping colima
INFO[0000] stopping ...                                  context=docker
INFO[0002] stopping ...                                  context=vm
INFO[0005] done
```

More advanced usage is given in [the README](https://github.com/abiosoft/colima#readme) and [FAQ](https://github.com/abiosoft/colima/blob/main/docs/FAQ.md), including details of the [VM configuration](https://github.com/abiosoft/colima/blob/main/docs/FAQ.md#can-config-file-be-used-instead-of-cli-flags) stored under `$HOME/.colima/default/colima.yaml`.  

README 和 FAQ 提供了更多高级用法，包括存储在 `$HOME/.colima/default/colima.yaml` 下的虚拟机配置详情。

I’ve found Colima to be a complete, pain-free replacement for my usage of Docker Desktop for Mac.  

我发现 Colima 完全可以轻松替代我使用的 Mac 版 Docker Desktop。

1.  I will admit to being a particularly terminal-happy developer but the `docker` CLI is well structured and prints pretty output. The Docker Desktop UI is just a wrapper around a subset of the CLI’s feature set.  
    
    我承认自己是一个特别喜欢使用终端的开发者，但 `docker` CLI 结构合理，输出结果漂亮。Docker Desktop UI 只是 CLI 功能集子集的一个封装。
    
2.  The CLI’s context support allows Colima to run alongside Docker Desktop for Mac, if desired. You just need to select which context the CLI by default with `docker context use`.  
    
    如果需要，CLI 的上下文支持允许 Colima 与 Mac 版 Docker Desktop 同时运行。你只需通过 `docker context use` 选择 CLI 默认的上下文。
