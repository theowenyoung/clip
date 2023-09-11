---
title: "如何建立一个联邦宇宙都欢迎的搜索 - Anil Dash"
date: 2023-09-10T01:30:53+08:00
updated: 2023-09-10T01:30:53+08:00
taxonomies:
  tags: []
extra:
  source: https://www.anildash.com/2023/01/16/a-fediverse-search/
  hostname: www.anildash.com
  author: undefined
  original_title: "How you could build a search that the fediverse would welcome - Anil Dash"
  original_lang: en
---

Mastodon and the fediverse are clearly taking off, bringing in millions of new users, and also organically inspiring a wave of technical innovation that dwarfs all of the efforts that the bribes and empty promises of the Web3 crypto bubble couldn't touch. I'm even enjoying having settled into a relatively permanent new fediverse address at [@anildash@me.dm](https://me.dm/@anildash), on Medium's new [Mastodon instance](https://blog.medium.com/medium-embraces-mastodon-19dcb873eb11), which (along with Mozilla's similar [upcoming instance](https://blog.mozilla.org/en/mozilla/mozilla-launch-fediverse-instance-social-media-alternative/)) should do a lot to legitimize the nascent open system. It's all great to see, though of course there are huge challenges that come along with this growth, and most of them (as always, with social media) are largely about people and culture, not technology.  

显然，Mastodon 和 fediverse 正在起飞，带来了数以百万计的新用户，同时也有机地激发了技术创新的浪潮，这让所有的努力都相形见绌，Web3 加密泡沫中的贿赂和空洞承诺都无法触及。我甚至乐于在 Medium 的新 Mastodon 实例上使用一个相对固定的 fediverse 新地址 @anildash@me.dm，该实例（连同 Mozilla 即将推出的类似实例）将大大促进新生开放系统的合法化。这一切都令人欣喜，当然，伴随着这一增长而来的还有巨大的挑战，其中大部分（一如既往，对于社交媒体而言）主要与人和文化有关，而非技术。

Nothing exemplifies these opportunities and challenges better than search. Search has long been the killer app of the web, since the days of Yahoo and AltaVista on to the long reign of Google's dominance, to today's web where SEO is dying and TikTok is (inexplicably, to text-lovers like me) increasingly on the rise. In that complex environment, the intentional absence of substantial search features in the fediverse, especially in the flagship Mastodon experience that defines the nascent fediverse for so many new users, seems inexplicable. But search is also a signifier to those who pioneered and established the current era of the fediverse, symbolizing the extractive and exploitative hypergrowth systems that often ruined the positivity and promise of the human web.  

没有什么比搜索更能体现这些机遇和挑战了。长期以来，搜索一直是网络的杀手级应用，从雅虎和 AltaVista 时代开始，到谷歌长期占据主导地位，再到如今搜索引擎优化日渐式微，TikTok（对于像我这样的文字爱好者来说，这一点令人费解）日益兴起。在这种复杂的环境中，联邦世界有意缺乏实质性的搜索功能，尤其是在旗舰版的 "Mastodon "体验中，似乎令人费解。但是，对于那些开创和建立了当前联邦宇宙时代的人来说，搜索也是一个标志，象征着榨取性和剥削性的超增长系统，而这些系统往往破坏了人类网络的积极性和前景。

Here's one of the most popular posts I'd ever shared on my first Mastodon account. I think it resonated so much because it articulates one of the key unspoken values of the fediverse.  

这是我在第一个 Mastodon 账户上分享的最受欢迎的文章之一。我认为它之所以能引起如此大的共鸣，是因为它阐明了联邦宇宙的一个关键的、不为人知的价值观。

Given that context, it's no surprise that a less experienced fediverse user, no matter how well-intentioned, might well accidentally antagonize some people while trying to build search features for Mastodon users. I've known Jan Lehnardt online for a long time, and known him to make lots of thoughtful things, but I'd missed his initial introduction of Searchtodon, an attempt at introducing personal search (not a public search engine) for the fediverse that I think a lot of long-time fediverse users could have anticipated would cause some consternation, despite his clear intent to be consensual and considered in his implementation. It's well worth reading his [detailed retrospective](https://searchtodon.social/Adventures-in-Mastoland.html) on the reaction to the service.  

有鉴于此，一个经验不足的联邦宇宙用户，无论其用心多么良苦，在试图为 Mastodon 用户构建搜索功能时，很可能会意外地与某些人产生对立，这并不奇怪。我在网上认识 Jan Lehnardt 已经有很长一段时间了，也知道他做了很多深思熟虑的事情，但我却错过了他最初对 Searchtodon 的介绍，那是一次为 fediverse 引入个人搜索（而非公共搜索引擎）的尝试。值得一读的是，他对这项服务的反应进行了详细的回顾。

I realize I've had an idea for how to implement Fediverse search for a long time that I've talked about privately with people but not shared broadly, and it's probably doing a disservice to potential implementors to not share some of my thinking. It also seems like it'd be great to float the idea as a _concept_ rather than an implementation, so that people could react to the idea without the increased emotional urgency of feeling like they have to react to an existing potential threat.  

我意识到我有一个关于如何实现 Fediverse 搜索的想法已经有很长一段时间了，我曾私下与人讨论过这个想法，但并没有广泛分享。另外，如果能把这个想法作为一个概念而不是一个实施方案提出来，似乎也会很不错，这样人们就可以对这个想法作出反应，而不会因为感觉必须对现有的潜在威胁作出反应而增加情绪上的紧迫感。

## Why search?

The first question to address when talking about creating a search to serve fediverse users is _why do this in the first place_? A lot of people would argue (to varying degrees of thoughtfulness) that this kind of capability shouldn't exist at all. Eugen Rochko, the lead developer and creator of Mastodon, and de facto administrator of community norms and consent for such features across the entire fediverse, addressed this many years ago in a post that I remember being largely non-controversial at the time.  

在讨论创建一个为联邦宇宙用户服务的搜索时，首先要解决的问题是为什么要这样做？很多人（在不同程度上）都会认为这种功能根本就不应该存在。Eugen Rochko 是 Mastodon 的首席开发者和创建者，同时也是整个联邦宇宙中此类功能的社区规范和同意的实际管理者，他在多年前的一篇文章中谈到了这个问题，我记得当时基本上没有引起争议。

But interestingly, even that core assertion would likely be strongly debated in an environment that, six years later, feels even more fraught. So let's lay out some key reasons for why a search capability _might_ be a net positive for the fediverse, explore the arguments against it, and then share the parameters of a potential implementation that could deliver on the positives without triggering the negatives.  

但有趣的是，即使是这一核心论断，在六年后的环境中也可能会引起激烈的争论，而六年后的环境则让人感觉更加紧张。因此，让我们列出一些关键理由，说明为什么搜索功能对联邦宇宙来说可能是一个净积极因素，探讨反对它的论点，然后分享一个潜在实施方案的参数，该方案既能实现积极因素，又不会引发消极因素。

First, the benefits of search:  

首先是搜索的好处：

-   **Search enables content to be citable and referenceable over time.** The web itself was created as a medium for publishing, and then _linking to_ (citing) those published works, and being able to search for an item vastly increases the odds that it will be cited or discovered later, increasing the ability to build knowledge, and especially allowing good ideas to be found later on even if their creators didn't initially have reach or reputation or social access which allowed their ideas to spread at the time they were published.  
    
    搜索使内容可以长期引用和参考。网络本身就是作为发表作品，然后链接（引用）这些已发表作品的媒介而创建的，能够搜索某个项目大大增加了其日后被引用或被发现的几率，提高了构建知识的能力，尤其是让好的想法日后被发现，即使这些想法的创造者最初并没有影响力、声誉或社会渠道，使其想法在发表时就能传播开来。
-   **Search can enable people to document their credentials and authority.** This is most vital for people who are part of vulnerable or marginalized communities, where coming with receipts is a fundamental part of asserting authority in a culture that might otherwise dismiss or diminsh their work.  
    
    搜索可以让人们记录自己的证书和权威。这对于属于弱势或边缘化群体的人来说至关重要，因为在这些群体中，有收据是在文化中维护权威的基本要素，否则他们的工作可能会被文化否定或贬低。
-   **Search enables many kinds of fun, creative and meaningful expressions.** From a technical perspective, hashtags and other forms of group sharing/discovery are just specific implementations of search. These are foundational for many kinds of play, like hashtags used for riffing on cultural events or trends, as well as the oft-cited impact of hashtags used for activism. But even if it doesn't follow the form of traditional hashtags, search enables community forming through collective recall of memorable moments or particular turns of phrase.  
    
    搜索可以实现多种有趣、有创意和有意义的表达方式。从技术角度看，标签和其他形式的群组分享/发现只是搜索的具体实现方式。它们是多种游戏的基础，例如用于对文化事件或趋势进行反思的标签，以及经常被提及的用于激进主义的标签的影响。不过，即使不采用传统的标签形式，搜索也能通过集体回忆难忘时刻或特殊的措辞形成社区。
-   **Search can be a tool for reflection, growth and learning.** Many of us who've been on social media for years or decades have had the chance to look back at our own (or others') shared expressions and see how they've aged or changed in meaning over time, prompting a lot of reflection and reconsideration. Though the common perception of social media is shaped by its worst failure cases, where people are only ever increasingly polarized and never learn from their mistakes, the truth is that _billions_ of people have been on these networks for many years, and in the vast majority of cases, even where past messages were flawed or even embarrassing, most people used those awkward moments from themselves or others as a prompt for personal growth.  
    
    搜索可以成为反思、成长和学习的工具。我们中许多在社交媒体上活跃了数年或数十年的人都有机会回顾自己（或他人）的分享表达，看看它们是如何随着时间的推移而老化或意义发生变化的，从而引发大量的反思和重新考虑。虽然人们对社交媒体的普遍看法是由其最糟糕的失败案例形成的，人们只会越来越两极分化，永远不会从错误中吸取教训，但事实是，数十亿人已经在这些网络上使用了很多年，在绝大多数情况下，即使过去的信息存在缺陷甚至令人尴尬，大多数人也会将自己或他人的这些尴尬时刻作为个人成长的动力。
-   **Search can help us see our impact.** Being able to search for mentions of ourselves or our work can help us learn from reactions and responses, help us find connection or community from those who respond or react to our work, or help us confront areas to improve by seeing thoughtful critique or corrections that come from those in our networks or beyond. This kind of search can also be a form of credibility, as showing these responses (or even just the sheer volume of reactions) to something we write or publish can often be a powerful tool for gaining audience or institutional support over time. I've learned an immense amount of invaluble insights from people reacting to my writings here over the years, and _most_ of that was thanks to being able to search for reactions to my work, even if a lot of cynical culture tends to see "ego searching" as always being vain or insecure.  
    
    搜索可以帮助我们了解自己的影响力。能够搜索对我们自己或我们作品的提及，可以帮助我们从反应和回应中学习，帮助我们从那些对我们的作品做出回应或反应的人那里找到联系或社区，或者通过看到来自我们网络内外的深思熟虑的批评或纠正，帮助我们正视需要改进的地方。这种搜索也可以是一种可信度，因为展示这些对我们撰写或发表的作品的回应（甚至仅仅是回应的数量）往往可以成为一种强有力的工具，随着时间的推移赢得受众或机构的支持。尽管很多愤世嫉俗的文化倾向于将 "自我搜索 "视为虚荣或不自信，但多年来，我从人们对我在这里所写文章的反应中学到了大量宝贵的见解，其中大部分都要归功于能够搜索对我作品的反应。

Okay, then — if there are all these wonderful benefits to search, how can anyone be _against_ it? Why is there such cultural resistance to search in many corners of the fediverse? It's good to understand these valid and important objections, especially as they're seldom voiced in the for-profit, investor-backed tech industry (much of which is dependent on surveillance-based search for either its growth or sustenence).  

好吧，既然搜索有这么多好处，怎么会有人反对呢？为什么在联邦世界的许多角落，对搜索存在如此大的文化阻力？了解这些合理而重要的反对意见是件好事，尤其是在以营利为目的、由投资者支持的科技行业（其中大部分行业的发展或生存都依赖于基于监控的搜索）中，这些反对意见很少被提及。

-   **Search enables visibility, which means _vulnerability_ for many people.** Marginalized and vulnerable people are systematically targeted by hateful and often violent movements whenever they effectively communicate their ideas and advocate for their communities. As a result, making it easy for bad actors to search for, and subsequently target, these vulnerable people has been a constant, exhausting, and brutal reality of the social web for a generation. This takes literal form in realtime networks like Twitter, where we've seen (for example) homophobes in Saudi Arabia search for, and successfully identify, LGBTQ people whom they then targeted for legal persecution and imprisonment. Discoverability leads to literal danger for many, and the _terms_ of visibility are often unilaterally changed by for-profit entities without consent or even notification of those affected. For example, Facebook has, multiple times, taken content that was private or limited only to friends, and made it both publicly-accessible and easily searchable even by those who would use it to target and harm those who had originally created that content.  
    
    搜索使人们能够看到，这意味着许多人容易受到伤害。每当被边缘化的弱势群体有效地传播他们的思想并为他们的社区代言时，他们就会成为仇恨运动和暴力运动有计划地攻击的目标。因此，让坏人很容易地搜索到这些弱势人群并将其作为攻击目标，是社交网络一代人持续、疲惫而残酷的现实。在 Twitter 等实时网络中，我们看到（例如）沙特阿拉伯的同性恋者搜索并成功识别出 LGBTQ 群体，然后将其作为法律迫害和监禁的目标。对许多人来说，可发现性导致了真正的危险，而可视性的条款往往被营利性实体单方面改变，未经同意，甚至不通知受影响者。例如，Facebook 曾多次将私人内容或仅限于朋友的内容公开，并使其易于被搜索，甚至被那些会利用它来针对和伤害最初创建这些内容的人的人搜索到。
-   **Search removes context, which can open people up to being targeted.** There are many years of academic research about "context collapse", which are worth exploring for those who want to get a firmer grounding in this concern, but at its most basic, it's easy for anyone to understand that words or ideas taken out of context and hyper-amplified can make someone a target for harassment or attacks. Sometimes this can even start from a well-intentioned attempt at accountability for someone who has, either intentionally or unintentionally, shared a harmful idea, but then snowballs into something far more destructive than even the original critic intended. And most of these scenarios are, at a technical level, enabled by search.  
    
    搜索会删除语境，从而使人们成为攻击目标。关于 "语境坍塌 "的学术研究已经有很多年了，对于那些想更深入了解这一问题的人来说，这些研究值得一探究竟，但从最基本的角度来说，任何人都很容易理解，断章取义、夸大其词的言辞或观点会使人成为骚扰或攻击的目标。有时，这甚至可能是出于好意，试图对有意或无意分享了有害观点的人问责，但随后却像滚雪球一样越滚越大，甚至比最初的批评者想要的更具破坏性。从技术层面上讲，大多数这些情况都是由搜索促成的。
-   **Search enables monetization of people without their consent.** The web-scale search engines that define today's internet experience for billions of people have overwhelmingly operated without a concept of consent, creating increasingly aggressive norms for harvesting content and contributions without any compensation to those whose work is consumed and collected. Even the few tools that exist for "opt out" are often ignored, and more broadly the coercive effects of setting a default expectation of being _opted in_ means that those who would prefer to not be indexed and included in massive search systemss effectively have no choice if they want to participate in the contemporary digital world. This results in exploitations like nearly every digital artist who has ever written text or created an image being included in the training models for new AI systems, without ever explicitly consenting to that inclusion, and without any hope of ever being fairly compensated for the value they created for those systems. The vast majority of the base of training data for these systems were created under the pretense of improving search.  
    
    搜索使人们在未经同意的情况下实现货币化。网络规模的搜索引擎决定了当今数十亿人的互联网体验，它们的运行绝大多数都没有征得同意的概念，在不对其作品被消费和收集者进行任何补偿的情况下，创造了越来越强的内容收集和贡献规范。即使是为数不多的 "退出 "工具也常常被忽视，而更广泛地说，设置 "选择加入 "的默认期望所产生的胁迫效应意味着，那些不愿被索引和纳入大规模搜索系统的人如果想参与当代数字世界，实际上别无选择。这就导致了一些剥削行为，比如几乎所有写过文字或创作过图像的数字艺术家都被纳入了新的人工智能系统的训练模型中，但他们从未明确表示同意被纳入，也没有希望因为他们为这些系统创造的价值而获得公平的补偿。这些系统的绝大多数训练数据基础都是打着改进搜索的幌子创建的。
-   **Search incentivizes increasing surveillance over time.** Because search is still the most lucrative internet application that has ever been created, those who run large-scale search systems begin to capture more and more data over time as part of the feedback loop for increasing profits. It is a basic assumption that the larger a search index is, the more valuable the insights it can provide, and so violations of privacy, consent and user expectations become the norm due to the simple economic incentives in place for any search-based system.  
    
    随着时间的推移，搜索激励着人们不断加强监控。由于搜索仍然是有史以来最有利可图的互联网应用，那些运行大型搜索系统的公司开始随着时间的推移获取越来越多的数据，作为增加利润的反馈循环的一部分。一个基本的假设是，搜索索引越大，它所能提供的洞察力就越有价值，因此，由于任何基于搜索的系统都有简单的经济激励机制，侵犯隐私、用户同意和用户期望就成为常态。

This is nowhere near a comprehensive list of the dangers of search, but even just this handful of examples makes a pretty powerful point. **It is right, reasonable, and responsible to have a default assumption that people creating search will make systems that enable harms.**  

这还远远不是搜索危害的全面清单，但即使只是这几个例子，也能说明一个相当有力的问题。正确、合理和负责任的做法是，默认假设创建搜索系统的人会制造会造成危害的系统。

Despite that risk, I think it's possible to create a search system for the fediverse that could be responsible. The key lies in a concept that has come up many times in discussion: **consent**.  

尽管存在这种风险，但我认为还是有可能为联邦宇宙创建一个负责任的搜索系统。关键在于一个在讨论中多次出现的概念：同意。

The road to a search that works for the fediverse is to consider those who _want_ such a thing. Increasingly, they're from communities that value the benefits of search even while being keenly aware of the risks. [Hilda Bast](https://mastodon.online/@hildabast) did a wonderful job of gathering research on [quote tweeting](https://absolutelymaybe.plos.org/2023/01/12/quote-tweeting-over-30-studies-dispel-some-myths/) as part of an effort to bring some hard data to the fediverse discussion about quoting features, and it seems like it would be instructive for the search conversation as well. One finding that jumped out to me: "There’s quite solid evidence that journalists, politicians, and African-Americans use QTs more often." This difference in usage seems to mimic the positive use cases of search that these groups (and other similarly distinct and valuable contributors to social media) bring to the conversation.  

通往为联邦宇宙服务的搜索之路，就是要考虑到那些想要这样做的人。他们越来越多地来自重视搜索的好处，同时也清楚地意识到搜索的风险。希尔达-贝斯特（Hilda Bast）做了一项出色的工作，那就是收集有关引用推文的研究，为联邦世界有关引用功能的讨论提供了一些确凿的数据。其中一个发现让我眼前一亮："有确凿证据表明，记者、政治家和非裔美国人使用 QT 的频率更高。这种使用率上的差异似乎模仿了这些群体（以及社交媒体中其他类似的独特而有价值的贡献者）为搜索对话带来的积极用例。

So: What about a truly opt-in, consent-based approach to search? **We need a search bot that we can follow.**  

那么那么，真正基于选择、同意的搜索方式又如何呢？我们需要一个可以跟随的搜索机器人。

Whereas today's consumer web is shaped by Google sending its bots across the internet as rapaciously as possible, on the fediverse it should be entirely possible to create a search engine that is exposed to users as a bot that you can follow — and _unfollow_ — whenever you want. When you're following the searchbot, and you make a public post, it'll automatically be indexed and included in search. When you unfollow, or post something that the bot doesn't have permission to see, that content is automatically excluded from the search index.  

如今的消费者网络是由谷歌在互联网上尽可能疯狂地发送机器人所塑造的，而在联邦宇宙中，完全可以创建一个搜索引擎，将其作为一个机器人展示给用户，用户可以随时关注或取消关注机器人。当你关注了这个搜索机器人，并公开发表了一篇文章，它就会自动编入索引并被收录到搜索中。当你取消关注，或发布机器人无权查看的内容时，这些内容将自动从搜索索引中排除。

"But wait!" many will exclaim, "Who would ever opt into this?" People are going to be pretty skeptical that such an implementation could work. Well, I sure as hell would opt in, and I think a lot of others who like to be able to dip into the public conversation would do so as well, at least _part of the time_. You see, what this kind of system allows is for us to _choose_ when we're in public online, just like we can make that same decision most of the time in our offline lives. (Of course, [what is public](https://medium.com/message/what-is-public-f33b16d780f9) isn't always that simple.)  

