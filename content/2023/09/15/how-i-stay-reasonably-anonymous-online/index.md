---
title: "我如何在网上保持合理的匿名性 | Mellow Root"
date: 2023-09-15T13:21:14+08:00
updated: 2023-09-15T13:21:14+08:00
taxonomies:
  tags: []
extra:
  source: https://tmp.bearblog.dev/how-i-stay-reasonably-anonymous-online/
  hostname: tmp.bearblog.dev
  author: 
  original_title: "How I stay reasonably anonymous online"
  original_lang: en
---

_21 Nov, 2022  2022 年 11 月 21 日_

I'm not wanted by the FBI, nor am I worried about my ISP watching me, and I don't care about Google knowing what I search for. What I _am_ worried about is crazy people on the internet I might accidentally piss off, so I don't want to be easy to stalk. I'm also lazy, so I try to balance the effort and stalker risk to get the best bang for the buck. Described in this post are some things I do to be a bit harder to stalk.  

我没有被联邦调查局通缉，也不担心互联网服务提供商监视我，更不在乎谷歌知道我搜索的内容。我担心的是网上的疯子，我可能会不小心得罪他们，所以我不想轻易被跟踪。我也很懒，所以我试图在付出的努力和被跟踪的风险之间取得平衡，以获得最佳效益。这篇文章介绍的是我为了更难被跟踪而做的一些事情。

## Fake names 伪造姓名

Often when registering accounts the first and last names are optional, in those cases just skip them.  

在注册账户时，名字和姓氏通常是可选的，在这种情况下只需跳过它们。

