---
title: "AI是否意味着我们不需要语义网？- Terence Eden的博客"
date: 2023-06-05T01:16:28+08:00
updated: 2023-06-05T01:16:28+08:00
taxonomies:
  tags: []
extra:
  source: https://shkspr.mobi/blog/2023/05/does-ai-mean-we-dont-need-the-semantic-web/?utm_source=bensbites&utm_medium=referral&utm_campaign=comeback-of-gans-new-image-editing-research
  hostname: shkspr.mobi
  author: 
  original_title: "Does AI mean we don’t need the Semantic Web? – Terence Eden’s Blog --- AI是否意味着我们不需要语义网？- Terence Eden的博客"
  original_lang: zh
---

If you hang around with computerists long enough, they start talking about the Semantic Web. If you can represent human knowledge in a way that's easy for computers to understand it will be transformative for information processing.  

如果你和计算机专家混得够久，他们就会开始谈论语义网。如果你能以一种计算机容易理解的方式来表示人类的知识，那将会对信息处理产生变革。

But computers, traditionally, haven't been very good at parsing ambiguous human text.  

但是，传统上，计算机并不擅长解析含糊不清的人类文本。

Suppose you saw this text written for a human:  

假设你看到这段为人类写的文字：

> Our opening hours are: Weekdays 10 until 7. Weekend 10 until 10 (Early closing 9 o'clock Sunday).  
> 
> 我们的营业时间是：平日10点至7点。周末10点至10点（周日9点提前关门）。

Not the most straightforward sentence, but pretty easy for a human to parse.  

这不是一个最直接的句子，但对人类来说相当容易解析。

Until recently, the best way to represent that for a computer was something like:  

直到最近，对计算机来说，最好的表示方法是类似的：

```
<meta itemprop="openingHours" content="Mo-Fr 10:00-19:00"/>
<meta itemprop="openingHours" content="Sa 10:00-22:00"/>
<meta itemprop="openingHours" content="Su 10:00-21:00"/>
```

or

```
<script type="application/ld+json">
{
   "@context": "https://schema.org",
   "openingHours":["Mo-Fr 10:00-19:00", "Sa 10:00-22:00", "Su 10:00-21:00"]
}
</script>
```

A tightly constrained vocabulary which can be precisely parsed by a simple state-machine. Easy to ingest, interpret, and query. Easy for machines, that is. As much as I love the semantic web, it is _hard_ for humans to write, update, and maintain.  

一个严格约束的词汇，可以被一个简单的状态机精确解析。易于摄取、解释和查询。对机器来说，这很容易。尽管我很喜欢语义网，但是对人类来说，它很难编写、更新和维护。

But we have AI now. So do we need to mark up documents specifically for machines?  

但我们现在有了人工智能。那么，我们是否需要专门为机器标记文件？

I fed the text into OpenAI's ChatGPT. Here's what it said:  

我把文本输入OpenAI的ChatGPT。它是这样说的：

![User: Read the following sentence: "Our opening hours are: Weekdays 10 until 7. Weekend 10 until 10 (Early closing 9 o'clock Sunday)." ChatGPT: The given sentence states the opening hours of a certain establishment. Here is the breakdown of the opening hours mentioned: Weekdays: The establishment is open from 10 in the morning until 7 in the evening. Weekend: On weekends, the establishment is open from 10 in the morning until 10 at night.  Early closing on Sunday: On Sundays, the establishment closes earlier than usual, at 9 o'clock in the evening. Please note that this information is based solely on the provided sentence, and the specific establishment or its type is not mentioned. User: Is the establishment open at 2130 on Sunday? ChatGPT: Based on the information provided in the sentence, the establishment has early closing on Sunday, with the closing time set at 9 o'clock in the evening. Therefore, the establishment would not be open at 21:30 (or 9:30 PM) on Sunday.](ChatGPT-opening-hours.png.webp)

It isn't just capable of parroting back data - it can perform moderately complex reasoning:  

它不只是能够鹦鹉学舌，还能进行适度的复杂推理：

![User: It is 0830 Wednesday. How long until the establishment is open? ChatGPT: Based on the information provided, the establishment's opening hours on weekdays start at 10 in the morning. If it is currently 8:30 on a Wednesday, you would need to wait 1 hour and 30 minutes until the establishment opens at 10:00 AM.](0830.png.webp)

Do we need to write for computers any more? One of the demands of the Semantic Web was that we should use HTML elements like [`<address>` to clearly mark up a contact address](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address) and we should wrap dates and times in the [`<time>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time).  

我们还需要为计算机写作吗？语义网的要求之一是，我们应该使用 `<address>` 这样的HTML元素来明确标记联系地址，我们应该用 `<time>` 元素来包装日期和时间。

Is that now redundant? 这现在是多余的吗？

We still need to write clearly and unambiguously. But do we need separate "machine-readable" HTML if machines can now read and interpret text designed for humans?  

我们仍然需要写得清楚和明确。但是，如果机器现在能够阅读和解释为人类设计的文本，我们还需要单独的 "机器可读 "HTML吗？
