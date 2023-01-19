---
title: "我在 20 年的软件工程师生涯中学到的 20 件事 - Simple Thread"
date: 2023-01-19T18:57:25+08:00
updated: 2023-01-19T18:57:25+08:00
taxonomies:
  tags: []
extra:
  source: https://www.simplethread.com/20-things-ive-learned-in-my-20-years-as-a-software-engineer/
  hostname: www.simplethread.com
  author: Justin Etheredge
  original_title: "20 Things I've Learned in my 20 Years as a Software Engineer"
  original_lang: en
---

![20 Things I’ve Learned in my 20 Years as a Software Engineer](pocket-watch-scaled.jpg)

Worried you’ll miss us? 担心你会想念我们？

Subscribe to get our articles and updates in your inbox.  
订阅以在您的收件箱中获取我们的文章和更新。

## Important, Read This First 重要，请先阅读此内容

You’re about to read a blog post with a _lot_ of advice. Learning from those who came before us is instrumental to success, but we often forget an important caveat. Almost all advice is contextual, yet it is rarely delivered with any context.  
您即将阅读一篇包含大量建议的博客文章。向前人学习对成功至关重要，但我们常常忘记一个重要的警告。几乎所有的建议都是上下文相关的，但很少在任何上下文中提供。

“You just need to charge more!” says the company who has been in business for 20 years and spent years charging “too little” to gain customers and become successful.  
“你只需要收取更多费用！”这家经营了 20 年的公司说，多年来收费“太低”，无法赢得客户并取得成功。

“You need to build everything as microservices!” says the company who built a quick monolith, gained thousands of customers, and then pivoted into microservices as they started running into scaling issues.  
“你需要将一切构建为微服务！”该公司表示，他们构建了一个快速的整体，获得了数千名客户，然后在开始遇到扩展问题时转向微服务。

Without understanding the context, the advice is meaningless, or even worse, harmful. If those folks had followed their own advice early on, they themselves would likely have suffered from it. It is hard to escape this trap. We may be the culmination of our experiences, but we view them through the lens of the present.  
如果不了解上下文，建议就毫无意义，甚至更糟，有害。如果那些人早点听从他们自己的建议，他们自己很可能会因此而受苦。很难逃脱这个陷阱。我们可能是我们经历的顶点，但我们是通过现在的镜头来看待它们的。

So to give you a little context on where my advice comes from, I spent the first half of my career as a software engineer working for various small businesses and startups, then I went into consulting and worked in a number of really large businesses. Then I started Simple Thread and we grew from a team of 2 to a team of 25. 10 years ago we worked with mostly small/medium businesses, and now we work with a mix of big and small businesses.  
因此，为了让您了解一下我的建议的来源，我在职业生涯的前半段担任软件工程师，为各种小型企业和初创公司工作，然后我进入咨询行业并在许多非常大的企业工作。然后我开始了 Simple Thread，我们从一个 2 人的团队成长为一个 25 人的团队。10 年前，我们主要与中小型企业合作，现在我们与大型和小型企业合作。

My advice is from someone who…  
我的建议来自于……

1.  has almost always been on small, lean teams where we have to do a lot with very little.  
    几乎总是在小而精干的团队中，我们必须用很少的资源做很多事情。
2.  values working software over specific tools.  
    重视工作软件而不是特定工具。
3.  is starting new projects all the time, but also has to maintain a number of systems.  
    一直在开新项目，还要维护一些系统。
4.  values engineer productivity over most other considerations  
    重视工程师的生产力胜过大多数其他考虑因素

My experiences over the last 20 years have shaped how I view software, and have led me to some beliefs which I’ve tried to whittle down to a manageable list that I hope you find valuable.  
我过去 20 年的经历塑造了我对软件的看法，并使我形成了一些信念，我试图将这些信念缩减成一个易于管理的列表，希望你能发现它们的价值。

## On with the list 在清单上

### 1\. I still don’t know very much  
1.我还不是很了解

“How can you not know what BGP is?” “You’ve never heard of Rust?” Most of us have heard these kinds of statements, probably too often. The reason many of us love software is because we are lifelong learners, and in software no matter which direction you look, there are wide vistas of knowledge going off in every direction and expanding by the day. This means that you can spend decades in your career, and still have a huge knowledge gap compared to someone who has also spent decades in a seemingly similar role. The sooner you realize this, the sooner you can start to shed your imposter syndrome and instead delight in learning from and teaching others.  
“你怎么不知道BGP是什么？” “你从未听说过 Rust？”我们大多数人都听过这类说法，而且可能听得太频繁了。我们中的许多人喜欢软件的原因是因为我们是终身学习者，在软件中，无论您从哪个方向看，都有广阔的知识前景向各个方向发展，并且每天都在扩展。这意味着你可以在你的职业生涯中度过数十年，但与同样在看似相似的角色中度过数十年的人相比，仍然存在巨大的知识差距。你越早意识到这一点，你就能越早开始摆脱冒名顶替综合症，转而乐于向他人学习和教导他人。

