---
title: "为什么HashiCorp Vault被过度炒作而Mozilla SOPS被低估 | Oteemo"
date: 2023-11-05T19:07:25+08:00
updated: 2023-11-05T19:07:25+08:00
taxonomies:
  tags: []
extra:
  source: https://oteemo.com/hashicorp-vault-is-overhyped-and-mozilla-sops-with-kms-and-git-is-massively-underrated/
  hostname: oteemo.com
  author: 
  original_title: "Why HashiCorp Vault is Overhyped and Mozilla SOPS underrated | Oteemo"
  original_lang: zh
---

When I started working with Kubernetes and Infrastructure as Code, I quickly found out that I needed a secrets management solution, but when I googled around there didn’t seem to be a solid consensus on a best practice approach that could be universally applied to all situations. So, earlier this year I set a goal for myself to discover what application and infrastructure secret management solutions exist, come up with which one I thought was best and develop a working mastery of it. While pursuing this goal, I came to the conclusion that HashiCorp Vault is overhyped and Mozilla SOPS with KMS and Git is massively underrated. I think SOPS is underrated for two main reasons:  

当我开始使用Kubernetes和基础架构即代码时，我很快意识到我需要一个安全管理解决方案，但当我在谷歌上搜索时，并没有一个坚实的共识可以普遍适用于所有情况的最佳实践方法。因此，今年早些时候，我给自己设定了一个目标，即发现存在哪些应用程序和基础架构的安全管理解决方案，找出我认为最佳的那一个，并对其进行深入掌握。在追求这个目标的过程中，我得出结论，HashiCorp Vault被过度吹捧，而搭配KMS和Git的Mozilla SOPS则被严重低估。我认为SOPS被低估有两个主要原因：

1.  The majority of people don’t have a technical to layman’s-terms understanding of what a Cloud KMS is or does.  
    
    大多数人对云KMS是什么以及它的作用没有一个通俗易懂的技术理解。
2.  Those same people don’t realize that although in the past there was no safe way to store encrypted secrets in Git, Cryptography has evolved since then, and now safely storing encrypted secrets in Git is possible thanks to Cloud Provider KMS Solutions such as AWS KMS, Azure KeyVault, or GCP KMS.  
    
    那些人并没有意识到，虽然过去在Git中没有安全的方法来存储加密的秘密，但是自那时以来，密码学已经发展了，现在通过云提供商的KMS解决方案（如AWS KMS、Azure KeyVault或GCP KMS），可以安全地存储加密的秘密。

Most of Vault’s hype is warranted as for decades there were no good secrets management solutions, and then here comes Vault from the makers of Terraform, with built-in secrets rotation, actively maintained over time, with great docs, support, and a community, and Vault was the only\* solution that met my requirements for what the ideal secrets management solution looks like. I say Vault’s overhyped because I often see it recommended as the gold standard cure all that should be applied to all secrets management scenarios.  

大部分关于Vault的炒作是有道理的，因为几十年来没有好的秘密管理解决方案，然后Terraform的开发者推出了Vault，它具备内置的秘密轮换功能，长期得到积极维护，拥有出色的文档、支持和社区。Vault是唯一符合我对理想秘密管理解决方案要求的选择。我说Vault被过度炒作是因为我经常看到人们将其推荐为应用于所有秘密管理场景的黄金标准解决方案。

### Ideal Secrets Management Solution Requirements  

理想的秘密管理解决方案要求

1.  Works universally (any cloud and on-prem)  
    
    适用于所有云和本地环境
2.  Integrates nicely with any tech stack via REST API or platform independent CLI binaries. (Bonus if it has smooth integrations with Terraform, Ansible, Kubernetes, and CICD Pipelines)  
    
    通过REST API或平台无关的CLI二进制文件与任何技术堆栈完美集成。（如果它与Terraform、Ansible、Kubernetes和CICD流水线有顺畅的集成，那就更好了）