Where names are mandatory, I generate them with for example [this random name generator](https://www.behindthename.com/random/). I usually use the settings: `First name only`, `avoid rare`, only relevant countries, and randomize surname (but I try to switch it up sometimes.)  

如果名字是必填的，我会用这个随机名字生成器来生成。我通常使用以下设置： `First name only` , `avoid rare` , 仅相关国家，以及随机化姓氏（但我有时也会尝试换一下）。

I want the name to sound legit (so maybe not John Doe) but still be common and give many hits on Google, this makes it more annoying to try to look me up. John Doe works if I don't care if they know it's not my real name, but I try to be inconsistent and don't use the same name for many accounts.  

我希望名字听起来合法（所以可能不是无名氏），但仍然常见，在谷歌上有很多点击率，这样会让试图查找我的人更烦。如果我不在乎他们是否知道这不是我的真名，无名氏就可以用，但我尽量保持一致，不在多个账户中使用同一个名字。

## Random usernames 随机用户名

I don't want people to just Google my username and find my users on all other services. So what I do is randomize 1 to 3 words, maybe append a random year at the end of it, use leet speak sometimes, and sometimes use some username generator.  

我不希望别人在谷歌上搜索我的用户名，就能在所有其他服务上找到我的用户。因此，我的做法是随机使用 1 到 3 个单词，或许在末尾添加一个随机年份，有时使用 leet speak，有时使用一些用户名生成器。

```
# Get a random word
shuf -n 1 /usr/share/dict/words

```

Switch it up and don't be consistent.  

换着用，不要千篇一律。

## Masked emails 屏蔽电子邮件

Don't use the same email on multiple sites. Even if it's often not shown publicly, sites get hacked and if you use `firstname.lastname@gmail.com` for your PornHub account it won't feel great.  

不要在多个网站上使用相同的电子邮件。即使经常不公开显示，网站也会被黑客攻击，如果你的 PornHub 账户使用 `firstname.lastname@gmail.com` ，感觉会不太好。

If you're using the same email on multiple sites one can connect your different usernames. Finding database dumps of hacked sites with emails and usernames isn't hard, and many people collect them for exactly this reason.  

如果你在多个网站上使用同一个电子邮件，就会有人把你的不同用户名联系起来。找到带有电子邮件和用户名的黑客网站数据库转储并不难，很多人正是出于这个原因而收集它们。

It's tedious to manually create new email accounts for every service, but luckily there are services that can help us with it:  

为每项服务手动创建新的电子邮件账户非常乏味，但幸运的是，有一些服务可以帮我们解决这个问题：

-   [Firefox Relay](https://relay.firefox.com/) (5 free, ~12 USD/year for unlimited)  
    
    Firefox Relay（5 个免费账户，12 美元/年无限账户）
-   [Fastmail masked emails](https://www.fastmail.help/hc/en-us/articles/4406536368911-Masked-Email) (unlimited for 30 USD/year)  
    
    Fastmail 屏蔽电子邮件（30 美元/年，无限制）
-   [iCloud+ Hide My Email](https://support.apple.com/en-us/HT210425) (unlimited for 0.99 USD/month)  
    
    iCloud+ 隐藏我的电子邮件（无限量，0.99 美元/月）

With these services, I get something like "aliases" unique to a service. So I still have only one inbox (I only use Fastmail), but I get multiple email addresses connected to it. That means I can have a unique email registered at each website/app I register at but need to monitor only one email inbox.  

有了这些服务，我就能获得类似 "别名 "的服务。因此，我仍然只有一个收件箱（我只使用 Fastmail），但我有多个电子邮件地址与之相连。这意味着我可以在注册的每个网站/应用程序上注册一个唯一的电子邮件，但只需要监控一个收件箱。

For throwaway accounts I use temporary email services:  

对于临时账户，我使用临时电子邮件服务：

-   [10minutemail 10minutemail](https://10minutemail.com/)
-   [Mailinator 邮件管理器](https://www.mailinator.com/)
-   ... and many others, just search for "temporary email" and you'll get many hits.  
    
    ......还有很多其他服务，只要搜索 "临时电子邮件"，就会有很多点击。

The downside with temporary emails is that they're blocked on many services, and there is no password to access the inbox so don't use it for anything sensitive (anyone could do a password reset if you use it for an account somewhere, for example.)  

临时电子邮件的缺点是在很多服务上都会被屏蔽，而且没有密码来访问收件箱，所以不要用它来处理任何敏感的事情（例如，如果你用它来处理某个账户，任何人都可以进行密码重置）。

## Unique passwords 独特的密码

Don't use the same password on multiple sites, not only is it terrible from a security point of view but it's also bad from a privacy perspective.  

不要在多个网站上使用相同的密码，这不仅从安全角度看很糟糕，从隐私角度看也很糟糕。

As I mentioned in the section about emails, sites get hacked. If you use the same password (but different usernames and emails) on different sites people can figure out the accounts belong to the same person if it's leaked. And yes, this technique is used in the wild.  

正如我在有关电子邮件的章节中提到的，网站也会被黑客攻击。如果你在不同的网站上使用相同的密码（但用户名和电子邮件不同），一旦泄露，人们就会发现这些账户属于同一个人。是的，这种技术在野外被广泛使用。

Use a password manager, [1Password](https://1password.com/) is an excellent choice and it's what I use. 1Password integrates with Fastmail's Masked Emails so I can generate both email and password on the fly when signing up on a website.  

使用密码管理器，1Password 是一个很好的选择，我用的就是它。1Password 与 Fastmail 的 "掩码邮件 "集成，因此我可以在网站注册时即时生成邮件和密码。

## Avatars/profile pictures  

头像/个人照片

There is a technique called "reverse image search" which means you search for an image and Google (or Bing, or Yandex, or whatever you use) shows you all other places the same (or similar) image is used. By doing a reverse image search on a profile picture, people can see other places where you use the same image.  

有一种技术叫做 "反向图片搜索"，也就是说，你搜索一张图片，谷歌（或必应、Yandex，或任何你使用的软件）就会向你显示所有其他使用过相同（或类似）图片的地方。通过对个人资料图片进行反向图片搜索，人们可以看到你在其他地方使用的相同图片。

If possible, I don't use any profile picture or avatar, or use the default one. If I for some reason need or want a profile picture, I tend to generate one with:  

如果可能，我不会使用任何个人资料图片或头像，或者使用默认图片或头像。如果我出于某种原因需要或想要一张个人头像，我会用以下方法生成一张：

-   [ThisPersonDoesNotExist](https://thispersondoesnotexist.com/), [ThisCatDoesNotExist](https://thesecatsdonotexist.com/), or [similar services](https://thisxdoesnotexist.com/)  
    
    ThisPersonDoesNotExist, ThisCatDoesNotExist 或类似的服务
-   [Dall-E](https://openai.com/dall-e-2/) (generates images based on a prompt I give it)  
    
    Dall-E（根据我的提示生成图片）

Sometimes I find images by searching for something "random" on Google or similar, but I try to be mindful of copyright and never use a picture of a real person.  

有时我会在谷歌或类似网站上搜索 "随机 "图片，但我会尽量注意版权问题，绝不使用真人图片。

## Multiple accounts 多个账户

Sometimes I use multiple accounts for the same service if possible (e.g. multiple Reddit/Discord accounts for different purposes.) I do this to make it harder for people to profile me.  

有时，如果可能的话，我会在同一项服务中使用多个账户（例如，为不同目的使用多个 Reddit/Discord 账户）。

To avoid having to log in and out when switching accounts, I use [Firefox containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/), that way I can be logged in to different accounts in different tabs. In some cases I use [Chrome profiles](https://support.google.com/chrome/answer/2364824?hl=en&co=GENIE.Platform%3DDesktop) but that's a lot more work when using more than a few accounts.  

为了避免在切换账户时登录和退出，我使用 Firefox 容器，这样我就可以在不同的标签页登录不同的账户。在某些情况下，我使用 Chrome 浏览器配置文件，但当使用多个账户时，这样做就费事多了。

I usually delete comments, threads, or other content I put up on the internet after it has served its purpose. That means for example deleting my Reddit comments after a month or two, keeping my email inbox near empty (in case it gets hacked), deleting old accounts, and similar things.  

我通常会在评论、主题或其他内容达到目的后将其删除。例如，我在 Reddit 上发表的评论一两个月后就会删除，我的电子邮箱几乎是空的（以防被黑客攻击），删除旧账户等等。

To some extent, I feel a bit bad about this. Comments I make might be useful for people in the future, but hopefully I can share some useful knowledge on this blog to compensate.  

在某种程度上，我觉得这样做有点不好。我发表的评论也许将来会对别人有用，但希望我能在博客上分享一些有用的知识作为补偿。

## Things I usually don't worry about  

我通常不会担心的事情

There are more things one can do that I don't feel the need to, but I figured I might as well mention some common ones:  

还有更多我觉得没必要做的事情，但我想我还是应该提一些常见的事情：

-   Temporary credit cards 临时信用卡
    -   With privacy.com, Revolut, Klarna, and similar services one can generate virtual credit cards. This is mostly for when you don't trust the website owner or the payment provider.  
        
        使用 privacy.com、Revolut、Klarna 和类似服务，可以生成虚拟信用卡。这主要是在你不信任网站所有者或支付提供商时使用。
-   [Tor](https://www.torproject.org/), [Tails](https://tails.boum.org/), surfing from an open WiFi, VPN, encrypted emails, etc  
    
    Tor、Tails、从开放的 WiFi 上网、VPN、加密电子邮件等
    -   These things are usually outside my threat model. They might be useful if you worry about your ISP watching you or someone wiretapping your network. But honestly, you're probably not _that_ interesting. Sometimes I use Tor or VPNs when traveling for example, but not on a day-to-day basis.  
        
        这些东西通常不属于我的威胁模型。如果你担心 ISP 监视你或有人窃听你的网络，它们可能会有用。但老实说，你可能没那么担心。例如，我有时会在旅行时使用 Tor 或 VPN，但不是每天都用。
-   Spelling/grammar/phrasing  
    
    拼写/语法/措辞
    -   If there are words you often misspell, people can Google it to find other sources where you make the same error (if it's uncommon enough) and potentially identify your other accounts. Use spell checking and maybe Grammarly or similar to minimize this risk, but I tend not to worry about this too much.  
        
        如果你经常拼错一些单词，别人就可以通过谷歌找到你犯同样错误的其他来源（如果足够少见的话），并有可能识别出你的其他账户。使用拼写检查和 Grammarly 或类似软件可以将这种风险降到最低，但我倾向于不太担心这个问题。
-   Telemetry/tracking 遥测/跟踪
    -   I don't worry much about metrics in VS Code, the Chrome browser, or general website tracking (though I do use an ad blocker.) That's not the kind of privacy I feel threatened by. It's often annoying from a performance point of view though so I tend to opt out anyway.  
        
        我不太担心 VS Code、Chrome 浏览器或一般网站的跟踪指标（不过我确实使用了广告拦截器）。不过从性能的角度来看，这往往很烦人，所以我还是倾向于选择退出。

[#privacy](https://tmp.bearblog.dev/blog/?q=privacy)