### 2\. The hardest part of software is building the right thing  
2\. 软件最难的部分是构建正确的东西

I know this is cliche at this point, but the reason most software engineers don’t believe it is because they think it devalues their work. Personally I think that is nonsense. Instead it highlights the complexity and irrationality of the environments in which we have to work, which compounds our challenges. You can design the most technically impressive thing in the world, and then have nobody want to use it. Happens all the time. Designing software is mostly a listening activity, and we often have to be part software engineer, part psychic, and part anthropologist. Investing in this design process, whether through dedicated UX team members or by simply educating yourself, will deliver enormous dividends. Because how do you really calculate the cost of building the wrong software? It amounts to a lot more than just lost engineering time.  
我知道在这一点上这是陈词滥调，但大多数软件工程师不相信的原因是他们认为这贬低了他们的工作。我个人认为这是无稽之谈。相反，它突出了我们必须工作的环境的复杂性和不合理性，这加剧了我们的挑战。你可以设计出世界上技术上最令人印象深刻的东西，然后却没有人愿意使用它。一直在发生。设计软件主要是一种倾听活动，我们经常不得不成为部分软件工程师、部分通灵者和部分人类学家。投资于这个设计过程，无论是通过专门的 UX 团队成员还是通过简单的自我教育，都将带来巨大的回报。因为您如何真正计算构建错误软件的成本？这不仅仅是损失的工程时间。

### 3\. The best software engineers think like designers  
3\. 最好的软件工程师像设计师一样思考

Great software engineers think deeply about the user experience of their code. They might not think about it in those terms, but whether it is an external API, programmatic API, user interface, protocol, or any other interface; great engineers consider who will be using it, why it will be used, how it will be used, and what is important to those users. Keeping the user’s needs in mind is really the heart of good user experience.  
伟大的软件工程师会深入思考他们代码的用户体验。他们可能不会用这些术语来考虑它，而是考虑它是外部 API、编程 API、用户界面、协议还是任何其他界面；伟大的工程师会考虑谁将使用它，为什么要使用它，如何使用它，以及对这些用户来说什么是重要的。牢记用户的需求确实是良好用户体验的核心。

### 4\. The best code is no code, or code you don’t have to maintain  
4.最好的代码是没有代码，或者你不必维护的代码

All I have to say is “coders gonna code.” You ask someone in any profession how to solve a problem, and they are going to err on the side of what they are good at. It is just human nature. Most software engineers are always going to err on the side of writing code, especially when a non-technical solution isn’t obvious. The same goes for code you don’t have to maintain. Engineering teams are apt to want to reinvent the wheel, when lots of wheels already exist. This is a balancing act, there are lots of reasons to grow your own, but beware of toxic “Not Invented Here” syndrome.  
我只想说“编码员会编码”。你问任何行业的人如何解决问题，他们都会在他们擅长的方面犯错误。这只是人性。大多数软件工程师总是会在编写代码时犯错，尤其是当非技术解决方案不明显时。您不必维护的代码也是如此。当很多轮子已经存在时，工程团队很容易想要重新发明轮子。这是一种平衡行为，有很多理由让你自己种植，但要提防有毒的“非这里发明”综合症。

### 5\. Software is a means to an end  
5\. 软件是达到目的的手段

The primary job of any software engineer is delivering value. Very few software developers understand this, even fewer internalize it. Truly internalizing this leads to a different way of solving problems, and a different way of viewing your tools. If you really believe that software is subservient to the outcome, you’ll be ready to really find “the right tool for the job” which might not be software at all.  
任何软件工程师的主要工作都是交付价值。很少有软件开发人员理解这一点，将其内化的就更少了。真正将其内化会导致解决问题的不同方式，以及查看工具的不同方式。如果你真的相信软件是从属于结果的，你就会准备好真正找到“适合工作的工具”，这可能根本不是软件。

### 6\. Sometimes you have to stop sharpening the saw, and just start cutting shit  
6\. 有时你不得不停止磨锯，开始切割狗屎