3.  Future Proof  未来可持续发展
    1.  Open Source/Free (No risk of disappearing service offerings or price hikes)  
        
        开源/免费（无风险的服务消失或价格上涨）
    2.  Large Community or a history of being maintained over time (Don’t want abandonware, unless it’s could be timeless/feature complete abandonware like Unix Utilities)  
        
        大型社区或具有长期维护历史（不希望是被抛弃的软件，除非是像Unix Utilities那样具有永恒特性或完整功能的被抛弃软件）
    3.  Scales well and offers High Availability  
        
        具有良好的可扩展性并提供高可用性
4.  Truly secure (I should be able to convince any security head that it’s bulletproof enough to pass a security audit.)  
    
    真正安全（我应该能够说服任何安全负责人，它足够坚不可摧，能够通过安全审计。）
    1.  Encryption at Rest 静态加密
    2.  Encryption in Transit 传输中的加密
    3.  Access should be revocable  
        
        访问权限应可撤销
    4.  Vulnerabilities should be pre-researched and countermeasures should be applied.  
        
        应该预先研究漏洞并采取相应的对策。
5.  Support for Granular ACLs + Dev secret creation self-service options  
    
    支持细粒度访问控制列表（ACL）+ 开发者密钥自助创建选项
    1.  Devs should be able to manage dev secrets but not prod secrets.  
        
        开发人员应该能够管理开发密钥，但不能管理生产密钥。
    2.  Ops should be able to manage dev and prod secrets.  
        
        运维人员应该能够管理开发和生产环境的密钥。
    3.  Project level isolation: Ops of project A, shouldn’t see project B’s prod secrets.  
        
        项目级别隔离：项目A的运维人员不应该看到项目B的生产密钥。
6.  Versioned secrets (Can assist with staging and automating, deployments, rollbacks, and supporting technical debt scenarios where secrets and configuration are intertwined in config files and database connection strings.)  
    
    版本化的秘密（可以帮助进行分期和自动化部署、回滚，并支持秘密和配置交织在配置文件和数据库连接字符串中的技术债务场景。）

_\*Note: Mozilla SOPS also met my requirements, but I didn’t realize it at the time because I originally thought there was no safe way to do git encrypted secrets.  

注意：Mozilla SOPS也符合我的要求，但当时我没有意识到，因为我最初认为没有安全的方法来进行git加密密钥。_

### Security Challenges with storing secrets in a git repo  

在git仓库中存储秘密的安全挑战

-   Many tools involve storing the decryption key in the user’s home directory or keyring, which leads to the encrypted data and the key being on the same machine.  
    
    许多工具都涉及将解密密钥存储在用户的主目录或密钥环中，这导致加密数据和密钥位于同一台机器上。
-   In that scenario compromised decryption keys are a statistical inevitability (Vulnerabilities multiplied by clones of the repo multiplied by time)  
    
    在这种情况下，受损的解密密钥是一种统计上不可避免的情况（漏洞乘以代码库的克隆数量乘以时间）
-   It’s impossible to revoke a leaked decryption key. If you’re worried a decryption key could have been compromised, but the probability that it was compromised is low, revoking the key isn’t an option, due to git’s distributed history. Even if you could purge the history of the git server and re-encrypt all the secrets with new encryption keys, there would still exist a historic clone of the repo that could be decrypted with the old key.  
    
    无法撤销泄漏的解密密钥。如果您担心解密密钥可能已经泄露，但泄露的概率较低，由于Git的分布式历史，撤销密钥不是一个选项。即使您可以清除Git服务器的历史记录并使用新的加密密钥重新加密所有机密信息，仍然会存在一个具有旧密钥解密能力的历史克隆仓库。
-   If a compromise is suspected the only viable countermeasure is to rotate all the credentials, which is an expensive operation that management usually isn’t willing to back on a hunch.  
    
    如果怀疑存在妥协，唯一可行的对策就是轮换所有凭证，这是一项昂贵的操作，通常管理层不愿意凭直觉支持。