"但是等等！"许多人会感叹，"谁会选择这样做呢？""人们会对这种实施方式是否可行持怀疑态度。好吧，我当然会选择加入，我想很多喜欢参与公共话题的人也会这样做，至少在部分时间是这样。你看，这种系统允许我们选择何时在网上公开，就像我们在离线生活的大部分时间里可以做出同样的决定一样。(当然，什么是公开并不总是那么简单）。

This idea is so unfamiliar that it often takes people a little while to really process the implications of it when I first describe the idea to them. Even as I've batted the idea around with smart people for a few years, their default stance is often to start from a standpoint that it would be _impossible_ to build such a system, even though it's very obviously much simpler and easier than the complicated and fraught search systems we all rely on every day. There are a couple of other really cool aspects about an opt-in search system:  

这个想法太陌生了，以至于当我第一次向人们描述这个想法时，他们往往需要花一点时间才能真正理解其中的含义。几年来，我一直在和聪明人讨论这个想法，但他们的默认立场往往是从 "建立这样一个系统是不可能的 "这个角度出发的，尽管这显然比我们每天都依赖的复杂而复杂的搜索系统要简单和容易得多。关于选择搜索系统，还有几个非常酷的方面：

-   By letting people explicitly choose when their content is indexed by the system, you end up with content that's a bit edited and filtered by default, likely _improving_ the quality of information in the system. And since everyone using this search knows that it's not comprehensive, _by design_, they'll be far more aware of the shortcomings of the system going in, in contrast to many users of the web today, who think that something that's not in Google must not exist.  
    
    通过让人们明确选择自己的内容何时被系统索引，你最终会得到一些经过编辑和过滤的默认内容，从而有可能提高系统中的信息质量。而且，由于使用这种搜索的每个人都知道它的设计并不全面，因此他们会更清楚地意识到系统的不足之处，而现在的许多网络用户则认为谷歌不收录的东西就一定不存在。
