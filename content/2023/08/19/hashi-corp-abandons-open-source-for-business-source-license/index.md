---
title: Hashi Corp 放弃开放源代码，转而采用商业源代码许可
date: 2023-08-18T17:36:48.000Z
updated: 2023-08-18T17:36:48.000Z
taxonomies:
  tags:
    - Dev
extra:
  source: >-
    https://thenewstack.io/hashicorp-abandons-open-source-for-business-source-license/
  hostname: thenewstack.io
  author: Steven J. Vaughan-Nichols
  original_title: HashiCorp Abandons Open Source for Business Source License
  original_lang: en

---

It’s getting to be a bad joke. Companies such as [Confluent](https://www.confluent.io/?utm_content=inline-mention), [MongoDB](https://www.mongodb.com/cloud/atlas/?utm_content=inline-mention), Elastic, and [Redis Labs](https://redis.com/?utm_content=inline-mention) start with an open source project. They achieve a measure of success, then they, or their venture-capital backers, decided they’re not cashing out enough, so they dump their open source license for one that extracts more cash from their software. The latest such company is [HashiCorp](https://www.hashicorp.com/?utm_content=inline-mention), which has moved its [Terraform](https://www.terraform.io/) Infrastructure as Code tool and [Vagrant](https://www.vagrantup.com/), its tool to build and manage virtual machine environments, from the open source [Mozilla Public License v2.0 (MPL 2.0)](https://www.mozilla.org/en-US/MPL/2.0/) to the source-available [Business Source License (BSL) v1.1](https://mariadb.com/bsl11/).  

这已经成了一个糟糕的笑话。Confluent、MongoDB、Elastic 和 Redis Labs 等公司都是从开源项目起步的。他们取得了一定程度的成功，然后他们或他们的风险投资支持者认为他们获得的现金不够多，于是他们放弃了开源许可，转而使用能从他们的软件中获取更多现金的许可。最近一家这样的公司是 HashiCorp，该公司已经将其 Terraform 基础架构即代码工具和 Vagrant（构建和管理虚拟机环境的工具）从开源的 Mozilla Public License v2.0 (MPL 2.0) 移至可获取源代码的 Business Source License (BSL) v1.1。

## Why Move? 为什么搬家？

Why? HashiCorp co-founder and CTO [Armon Dadgar](https://www.linkedin.com/in/armon-dadgar/) explained, “There are [other vendors who take advantage of pure OSS models](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license), and the community work on OSS projects, for their own commercial goals, without providing material contributions back. We don’t believe this is in the spirit of open source. As a result, we believe commercial open source models need to evolve for the ecosystem to continue providing open, freely available software.”  

HashiCorp 联合创始人兼首席技术官 Armon Dadgar 解释说："还有一些厂商利用纯粹的开放源码软件模式和开放源码软件项目的社区工作，来达到自己的商业目的，而不提供实质性的贡献。我们认为这不符合开源精神。因此，我们认为商业开放源码模式需要发展，生态系统才能继续提供开放、免费的软件。"

Under the BSL, Dadger added, “End users can continue to copy, modify, and redistribute the code for all non-commercial and commercial use, except where providing a competitive offering to HashiCorp.” Eventually, a specific version’s source code reverts to another, presumably open source, license after a Change Date.  

根据 BSL，Dadger 补充说："最终用户可以继续复制、修改和重新发布代码，用于所有非商业和商业用途，但向 HashiCorp 提供竞争性产品的情况除外。最终，特定版本的源代码会在变更日期后恢复到另一种可能是开源的许可证。

Even with this caveat, the BSL is in no way, shape, or form, an open source license. Still, as [Stephen O’Grady](https://www.linkedin.com/in/sogrady/), RedMonk’s co-founder and industry analyst noted, “The trend towards non-compete licenses is problematic from an industry perspective, but I at least appreciate that Hashi has been clear that the new license is not open source.”  

即便如此，BSL 也绝不是一种开源许可证。不过，正如 RedMonk 的联合创始人兼行业分析师 Stephen O'Grady 所说："从行业角度来看，非竞争性许可的趋势是有问题的，但我至少赞赏哈希明确表示新许可不是开源许可"。

It’s getting old hearing this excuse over and over again. A company uses the work of open source developers to create their program and then blames other companies for using their open source code — usually hyper-cloud service providers — for forcing them to abandon open source.  

这种借口听了一遍又一遍，已经听腻了。一家公司利用开源开发人员的工作成果创建了自己的程序，然后指责其他公司（通常是超云服务提供商）使用了他们的开源代码，迫使他们放弃开源。

## Not Hurting 不伤害

It’s not like HashiCorp is hurting. In its latest [quarterly report, HashiCorp](https://ir.hashicorp.com/static-files/9475fc23-0944-474d-9e99-34f489ff83bd) reported current non-Generally Accepted Accounting Principles (GAAP) remaining performance obligations of $394.6 million. That represents a 29% year-over-year growth. The company also added 32 customers with greater than or equal to $100,000 in annual recurring revenue. On Aug. 11, after HashiCorp announced its license change, the company had a market cap of $5.61 billion.  

哈希公司并没有受到伤害。在最新的季度报告中，HashiCorp 报告了当前非公认会计原则（GAAP）的剩余履约义务为 3.946 亿美元。同比增长 29%。公司还新增了 32 家年经常性收入大于或等于 10 万美元的客户。8 月 11 日，在 HashiCorp 宣布许可证变更后，该公司的市值为 56.1 亿美元。

Of course, some companies are offering services using TerraForm and other HashiCorp technologies. That’s part and parcel of open source. If you have such a service, such as providing a HashiCorp tool as a hosted service or embedding HashiCorp products in a commercial solution, HashiCorp is open to licensing its code commercially.  

当然，一些公司正在使用 TerraForm 和其他 HashiCorp 技术提供服务。这是开源的一部分。如果你有这样的服务，比如提供 HashiCorp 工具作为托管服务，或者在商业解决方案中嵌入 HashiCorp 产品，HashiCorp 对其代码的商业授权持开放态度。

## Not Happy 不开心

Open source developers and companies are not happy about this move. [Joe Duffy](https://www.linkedin.com/in/joejduffy/), CEO and Founder of [Pulumi](https://www.pulumi.com/?utm_content=inline-mention), a rival open source, Infrastructure as a Service company, declared [HashiCorp’s announcement as “disingenuous.](https://news.ycombinator.com/item?id=37082324) We tried many times to contribute upstream fixes to Terraform providers, but HashiCorp would never accept them. So we’ve had to maintain forks. They lost their OSS DNA a long time ago, and this move just puts the final nail in the coffin.”  

开源开发者和公司对这一举动并不满意。竞争对手开源基础设施即服务公司 Pulumi 的首席执行官兼创始人 Joe Duffy 认为 HashiCorp 的声明 "不诚实"。我们曾多次尝试为 Terraform 提供商提供上游修复，但 HashiCorp 从不接受。所以我们不得不维护分叉。他们很久以前就失去了开放源码软件的基因，此举只是在棺材上钉上了最后一颗钉子。"

[Richard Brown](https://www.linkedin.com/in/sysrich/?originalSubdomain=de), a [SUSE](https://www.suse.com/) Distributions Architect, snarkily tweeted, “I’d like to thank [@HashiCorp](https://twitter.com/HashiCorp) for their license change. I never liked Terraform, it was always complicating our openSUSE image builds, But this [license change will now almost certainly prevent us from shipping any of their stuff](https://twitter.com/sysrich/status/1689882113011597313) in our GPL-licensed distros, so I can finally relax.”  

SUSE Distributions 架构师理查德-布朗（Richard Brown）在推特上讽刺道："我要感谢 @HashiCorp 更改许可证。我一直不喜欢 Terraform，它总是让我们的 openSUSE 映像构建工作变得复杂，但这次许可证变更几乎肯定会阻止我们在 GPL 许可的发行版中使用他们的任何东西，所以我终于可以放松一下了。"

If Hashicorp had developed their open source community into a diverse and broad one, they would have been the lingua franca of the cloud,” said [Adam Jacob](https://www.linkedin.com/in/adamjacob/), co-founder and CEO of System Initiative. “But since they failed to do that, the only rational move is to extract as much money as possible from what remains.”  

System Initiative 联合创始人兼首席执行官亚当-雅各布（Adam Jacob）说："如果 Hashicorp 将其开源社区发展成一个多样化的、广泛的社区，那么它们就会成为云计算的通用语言。"但既然他们没能做到这一点，唯一合理的做法就是从剩下的东西中尽可能多地榨取资金。

More to the point, though, many developers feel burned that their open source contributions have now been enfolded in a commercial license. As one, who didn’t want their name used, said, “I will Never sign a [Contributor License Agreement (CLA)](https://yahoo.github.io/oss-guide/docs/resources/what-is-cla.html) on an ‘open source’ project again.” The HashiCorp CLA requires developers to “[give HashiCorp permission to use your copyrighted work in commercial products](https://www.hashicorp.com/cla).” And, you cannot withdraw permission to use your contribution later.”  

不过，更重要的是，许多开发人员对自己的开源贡献现在被商业许可所覆盖而感到焦灼不安。一位不愿透露姓名的开发者说："我再也不会在'开源'项目上签署贡献者许可协议（CLA）了。HashiCorp CLA 要求开发者 "允许 HashiCorp 在商业产品中使用你的版权作品"。而且，你以后不能撤回使用你的贡献的许可"。

So, what next? Well, would you be surprised to know that there’s already a TerraForm fork, [Open-Terraform](https://github.com/diggerhq/open-terraform?utm_source=dlvr.it&utm_medium=twitter)? No? I didn’t think so. It’s being sponsored by [Digger.dev](https://digger.dev/), one of HashiCorp’s rivals.  

那么，下一步该怎么办？如果你知道已经有了一个 TerraForm 的分叉，即 Open-Terraform，你会感到惊讶吗？不会吗？我可不这么认为。它是由哈希公司的竞争对手 Digger.dev 赞助的。