-   Some of the git encryption tools are footgun solutions: Run command to decrypt secret, then forget to encrypt it before pushing it up to the repo.  
    
    一些 Git 加密工具是“踩坑”解决方案：运行解密命令以获取秘密信息，然后忘记在推送到仓库之前进行加密。

Whenever I found a secrets management solution I noticed I could group it into 4 main categories:  

每当我找到一个秘密管理解决方案时，我注意到它可以分为4个主要类别：

1.  Specific to a single cloud provider (I dismissed these for reasons 1 and 3)  
    
    针对单个云服务提供商（我因为原因1和原因3而排除了这些）
2.  Specific to a single tech stack (Ansible, Chef, Puppet, Salt, Jenkins) (I dismissed these for reasons 2 and 5)  
    
    针对单一技术栈（Ansible、Chef、Puppet、Salt、Jenkins）（我因为第2和第5个原因而排除了它们）
3.  Encrypted Git Repo (I dismissed these for reasons 4 and 5)  
    
    加密的Git存储库（我因第4和第5条原因而不予考虑）
4.  Roll your own Secrets Management Service (There were a few potentially viable options, but each introduced it’s own complexity so it made sense to focus on one. Hashicorp’s Vault was the clear winner given its number of features, documentation, big community, and track record for long term support and development.)  
    
    自己打造自己的秘密管理服务（有几个潜在可行的选择，但每个选择都引入了自己的复杂性，因此专注于其中一个是有意义的。鉴于Hashicorp的Vault拥有众多功能、文档、庞大的社区以及长期支持和开发的记录，它显然是最佳选择。）

With my analysis complete, I spent a month of spare time working on a Vault Server for storing static secrets to help me gain a working mastery of Vault, I wanted it to be secure, easy to maintain, and easy to use. I did my best to achieve this by enabling TLS, adding Vault Configuration, Roles, Policies, and Kubernetes Infrastructure as Code for a highly available Vault/Consul Cluster to a git repo, using KMS auto unseal, writing good readme documentation, enabling versioned key-value store, LDAP authentication, the web GUI, and a third party desktop GUI called Cryptr by Adobe. While learning Vault I noticed many drawbacks to its usage:  

完成分析后，我花了一个月的业余时间开发了一个Vault服务器，用于存储静态密码，以帮助我熟练掌握Vault。我希望它既安全，易于维护，又易于使用。为了实现这一目标，我尽力启用了TLS，添加了Vault配置、角色、策略和Kubernetes基础设施作为高可用的Vault/Consul集群，并将其存储在git仓库中。我还使用了KMS自动解封装、编写了良好的自述文件、启用了版本化的键值存储、LDAP身份验证、Web图形界面以及Adobe的第三方桌面图形界面Cryptr。在学习Vault的过程中，我注意到了它的许多缺点：

1.  Vault still needs a place to store its secrets. (Where does Vault store its Infrastructure as code secrets? HTTPS cert and IAM password for KMS Auto Unseal)  
    
    Vault仍然需要一个地方来存储它的秘密。（Vault将其基础设施代码的秘密存储在哪里？HTTPS证书和KMS自动解封的IAM密码）
2.  Vault’s very expensive in more ways than one. (You have to pay for infrastructure and storage. It’s not simple enough that you could set it up from scratch, write a readme, and train a few people on how to use it within an hour, using Infrastructure as Code and a premade readme in a git repo can help, but even then there’s still a lot to learn. Ops will need to spend time maintaining it with backups, upgrades, and monitoring. Devs need to spend time writing custom wrapper scripts to authenticate and pull the desired data.)  
    
    Vault在多个方面都非常昂贵。（你需要支付基础设施和存储的费用。它并不简单，你不能仅仅从头开始设置它，写一个自述文件，然后在一个小时内培训几个人如何使用。使用基础设施即代码和预先准备好的自述文件在git仓库中可以帮助，但即使如此，仍然有很多东西需要学习。运维人员需要花时间进行备份、升级和监控。开发人员需要花时间编写自定义的包装脚本来进行身份验证和提取所需数据。）
