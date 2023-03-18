---
title: "论大型语言模型 - Tao of Mac"
date: 2023-03-18T12:50:53+08:00
updated: 2023-03-18T12:50:53+08:00
taxonomies:
  tags: []
extra:
  source: https://taoofmac.com/space/blog/2023/03/18/0140
  hostname: taoofmac.com
  author: Rui Carmo
  original_title: "On Large Language Models"
  original_lang: en
---

I’ve been pretty quiet about ChatGPT and Bing for a number of [reasons](https://taoofmac.com/space/site/disclaimer), the most pertinent of which is that I have so much more going on in my life right now.  

我对ChatGPT和Bing的事情一直很平静，原因有很多，其中最相关的是我现在的生活有很多事情要做。

But I think it’s time to jot down some notes on how I feel about Large Language Models (henceforth abbreviated to LLMs) and the current hype around them.  

但我认为现在是时候记下一些关于我对大型语言模型（以下简称LLMs）和目前围绕它们的炒作的看法了。

And I’m going to try to do that from the perspective of someone who:  

而我将尝试从一个人的角度来做这件事。

-   Graduated from college soon after the peak of the 90’s [AI Winter](https://en.wikipedia.org/wiki/AI_winter) (yeah, I’m old–we call it “experience” these days)  
    
    在90年代人工智能冬季的高峰期过后不久就从大学毕业了（是的，我已经老了--现在我们称之为 "经验"）。
-   Actually decided _not_ to major in AI (but rather in more networking-focused topics) because of said Winter, although I went and racked up my point average by acing AI coursework as optional credits.  
    
    事实上，我决定不主修人工智能（而是主修更注重网络的课题），因为上述冬天，尽管我去了，并通过将人工智能课程作业作为选修学分来提高我的平均分。
-   Survived several hype cycles over the past 30 years.  
    
    在过去30年里，经历了几个炒作周期。
-   Dove into analytics and data science during the “resurgence” in 2012 [and enjoyed it immensely](https://taoofmac.com/space/blog/2017/07/23/2254) (as well as racking up a few ML certifications) before getting sucked into telco again.  
    
    在2012年的 "复苏 "期间，我进入了分析和数据科学领域，并且非常喜欢这个领域（同时也获得了一些ML认证），然后又被电信公司吸走了。
-   Spends an unhealthy amount of time reading papers and mulling things.  
    
    花费了大量不健康的时间阅读文件和琢磨事情。

Plus the field is evolving so quickly that I’ve drafted this around four times–all the while progressively shrinking it it down to a quick tour over what I think are the key things to ponder.  

再加上这个领域的发展如此之快，以至于我已经起草了四次--同时逐步将其缩减为快速浏览我认为需要思考的关键问题。

[## How Smart is an LLM, anyway?  

LLM到底有多聪明？](https://taoofmac.com/space/blog/2023/03/18/0140#how-smart-is-an-llm-anyway)

I’m going to start with an obvious fact, which is that LLMs _just seem to be smart_. Sometimes recklessly so.  

我将从一个明显的事实开始，那就是法律硕士似乎就是很聪明。有时会不顾一切地这么做。

Yes, typical outputs are vastly better than [Markov chains](https://en.wikipedia.org/wiki/Markov_chain), and there is a tendency to draw a rough parallel with running the probabilities for the next token through the LLM.  

是的，典型的输出比马尔科夫链要好得多，而且有一种倾向，即通过LLM来运行下一个标记的概率，这是个粗略的平行。

Like people like [Tim Bray](https://www.tbray.org/ongoing/When/202x/2023/03/14/Binging) have pointed out, that is seriously underestimating the complexity of what is represented in model weights.  

就像蒂姆-布雷等人指出的那样，这严重低估了模型权重所代表的内容的复杂性。

The reason why the Markov analogy breaks down is that LLM output is not probabilistic–there is randomness involved in setting up inference, sure, and sequential correlation between output tokens, but the factors driving the output are several dozens of orders of magnitude above what we were used to.  

马尔科夫类比破裂的原因是，LLM的输出不是概率性的--当然，在设置推理时有随机性，输出标记之间也有顺序的相关性，但驱动输出的因素比我们所习惯的要高出几十个数量级。

Random outcomes like the LLM starting to hallucinate are just par for the course of a neural network trying to go beyond the training data, or focusing attention on parts that lack enough conditioning to have a decent output.  

像LLM开始产生幻觉这样的随机结果，只是一个神经网络试图超越训练数据的过程，或者将注意力集中在缺乏足够条件的部分，以获得体面的输出。

But going back to the initial point, there is _zero_ “knowledge” or intelligence in an LLM. There are _impressive_ amounts of correlation, to be sure, but the core principle [harks back to the first AI Winter](https://en.wikipedia.org/wiki/Chinese_room)–it’s just that we’ve crossed a quality threshold that seemed hitherto unattainable.  

但回到最初的观点，法律硕士中的 "知识 "或智能是零。可以肯定的是，有令人印象深刻的相关性，但其核心原则可以追溯到第一个人工智能冬季--只是我们已经跨越了一个迄今为止似乎无法实现的质量门槛。

It may look like emergent behavior, but that is simply because we can’t trace every step that led to the output. There is no agency, nor real “understanding”.  

它可能看起来像涌现的行为，但那只是因为我们无法追踪导致输出的每一步。没有机构，也没有真正的 "理解"。

And, as anyone who’s read [Douglas Hofstadter](https://en.wikipedia.org/wiki/Douglas_Hofstadter) will point out, there is also no “strange loop” or a coherent capability to self-reference–the outputs are just the result of navigating an LLM’s internal representation of massive amounts of data, and they’re entirely _functional_ in more than one sense of the word.  

而且，正如任何读过道格拉斯-霍夫斯塔特（Douglas Hofstadter）的人都会指出的那样，也不存在 "奇怪的循环 "或连贯的自我参照能力--输出只是浏览LLM对大量数据的内部表述的结果，而且它们在不止一个意义上是完全功能性的。

[## Things Are Just Getting Started 万事开头难](https://taoofmac.com/space/blog/2023/03/18/0140#things-are-just-getting-started)

Shoving all those orders of magnitude into something that can fit into an enterprise-class GPU (or, increasingly, a GPU and a hefty set of NVMe drives) takes quite a toll, and training LLMs requires massive computational power that is (for the moment) outside an individual’s reach.  

把所有这些数量级的东西塞进一个企业级的GPU（或者越来越多地塞进一个GPU和一组巨大的NVMe驱动器）需要付出相当大的代价，而训练LLM需要大量的计算能力，这（目前）是个人所不能承受的。

But that is certain to change over time, and _inference_ is already possible on consumer-grade hardware–like this past couple of weeks’ spate of news around [`llama.cpp`](https://github.com/ggerganov/llama.cpp) proves, there is _a lot_ of low hanging fruit where it regards optimizing running the models, and at multiple levels<sup id="fnref:1" data-immersive-translate-effect="1"><a href="https://taoofmac.com/space/blog/2023/03/18/0140#fn:1" rel="anchor">1</a></sup>.  

但这肯定会随着时间的推移而改变，而且推理已经可以在消费级硬件上实现--就像过去几周围绕 `llama.cpp` 的一系列新闻所证明的那样，在优化运行模型方面有很多低垂的果实，而且是多层次的 <sup id="fnref:1" data-immersive-translate-effect="1"><a href="https://taoofmac.com/space/blog/2023/03/18/0140#fn:1" rel="anchor">1</a></sup> 。

Although things like weight quantization degrade the output quality quite a bit, I expect more techniques to pop up as more eyes go over the papers and code that are already out there and spot more gaps and tricks to run LLMs efficiently.  

虽然像权重量化这样的东西会使输出质量下降很多，但我希望随着更多的人翻阅已经存在的论文和代码，发现更多的差距和技巧来有效地运行LLM，会有更多的技术出现。

And despite the fact that the spotlight is on OpenAI and the massive cloud infrastructure required, I personally find it a lot more interesting to figure out how low LLMs can go and still produce coherent results.  

尽管焦点集中在OpenAI和所需的大规模云计算基础设施上，但我个人认为，弄清楚LLMs可以低到什么程度并仍然产生连贯的结果要有趣得多。

This because I have fairly high hopes for tailored models, and see a lot of value in having fully on-premises and even embedded solutions–I know I’m bucking the trend here, but the history of computing is one of decentralization, and you’re probably reading this on a smartphone… So my point should be obvious.  

这是因为我对量身定做的模式抱有相当大的希望，并认为拥有完全的企业内部甚至是嵌入式解决方案有很大的价值--我知道我在这里逆潮流而动，但计算的历史是一个分散的历史，而你可能正在用智能手机阅读这篇文章......所以我的观点应该是很明显的。

[## What Are LLMs Good For? LMS有什么用？](https://taoofmac.com/space/blog/2023/03/18/0140#what-are-llms-good-for)

Having spent entirely too long dealing with customer support and call centers (I actually find the generic “chatbot” thing extremely annoying, and resisted getting into building those, but such is life), I’d say that, at the very least, LLMs are certain to take virtual assistants and support chatbots to the next level.  

我花了太长时间与客户支持和呼叫中心打交道（实际上，我发现通用的 "聊天机器人 "非常令人讨厌，并抵制建立这些东西，但这就是生活），我想说，至少，法律硕士肯定会把虚拟助理和支持聊天机器人带到新的水平。

And no, this is not a new idea–it’s been hashed to death over the years, and the real problem is that most support knowledge bases are useless, even if you manually tag every snippet of information and carefully craft interaction flows. Traditional chatbots (and even summarization-driven ones) simply _suck_ at doing the kind of basic correlation even a script-driven, barely trained human can pull off on autopilot, and hacking them together was always a brittle and unrewarding endeavor.  

不，这不是一个新的想法--多年来它已经被讨论得面目全非，真正的问题是大多数支持知识库都是无用的，即使你手动标记每一个信息片段并仔细制作互动流程。传统的聊天机器人（甚至是摘要驱动的聊天机器人）在做那种基本的相关性方面很糟糕，即使是脚本驱动的、几乎没有受过训练的人类也能自动完成，而且将它们黑在一起总是一种脆弱的、没有回报的努力。

But an LLM is trained on _other content_ as a baseline, which gives it a much better ability to fill in the gaps in such knowledge bases, and certainly have better conversational skills than a goldfish–and I can see LLMs doing a decent job in highly patterned, formalized inputs like legal documents, medical reports, retail catalogues, etc.  

但是，法学硕士是以其他内容为基线进行训练的，这使其有更好的能力来填补这些知识库中的空白，当然也有比金鱼更好的对话技巧--我可以看到法学硕士在高度模式化、正规化的输入方面做得很好，如法律文件、医疗报告、零售目录等等。

[## How Reliable Are These Things? 这些东西的可靠性如何？](https://taoofmac.com/space/blog/2023/03/18/0140#how-reliable-are-these-things)

To be honest, right now, not that much. I wouldn’t rely on _any_ publicly available LLM for decision-making of any kind (coding, advice, or even accurate summarization), although every iteration improves things noticeably.  

说实话，现在，没有那么多。我不会依靠任何公开可用的LLM来做任何形式的决策（编码、建议，甚至准确的总结），尽管每一次迭代都会明显地改善事情。

Sure, some of the [humor](https://taoofmac.com/space/links/2022/12/12/1327) and “style transfer” is pretty hilarious, but LLMs still have trouble with basic math, let alone writing reliable code<sup id="fnref:2" data-immersive-translate-effect="1"><a href="https://taoofmac.com/space/blog/2023/03/18/0140#fn:2" rel="anchor">2</a></sup>–they’re not even that useful at “rubber ducking” a problem.  

当然，一些幽默和 "风格转移 "是相当搞笑的，但法学硕士在基本数学方面仍然有问题，更不用说写出可靠的代码了 <sup id="fnref:2" data-immersive-translate-effect="1"><a href="https://taoofmac.com/space/blog/2023/03/18/0140#fn:2" rel="anchor">2</a></sup> -他们甚至在 "橡皮泥 "问题上也不那么有用。

Outputs are generally shallow and LLMs still have trouble creating coherent long form without hallucinating, but I do think they can be useful as _baselines_ for a human to improve upon, as long as that person has a good enough grasp of the problem domain to spot obvious flaws in “reasoning” (not just incorrections, but also gaps) and the willingness to double check any references.  

产出一般都很浅，法学硕士仍然很难在不产生幻觉的情况下创造出连贯的长篇文章，但我确实认为它们可以作为人类改进的基线，只要这个人对问题领域有足够好的把握，能够发现 "推理 "中的明显缺陷（不仅仅是错误，还有差距），并愿意仔细检查任何参考文献。

Of course, any of those sanity checks seem absent from a lot of the hype-driven discussions I’m seeing online… But, more to the point, LLMs do seem to knock things out of the park for short interactions.  

当然，我在网上看到的很多以炒作为目的的讨论中似乎没有这些理智的检查......但是，更重要的是，法律硕士似乎在短期互动中把事情做得很好。

Which is why I think the search market disruption gambit is going to pay off handsomely–LLMs make for a _much better_ search experience because you get adjacent information you would otherwise be unable to get from either direct or statistical matches (and you don’t get pesky ads, keyword squatters, etc.)  

这就是为什么我认为搜索市场的破坏性赌博将得到丰厚的回报--LLMs带来了更好的搜索体验，因为你得到了邻近的信息，否则你将无法从直接或统计匹配中得到这些信息（而且你不会得到讨厌的广告、关键词占用者等）。

[## How Manageable Are These Things? 这些事情的可控性如何？](https://taoofmac.com/space/blog/2023/03/18/0140#how-manageable-are-these-things)

This is where I have the most doubts, to be honest.  

说实话，这是我疑虑最多的地方。

The current “programming paradigm” is hopelessly primitive, and all the early deployment shenanigans prove it–prompt stealing and prompt injection attacks (which can be [much more interesting](https://greshake.github.io/) than you’d expect) remind me of all the loopholes Asimov managed to squeeze out of The Three Laws of Robotics.  

目前的 "编程范式 "是无可救药的原始状态，所有早期的部署诡计都证明了这一点--提示窃取和提示注入攻击（这可能比你预期的要有趣得多）让我想起了阿西莫夫设法从《机器人三定律》中挤出的所有漏洞。

Plus the ease with which the models “hallucinate” and veer off into the wild blue yonder were, until recently, being dealt with by ham-fisted tactics like limiting the number of consecutive interactions with the model.  

再加上模型容易产生 "幻觉 "并偏离到蓝色的远方，直到最近还在用限制与模型连续互动的次数这样的笨拙策略来处理。

In short, it all feels… very [Sorceror’s Apprentice](https://en.wikipedia.org/wiki/The_Sorcerer%27s_Apprentice), to be honest.  

简而言之，这一切感觉......很像《巫师的学徒》，说实话。

And I don’t think “stacking” models or just creating embeddings is going to help here–long-term curation of model inputs is going to be key.  

我不认为 "堆叠 "模型或只是创建嵌入会有帮助--模型输入的长期策划将是关键。

Which means time-consuming, costly, and ever more challenging work to improve general purpose LLMs, especially those targeting search (where having non-AI generated training sets is going to be harder and harder).  

这意味着要改进通用的LLMs，特别是那些针对搜索的LLMs（拥有非AI生成的训练集会越来越难），需要耗费时间、成本和越来越多的挑战。

[## Fast Iteration, But What About Fast Training?  

快速迭代，但快速训练呢？](https://taoofmac.com/space/blog/2023/03/18/0140#fast-iteration-but-what-about-fast-training)

Another important constraint that is being glossed over is that there is no easy, immediate feedback loop to improve an LLM–in the current chat-like interaction models you can add more context to a session, but:  

另一个被掩盖的重要制约因素是，没有一个简单的、即时的反馈回路来改善LLM--在目前类似聊天的互动模式中，你可以为一个会话添加更多的背景，但是。

-   It doesn’t really “stick”–sometimes not even subsequent invocations (even if the session wrappers are continuously improving, you’re effectively adding stubs to the original prompt, and that can only go so far).  
    
    它并没有真正 "坚持 "下来--有时甚至没有后续的调用（即使会话包装器在不断改进，你实际上是在为原始提示添加存根，而这只能走到这里）。
-   Any on-the-fly corrections don’t become part of the core model (you need to have a full training iteration).  
    
    任何即时修正都不会成为核心模型的一部分（你需要有一个完整的训练迭代）。

These things can be worked around, but are fundamental limitations–and yet, they don’t have any real consequence for simple one-shot tasks like “summarize this webpage” and most of the “productivity boosters” we’re likely to see over the coming months.  

这些事情可以解决，但它们是基本的限制--然而，它们对简单的一次性任务，如 "总结这个网页 "和我们在未来几个月可能看到的大多数 "生产力促进器"，并没有任何真正的后果。

But they do compound my notion that LLMs feel more like an impressive party trick than a broadly sweeping change in paradigm–at least for now. Their real impact lies elsewhere, and most likely beyond the obvious chatbot scenarios.  

但它们确实加重了我的看法，即法律硕士感觉更像是一种令人印象深刻的聚会技巧，而不是一种广泛的范式变革--至少目前是这样。它们的真正影响在于其他方面，而且很可能超出了明显的聊天机器人的范畴。

It would be nice to take away a lot of the drudgery we’ve baked into computer use (as well as several typical knowledge worker tasks), although there are interesting (and risky) implications in empowering certain kinds of people to mass-produce content<sup id="fnref:3" data-immersive-translate-effect="1"><a href="https://taoofmac.com/space/blog/2023/03/18/0140#fn:3" rel="anchor">3</a></sup>…  

如果能把我们在计算机使用方面的许多苦差事（以及一些典型的知识工作者的任务）拿掉就好了，尽管在授权某些种类的人大规模生产内容方面有一些有趣（和风险）的影响 <sup id="fnref:3" data-immersive-translate-effect="1"><a href="https://taoofmac.com/space/blog/2023/03/18/0140#fn:3" rel="anchor">3</a></sup> ...

[## Conclusion 结论](https://taoofmac.com/space/blog/2023/03/18/0140#conclusion)

So where does this leave us?  

那么，这让我们怎么办呢？

Well, we’re clearly in the upward swing of the hype cycle. And, like I pointed out at the start of this piece, I’ve been there before–the quick iteration, the optimizations, the unexpected new techniques in established domains, and the fallout (both good and bad). Those parts are [not hard](https://taoofmac.com/space/blog/2022/12/27/1800) to predict.  

好吧，我们显然正处于炒作周期的上升期。而且，就像我在这篇文章的开头指出的那样，我以前也经历过这种情况--快速迭代、优化、在既定领域中出现意想不到的新技术，以及后果（包括好的和坏的）。这些部分都不难预测。

The big difference this time is that for users, the barrier to entry is effectively nil, and, again, the outputs are _way_ better (and more impressive) than anything else we’ve seen before. Even if it’s still just a more elaborate Chinese Room, there is a lot more public interest and momentum than is usual in most tech hype cycles.  

这次最大的不同是，对于用户来说，进入的门槛实际上是零，而且，产出比我们之前看到的任何东西都要好（而且更令人印象深刻）。即使它仍然只是一个更精致的中国房间，但与大多数技术炒作周期中的通常情况相比，公众的兴趣和动力要大得多。

So yes, this one is going to be a bumpy ride, and not just for geeks. Make sure you have your metaphorical seat belt on tight.  

因此，是的，这将是一次颠簸的旅程，而且不仅仅是对极客而言。请确保你把你的隐喻安全带系紧。