-   The opt-in nature of this search also necessarily limits its scale and size, and effectively negates the surveillance-based economic incentives that make other systems so rapacious about gathering our data. That means there's far less motivation for a creator to try to maximize monetization, it limits the kind of advertising or other extractive business models that can be applied, and it greatly reduces the risk of larger entities trying to purchase the entire system because it's so explicitly trust-based. It also greatly brings down operational costs because scaling of the technical infrastructure becomes far more predictable — you could even implement an invite-based system to reduce the risk of unexpected technical surprises.  
    
    这种搜索的选择性也必然限制了它的规模和大小，并有效地抵消了基于监控的经济激励机制，而这种激励机制正是其他系统在收集我们的数据时所肆无忌惮的。这就意味着，创作者试图最大限度地实现货币化的动力要小得多，它限制了可以应用的广告或其他榨取性商业模式，也大大降低了大型实体试图购买整个系统的风险，因为它是如此明确地基于信任。它还大大降低了运营成本，因为技术基础设施的扩展变得更可预测--你甚至可以实施一个基于邀请的系统，以降低意外技术惊喜的风险。
-   A search system that requires people to opt-in to also makes it far easier to identify whether an account that tries to follow the search bot is a real person or not, significantly reducing the impact of common spamming and manipulation techniques. Coordinated campaigns to try to game hashtags or search rankings are also far easier to detect if you can see the entire network of people that an account is connected to. You can even implement common community-management techniques like requiring an account to wait in a queue or to have been active for a certain period of time before it's allowed to contribute to the search index. These kind of community moderation techniques are well understood and quite mature after decades online, but they've never been effectively applied to search before.  
    
    需要用户选择加入的搜索系统还能更容易地识别试图关注搜索机器人的账户是否为真人，从而大大减少常见垃圾邮件和操纵技术的影响。如果你能看到一个账户所连接的整个人际网络，那么试图玩弄标签或搜索排名的协调活动也更容易被发现。你甚至可以实施常见的社区管理技术，比如要求账户在队列中等待或活跃一段时间后才允许为搜索索引做贡献。经过几十年的网络发展，这些社区管理技术已经非常成熟，但却从未有效地应用于搜索领域。