3.  Vault makes life harder for people who need to store secrets, so they’ll avoid using it, which hurts its goal of being a central secrets repo. (Devs need to learn several new commands to interface with Vault or rely on slow Vault GUIs. The majority of preexisting tools are designed to interface with files on a file system. So using tools like vimdiff now require extra steps of logging in, fetching the secret, converting it to a file, and removing the file when done.)  
    
    Vault让需要存储秘密的人们的生活变得更加困难，因此他们会避免使用它，这损害了它作为一个中央秘密存储库的目标。（开发人员需要学习几个新的命令来与Vault进行交互，或者依赖于缓慢的Vault图形界面。大多数现有工具都是设计用于与文件系统上的文件进行交互的。因此，现在使用像vimdiff这样的工具需要额外的步骤，如登录、获取秘密、将其转换为文件，完成后再删除文件。）
4.  The default implementation has a security vulnerability that’s expensive to secure. (If someone gets root access to a Vault Server, they can get the master decryption key by doing a memory dump. Hosting Vault on Kubernetes or Cloud VMs leads to more opportunities to get root access. In order to fully mitigate the risk of root access, you’d need to provision machines with Intel Software Guard Extensions, and run your Vault Servers on those in SCONE Security Enclaves (containers running in encrypted RAM). Adding these will add more infrastructure and research costs. Twistlock, Aqua, or SysDig are alternative options for partially mitigating this risk.)  
    
    默认实现存在一个昂贵的安全漏洞。（如果有人获得Vault服务器的root访问权限，他们可以通过内存转储获取主解密密钥。在Kubernetes或云虚拟机上托管Vault会增加获取root访问权限的机会。为了完全减轻root访问风险，您需要使用Intel Software Guard Extensions为机器提供资源，并在SCONE安全隔离区（运行在加密RAM中的容器）上运行Vault服务器。添加这些将增加更多的基础设施和研究成本。Twistlock、Aqua或SysDig是部分减轻此风险的替代选项。）

Given these drawbacks, I decided to dive deeper and research further, that research lead me to [Soluto’s Kamus](https://blog.solutotlv.com/can-kubernetes-keep-a-secret/) where I was introduced to 2 cool concepts: GitOps and zero-trust secrets encryption. That got me leaping through a rabbithole of encryption techniques. At the end of the journey I came up with the following mental schema.  

鉴于这些缺点，我决定深入研究，进一步调查，这项研究引导我到Soluto的Kamus，我在那里了解到了两个很酷的概念：GitOps和零信任秘密加密。这让我深入了解了一系列加密技术。在旅程的尽头，我得出了以下的思维框架。

### Abridged Evolution of Cryptography  

密码学的简化演变

1.) Symmetric Encryption Keys:  

对称加密密钥：

-   Long password is used for both encryption and decryption.  
    
    长密码用于加密和解密。

2.) Asymmetric Encryption Public-Private Key Pairs:  

非对称加密公私钥对：

-   Public key encrypts data, private key decrypts data encrypted with the public key.  
    
    公钥加密数据，私钥解密使用公钥加密的数据。

3.) HSMs (Hardware Security Modules):  

硬件安全模块（HSMs）：

-   Make it so the private key doesn’t get leaked.  
    
    确保私钥不会泄露。
-   HSMs are expensive. HSMs很贵。
-   HSMs are not user or automation friendly.  
    
    HSMs不够用户友好，也不适合自动化操作。

4.) Cloud KMSs (Key Management Services):  

4.) 云KMS（密钥管理服务）：