Some people tend to jump into problems and just start writing code. Other people tend to want to research and research and get caught in analysis paralysis. In those cases, set a deadline for yourself and just start exploring solutions. You’ll quickly learn more as you start solving the problem, and that will lead you to iterate into a better solution.  
有些人倾向于跳入问题中并开始编写代码。其他人往往想要研究和研究并陷入分析瘫痪。在这些情况下，为自己设定一个截止日期，然后开始探索解决方案。当你开始解决问题时，你会很快学到更多，这将引导你迭代到更好的解决方案。

### 7\. If you don’t have a good grasp of the universe of what’s possible, you can’t design a good system  
7\. 如果你不能很好地把握宇宙的可能性，你就无法设计出好的系统

This is something I struggle with a lot as my responsibilities take me further and further from the day to day of software engineering. Keeping up with the developer ecosystem is a huge amount of work, but it is critical to understand what is possible. If you don’t understand what is possible and what is available in a given ecosystem then you’ll find it impossible to design a reasonable solution to all but the most simple of problems. To summarize, be wary of people designing systems who haven’t written any code in a long time.  
这是我一直在努力解决的问题，因为我的职责使我在软件工程的日常工作中越来越远。跟上开发者生态系统是一项巨大的工作，但了解什么是可能的至关重要。如果您不了解给定生态系统中什么是可能的以及什么是可用的，那么您将发现除了最简单的问题之外，不可能设计出一个合理的解决方案来解决所有问题。总而言之，要警惕那些很长时间没有编写任何代码的系统设计人员。

### 8\. Every system eventually sucks, get over it  
8\. 每个系统最终都很糟糕，克服它

Bjarne Stroustrup has a quote that goes “There are only two kinds of languages: the ones people complain about and the ones nobody uses”. This can be extended to large systems as well. There is no “right” architecture, you’ll never pay down all of your technical debt, you’ll never design the perfect interface, your tests will always be too slow. This isn’t an excuse to never make things better, but instead a way to give you perspective. Worry less about elegance and perfection; instead strive for continuous improvement and creating a livable system that your team enjoys working in and sustainably delivers value.  
Bjarne Stroustrup 有一句名言：“只有两种语言：人们抱怨的语言和没人使用的语言”。这也可以扩展到大型系统。没有“正确”的架构，你永远无法偿还所有的技术债务，你永远无法设计出完美的界面，你的测试总是太慢。这不是永不让事情变得更好的借口，而是一种给你观点的方式。少担心优雅和完美；相反，努力持续改进并创建一个您的团队喜欢在其中工作并可持续地创造价值的宜居系统。

### 9\. Nobody asks “why” enough 9\. 没有人问“为什么”够多

Take any opportunity to question assumptions and approaches that are “the way things have always been done”. Have a new team member coming on board? Pay attention to where they get confused and what questions they ask. Have a new feature request that doesn’t make sense? Make sure you understand the goal and what is driving the desire for this functionality. If you don’t get a clear answer, keep asking why until you understand.  
抓住任何机会质疑“做事的方式”的假设和方法。有新的团队成员加入吗？注意他们在哪里感到困惑以及他们问什么问题。有没有意义的新功能请求？确保您了解目标以及是什么推动了对这一功能的渴望。如果您没有得到明确的答案，请继续问为什么，直到您明白为止。

### 10\. We should be far more focused on avoiding 0.1x programmers than finding 10x programmers  
10\. 我们应该更专注于避免 0.1 倍的程序员而不是寻找 10 倍的程序员