-   In true fediverse fashion, such a search system could also be open source, with the code inspectable by the community, and the criteria for search ranking being visible and understood by the community. Instead of a proprietary or secretive search algorithm that rewards those who are most committed to gaming the system, you can make the search ranking transparent, since you've removed much of the financial incentives that induce people to spam conventional search engines.  
    
    按照真正的联邦宇宙方式，这样的搜索系统也可以是开放源代码的，社区可以检查代码，搜索排名的标准是可见的，也是社区可以理解的。你可以让搜索排名透明化，而不是采用专有或保密的搜索算法来奖励那些最热衷于玩弄系统的人，因为你已经消除了诱使人们在传统搜索引擎上发送垃圾邮件的大部分经济诱因。

## Could it work?

Of course it won't necessarily be easy to build such an opt-in search system for the fediverse, but it's absolutely doable. The technology for building such a system is more accessible than ever, and the fediverse is still small enough in scale that one could use off-the-shelf tech to get started. The costs would be low enough to create as an experiment, and cheap enough over time to operate that it could be sustained by donations, perhaps alongside a few non-surveillance-based sponsorship ads.  

当然，为联邦宇宙建立这样一个选择搜索系统并不一定容易，但绝对是可行的。建立这样一个系统的技术比以往任何时候都更容易获得，而且联邦宇宙的规模仍然很小，人们可以使用现成的技术来起步。作为一项实验，其创建成本足够低，而随着时间的推移，其运营成本也足够低，可以通过捐款来维持，或许还可以加上一些非监控类的赞助广告。