-   KMS is a trusted service that encrypts and decrypts data on behalf of clients, it basically allows a user or machine to encrypt and decrypt data using their identity instead of encryption/decryption keys. (A client authenticates against a KMS, which checks their identity against an ACL, if they have decryption rights, the client can send encrypted data in a request to the KMS, which will then decrypt the data on behalf of the client, and send the decrypted data back to the client over a secure TLS tunnel.)  
    
    KMS是一个可信赖的服务，代表客户对数据进行加密和解密，基本上允许用户或机器使用其身份而不是加密/解密密钥来加密和解密数据。（客户对KMS进行身份验证，KMS会将其身份与访问控制列表进行核对，如果客户具有解密权限，客户可以将加密数据发送到KMS的请求中，然后KMS将代表客户解密数据，并通过安全的TLS隧道将解密后的数据发送回客户端。）
-   KMSs are cheap. KMSs很便宜。
-   KMSs are exposed via REST API, which makes them user and automation friendly.  
    
    KMSs通过REST API暴露，使其用户和自动化友好。
-   KMSs are extremely secure, they make it feasible to go a decade without leaking decryption keys.  
    
    KMS非常安全，可以在十年内不泄露解密密钥。
    -   KMS encryption technique’s invention introduced 3 killer pieces of functionality:  
        
        KMS加密技术的发明引入了三个杀手级功能：
        1.  When responding to a known breach: Before KMS decryption keys would get leaked: you can’t revoke a decryption key, which means you’d need to rotate several decryption keys, re-encrypt all data with the new keys, and try your best to purge old encrypted data. While doing all of this you’ll need to fight with management to get approval to cause downtime to several production systems, minimize said downtime, and even if you do everything right, you may be unable to completely purge the old encrypted data, like in the case of git history, and backups. After KMS it’s identity credentials that get leaked: Identity credentials can be revoked, when they’re revoked they’re worthless. The nightmare of re-encrypting data and purging old encrypted data goes away. You still need to rotate secrets (identity credentials vs decryption key), but the act of rotation becomes cheap enough that it can be automated and scheduled as a preventative measure.  
            
            在响应已知的违规事件时：在KMS解密密钥泄漏之前：你无法撤销解密密钥，这意味着你需要轮换多个解密密钥，使用新密钥重新加密所有数据，并尽力清除旧的加密数据。在做所有这些的同时，你需要争取管理层的批准，以引起数个生产系统的停机时间，并尽量减少停机时间，即使你做得再好，也可能无法完全清除旧的加密数据，就像在git历史和备份的情况下一样。在KMS之后，泄漏的是身份凭证：身份凭证可以被撤销，一旦被撤销，它们就变得毫无价值。重新加密数据和清除旧的加密数据的噩梦消失了。你仍然需要轮换密钥（身份凭证与解密密钥），但轮换的行为变得足够廉价，可以自动化并计划为一项预防措施。
        2.  Management of encrypted data shifts from an impossible task involving distributed decryption keys, to a trivial task of managing a centralized ACL. It now becomes possible to easily revoke, edit, and assign granular access to encrypted data; and as a bonus since Cloud KMS, IAM, and SSO Identity Federations integrate together, you can leverage preexisting user identities.  
            
            加密数据的管理从一个涉及分布式解密密钥的不可能任务转变为管理集中式访问控制列表的简单任务。现在可以轻松地撤销、编辑和分配对加密数据的细粒度访问权限；而且由于云KMS、IAM和SSO身份联合集成在一起，您可以利用现有的用户身份。
        3.  Crypto Anchoring techniques become possible:  
            
            加密锚定技术变得可能：
            -   Network ACLs can be applied to KMS to make it so data can only be decrypted in your environment.  
                
                网络访问控制列表（Network ACLs）可以应用于KMS，使得数据只能在您的环境中解密。
            -   KMS decryption rates can be monitored for a baseline, when an anomalous rate occurs, alerts and rate limiting can be triggered.  
                
                可以监控KMS解密速率以建立基准，当出现异常速率时，会触发警报和速率限制。
    -   KMS’s decryption keys can be secured by an HSM.  
        
        KMS的解密密钥可以通过HSM进行安全保护。
    -   Opportunities for decryption keys to get leaked are near zero because clients don’t interact directly with decryption keys.  
        
        解密密钥泄漏的机会几乎为零，因为客户端不直接与解密密钥进行交互。
    -   Cloud Providers can afford to hire the best security professionals and implement expensive operational processes that are required to keep the backend systems as secure as possible, so backend key leakage opportunities are also near zero.  
        
        云服务提供商可以雇佣最优秀的安全专业人员，并实施昂贵的运营流程，以尽可能保护后端系统的安全，因此后端密钥泄漏的机会也几乎为零。

