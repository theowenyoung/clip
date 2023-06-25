---
title: "写作中的常见错误"
date: 2023-06-25T01:19:28+08:00
updated: 2023-06-25T01:19:28+08:00
taxonomies:
  tags: []
extra:
  source: https://www.cs.columbia.edu/~hgs/etc/writing-bugs.html
  hostname: www.cs.columbia.edu
  author: Henning Schulzrinne
  original_title: "Common Bugs in Writing --- 写作中的常见错误"
  original_lang: zh
---

Preface (suggested by Bob Briscoe)  

序言（由鲍勃-布里斯科建议）

-   Be clear what you're trying to say before you write it.  
    
    在写之前要清楚你想说的是什么。
-   Don't get attached to words you have written; be prepared to scrap what you wrote while you were thrashing around trying to work out what you wanted to say, even if its a whole paper.  
    
    不要拘泥于你所写的文字；要准备好废掉你在试图弄清你想说什么时写的东西，即使是整篇论文。

Like almost all rules, there are cases where breaking them is a good idea and seasoned writers may well object with "but" responses for some of these. Thus, consider the rules below as mental rumble strips - you should probably slow down and think if you encounter these cases.  

像几乎所有的规则一样，有些情况下打破这些规则是个好主意，经验丰富的作家很可能会对其中一些规则用 "但是 "来反对。因此，把下面的规则看作是精神上的隆隆声--如果你遇到这些情况，你也许应该放慢脚步，好好想想。

1.  Avoid use of passive tense if at all possible. Example: "In each reservation request message, a refresh interval used by the sender is included." reads better and shorter as "Each ... message includes ..."  
    
    如果可能的话，避免使用被动时态。例如："在每个保留请求信息中，包括发送者使用的刷新间隔。"读起来更好更短，因为 "每个...信息包括..."。
2.  Use strong verbs instead of lots of nouns and simple terms rather than fancy-sounding ones. Examples:  
    
    使用强有力的动词而不是大量的名词，使用简单的术语而不是听起来很花哨的术语。举例来说：
    
    | verbose, weak verbs, bad  多言寡语，动词不足，不好 | short, strong, good  矮、强、好 |
    | --- | --- |
    | make assumption  作出假设 | assume  假设 |
    | is a function of  是一个函数 | depends on  取决于 |
    | is an illustration  是一个例证 | illustrates, shows  说明，显示 |
    | is a requirement  是一项要求 | requires, need to  要求，需要 |
    | utilizes  利用 | uses  使用 |
    | had difference  有差异 | differed  有所不同 |
    
3.  If you find yourself saying "In other words," it means you didn't say it clearly enough the first time. Go back and rewrite the first attempt.  
    
    如果你发现自己在说 "换句话说"，这意味着你第一次说得不够清楚。回去重写第一次的尝试。
4.  Avoid filler words, e.g., by converting sentences into a simple actor-action-object phrasing.  
    
    避免使用填充词，例如，将句子转换成简单的演员-行动-对象的措辞。
5.  Check for missing articles, particularly if your native tongue doesn't have them. Roughly, concepts and classes of things don't, most everything else more specific does. ("Routers route packets. The router architecture we consider uses small rodents.") Don't use articles in front of proper nouns and names ("Internet Explorer is a popular web browser. The current version number is 5.0. Bill Gates did not write Internet Explorer.") \[NEED POINTER HERE\]  
    
    检查是否有遗漏的冠词，特别是如果你的母语没有这些冠词。粗略地说，概念和事物的类别没有，其他大多数更具体的东西都有。("路由器路由数据包。我们考虑的路由器架构使用小型啮齿动物。")不要在专有名词和名字前面使用冠词（"Internet Explorer是一个流行的网络浏览器。目前的版本号是5.0。比尔-盖茨没有写IE浏览器。")\[这里需要指针\]
6.  Each sentence in a paragraph must have some logical connection to the previous one. For example, it may describe an exception ("but," "however"), describe a causality ("thus," "therefore," "because of this"), indicate two facets of an argument ("on the one hand," "on the other hand"), enumerate sub-cases ("first," "secondly") or indicate a temporal relationship ("then," "afterwards"). If there are no such hints, check if your sentences are indeed part of the same thought. A new thought should get its own paragraph, but still clearly needs some logical connection to the paragraphs that preceded it.  
    
    一个段落中的每个句子必须与前一个句子有一定的逻辑联系。例如，它可以描述一个例外（"但是"、"然而"），描述一个因果关系（"因此"、"因此"、"因为这样"），表明一个论点的两个方面（"一方面"、"另一方面"），列举子案例（"首先"、"其次"）或表明一个时间关系（"然后"、"之后"）。如果没有这样的提示，请检查你的句子是否确实是同一个思想的一部分。一个新的思想应该有自己的段落，但显然仍然需要与前面的段落有一些逻辑上的联系。