The harder part is actually starting by building trust, socializing the idea with many long-time and/or trusted members of key fediverse communities. Explaining the concept and implementation to a number of moderators and admins of key fediverse instances and servers would go a long way, especially if they were allowed to examine the full system before anyone in their community is asked or invited to opt-in. Picking early users who are members of vulnerable communities, and who have been consistent in their criticism and skepticism about the tech titans that define search today would also do a lot ot build trust. And most importantly, providing robust and reliable tools for people to verify that their content is never included without their consent will also reduce a lot of the initial hesitancy that will surround such an offering. You'll need to have kick-ass privacy and content policies in place right from the start, but the community will be motivated to help you get them right.  

实际上，最困难的部分是如何建立信任，如何让关键的联邦宇宙社区中许多长期和/或值得信任的成员了解这一想法。向一些主要联邦宇宙实例和服务器的版主和管理员解释这一概念和实施方法会有很大帮助，尤其是如果允许他们在其社区中的任何人被要求或邀请加入之前检查整个系统的话。挑选早期用户时，如果他们是弱势社群的成员，并对当今搜索界的技术巨头持一贯的批评和怀疑态度，也将大大有助于建立信任。最重要的是，为人们提供强大可靠的工具来验证他们的内容是否在未经其同意的情况下被收录，这也会减少人们最初对这种服务的犹豫。你需要从一开始就制定出一流的隐私和内容政策，但社区会积极帮助你做好这些工作。

But: it's all very possible! It requires patience, and a genuine willingness to build something that grows slowly over time, instead of trying to take over the world. The reward for that patience will be both the creation of a valuable and unique new resource for the open web, as well as a powerful demonstration to the technology world that _other models are possible_, which may be just as valuable as the service itself.  

但是：这一切都很有可能！这需要耐心，需要真正愿意建立一个随着时间慢慢成长的东西，而不是试图占领世界。耐心的回报将是为开放网络创造一个有价值的、独一无二的新资源，同时也向技术世界有力地展示了其他模式的可能性，这些模式可能与服务本身一样有价值。

I hope someone (or a lot of someones!) build a system like this and that we see the flourishing of new approaches and a vital, thriving reminder that the open web is the truest way to inspire an exciting new wave of innovation. If you build it, let me know; I'll be first in line to follow your bot.  

我希望有人（或很多人！）能建立这样一个系统，让我们看到新方法的蓬勃发展，看到开放网络是激发令人兴奋的新一轮创新浪潮的最真实的方式。如果你建立了这样的系统，请告诉我；我将第一个跟进你的机器人。