[The 10x programmer is a silly myth.](https://www.simplethread.com/the-10x-programmer-myth/) The idea that someone can produce in 1 day what another competent, hard working, similarly experienced programmer can produce in 2 weeks is silly. I’ve seen programmers that sling 10x the amount of code, and then you have to fix it 10x the amount of times. The only way someone can be a 10x programmer is if you compare them to 0.1x programmers. Someone who wastes time, doesn’t ask for feedback, doesn’t test their code, doesn’t consider edge cases, etc… We should be far more concerned with keeping 0.1x programmers off our teams than finding the mythical 10x programmer.  
10 倍程序员是一个愚蠢的神话。某人可以在 1 天内生产出另一个有能力、勤奋、有类似经验的程序员可以在 2 周内生产的想法是愚蠢的。我见过程序员编写 10 倍的代码，然后你必须修复它 10 倍的次数。某人可以成为 10 倍程序员的唯一方法是将他们与 0.1 倍程序员进行比较。有人浪费时间，不寻求反馈，不测试他们的代码，不考虑边缘情况等等……我们应该更关心让 0.1x 程序员远离我们的团队，而不是寻找神话般的 10x 程序员。

### 11\. One of the biggest differences between a senior engineer and a junior engineer is that they’ve formed opinions about the way things should be  
11\. 高级工程师和初级工程师之间最大的区别之一是他们已经形成了对事情应该怎样做的看法

Nothing worries me more than a senior engineer that has no opinion of their tools or how to approach building software. I’d rather someone give me opinions that I violently disagree with than for them to have no opinions at all. If you are using your tools, and you don’t love or hate them in a myriad of ways, you need to experience more. You need to explore other languages, libraries, and paradigms. There are few ways of leveling up your skills faster than actively seeking out how others accomplish tasks with different tools and techniques than you do.  
没有什么比对他们的工具或如何构建软件没有意见的高级工程师更让我担心的了。我宁愿有人给我强烈反对的意见，也不愿他们完全没有意见。如果您正在使用您的工具，并且您不会以多种方式喜欢或讨厌它们，那么您需要体验更多。您需要探索其他语言、库和范例。没有什么比积极寻找其他人如何使用与您不同的工具和技术来完成任务更快地提高技能的方法了。

### 12\. People don’t really want innovation  
12\. 人们并不是真的想要创新

People talk about innovation a whole lot, but what they are usually looking for is cheap wins and novelty. If you truly innovate, and change the way that people have to do things, expect mostly negative feedback. If you believe in what you’re doing, and know it will really improve things, then brace yourself for a long battle.  
人们经常谈论创新，但他们通常寻找的是廉价的胜利和新奇。如果你真正地创新，并改变人们做事的方式，那么大多数情况下都会收到负面反馈。如果您相信自己正在做的事情，并且知道它确实会改善事情，那么请为自己的长期战斗做好准备。

### 13\. Your data is the most important part of your system  
13\. 你的数据是你系统中最重要的部分

I’ve seen a lot of systems where hope was the primary mechanism of data integrity. In systems like this, anything that happens off the golden path creates partial or dirty data. Dealing with this data in the future can become a nightmare. Just remember, your data will likely long outlive your codebase. Spend energy keeping it orderly and clean, it’ll pay off well in the long run.  
我见过很多系统，其中希望是数据完整性的主要机制。在这样的系统中，任何在黄金路径之外发生的事情都会产生部分或脏数据。将来处理这些数据可能会变成一场噩梦。请记住，您的数据可能会比您的代码库长寿。花精力保持秩序和清洁，从长远来看会有很好的回报。

### 14\. Look for technological sharks  
14.寻找技术鲨鱼

Old technologies that have stuck around are [sharks, not dinosaurs](https://www.simplethread.com/relational-databases-arent-dinosaurs-theyre-sharks/). They solve problems so well that they have survived the rapid changes that occur constantly in the technology world. Don’t bet against these technologies, and replace them only if you have a very good reason. These tools won’t be flashy, and they won’t be exciting, but they will get the job done without a lot of sleepless nights.  
仍然存在的旧技术是鲨鱼，而不是恐龙。他们解决问题的能力如此之强，以至于在技术世界不断发生的快速变化中幸存下来。不要与这些技术打赌，只有在有充分理由的情况下才更换它们。这些工具不会华而不实，也不会令人兴奋，但它们会在没有很多不眠之夜的情况下完成工作。

### 15\. Don’t mistake humility for ignorance  
15\. 不要把谦虚当成无知

There are a lot of software engineers out there who won’t express opinions unless asked. Never assume that just because someone isn’t throwing their opinions in your face that they don’t have anything to add. Sometimes the noisiest people are the ones we want to listen to the least. Talk to the people around you, seek their feedback and advice. You’ll be glad you did.  
有很多软件工程师除非被问到，否则不会发表意见。永远不要认为仅仅因为有人没有把他们的意见扔到你面前，他们就没有什么可以补充的。有时最吵闹的人是我们最不想听的人。与周围的人交谈，寻求他们的反馈和建议。你会很高兴你做到了。

### 16\. Software engineers should write regularly  
16\. 软件工程师应该定期写作

Software engineers should regularly blog, journal, write documentation and in general do anything that requires them to keep their written communication skills sharp. Writing helps you think about your problems, and helps you communicate those more effectively with your team and your future self. Good written communication is one of the most important skills for any software engineer to master.  
软件工程师应该定期写博客、写日记、写文档，通常做任何需要他们保持书面沟通技巧的事情。写作可以帮助您思考问题，并帮助您更有效地与团队和未来的自己沟通。良好的书面沟通是任何软件工程师都需要掌握的最重要的技能之一。

### 17\. Keep your processes as lean as possible  
17\. 尽可能保持流程精简

Everyone wants to be agile these days, but being “agile” is about building things in small chunks, learning, and then iterating. If someone is trying to shoehorn much more into it than that, then they’re [probably selling something](https://www.simplethread.com/agile-at-20-the-failed-rebellion/). It isn’t to say that people don’t need accountability or help to work this way, but how many times have you heard someone from your favorite tech company or large open source project brag about how great their Scrum process is? Stay lean on process until you know you need more. Trust your team and they will deliver.  
现在每个人都想变得敏捷，但“敏捷”就是以小块的方式构建事物，学习，然后迭代。如果有人试图从中塞进更多东西，那么他们可能是在卖东西。这并不是说人们不需要问责或帮助以这种方式工作，但你有多少次听到你最喜欢的科技公司或大型开源项目的人吹嘘他们的 Scrum 流程有多棒？保持精益过程，直到你知道你需要更多。相信您的团队，他们会交付成果。

### 18\. Software engineers, like all humans, need to feel ownership  
18\. 软件工程师和所有人一样，需要有归属感

If you divorce someone from the output of their work, they will care less about their work. I see this almost as a tautology. This is the primary reason why cross-functional teams work so well, and why DevOps has become so popular. It isn’t all about handoffs and inefficiencies, it is about owning the whole process from start to finish, and being directly responsible for delivering value. Give a group of passionate people complete [ownership over designing](https://www.simplethread.com/doerrs-law-on-product-teams/), building, and delivering a piece of software (or anything really) and amazing things will happen.  
如果你把某人从他们的工作成果中分离出来，他们就会更少关心他们的工作。我认为这几乎是同义反复。这是跨职能团队工作得如此出色以及 DevOps 变得如此流行的主要原因。这不仅仅是关于交接和效率低下，而是关于从头到尾拥有整个流程，并直接负责交付价值。让一群充满激情的人完全拥有设计、构建和交付软件（或任何东西）的权利，惊人的事情就会发生。

### 19\. Interviews are almost worthless for telling how good of a team member someone will be  
19\. 面试对于告诉某人将成为多么优秀的团队成员几乎毫无价值

Interviews are far better spent trying to understand who someone is, and how interested they are in a given field of expertise. Trying to suss out how good of a team member they will be is a fruitless endeavor. And believe me, how smart or knowledgable someone is is also not a good indicator that they will be a great team member. No one is going to tell you in an interview that they are going to be unreliable, abusive, pompous, or never show up to meetings on time. People might claim they have “signals” for these things… “if they ask about time off in the first interview then they are never going to be there!” But these are all bullshit. If you’re using signals like these you’re just guessing and turning away good candidates.  
面试最好花在了解某人是谁，以及他们对特定专业领域的兴趣程度上。试图推测他们将成为多么优秀的团队成员是徒劳的。相信我，一个人有多聪明或多博学也不能很好地表明他们将成为一名优秀的团队成员。没有人会在面试中告诉你他们不可靠、爱辱骂、自负或从不准时参加会议。人们可能会声称他们对这些事情有“信号”……“如果他们在第一次面试中询问请假，那么他们永远不会去那里！”但这些都是废话。如果您使用这些信号，您只是在猜测并拒绝优秀的候选人。

### 20\. Always strive to build a smaller system  
20.始终努力构建一个更小的系统

There are a lot of forces that will push you to build the bigger system up-front. Budget allocation, the inability to decide which features should be cut, the desire to deliver the “best version” of a system. All of these things push us very forcefully towards building too much. You should [fight this](https://www.simplethread.com/where-does-complexity-go/). You learn so much as you’re building a system that you will end up iterating into a much better system than you ever could have designed in the first place. This is surprisingly a hard sell to most people.  
有很多力量会促使您预先构建更大的系统。预算分配，无法决定应该削减哪些功能，希望提供系统的“最佳版本”。所有这些事情都非常有力地推动我们建造太多。你应该打这个。你在构建一个系统时学到了很多东西，你最终会迭代到一个比你最初设计的系统更好的系统。令人惊讶的是，这对大多数人来说是难以接受的。

## What is your story?

So there you have it, 20 years of software distilled down into 20 pithy pieces of wisdom. I’d love to hear it if something resonated with you. I’d also love to hear if you have a piece of wisdom that you’ve picked up over your career that you’d like to share. Feel free to leave it down in the comments.  
所以你有它，20 年的软件提炼成 20 条精辟的智慧。如果有什么能引起你的共鸣，我很想听听。我也很想听听您是否有在您的职业生涯中积累的智慧并愿意与人分享。请随意在评论中留下它。

Loved the article? Hated it? Didn’t even read it?  
喜欢这篇文章？讨厌吗？甚至没读过？

We’d love to hear from you.  
我们很乐意听取您的意见。

[Reach Out 伸手](https://www.simplethread.com/contact)