My new understanding of advanced encryption techniques lead me to realize that KMS could be leveraged to prevent decryption keys from being leaked. That plus the ability to revoke decryption rights without needing to make any changes to encrypted files makes truly secure encrypted files in Git a reality. I revisited a few Git based encryption solutions I’d previously dismissed and discovered that Mozilla SOPS satisfied all of my criteria for an ideal secrets management solution. It also integrates well with CICD pipeline tools: There’s a SOPS Terraform Provider, Helm Secrets is just a wrapper for SOPS, and you can always fallback to:  

我的对高级加密技术的新理解让我意识到可以利用KMS来防止解密密钥泄露。再加上可以撤销解密权限而无需对加密文件进行任何更改，使得在Git中实现真正安全的加密文件成为可能。我重新审视了一些之前被我忽视的基于Git的加密解决方案，并发现Mozilla SOPS符合我对理想的秘密管理解决方案的所有标准。它还与CICD流水线工具很好地集成：有一个SOPS Terraform提供程序，Helm Secrets只是SOPS的一个包装器，而且你总是可以回退到：

```
Bash# sops --decrypt mysecret.yaml | kubectl apply -f -
```

(where kubectl could have been any CLI Utility that accepts standard input (-)) SOPS has none of the drawbacks of other Git based encryption solutions: One of the footguns in other Git based encryption solutions was that someone could accidentally push a decrypted secret to the git repo. With SOPS when you want to edit a file, the file stays encrypted on disk, gets decrypted in RAM where you can edit it with vim, and when you save the edited file it gets re-encrypted before being written to disk. At the same time, it does offer the flexibility to quickly decrypt a few files so you can use a tool like vimdiff. SOPS has none of the drawbacks of Vault: It doesn’t require infrastructure and it’s as cheap as KMS. You could easily set it up, train a few people, and write a readme file within an hour, here’s an example of how easy it is to setup and use:  

（其中kubectl可以是任何接受标准输入（-）的CLI实用程序）SOPS没有其他基于Git的加密解决方案的缺点：其他基于Git的加密解决方案中的一个危险因素是，有人可能会意外地将解密的机密信息推送到git存储库。使用SOPS时，当您想编辑一个文件时，文件仍然以加密形式存储在磁盘上，然后在RAM中解密，您可以使用vim进行编辑，保存编辑后的文件后，它会在写入磁盘之前重新加密。同时，它还提供了快速解密几个文件的灵活性，以便您可以使用像vimdiff这样的工具。SOPS没有Vault的任何缺点：它不需要基础设施，并且与KMS一样经济实惠。您可以轻松地设置它，培训几个人，并在一个小时内编写自述文件，以下是设置和使用它的示例，展示了它有多么容易：

```
Bash# aws kms create-key --description "Mozilla SOPS” | grep Arn
```

```
"Arn": "arn:aws:kms:us-east-1:020522090443:key/4882a19d-5a98-40ae-a1ad-a60423afbddb",
```

```
Bash# cd $repo
```

```
Bash# vim .sops.yaml
```

(Create a file named _.sops.yaml_, with the following 2 lines of text)  

创建一个名为.sops.yaml的文件，其中包含以下两行文本。

```
creation_rules:
- kms: 'arn:aws:kms:us-east-1:020522090443:key/4882a19d-5a98-40ae-a1ad-a60423afbddb'
```

```
Bash# sops mysecret.yaml
```

This will open the vim editor so you can type what you want to store in the secret. This simple command is used to both create and edit files.  

这将打开vim编辑器，以便您可以输入要存储在秘密中的内容。这个简单的命令用于创建和编辑文件。

