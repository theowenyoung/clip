---
title: "XML是未来--作者：没有人有时间做Python"
date: 2023-06-25T20:28:48+08:00
updated: 2023-06-25T20:28:48+08:00
taxonomies:
  tags: []
extra:
  source: https://www.bitecode.dev/p/hype-cycles
  hostname: www.bitecode.dev
  author: Nobody has time for Python
  original_title: "XML is the future"
  original_lang: en
---

_My first hype exposure was "use the [Extensible Markup Language](https://en.wikipedia.org/wiki/XML) for everything". Learning from it allowed me to live through the front end stack explosion, the micro-service overdose and many, many more silly trends.  

我第一次接触到的炒作是 "一切使用可扩展标记语言"。从中学习让我经历了前端堆栈的爆炸、微服务的过量以及更多更愚蠢的趋势。_

_It turns out Grandma was right. Eat vegetables, exercise, sleep well.  

事实证明，奶奶是对的。吃蔬菜，运动，睡好觉。_

_And use the right tool for the right job.  

并为正确的工作使用正确的工具。_

_Well, she didn't say that last one.  

好吧，她没有说最后一句话。_

_But she could have.  

但她可以这样做。_

When I started programming, XML was going to replace everything. HTML with [XHTML](https://en.wikipedia.org/wiki/XHTML), validation with [DTD](https://en.wikipedia.org/wiki/Document_type_definition), transformation and presentation with [XSLT](https://en.wikipedia.org/wiki/XSLT), communication with [SOAP](https://en.wikipedia.org/wiki/SOAP).  

当我开始编程时，XML将取代一切。用XHTML做HTML，用DTD做验证，用XSLT做转换和展示，用SOAP做通信。

I missed the train on the OOP hype, that was the generation before me, but I read so many articles warning me about it, that I applied the reasoning to XML: let's wait and see if this is actually as good as they say before investing everything in it.  

我错过了OOP炒作的火车，那是在我之前的那一代人，但我读了很多文章警告我，所以我把这个道理应用于XML：让我们等待，看看这个东西是否真的像他们说的那样好，然后再把所有的东西都投入进去。

Turns out, XML was not the future. It was mostly technical debt.  

结果发现，XML并不是未来。这主要是技术债务。

It was mostly useful for things like documents, and I believe the most successful use of it are still MS Office and LibreOffice file formats. They are just zips of XML.  

它主要是对文件之类的东西有用，我相信最成功的使用仍然是MS Office和LibreOffice文件格式。它们只是XML的压缩包。

I was lucky to learn this lesson very early in my career: there is no silver bullet, any single tool, no matter how good it is, must be evaluated from the engineering point of view of pros and cons. Everything has a cost, and implies compromises. It's a matter of ROI. Which is hard to evaluate without experience.  

我很幸运，在我职业生涯的早期就学到了这一课：没有银弹，任何单一的工具，不管它有多好，都必须从工程的角度评估其利弊。一切都有成本，并意味着妥协。这是一个投资回报率的问题。如果没有经验，这很难评估。

Bottom line, time is once again the great equalizer, there is no substitute to observe how a complex system evolves, no matter your model of the world.  

一句话，时间再次成为伟大的平衡器，无论你的世界模型如何，观察一个复杂系统的演变都是无可替代的。

But above all, I learned that **geeks think they are rational beings, while they are completely influenced by buzz, marketing, and their emotions**. Even more so than the average person, because they believe they are less susceptible to it than normies, so they have a blind spot.  

但最重要的是，我了解到，极客们认为自己是理性的人，而他们却完全被热闹、营销和自己的情绪所影响。甚至比普通人更受影响，因为他们认为自己比常人更不容易受影响，所以他们有一个盲点。

XML was just the beginning of many, many waves of hype.  

XML只是许多、许多炒作浪潮的开始。

When MongoDB came around ([it's web scale!](https://youtu.be/b2F-DItXtZs)), suddenly you had to use [NoSQL](https://en.wikipedia.org/wiki/NoSQL) for everything. Didn't matter that there was absolutely no relation between 2 NoSQL systems. It's like labeling a country as "doesn't speak English". Didn't matter [MongoDB](https://en.wikipedia.org/wiki/MongoDB) was a terrible product at the time that was destroying your data (they did fix that, it's now a good DB to have in your toolbox). Didn't matter that most people using it didn't need free replication because their data could fit in a [SQlite](https://docs.python.org/3/library/sqlite3.html) file.  

当MongoDB出现的时候（它是网络规模的！），突然间你不得不使用NoSQL来处理所有事情。两个NoSQL系统之间完全没有关系，这并不重要。这就像给一个国家贴上 "不说英语 "的标签。MongoDB在当时是一个糟糕的产品，它破坏了你的数据（他们确实解决了这个问题，现在它是你工具箱中的一个好的数据库），这并不重要。大多数使用它的人不需要自由复制，因为他们的数据可以放在一个SQlite文件中，这并不重要。

So we watched beginners put their data with no schema, no consistency, and broken validation in a big bag of blobs. The projects fail in mass.  

所以我们看着初学者把他们的数据放在一个没有模式、没有一致性、没有验证的大袋子里。这些项目大规模地失败了。

Then the [node](https://nodejs.org/en) era arrived. [Isomorphic JavaScript](https://en.wikipedia.org/wiki/Isomorphic_JavaScript) was all the rage, you _had_ to use the same language in the frontend and the backend, and make everything [async](https://docs.python.org/3/library/asyncio.html). But JS sucked, so most JS projects were created... to avoid writing [ES5](https://en.wikipedia.org/wiki/ECMAScript#5th_Edition). I mean, no import, no namespace, terrible scoping, [schizophreniac](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) `this`, [prototype based inheritance](https://en.wikipedia.org/wiki/Prototype-based_programming), weak types, come on! So we got [coffeescript](https://coffeescript.org/), then [babel](https://babeljs.io/), [webpack](https://webpack.js.org/), [typescript](https://www.typescriptlang.org/), [react + JSX,](https://legacy.reactjs.org/docs/jsx-in-depth.html) etc.  

然后，节点时代到来了。同构的JavaScript风靡一时，你必须在前端和后端使用相同的语言，并使一切异步。但是JS很烂，所以大多数JS项目都是为了避免编写ES5而创建的。我的意思是，没有导入，没有命名空间，糟糕的范围界定，精神分裂的 `this` ，基于原型的继承，弱类型，来吧所以我们有了coffeescript，然后是babel、webpack、typescript、react + JSX，等等。

We were told to stay on top of the most modern ecosystem, and by that I mean dealing with compatibility being broken every two months. That’s the price of cutting edge tree-shaking transpilation. That, and a [left-pad](https://www.theregister.com/2016/03/23/npm_left_pad_chaos/) way of life you couldn’t debug because the map files were generated wrong.  

我们被告知要保持在最现代的生态系统的顶端，而这意味着每两个月就要处理一次兼容性被破坏的问题。这就是最先进的树形转译的代价。还有一种你无法调试的左键生活方式，因为地图文件的生成是错误的。

At this point, everything needed to be a [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application) with client-side routing, [immutable data structures](https://immutable-js.com/) and some kind of store. That is, if you could chose between flux, redux, alt, reflux, flummox, fluxible, fluxxor, marty.js, fynx, MacFly, DeLorean.js, fluxify, fluxury, exim, fluxtore, Redx, fluxx… No, [I’m not making that up.](https://github.com/kriasoft/react-starter-kit/issues/22)  

在这一点上，所有的东西都需要是一个单页应用程序，具有客户端路由、不可变的数据结构和某种存储功能。也就是说，如果你能在 flux, redux, alt, reflux, flummox, fluxible, fluxxor, marty.js, fynx, MacFly, DeLorean.js, fluxify, fluxury, exim, fluxtore, Redx, fluxx...不，我不是在编故事。

But because you still had to pass a lot of data through the wire, and since everything had to be on the client, [GraphQL](https://graphql.org/) was born. Of course, all that stuff had terrible accessibility, [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) and first-rendering time issues, leading to the rise of [Server-Side Rendering](https://vuejs.org/guide/scaling-up/ssr.html), aka CGI with extra steps. This couldn’t stop there, so the community added hydration on top.  

但是，由于你仍然需要通过电线传递大量的数据，而且一切都必须在客户端进行，因此GraphQL诞生了。当然，所有这些东西都有糟糕的可访问性、搜索引擎优化和首次渲染时间问题，导致了服务器端渲染的兴起，也就是带有额外步骤的CGI。这不能止步于此，所以社区在上面增加了水化功能。

This turned out to be an immense addition in complexity, and created tons and tons of disposable code base, leading to, you get it, failed projects and waste of money.  

这被证明是一个巨大的复杂性的增加，并创造了成吨的一次性代码库，导致了，你知道的，失败的项目和金钱的浪费。

Because, of course, most of those tasks could have been done with [Ruby-On-Rail](https://rubyonrails.org/), [Symfony](https://symfony.com/) or [Django](https://www.djangoproject.com/) and a pinch of [jQuery](https://jquery.com/). At least, they would have been finished with those boring techs. Instead, dead projects began to accumulate, and for one Figma shinning, you had a trail of hidden bodies behind corporate walls nobody dared to talk about.  

因为，当然，这些任务大部分都可以用Ruby-On-Rail、Symfony或Django和一小撮jQuery来完成。至少，他们会用这些无聊的技术完成。相反，死掉的项目开始积累起来，为了一个Figma闪亮登场，你有一串隐藏在公司墙壁后面的尸体，没有人敢于谈论。

It was taboo to speak about this madness. You were the one not getting it.  

谈论这种疯狂的行为是一种禁忌。你是那个不明白的人。

You would think people drowning while trying to produce a basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) app would have been a red flag.  

你会认为人们在试图制作一个基本的CRUD应用程序时被淹死会是一个红旗。

Instead, it inspired teams everywhere in the world to make things harder on themselves.  

相反，它激发了世界各地的团队，使他们对自己更加苛刻。

First, the "everything should be a [micro-service](https://en.wikipedia.org/wiki/Microservices)" crowd started to take over. Every single small website had a [docker](https://www.docker.com/resources/what-container/) container for the restish API, plus one for the front end, and one for the database. Indirection layers on top of indirection layers. To communicate between all that, why not a little message queue? [ZeroMQ](https://zeromq.org/), [RabbitMQ](https://www.rabbitmq.com/)... And a good exchange format, like [grpc](https://grpc.io/) with [protobuff](https://github.com/protocolbuffers/protobuf).  

首先，"一切都应该是一个微服务 "的人群开始接管了。每个小网站都有一个用于restish API的docker容器，还有一个用于前端，一个用于数据库。指向层在指向层的上面。为了在所有这些之间进行通信，为什么不使用一个小的消息队列呢？ZeroMQ, RabbitMQ...还有一个好的交换格式，像grpc和protobuff。

Believe it or not, it became very hard to make your todo-list app work with all those, so a solution was found: adding orchestration. [Docker swarm](https://docs.docker.com/engine/swarm/), and now [kubernetes](https://kubernetes.io/).  

信不信由你，要让你的todo-list应用与所有这些人一起工作变得非常困难，所以找到了一个解决方案：加入协调机制。Docker swarm，以及现在的kubernetes。

At this stage, so much time and money were obliterated the cloud felt like a savior: they will do all that for you, for a fee. You just had to learn their entire way of doing things, debug their black box, be locked in their ecosystem, and carefully optimize and configure - using state-of-the-art templated YAML files and hostile UIs - your entire project, so that you could only spend 10 times more on hosting, and not 10000 times by mistake.  

在这个阶段，如此多的时间和金钱被湮没了，云感觉就像一个救世主：他们会为你做所有的事情，但要收费。你只需要学习他们的整个做事方式，调试他们的黑匣子，被锁定在他们的生态系统中，并仔细优化和配置--使用最先进的模板化YAML文件和敌对的UI--你的整个项目，这样你就只能在主机上多花10倍的钱，而不是错误的10000倍。

Easy.

Second, big data arrived. You had to store every single click of your users. A/B test everything as well, so that you consistently annoy 10% of your customers and make support unbearable. Now the data you had was gigantic! And if it was not, you had to believe it, and you needed some kind of [Dynamo](https://en.wikipedia.org/wiki/Amazon_DynamoDB) data lake. Or maybe a time series db. Or a graph one. You needed something, that's for sure.  

第二，大数据的到来。你不得不存储你的用户的每一次点击。A/B测试也是如此，这样你就能持续地惹恼你的10%的客户，并使支持变得难以忍受。现在，你所拥有的数据是巨大的如果它不是，你必须相信它，你需要某种Dynamo数据湖。或者是一个时间序列数据库。或者一个图表。你需要一些东西，那是肯定的。

Third, all of that stuff was now very slow. It was not because of the terrible technical decisions leading to use Google level industrial architectures for your 100 request/seconds website, no. It was because you used a slow language. So let's rewrite everything in Go. Or Rust.  

第三，所有这些东西现在都很慢。这不是因为可怕的技术决定导致你的100个请求/秒的网站使用谷歌级别的工业架构，不是。而是因为你使用了一种缓慢的语言。所以让我们用Go重写一切。或者Rust。

The compilation step is not going to have any impact on the feedback loop anyway, since the CI pipeline already takes 73 minutes.  

反正编译步骤不会对反馈循环产生任何影响，因为CI管道已经需要73分钟。

That was the last straw, so out of tiredness, devs went back to simple ways...  

那是最后一根稻草，所以出于疲惫，开发者们又回到了简单的方式......

Just kidding, they went in flocks to [serverless lambda](https://en.wikipedia.org/wiki/AWS_Lambda) and SaaS services you call [from the edge](https://de.wikipedia.org/wiki/Edge_Computing), cause not owning your stack is the future!  

开玩笑，他们成群结队地去找无服务器的Lambda和你从边缘调用的SaaS服务，因为不拥有你的堆栈才是未来!

Meanwhile, while the blog posts about burn out were increasing tenfold, somewhere at the top, leaders heard the call of money.  

与此同时，当关于职业倦怠的博客文章增加了十倍时，在高层的某个地方，领导人听到了金钱的召唤。

You can't grow without making everything social.  

如果不使一切都社会化，你就无法成长。

Gamify, gamify, gamify.  

游戏化、游戏化、游戏化。

Block chain will change the universe.  

区块链将改变宇宙。

You need an [AMP website](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages).  

你需要一个AMP网站。

Your stuff is not competitive without Machine Learning.  

没有机器学习，你的东西就没有竞争力。

If you lived through all those, you know what remains about it: almost nothing.  

如果你经历了所有这些，你知道关于它的遗留问题：几乎没有。

A few "share" buttons and "login with" workflows. Some points and badges. Graphs.  

一些 "分享 "按钮和 "登录 "工作流程。一些积分和徽章。图形。

Things either died, or filled the niche they were good at, as they should.  

事物要么死亡，要么填补它们擅长的利基，因为它们应该如此。

Some were replaced by the future of today.  

一些人被今天的未来所取代。

I like the new hype: [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) is popular again.  

我喜欢新的炒作：YAGNI又开始流行了。

Projects like [Vue](https://vuejs.org/), [HTMX](https://htmx.org/) and [unpoly](https://unpoly.com/), [alpine.js](https://alpinejs.dev/) or just vanilla are getting traction.  

像Vue、HTMX和unpoly、alpine.js或仅仅是vanilla这样的项目正在获得牵引力。

There is talk of coming back to using Postgres for most things.  

有人说要回到使用Postgres来处理大多数事情。

[37signals is on the spotlight once more, because they left the cloud.  

37signals再次成为焦点，因为他们离开了云。](https://world.hey.com/dhh/we-have-left-the-cloud-251760fb)

It will, of course, be overdone. Because minimalism being hyped is still... hype.  

当然，这将是过度的。因为被炒作的极简主义仍然是......炒作。

You do need the cloud, containers, nosql, go, rust and js build systems. Modern software requirements, customers’ expectations and incredible new features are not to be ignored.  

你确实需要云、容器、nosql、go、rust和js构建系统。现代软件的要求、客户的期望和令人难以置信的新功能是不容忽视的。

Just not for everything.  

只是不是对所有的事情。

Nothing is ever needed for everything.  

没有什么是永远需要的，一切都不需要。