7.  Protocol abbreviations typically do not take an article, even if the expanded version does. For example, "The Transmission Control Protocol delivers a byte stream" but "TCP delivers a byte stream," since it an abstract term. ("The TCP design has been successful." is correct since the article refers to the design, not TCP.)  
    
    协议缩略语通常不占用文章，即使扩展后的版本也是如此。例如，"传输控制协议提供一个字节流"，但 "TCP提供一个字节流"，因为它是一个抽象的术语。("TCP设计已经成功。"是正确的，因为文章指的是设计，而不是TCP。)

Note that abbreviations for organizations do take a definite article, as in "The IETF standardized TCP."  

请注意，组织的缩写确实需要一个定冠词，如 "IETF规范了TCP"。

Since the "P" in TCP, UDP and similar abbreviations already stands for "protocol," saying the "the TCP protocol" is redundant, albeit common. (LCD, Liquid Crystal Display, is another common case where many are tempted to incorrectly write LCD display. Indeed, Google references 2,060,000 instances of that usage.)  

由于TCP、UDP和类似缩写中的 "P "已经代表了 "协议"，所以说 "TCP协议 "是多余的，尽管很常见。(LCD，液晶显示器，是另一种常见的情况，很多人都想错误地写成LCD显示器。事实上，谷歌引用了2,060,000个这种用法的实例）。

10.  Use consistent tense - present, usually, unless reporting results achieved in earlier papers.  
    
    使用一致的时态--通常是现在，除非报告在早期论文中取得的结果。
11.  **None**: None can take either singular or plural verbs, depending on the intended meaning (or taste). Both _none of these mistakes are common_ and _none of these mistakes is common_ are [correct](http://www.quinion.com/words/qa/qa-non2.htm), although other sources [only lists the singular](http://www.llrx.com/columns/grammar1.htm) and [The Tongue untied](http://grammar.uoregon.edu/agreement/singplr.html) makes finer distinctions based on whether it refers to a unit or a measure.  
    
    没有：None可以采取单数或复数动词，这取决于所要表达的意思（或味道）。这些错误都不常见，这些错误都不常见，都是正确的，尽管其他资料只列出了单数，而《舌尖上的中国》根据它是指单位还是指度量，做了更精细的区分。
12.  Use hyphens for concatenated words: "end-to-end architecture," "real-time operating system" (but "the computer may analyze the results in real time"), "per-flow queueing," "flow-enabled," "back-to-back," ...  
    
    使用连字符来表示连接词："端到端架构"、"实时操作系统"（但 "计算机可实时分析结果"）、"按流量排队"、"启用流量"、"背对背"......。

In general, hyphens are used  

一般来说，连字符被用于

-   adding prefixes that would result in double vowels (except for co-, de-, pre-, pro-), e.g., supra-auditory;  
    
    添加会导致双元音的前缀（co-、de-、pre-、pro-除外），如：supra-auditory；
-   all-: all-around, all-embracing;  
    
    all-：全方位，包罗万象；
-   half-: half-asleep, half-dollar (but halfhearted, halfway);  
    
    半：半睡半醒，半元钱（但半心半意，半途而废）；
-   quasi-: quasi-public  准：准公共的
-   self-: self-conscious, self-seeking (but selfhood, selfless)  
    
    自我：自我意识，自我追求（但自我身份，无私）。
-   to distinguish from a solid homograph, e.g., re-act vs. react, re-pose vs. repose, re-sign vs. resign, re-solve vs. resolve, re-lease vs. release  
    
    区别于坚实的同源词，例如，re-act vs. react, re-pose vs. repose, re-sign vs. resign, re-solve vs. resolve, re-lease vs. release。
-   A compound adjective made up of an adjective and a noun in combination should usually be hyphenated. (WiT, p. 230) Examples: cold-storage vault, hot-air heating, short-term loan, real-time operating system, application-specific integrated circuit, Internet-based.  
    
    由一个形容词和一个名词组合而成的复合形容词通常应该用连字符。(WiT, p. 230) 例如：冷藏库、热风加热、短期贷款、实时操作系统、特定应用集成电路、基于互联网。
-   words ending in -like when the preceding word ends in 'l', e.g., shell-like  
    
    词尾为'l'的-like词，如：shell-like

15.  Don't overuse dashes for separation, as they interrupt the flow of words. Dashes may be appropriate where you want to contrast thoughts very strongly or the dash part is a surprise of some sort. Think of it as a very long pause when speaking. In many cases, a comma-separated phrase works better. If you do use a dash, make sure it's not a hyphen (- in LaTeX), but an em-dash (--- in LaTeX).  
    
    不要过度使用破折号来分隔，因为它们会打断文字的流动。当你想把思想对比得非常强烈，或者破折号部分是某种惊喜的时候，破折号可能是合适的。把它看作是说话时的一个很长的停顿。在许多情况下，用逗号隔开的短语效果更好。如果你确实使用了破折号，请确保它不是连字符（LaTeX中的-），而是虚线（LaTeX中的--）。
16.  Avoid [_scare quotes_](http://www.cogs.susx.ac.uk/local/doc/punctuation/node31.html), as they indicate that the writer is distancing himself from the term or the term is meant to be ironic.  
    
    避免使用吓人的引号，因为它们表示作者与该术语保持距离，或者该术语是为了讽刺。
17.  Numbers ten or less are spelled out: "It consists of three fields," not "3 fields".  
    
    10或更少的数字是拼出来的："它由三个领域组成"，而不是 "3个领域"。
18.  Use until instead of the colloquial _till_.  
    
    用until代替口语化的till。
19.  Use. _Eq. 7_, not _Equation (7)_, unless you need to fill empty pages.  
    
    使用。方程7，而不是方程（7），除非你需要填补空页。
20.  _Optimal_ can't be improved - _more optimally_ should be _better_ or maybe _more nearly optimal_.  
    
    最优化不能被改进--更优化应该是更好的，或者说更接近优化。
21.  Avoid in-line enumeration like: "Packets can be (a) lost, (b) stolen, (c) get wet." The enumeration only interrupts the flow of thought. (There are exceptions, e.g., when you later refer to these cases.)  
    
    避免行内列举，如："数据包可能会（a）丢失，（b）被盗，（c）被淋湿。"枚举只会打断思维的流动。(也有例外，例如，当你以后提到这些情况时。)
22.  Avoid itemization (bullets) in most cases, as they take up extra space and make the paper read like PowerPoint slides. Bullets can, however, be used effectively to emphasize key points, if used sparingly. If you want to describe components or algorithms, often the LaTeX description environment works better, as it highlights the term, providing a low-level section delineation.  
    
    在大多数情况下，要避免逐项列举（子弹），因为它们会占用额外的空间，使论文读起来像PowerPoint幻灯片。不过，如果少用的话，子弹可以有效地用来强调关键点。如果你想描述组件或算法，通常LaTeX描述环境效果更好，因为它突出了术语，提供了一个低层次的章节划分。
23.  Avoid bulleted lists of one-sentence paragraphs. They make your paper look like a slide presentation and interfere with smooth reading.  
    
    避免使用单句式段落的列表。它们使你的论文看起来像一个幻灯片演示，并干扰了阅读的流畅性。
24.  Instead of "Reference \[1\] shows" or "\[1\] shows," use "Smith \[1\] showed" or "Smith and Jones \[1\] showed" or "Smith _et al._ \[1\] showed" (if more than two authors). ["et al."](http://www.sparknotes.com/writing/style/topic_76.html) is generally used for papers with more than two authors. (Note that "et al." makes the subject plural if the authors are the subject of the sentence [rather than the paper](http://english.stackexchange.com/questions/99886/is-et-al-used-as-a-singular-or-plural-subject), so it is "Smith et al. \[1\] show" not "shows". Some authors prefer to treat the article as the, singular, subject, but this may sound peculiar to some readers, so the construction is probably best avoided or rephrased to make the article more clearly the subject. For example, "Section 3 of Smith and Wesson \[42\] claims that..." or "Smith and Wesson claim that ... \[42\]" or "In \[42\], Smith and Wesson claim that...".) Or, alternatively, "the foobar protocol \[1\] is an example ...". This keeps the reader from having to flip back to the references, as they'll recognize many citations by either author name or project name. No need to refer to RFC numbers in the text (except in RFCs and Internet Drafts). Exception for very low-level presentation: "RFC822-style addresses". While there is no firm rule, it seems preferable to include the reference immediately after the author name, rather than at the end of the material describing the citation. This keeps the reader from having to look ahead on encountering the reference and avoids inconsistent phrasing and guessing when multiple papers are cited for a single fact, as in "Hertz \[1\] and Marconi \[2\] worked on radio waves", rather than "Hertz and Marconi worked on radio waves \[1,2\]."  
    
    不使用 "参考文献\[1\]显示 "或"\[1\]显示"，而使用 "史密斯\[1\]显示 "或 "史密斯和琼斯\[1\]显示 "或 "史密斯等人\[1\]显示"（如果多于两位作者）。"等人 "一般用于有两个以上作者的论文。(注意，如果作者是句子的主语而不是论文的主语，"等 "会使主语变成复数，所以是 "Smith等\[1\]显示 "而不是 "显示"。有些作者喜欢把文章当作单数的主语，但这对一些读者来说可能听起来很特别，所以最好避免这种结构，或者改写一下，使文章更清楚地成为主语。例如，"Smith and Wesson\[42\]第3节声称...... "或 "Smith and Wesson声称......。\[42\]"或 "在\[42\]中，史密斯和威森公司声称......"）。或者说，"foobar协议\[1\]是一个例子..."。这使读者不必再翻阅参考文献，因为他们会通过作者姓名或项目名称认出许多引文。不需要在文本中提及RFC编号（除了RFC和互联网草案）。非常低级的表述例外："RFC822式地址"。虽然没有确定的规则，但似乎最好是在作者姓名之后立即包括参考文献，而不是在描述引文的材料的末尾。这使读者在遇到参考文献时不必向前看，并避免在为一个事实引用多篇论文时出现不一致的措辞和猜测，如 "赫兹\[1\]和马可尼\[2\]研究了无线电波"，而不是 "赫兹和马可尼研究了无线电波\[1，2\]"。
25.  Use normal capitalization in captions ("This is a caption," not "This is a Caption") unless your style guide requires heading-style capitalization.  
    
    在标题中使用正常的大写字母（"这是一个标题"，而不是 "这是一个标题"），除非你的风格指南要求标题式大写。
26.  All headings must be capitalized consistently, either in heading style, capitalizing words, or sentence style, across all levels of headings.  
    
    所有标题的大写字母必须一致，无论是标题样式、单词大写字母，还是句子样式，在所有级别的标题中都是如此。
27.  Parentheses or brackets are always surrounded by a space: "The experiment(Fig. 7)shows" is wrong; "The experiment (Fig. 7) shows" is right.  
    
    小括号或大括号的周围总是有一个空格："The experiment(Fig. 7)show "是错误的；"The experiment (Fig. 7) shows "是正确的。
28.  Avoid excessive parenthesized remarks as they make the text hard to read; fold into the main sentence. Check whether the publication allows footnotes - some magazines frown upon them. More than two footnotes per page or a handful per paper is a bad sign. You probably should have applied to law school instead.  
    
    避免过多的括号，因为它们使文章难以阅读；应将其折叠在主句中。检查出版物是否允许使用脚注--有些杂志不允许使用脚注。每页有两个以上的脚注或每篇论文有几个脚注是一个不好的迹象。你也许应该申请法律学校。
29.  The material should make just as much sense without the footnotes. If the reader constantly has to look at footnotes, they are likely to lose their original place in the text. As a matter of taste, I find URLs better placed in the references rather than as a footnote, as the reader will know that the footnote is just a reference, not material important for understanding the text.  
    
    没有脚注，材料也应该有同样的意义。如果读者不得不经常看脚注，它们很可能会失去它们在文本中的原有位置。作为一个品味问题，我发现URL最好放在参考文献中，而不是作为脚注，因为读者会知道脚注只是一个参考文献，而不是理解文本的重要材料。
30.  There is no space between the text and the superscript for the footnote. I.e., in LaTeX, it's text\\footnote{} rather than text \\footnote{}.  
    
    脚注的文字和上标之间没有空格。也就是说，在LaTeX中，它是 text\\footnote{} ，而不是 text \\footnote{} 。
31.  Check that abbreviations are always explained before use. Exceptions, when addressed to the appropriate networking audience: ATM, BGP, ftp, HTTP, IP, IPv6, RSVP, TCP, UDP, RTP, RIP, OSPF, BGP, SS7. Be particularly aware of the net-head, bell-head perspective. Even basic terms like PSTN and POTS aren't taught to CS students... For other audiences, even terms like ATM are worth expanding, as your reader might wonder why ATM has anything to do with cells rather than little green pieces of paper.  
    
    检查缩略语在使用前是否都有解释。例外情况，当针对适当的网络受众时：ATM, BGP, ftp, HTTP, IP, IPv6, RSVP, TCP, UDP, RTP, RIP, OSPF, BGP, SS7.要特别注意网头、钟头的观点。即使是像PSTN和POTS这样的基本术语也不会教给CS学生......对于其他听众来说，甚至像ATM这样的术语也值得扩展，因为你的读者可能会想，为什么ATM与细胞而不是绿色的小纸片有关系。
32.  Never start a sentence with "and". (There are exceptions to this rule, but these are best left to English majors.)  
    
    永远不要用 "和 "字开头的句子。(这条规则也有例外，但这些最好留给英语专业的学生。）
33.  Don't use colons (:) in mid-sentence. For example, "This is possible because: somebody said so" is wrong - the part before the colon must be a complete sentence.  
    
    不要在句子中间使用冒号（：）。例如，"这是可能的，因为：有人这么说 "是错误的，冒号之前的部分必须是一个完整的句子。
34.  Don't start sentences with "That's because".  
    
    不要以 "那是因为 "作为句子的开头。
35.  In formal writing, contractions like _don't_, _doesn't_, _won't_ or it's are generally avoided.  
    
    在正式写作中，一般要避免使用缩略语，如don't、does't、won't或it's。
36.  Be careful not to confuse `its` with `it's` (it is).  
    
    注意不要将 `its` 与 `it's` 混淆。(它是)。
37.  Vary expressions of comparison: "Flying is faster than driving" is much better than "Flying has the advantage of being faster" or "The advantage of flying is that it is faster.".  
    
    比较的表达方式要多样化："飞行比开车快 "比 "飞行的好处是更快 "或 "飞行的好处是更快 "好得多。
38.  Don't use slash-constructs such as "time/money". This is acceptable for slides, but in formal prose, such expressions should be expanded into "time or money" or "time and money," depending on the meaning intended.  
    
    不要使用 "时间/金钱 "这样的斜线结构。这在幻灯片中是可以接受的，但在正式的散文中，这种表达方式应该扩展为 "时间或金钱 "或 "时间和金钱"，取决于所要表达的意思。
39.  Avoid [cliches](http://www.squidoo.com/businesscliches) like "recent advances in ...," "exponential growth," and "paradigm". You do not want readers of your work to play [buzzword bingo](http://lurkertech.com/buzzword-bingo/). Other words should be [banished](http://www.lssu.edu/banished/).  
    
    避免像"......的最新进展"、"指数增长 "和 "范式 "这样的陈词滥调。你不希望你的作品的读者玩流行语宾果游戏。其他的词应该被禁止使用。
40.  Don't use symbols like "+" (for "and"), "%" (for "fraction" or "percentage") or "->" (for "follows" or "implies") in prose, outside of equations. These are only acceptable in slides.  
    
    不要在散文中使用 "+"（表示 "和"）、"%"（表示 "分数 "或 "百分比"）或"->"（表示 "遵循 "或 "暗示"）等符号，在方程式之外。这些只在幻灯片中可以接受。
41.  Avoid capitalization of terms. Your paper is not the U.S. Constitution or Declaration of Independence. Technical terms are in lower-case, although some people use upper case when explaining an acronym, as in "Asynchronous Transfer Mode (ATM)".  
    
    避免术语的大写。你的论文不是美国宪法或独立宣言。技术术语用小写，尽管有些人在解释一个缩写时使用大写，如 "异步传输模式（ATM）"。
42.  Expand all acronyms on first use, except acronyms that every reader is expected to know. (In a research paper on TCP, expanding TCP is probably not needed - somebody who doesn't know what TCP stands for isn't likely to appreciate the rest of the paper, either.)  
    
    除了每个读者都应该知道的缩略语外，所有的缩略语在第一次使用时都要展开。(在一篇关于TCP的研究论文中，可能不需要扩展TCP--不知道TCP代表什么的人也不可能欣赏论文的其余部分）。
43.  Each paragraph should have a lead sentence summarizing its content. If this doesn't work naturally, the paragraph is probably too short. Try reading just the first lines of each paragraph - the paper should still make sense. For example,  
    
    每个段落都应该有一个概括其内容的引导句。如果这样做不自然，那么该段可能太短了。试着只读每段的第一句话--论文应该仍然有意义。比如说、
    
    > There are two service models, integrated and differentiated service. Integrated service follows the German approach that anything that isn't explicitly allowed is verboten. It strictly regulates traffic, but also makes the trains run on time. Differentiated service follows the Animal Farm appraoch, where some traffic is more equal than others. It seems simpler, until one has to worry about proletariat traffic dressing up as the aristocracy.  
    > 
    > 有两种服务模式，综合服务和差异化服务。综合服务遵循德国的做法，即任何没有明确允许的东西都是被禁止的。它严格管理交通，但也使火车准时运行。差异化服务遵循《动物农场》的做法，即一些交通比其他交通更平等。这似乎更简单，直到人们不得不担心无产阶级的交通装扮成贵族的样子。
    
44.  $i$th, not $i-th$.  $i$th ，而不是 $i-th$ 。
45.  Units are always in roman font, never _italics_ or LaTeX math mode. Units are set off by one (thin) space from the number. In LaTeX, use ~ to avoid splitting number and units across two lines. \\; or \\, produces a thin space.  
    
    单位总是用罗马字体，从不使用斜体或LaTeX数学模式。单位与数字相隔一个（细）空格。在LaTeX中，使用~来避免将数字和单位分成两行。 \\; 或 \\, 会产生一个细的空格。
46.  For readability, powers of a 1,000 are divided by commas.  
    
    为了便于阅读，1,000的幂被逗号分割。
47.  Use "kb/s" or "Mb/s," not "kbps" or "Mbps" - the latter are not scientific units. Be careful to distinguish "Mb" (Megabit) and "MB" (Megabytes), in particular "kb" (1,000 bits) and "KB" (1,024 bytes).  
    
    使用 "kb/s "或 "Mb/s"，而不是 "kbps "或 "Mbps"，后者不是科学单位。要注意区分 "Mb"（兆位）和 "MB"（兆字节），特别是 "kb"（1000比特）和 "KB"（1024字节）。
48.  It's always kHz (lower-case k), not KHz or KHZ.  
    
    总是kHz（小写k），而不是KHz或KHZ。
49.  It's Wi-Fi, not WiFi (or wifi), since this is a trademark.  
    
    是Wi-Fi，不是WiFi（或wifi），因为这是一个商标。
50.  Operating systems such as Android, (Mac)OSX, Linux or Windows are typically capitalized.  
    
    安卓、(Mac)OSX、Linux或Windows等操作系统通常被大写。
51.  It is not common to use the trademark symbol ® (or its country cousins <sup data-immersive-translate-effect="1" data-immersive_translate_walked="747575fd-d9be-445a-bb9f-71a366fe2ce1">SM</sup> and <sup data-immersive-translate-effect="1" data-immersive_translate_walked="747575fd-d9be-445a-bb9f-71a366fe2ce1">TM</sup>) unless you are the owner of the mark and then only on [first use](http://www.forbes.com/sites/work-in-progress/2014/03/12/when-and-how-do-i-have-to-use-trademark-symbols/).  
    
    使用商标符号®（或其国家的表亲 <sup data-immersive-translate-effect="1" data-immersive_translate_walked="747575fd-d9be-445a-bb9f-71a366fe2ce1">SM</sup> 和 <sup data-immersive-translate-effect="1" data-immersive_translate_walked="747575fd-d9be-445a-bb9f-71a366fe2ce1">TM</sup> ）是不常见的，除非你是该商标的所有者，然后只在首次使用时使用。
[Units and Measurements 单位和测量](http://www.unc.edu/~rowlett/units/dictK.html), [Taligent style guide](http://pcroot.cern.ch/TaligentDocs/TaligentOnline/DocumentRoot/1.0/Docs/books/SG/SG_28.html)  

, Taligent风格指南55.  Use "ms," not "msec," for milliseconds.  
    
    使用 "ms"，而不是 "msec"，表示毫秒。
56.  Use "0.5" instead of ".5," i.e., do not omit the zero in front of the decimal point. (_Words into Type_ recommends that "for quantities less than one, a zero should be set before the decimal point except for quantities that never exceed one.")  
    
    使用 "0.5 "而不是".5"，也就是说，不要省略小数点前面的零。(Words into Type建议，"对于小于1的数量，小数点前应设置0，但从未超过1的数量除外。" )
57.  Avoid "etc."; use "for example," "such as," "among others" or, better yet, try to give a complete list (unless citing, for example, a list of products known to be incomplete), even if abstract. See also Strunk and White:  
    
    避免使用 "等"；使用 "例如"、"如"、"其中"，或者最好是尽量给出一个完整的清单（除非引用已知不完整的产品清单等），即使是抽象的。另见Strunk和White：
    
    > Etc.: Not to be used of persons. Equivalent to **and the rest, and so forth**, and hence not to be used if one of these would be insufficient, that is, if the reader would be left in doubt as to any important particulars. Least open to objection when it represents the last terms of a list already given in full, or immaterial words at the end of a quotation. At the end of a list introduced by **such as**, **for example**, or any similar expression, etc. is incorrect.  
    > 
    > 等：不能用于人。相当于and the rest，等等，因此，如果其中一个不充分，也就是说，如果读者对任何重要的细节有疑问，就不能使用。当它代表一个已经完整给出的列表的最后条款，或引文末尾的不重要的词时，最不容易引起反对。在列表的结尾处用诸如，例如，或任何类似的表达方式等来介绍是不正确的。
    
58.  If you say, "for example" or "like," do not follow this with "etc.". Thus, it's "fruit like apples, bananas and oranges". The "like" and "for example" already indicate that there are more such items.  
    
    如果你说，"例如 "或 "像"，不要在后面加上 "等"。因此，就是 "像苹果、香蕉和橙子这样的水果"。"像 "和 "例如 "已经表明还有更多这样的项目。
59.  Avoid excessive use of "i.e.". Vary your expression: "such as," "this means that," "because," .... "I.e." is not the universal conjunction!  
    
    避免过度使用 "即"。变化你的表达方式："例如"，"这意味着"，"因为"，...."I.e. "不是万能连词!
60.  Remember that "i.e." and "e.g." are _always_ followed by a comma.  
    
    请记住，"i.e. "和 "e.g. "后面总是有一个逗号。
61.  Do not use ampersands (&) or slash-abbreviations (such as s/w or h/w) in formal writing; they are acceptable for slides.  
    
    在正式写作中不要使用安培尔（&）或斜线缩写（如s/w或h/w）；在幻灯片中可以接受这些缩写。
62.  "respectively" is preceded by a comma, as in "The light bulbs lasted 10 and 100 days, respectively."  
    
    "分别 "前面有一个逗号，如 "灯泡分别持续了10天和100天"。
63.  _Therefore_, _however_, _hence_ and _thus_ are usually followed by a comma, as in "Therefore, our idea should not be implemented."  
    
    因此，然而，因此和因此后面通常有一个逗号，如 "因此，我们的想法不应该被实施。"
64.  Never use "related work**s**" unless you are talking about works of art. It's "related work".  
    
    永远不要使用 "相关作品"，除非你谈论的是艺术作品。应该是 "相关作品"。
65.  Similarly, "code**s**" refer to encryption keys, not multiple programs. You would say "I modified multiple programs," not "multiple codes".  
    
    同样地，"代码 "指的是加密密钥，而不是多个程序。你会说 "我修改了多个程序"，而不是 "多个代码"。
66.  Use "in Figure 1" instead of "following figure" since figures may get moved during the publication or typesetting process. Don't assume that the LaTeX figure stays where you put it.  
    
    使用 "在图1中 "而不是 "在图之后"，因为在出版或排版过程中，数字可能被移动。不要以为LaTeX图会停留在你放的地方。
67.  Text columns in tables are left-aligned, numeric columns are aligned on the decimal or right-aligned.  
    
    表格中的文本列是左对齐的，数字列是在小数点上对齐或右对齐的。
68.  Section, Figure and Table are capitalized, as in "As discussed in Section 3". Figure can be abbreviated as Fig., but the others are not usually abbreviated, but that's a matter of taste - just be consistent.  
    
    节、图和表都大写，如 "如第3节所讨论的"。图可以缩写为Fig.，但其他的通常不缩写，但这是一个品味问题--只要保持一致。
69.  Section titles are _not_ followed by a period.  
    
    各部分的标题后面没有句号。
70.  In LaTeX, tie the figure number to the reference, so that it doesn't get broken across two lines:  
    
    在LaTeX中，将图号与参考文献联系起来，这样就不会被分成两行了：
    
    ```
    Fig.~\ref{fig:arch}
    
    ```
    
71.  Do not use GIF images for figures, as GIFs produce horrible print quality and are huge. Export into PostScript. At that stage, you'll learn to "appreciate" Microsoft products. xfig and gnuplot generally produce PostScript that can be included without difficulties.  
    
    不要使用GIF图像来制作数字，因为GIF的打印质量很差，而且体积很大。输出为PostScript。在这个阶段，你要学会 "欣赏 "微软产品。 xfig 和 gnuplot 一般会产生PostScript，可以毫无困难地纳入。
72.  Only use line graphs when you are trying to show a functional or causal relationship between variables. When showing different experiments, for example, use bar graphs or scatter plots.  
    
    只有当你试图显示变量之间的功能或因果关系时，才使用线图。例如，在展示不同的实验时，使用条形图或散点图。
73.  Figures show, depict, indicate, illustrate. Avoid "(refer to Fig. 17)". Often, it is enough to simply put the figure reference in parenthesis: "Packet droppers (Fig. 17) have a pipe to the bit bucket, which is emptied every night."  
    
    图显示，描述，表明，说明。避免使用"（参考图17）"。通常情况下，只需在括号内注明数字参考即可："包装滴管（图17）有一根管道通向位斗，每天晚上都要清空。"
74.  If you quote something literally, enclose it in quotation marks or show it indented and in smaller type ("block quote"). A mere citation is not sufficient as it does not tell the reader whether you simply derived your material from the cited source or copied it verbatim.  
    
    如果你引用的是字面意思，请用引号括起来，或者用小号字体缩进显示（"整段引用"）。仅仅是引用是不够的，因为它没有告诉读者你的材料是否仅仅来自于被引用的来源或逐字逐句地复制。
75.  Do not refer to colors in graphs. Many people will print the paper on a monochrome (black and white) printer and will have no idea what you are talking about when referring to the red or blue line. Also, 1 in 12 men and 1 in 200 women are color blind. Thus, make sure that graph lines are easily distinguishable when printing on a monochrome printer. "Use both color and shape to convey the same meaning; for example, solid and dashed lines or different fill patterns can help readers understand the figure without relying solely on color. Each line of your line graph should be a thick line with a unique data point symbol. Connect the data label to the data line rather than relying on a color key." (IEEE)  
    
    不要在图表中指代颜色。许多人会用单色（黑白）打印机打印纸张，当提到红线或蓝线时，他们不知道你在说什么。另外，每12个男人和每200个女人中就有一个是色盲。因此，确保在单色打印机上打印时，图线很容易分辨出来。"同时使用颜色和形状来表达相同的意思；例如，实线和虚线或不同的填充图案可以帮助读者理解图形，而不必仅仅依靠颜色。你的折线图的每一行都应该是一条粗线，有一个独特的数据点符号。将数据标签与数据线相连，而不是依靠颜色键"。(IEEE)
76.  Avoid numbers with artificial precision. Unless you have done enough experiments to be sure that the value measured is indeed meaningful to five digits after the decimal point, you're overstating your results.  
    
    避免带有人为精度的数字。除非你已经做了足够多的实验来确定所测量的数值确实对小数点后的五位数有意义，否则你会夸大你的结果。
77.  Do not forget to acknowledge your funding support. If you do forget, you may not have any to acknowledge in the future.  
    
    不要忘记确认你的资金支持。如果你真的忘记了，你可能在未来没有任何可以确认的。
78.  All references must use consistent capitalization for the paper titles, i.e., either all title-case or all sentence-case.  
    
    所有参考文献的论文标题必须使用一致的大写字母，即全部标题大写或全部句子大写。
79.  Technical report citations must have the name of the organization such as the university or company. Conferences must cite the location.  
    
    技术报告的引用必须有组织的名称，如大学或公司。会议必须引用会议地点。
80.  Check your references to make sure they are up to date. For example, Internet Drafts might have been replaced by RFCs and technical reports or workshop papers by conference or journal papers.  
    
    检查你的参考文献，确保它们是最新的。例如，互联网草案可能已被RFC取代，技术报告或研讨会论文被会议或期刊论文取代。
81.  References should be consistent: all authors should either be given with their full name (John Doe) or abbreviated (J. Doe), but not combinations.  
    
    参考文献应保持一致：所有作者都应使用全名（John Doe）或缩写（J. Doe），但不能组合使用。
82.  Conference references should contain the location of the conference, the month and some indication such as "Proc. of" or "Conference". Journal references always contain the volume, issue number and pages. It must be obvious from the citation whether an article was in a journal or in a conference.  
    
    会议参考文献应包含会议地点、月份和一些说明，如 "Proc. of "或 "Conference"。期刊参考文献总是包含卷号、期号和页数。从引文中必须明显看出一篇文章是在期刊上还是在会议上。
83.  Only include the year of the publication once, rather than multiple times in different contexts. For example, avoid something like "A. Doe, "Performance of IEEE 802.11ac in a Rayleigh channel," in _Proc. 2015 ACM Intern. Conf. on Mobile Computing_, Rome, Italy, May 2015. ACM Press, 2015.  
    
    只包括一次发表的年份，而不是在不同的背景下多次出现。例如，避免类似 "A. Doe, "Performance of IEEE 802.11ac in a Rayleigh channel, " in Proc. 2015 ACM Intern.Conf. on Mobile Computing, Rome, Italy, May 2015.ACM出版社，2015年。

See also [University of Minnesota Style Manual](http://www1.umn.edu/urelate/style/language-usage.html). Many of these issues are also described in more detail in the US Federal [plain language guidelines](http://www.plainlanguage.gov/), [humorously](http://www.plainlanguage.gov/examples/humor/writegood.cfm), and, with a UK origin, [_The Complete Plain Words_](http://en.wikipedia.org/wiki/The_Complete_Plain_Words), dating back to 1954. Similar points are made also by [John Owens](http://www.ece.ucdavis.edu/~jowens/commonerrors.html).  

也请参见《明尼苏达大学风格手册》。其中许多问题在美国联邦平实语言指南中也有更详细的描述，幽默的是，起源于英国的《平实语言大全》，可以追溯到1954年。John Owens也提出了类似的观点。

Thanks to Christian Bettstetter for contributions.  

感谢Christian Bettstetter的贡献。

___

Last updated 01/12/2021 11:52:17 by [Henning Schulzrinne](http://www.cs.columbia.edu/~hgs)  

最后更新时间：01/12/2021 11:52:17 作者：Henning Schulzrinne