```
Bash# cat mysecret.yaml
```

Will show you an encrypted yaml  

将向您展示一个加密的YAML文件

```
Bash# sops --decrypt mysecret.yaml
```

Will show you the decrypted yaml SOPS will use your AWS credentials stored in _~/.aws_ to authenticate against KMS so you can encrypt and decrypt without a password. SOPS will also recursively look for .sops.yaml files so it’ll auto discover metadata about how it should encrypt and decrypt things, which has two important ramifications: first, a user doesn’t have to learn a ton of commands or flags. Second, an additional _.sops.yaml_ file can be added to a subfolder representing a production environment or different project, that _.sops.yaml_ file could have a different encryption/decryption key. You could give different Cloud IAM users different rights to each KMS key, to achieve granular access control. If you’re worried about someone deleting your AWS KMS key you can configure SOPS so the data can be encrypted or decrypted by AWS, GCP, or Azure KMS solutions, so you can keep a secondary backup KMS that few people have access to. SOPS encourages workflows patterns that make life easier. Devs can store their secrets encrypted right next to and in sync with the version of the code that uses it. Secrets management suddenly gains all the benefits of git: auditable change management, peer reviews via pull requests, diffs of edits to secrets are meaningful because only edited values will get updated on edits, vs the entire file getting re-encrypted, this also makes merge conflicts less likely. Consistency and standardization always make automation and CICD Pipeline development easier, which makes the Ops folks happy. SOPS allows code, configuration, and secrets to be stored in a consistent location, which makes GitOps workflows easier to achieve. Hashicorp Vault will have trouble achieving its goal of being a centralized secret repo for your organization because users will find it hard to use, devops will find it troublesome to maintain, and management could find it expensive. SOPS, on the other hand, is pain-free to use, easy to learn, cheap to maintain, and supports workflow patterns that make life easier! These things together mean as long as someone can pitch it to the organization, there will be no barriers to adoption, which means an increased security posture for the entire organization is more likely to occur. This is why SOPS with KMS and Git is massively underrated. I’d like to clarify that the purpose of this article isn’t to say Vault’s bad and you should use SOPS and KMS instead. I wrote this article for 3 reasons: One, I love to teach. Two, I wanted to point out some shortcomings of Vault. Three, KMS with SOPS is an amazing combo that’s massively underrated: no one seems to know about it, I never encountered a proper explanation of either during my research, and according to [Google Trends](https://trends.google.com/trends/explore?cat=5&q=git-crypt,hashicorp%20vault,git%20secrets,AWS%20Secrets%20Manager,Mozilla%20SOPS) there are not many searches of SOPS compared to Vault. I’d like to end this article by saying that I wholeheartedly recommend everyone learn SOPS, KMS, and Vault. Why learn Vault if it’s hard and SOPS with KMS does the same thing with ease? Two reasons really: One, Vault is among the best in class when it comes to PKI and secrets rotation, both of which can be needed to satisfy many government and banking security compliance standards. Two, Vault gets easier to use every year: The community has accepted it as a clear winner and added Vault support into several products: Jenkins, cert-manager, and Kubernetes. Kubernetes, in particular, works nicely with Vault, a lot of the pain points have been abstracted and automated to the point where they are worth together smoothly. The Vault team also has a proven track record of being committed to making Vault easier to use over time by improving documentation, offering some IaC, and responding to the needs of the community: After the community-made auto unseal solutions, backend storage migration solutions, and 3rd party web GUIs; Vault’s Developers decided to bake these functionalities into the open-source version. Given this, it wouldn’t surprise me if in the future Vault’s Transit Secrets Engine (Vault’s KMS solution) was made to integrate smoothly with Mozilla SOPS.  

将展示给您解密的yaml文件。SOPS将使用存储在~/.aws中的AWS凭据进行KMS身份验证，以便您可以在不需要密码的情况下进行加密和解密。SOPS还会递归查找.sops.yaml文件，以自动发现有关如何加密和解密的元数据，这有两个重要的影响：首先，用户不需要学习大量的命令或标志。其次，可以向子文件夹添加一个额外的.sops.yaml文件，表示生产环境或不同的项目，该.sops.yaml文件可以具有不同的加密/解密密钥。您可以为每个KMS密钥授予不同的Cloud IAM用户不同的权限，以实现细粒度的访问控制。如果您担心有人删除您的AWS KMS密钥，您可以配置SOPS，以便数据可以由AWS、GCP或Azure KMS解决方案进行加密或解密，这样您就可以保留一个少数人可以访问的辅助备份KMS。SOPS鼓励简化工作流程的模式。开发人员可以将其加密的秘密存储在与使用它的代码版本紧密同步的位置。 秘密管理突然获得了git的所有好处：可审计的变更管理，通过拉取请求进行同行评审，对秘密的编辑差异有意义，因为只有编辑的值才会在编辑时更新，而不是整个文件重新加密，这也使合并冲突的可能性降低。一致性和标准化总是使自动化和CICD流程开发更容易，这使运维人员感到高兴。SOPS允许将代码、配置和秘密存储在一致的位置，这使得GitOps工作流更容易实现。Hashicorp Vault将很难实现成为组织的集中式秘密存储库的目标，因为用户会发现难以使用，DevOps会发现维护麻烦，管理层可能会觉得昂贵。另一方面，SOPS使用起来无痛苦，易于学习，维护成本低廉，并支持使生活更轻松的工作流模式！这些因素共同意味着只要有人能够向组织推销它，就不会有采用的障碍，这意味着整个组织的安全姿态更有可能发生提升。这就是为什么SOPS与KMS和Git的组合被严重低估。 我想澄清一下，本文的目的并不是说Vault不好，你应该使用SOPS和KMS代替。我写这篇文章有三个原因：一是我喜欢教学；二是我想指出Vault的一些不足之处；三是SOPS与KMS的组合非常出色，但被大家低估了：似乎没有人知道它，我在研究中也没有找到合适的解释，而根据Google Trends的数据，与Vault相比，对SOPS的搜索量并不多。我想以这篇文章的结尾，全心全意地推荐每个人学习SOPS、KMS和Vault。为什么要学习Vault呢？毕竟它很难，而SOPS与KMS可以轻松完成相同的任务。实际上有两个原因：一是在PKI和密钥轮换方面，Vault是最佳选择之一，这两个方面在满足许多政府和银行的安全合规标准时可能是必需的；二是Vault每年都变得更易于使用：社区已经将其视为明确的赢家，并将Vault支持添加到了几个产品中，如Jenkins、cert-manager和Kubernetes。 Kubernetes与Vault非常搭配，许多痛点已经被抽象化和自动化处理，以至于它们能够顺利地协同工作。Vault团队还通过改进文档、提供一些基础设施即代码(IaC)以及响应社区需求等方式，不断致力于使Vault更易于使用：在社区制作的自动解封解决方案、后端存储迁移解决方案和第三方Web GUI之后，Vault的开发人员决定将这些功能整合到开源版本中。鉴于此，如果将来Vault的Transit Secrets Engine（Vault的密钥管理解决方案）能够与Mozilla SOPS无缝集成，我也不会感到惊讶。

Oteemo thanks you for reading this post, if you want to find out more as to [DoD Iron Bank services](https://oteemo.com/accelerate-to-iron-bank/), [DevSecOps adoption](https://oteemo.com/drive-devsecops-adoption/) or [Cloud Native Enablement](https://oteemo.com/cloud-native-application-development/), contact us by submitting our form via our website.  

Oteemo感谢您阅读本篇文章，如果您想了解更多关于DoD Iron Bank服务、DevSecOps采用或云原生能力方面的信息，请通过我们的网站提交表单与我们联系。

We will be happy to answer all your questions, especially the hard ones!  

我们很乐意回答你所有的问题，尤其是那些难的！
