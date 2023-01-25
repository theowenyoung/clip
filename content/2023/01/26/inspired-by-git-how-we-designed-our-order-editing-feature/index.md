---
title: "受 Git 启发：我们如何设计订单编辑功能"
date: 2023-01-26T02:26:09+08:00
updated: 2023-01-26T02:26:09+08:00
taxonomies:
  tags: []
extra:
  source: https://medusajs.com/blog/git-inspired-order-editing-feature/
  hostname: medusajs.com
  author: Oliver Juhl
  original_title: "Inspired by Git: How we Designed our Order-Editing Feature"
  original_lang: en
---

[Medusa’s](https://github.com/medusajs/medusa) Order API supports order editing capabilities that equip merchants and developers with the tooling necessary to reduce manual work and offer a great customer experience.  
Medusa 的订单 API 支持订单编辑功能，为商家和开发人员提供必要的工具，以减少手动工作并提供出色的客户体验。

Designing this seemingly simple functionality proved to be a complex task that was solved with inspiration from the world's most-used developer tools.  
事实证明，设计这个看似简单的功能是一项复杂的任务，我们从世界上最常用的开发人员工具中汲取灵感解决了这个问题。

This article covers how we adopted principles from the Git version control system and GitHub in our Order Editing API design. You can read the product announcement [here](https://app.stackbit.com/studio/62cc2d2d31288100bd016cc0#/blog/order-edits-announcement/).  
本文介绍了我们如何在订单编辑 API 设计中采用 Git 版本控制系统和 GitHub 的原则。您可以在此处阅读产品公告。

## Understanding Order Editing 了解订单编辑

Before going over the design behind this feature, we need to understand its constraints. Let’s dive into what it means to edit an order in Medusa.  
在回顾这个特性背后的设计之前，我们需要了解它的限制。让我们深入了解在 Medusa 中编辑订单意味着什么。

When an order is placed, it is in its base state from a customer and store administrator point of view. Generally, the next steps for orders from here are fulfillment, shipping, and payment capturing.  
下订单时，从客户和商店管理员的角度来看，它处于基本状态。一般来说，从这里开始的订单的后续步骤是履行、运输和付款捕获。

Sometimes a change in the order might be required first. Several scenarios could lead to this; the customer changed their mind about their purchase, the inventory management system was out of sync with the physical stock, or the merchant wants to add a complimentary item due to long processing time.  
有时可能需要先更改顺序。有几种情况可能导致这种情况；客户改变购买主意，库存管理系统与实物库存不同步，或者由于处理时间长，商家想要添加赠品。

A naive solution would allow store administrators to modify order items directly. However, this could have serious consequences. Order history is lost or becomes misleading, potential unresolved payment discrepancies arise, and stale order data remain in integrated services, such as analytics providers.  
一个简单的解决方案是允许商店管理员直接修改订单商品。然而，这可能会产生严重的后果。订单历史丢失或变得具有误导性，可能出现未解决的付款差异，并且过时的订单数据保留在集成服务中，例如分析提供商。

Aside from ensuring data consistency in your underlying dependencies, you also want to offer a good customer experience. Instead of changing things directly, you want to give customers full control and confidence by allowing them to confirm a change before it is completed. Supporting these cases spawns the need to introduce an intermediate pending step for the edits you make to an order.  
除了确保底层依赖项中的数据一致性之外，您还希望提供良好的客户体验。与其直接更改内容，不如让客户在更改完成之前确认更改，从而给予客户完全的控制权和信心。支持这些情况需要为您对订单所做的编辑引入一个中间挂起步骤。

It should be clear that editing an order is not as straightforward as updating the quantity of a line item. There are many use cases and dependencies to consider to ensure data is consistent across all systems in your stack and that customers get the best experience.  
应该清楚的是，编辑订单不像更新订单项的数量那样简单。有许多用例和依赖关系需要考虑，以确保堆栈中所有系统的数据一致，并确保客户获得最佳体验。

## Building an API with git-like flow of events  
使用类似 git 的事件流构建 API

As we started to plan the feature, it became apparent that we were building a subset of the functionality from a version control system with a pull request-like mechanism for editing an order.  
当我们开始计划该功能时，很明显我们正在从版本控制系统构建功能的一个子集，该系统具有用于编辑订单的类似拉取请求的机制。

The goal was to allow users to change the original state of their order with an approval-staged flow without losing its history. A Git-like system with the management capabilities offered by GitHub.  
目标是允许用户通过分阶段审批流程更改订单的原始状态，而不会丢失其历史记录。具有 GitHub 提供的管理功能的类 Git 系统。

We were excited to realize that a developer-centric pattern from our daily work could directly apply to our API design.  
我们很高兴地意识到，我们日常工作中以开发人员为中心的模式可以直接应用于我们的 API 设计。

We can see the following resemblance between the order-editing flow and a git-like system:  
我们可以看到订单编辑流程和类似 git 的系统之间的以下相似之处：

-   Order placed → Main branch 已下订单 → 总店
-   Store administrator initiates an order edit → Branches out from main  
    商店管理员发起订单编辑 → 从主分支出来
-   Store administrator makes changes to order edit → Pushes commits to branch  
    商店管理员更改订单编辑 → 将提交推送到分支
-   Store administrator submits an order edit → Opens a pull request to main  
    商店管理员提交订单编辑 → 向 main 打开拉取请求
-   Customer confirms an order edit → Reviewer approves the pull request  
    客户确认订单编辑 → 审阅者批准拉取请求

We even extended the capabilities of the API with additional functionality as a result of using the Git + GitHub analogy:  
由于使用 Git + GitHub 类比，我们甚至通过附加功能扩展了 API 的功能：

-   Store administrator force completes an order edit → Core maintainer force merges a pull request  
    Store administrator force 完成订单编辑 → Core maintainer force merge a pull request
-   Customer requests an additional item → Reviewer requests changes to the pull request  
    客户请求附加项目 → 审阅者请求更改拉取请求

Our feature had a functional requirement of having an intermediate step between initializing the edit and committing the changes. In this state, you can create multiple edits to the order without applying them. This is similar to pushing commits to a branch while a feature is in work-in-progress, except we only allow one commit for each order edit. More on that later.  
我们的功能有一个功能要求，即在初始化编辑和提交更改之间有一个中间步骤。在此状态下，您可以对订单创建多个编辑而不应用它们。这类似于在进行中的功能时将提交推送到分支，除了我们只允许对每个订单编辑进行一次提交。稍后会详细介绍。

### Design

Now let’s turn to implementation specifics to see how the analogy took shape in our data layer.  
现在让我们转向实现细节，看看类比是如何在我们的数据层中形成的。

There are two database models worth highlighting: `OrderEdit` and `OrderItemChange`:  
有两个数据库模型值得强调： `OrderEdit` 和 `OrderItemChange` ：

```
// order-edit.ts

OrderEdit
- id
- order
- changes
- internal_note
- items

// order-item-change.ts

OrderItemChange
- id
- original_line_item
- line_item
- type (add, remove, update)
```

Only properties relevant to the Git analogy are included above. If you wish to explore the models more in-depth, you can find them [here](https://docs.medusajs.com/references/entities/classes/OrderEdit).  
上面仅包含与 Git 类比相关的属性。如果您想更深入地探索这些模型，可以在此处找到它们。

The `OrderEdit` model holds the modifications you want to make to your order. It references the original order, stores an internal note, and contains a list of edits. When an `OrderEdit` is created, all items from the Order are copied to the `OrderEdit`.  
`OrderEdit` 模型包含您要对订单进行的修改。它引用原始订单，存储内部注释，并包含编辑列表。创建 `OrderEdit` 时，订单中的所有项目都将复制到 `OrderEdit` 。

The edits are represented as one or more `OrderItemChange` records. There are three types of changes: Add, Remove and Update. The purpose of each should be clear. When an edit is created, we store a copy of the original item to ensure full visibility of the history when these changes are eventually applied.  
编辑表示为一个或多个 `OrderItemChange` 记录。共有三种类型的更改：添加、删除和更新。每一项的目的都应该明确。创建编辑后，我们会存储原始项目的副本，以确保最终应用这些更改时历史记录的完全可见性。

You might have already drawn the parallels to Git. The above data modeling is comparable to how branches, staged changes, and commits work. The `OrderEdit` is your branch diverging from the main one, and the `OrderItemChange` records are your staged changes ready to be pushed.  
您可能已经将其与 Git 进行了比较。上述数据建模类似于分支、分阶段更改和提交的工作方式。 `OrderEdit` 是您从主分支分支出来的分支， `OrderItemChange` 记录是您准备好推送的分阶段更改。

Together, they constitute the commit with a message and hold the information capable of showing a diff of the changes.  
它们一起构成带有消息的提交，并保存能够显示更改差异的信息。

### Limitations to the analogy 类比的局限性

Not all aspects of a traditional version control system apply to our feature. Whereas Git is excellent at facilitating seamless collaboration among an indefinite number of users, our feature is limited to one active order edit at a time. Only one branch aside from the main one.  
并非传统版本控制系统的所有方面都适用于我们的功能。尽管 Git 非常擅长促进无限数量的用户之间的无缝协作，但我们的功能仅限于一次编辑一个活动订单。除了主要的分支之外，只有一个分支。

This is to guard businesses against unwanted situations arising from multiple ongoing edits and outbound payment links. An example would be that customers accidentally pay for the wrong order edit. We built the logic to eliminate potential merge conflicts.  
这是为了防止企业因多次正在进行的编辑和出站支付链接而出现不必要的情况。一个例子是客户不小心为错误的订单编辑付款。我们构建了消除潜在合并冲突的逻辑。

And finally, we don’t offer a way for merchants to roll back the changes when first committed. The changes made to an Order are irreversible. No `git revert`.  
最后，我们不提供商家在首次提交时回滚更改的方法。对订单所做的更改是不可逆的。没有 `git revert` 。

## Demo

Enough talking. Let’s see it in action.  
说够了。让我们看看它的实际效果。

## Conclusion 结论

Designing our Order Editing API was especially exciting, as it allowed us to apply existing concepts from our daily work to solve a problem for our users. The API we built provides a great developer experience by using familiar concepts while abstracting away the complexity for our merchants in the admin system.  
设计我们的订单编辑 API 尤其令人兴奋，因为它使我们能够应用日常工作中的现有概念来为我们的用户解决问题。我们构建的 API 通过使用熟悉的概念，同时为我们的商家在管理系统中抽象出复杂性，从而提供了出色的开发人员体验。

For concrete API examples of the full order editing flow, see our how-to documentations on:  
有关完整订单编辑流程的具体 API 示例，请参阅我们的操作文档：

-   [Edit an order as an administrator  
    以管理员身份编辑订单](https://docs.medusajs.com/references/entities/classes/OrderEdit)
-   [Implement order-editing on the storefront  
    在店面实施订单编辑](https://docs.medusajs.com/advanced/storefront/handle-order-edits)
