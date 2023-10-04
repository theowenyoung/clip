---
title: "我受够了，所以我要写一个浏览器"
date: 2023-09-22T19:16:32+08:00
updated: 2023-09-22T19:16:32+08:00
taxonomies:
  tags: []
extra:
  source: https://adayinthelifeof.nl/2023/09/22/browsers.html
  hostname: adayinthelifeof.nl
  author: 
  original_title: "I'm fed up with it, so I'm writing a browser"
  original_lang: en
---

![](1761ecd7fe763583553dde43e62c47bd.jpeg) Posted on 22 Sep 2023  

发布于 2023 年 9 月 22 日  

Tagged with: \[ [rust, programming, browsers](https://adayinthelifeof.nl/archive/tags/rustprogrammingbrowsers) \]   

标签\[rust、编程、浏览器］

This blogpost starts with me switching of my car radio, and ends with me writing a browser. There is some stuff in between as well.  

这篇博文以我关掉汽车收音机开始，以我写浏览器结束。中间还夹杂了一些东西。

Some ten years ago, I used to travel a lot by car to customers. I listened to news radio to keep myself occupied during the daily commute. In the Netherlands, I would listen to Business News Radio (BNR) and/or Radio 1. I liked having people talk and discuss the daily news and not being interrupted by the latest music I didn’t like anyway. I think I still had a car with MP3 CDs.  

大约十年前，我经常坐车去拜访客户。在每天的通勤途中，我都会收听新闻广播，以保持精力充沛。在荷兰，我会收听商业新闻电台 (BNR) 和/或 Radio 1。我喜欢让人们谈论和讨论每日新闻，而且不会被我不喜欢的最新音乐打断。我想我还有一辆装有 MP3 CD 的汽车。

All was well until one day, I decided to switch off my radio. I didn’t want to hear the news anymore. And that evening on the way back, the radio stayed off. I still didn’t want to listen to the news. In fact, I didn’t want to listen to the news like ever again!  

一切都很顺利，直到有一天，我决定关掉收音机。我不想再听新闻了。那天晚上，在回来的路上，收音机一直关着。我还是不想听新闻。事实上，我再也不想听新闻了！

Why? I don’t know exactly, but I don’t think it’s a coincidence that this was also around the time my wife got pregnant (although I cannot say for sure if this was before or after we knew). But when I thought about it, the more apparent it got: the ONLY thing you hear on the news.. any news.. are bad things(tm). War, corruption, you name it. We still should be thankful we still call these things news because often it feels like it would be more newsworthy if politicians weren’t corrupt, or not kept their promises, or screwed another group of people over. And the problem is that I - as a single person - have no ways or means to do anything about it. Nothing. Not even if I tried.  

为什么？我不太清楚，但我觉得这不是巧合，因为我妻子也是在这个时候怀孕的（虽然我不能确定是在我们知道之前还是之后）。但当我仔细想一想，就越发觉得：你在新闻上听到的......任何新闻......都是坏事。战争、腐败，你说得出来。我们仍然应该感谢我们还把这些事情称作新闻，因为很多时候，如果政客们不腐败，或者不信守承诺，或者坑害了另一群人，那么这些事情就会更有新闻价值。而问题是，我--作为一个人--没有办法或途径对此做些什么。什么都做不了。即使我试过也不行。

Basically, my thinking was: if listening to the news makes me feel bad, I should stop listening to the news. Makes sense I guess. But I went a bit further: i do not listen to the news, I also do not watch the news or browse the internet for news. But I also actively try to get the news out of the way. We don’t watch news channels; we switch channels when the 8 o’clock news starts (that was a thing before streaming), and I leave a room where there is news on which I cannot control.  

基本上，我的想法是：如果听新闻让我感觉不好，我就应该停止听新闻。我想这是有道理的。但我更进一步：我不听新闻，也不看新闻或上网浏览新闻。但我也积极努力地让新闻远离我们。我们不看新闻频道；8 点新闻开始时我们就换台（这是流媒体出现之前的事），我也会离开有我无法控制的新闻的房间。

Fast forward to almost the present: I still do not watch, listen or browse the news, but I read Reddit for some subreddits that sometimes posts news facts here and there. Any “important” news that I should need to know (do I really?) comes to me anyway because of people. So all is well. I’m not getting saddened by the news. Job done.  

快进到现在：我仍然不看、不听或不浏览新闻，但我会阅读 Reddit 上的一些子论坛，有时会在这里或那里发布一些新闻事实。任何我需要知道的 "重要 "新闻（真的吗？所以一切都很好。我不会因为这些新闻而难过。任务完成。

That was until a year ago, but it’s probably way earlier that the next thing started. So although I don’t follow the classic world and political news, I do like to follow tech news, and for me, this is done 98% through Ycombinator’s hacker news. But I started to get the same feeling I had ten years ago: it’s all negative. Companies are pushing unwanted updates, breaking all promises, raising subscriptions, and buying up companies while doing everything in their power to figure out how much more personal data they can take (away) from us. Governments are banning encryption because of child molesters (they also use vans and candy. Let’s also ban them!). People in power with absolutely no idea of how the modern world works and people in power who DO know how it works, want to make it even worse for everybody else. Meanwhile, the enshitification keeps speeding up, and I’m afraid to update my printer drivers in case my printer tells me it doesn’t like my ink and stops printing. And then there is the golden goose: the internet browser. The one place where almost everybody in the world spend their time. How long will it be until browser developers decide that ads could also shown by the browser itself, rather than from the rendered sites that adblockers can block? We already had those.. they WILL come back. And how about browser-specific extensions that make sites unusable from other browsers (sorry, you cannot view your gmail with Firefox. Please install google chrome)? This has happened, and as soon as lawyers find a way out of monopoly issues, it will happen again. Things like this make me sad, and again, I’m just one person out of many with little to no influence.  

那是一年前的事了，但下一件事开始的时间可能更早。因此，虽然我不关注传统的世界和政治新闻，但我喜欢关注科技新闻，对我来说，98% 的新闻都是通过 Ycombinator 的黑客新闻完成的。但我开始有了与十年前相同的感觉：这一切都是负面的。公司在推送不受欢迎的更新、违背所有承诺、提高订阅费用、收购公司，同时竭尽所能想方设法从我们这里获取（拿走）更多的个人数据。政府因为儿童性骚扰者而禁止加密（他们也使用面包车和糖果，让我们也禁止他们吧！）。完全不知道现代世界是如何运作的当权者和知道现代世界是如何运作的当权者，都想让其他人的生活变得更糟。与此同时，"无纸化 "不断加速，而我却不敢更新打印机驱动程序，生怕打印机告诉我它不喜欢我的墨水而停止打印。然后是金鹅：互联网浏览器。世界上几乎每个人都会在浏览器上花时间。还要过多久，浏览器开发商才会决定，广告也可以由浏览器本身显示，而不是由广告拦截器可以拦截的渲染网站显示？我们已经有了广告拦截器，它们还会回来的。那么，那些让其他浏览器无法使用网站的特定浏览器扩展呢（对不起，您无法使用火狐浏览器查看您的 Gmail。请安装谷歌浏览器）？这种情况已经发生过，只要律师们找到解决垄断问题的办法，这种情况就会再次发生。这样的事情让我很难过，再说一次，我只是众多人中的一个，几乎没有影响力。

But that’s not quite right this time. This time, I DO have some influence because I am a programmer. I can develop software and I can share this software and code with others so they do not need to use it from companies that only serve their shareholders and pockets.  

但这次不太对。这一次，我确实有一些影响力，因为我是一名程序员。我可以开发软件，也可以与他人分享这些软件和代码，这样他们就不需要使用那些只为股东和腰包服务的公司提供的软件和代码了。

So we come to the point that I’ve decided that I am going to write a browser. For two reasons: I want this to be a way to push back. Just a tiny amount. And reason two is that I always wanted to write a browser.  

因此，我决定写一个浏览器。原因有两个：我想通过这种方式来反击。只是一点点。原因之二是我一直想写一个浏览器。

I do not expect ANYTHING to come from this project. I do not expect to finish this project. And I do expect that - if nobody will follow me into helping the project - the project will be dead quite soon. I do not expect this project to become the dominant browser that will topple all the big players in the market. But I do want the project to be open for non-commercial purposes. I want others to be inspired by it and make their project. And those projects will inspire others, and so on, until we DO reach a point where we have a browser that can topple the big players. I can’t fly. I don’t have x-ray eyes. I don’t have a heavy hammer. But I can develop software. And I can share with as many people that I can. Either as an inspiration for others to write their own code, or as an example on how not to write code.  

我不指望从这个项目中得到任何东西。我也不指望能完成这个项目。而且，如果没有人跟我一起帮助这个项目，我也不指望这个项目会很快夭折。我不指望这个项目能成为浏览器市场的霸主，颠覆市场上的所有大公司。但我希望该项目能开放用于非商业目的。我希望其他人能从中受到启发，开发出自己的项目。而这些项目又会激励其他项目，如此循环，直到我们拥有一个能打败所有大公司的浏览器为止。我不会飞。我没有透视眼。我没有重锤。但我可以开发软件。我可以与尽可能多的人分享。既可以激励他人编写自己的代码，也可以作为如何不编写代码的范例。

I’m not an idyllic person. I’m not an activist fighting for a better world or anything. But I get angry about the corporations screwing over people, software, planets. I’m not in a position to solve that. I’m just a developer that will attempt to write a browser.  

我不是一个田园诗人。我不是一个为美好世界而奋斗的积极分子。但我对企业坑害人类、软件和星球感到愤怒。我没有能力解决这些问题。我只是一个尝试编写浏览器的开发者。

Details about the progress of the project can be found here: [https://codemusings.nl/@jaytaph/p/MQpHToAx8c1KXyU98Auip4](https://codemusings.nl/@jaytaph/p/MQpHToAx8c1KXyU98Auip4)  

有关项目进展的详细信息，请点击此处： https://codemusings.nl/@jaytaph/p/MQpHToAx8c1KXyU98Auip4

The project itself can be found on GitHub: [https://github.com/jaytaph/gosub-browser](https://github.com/jaytaph/gosub-browser)  

项目本身可在 GitHub 上找到： https://github.com/jaytaph/gosub-browser

___
