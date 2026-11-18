---
title: "Data composability: A blueprint for modern data management"
date: "2024-08-23"
series: "Data composability"
seriesOrder: 2
description: "Bring the applications to the data: how a data-composable CDP runs directly on the warehouse, and how that compares to a traditional CDP and to reverse ETL."
tags: ["data", "composability", "snowflake"]
cover: "/images/writing/data-composability-blueprint-for-modern-data-management/cover.jpg"
mirrorName: "Simon AI blog"
mirrorUrl: "https://www.simon.ai/blog-posts/data-composability-blueprint-for-modern-data-management"
---
Data composability represents a paradigm shift in data management by emphasizing integrating data-centric applications directly on a cloud data warehouse architecture. This approach contrasts traditional data strategies prioritizing data centralization over application-driven value.

By focusing on the interoperability of data components and their seamless interaction within a composable framework, organizations can achieve greater agility, efficiency, and scalability in their data operations.

You can [read my previous article about the importance of a data composability strategy and the various applications essential for leveraging your centralized data](/writing/composable-customer-data-strategy/).

But here, I want to delve deeper into data composability so you can understand how a composable CDP enhances these applications and revolutionizes how your organization harnesses data for strategic advantage.

Data composability creates a flexible, scalable, and interconnected data environment where components — like data sources, models, and applications — can be assembled and reassembled to meet evolving business needs.

This approach ensures that your data assets remain dynamic and adaptable, enabling rapid innovation and responsiveness. With data composability, you can be confident that your data strategy is future-proof and ready for whatever changes come your way.

## What is data composability, exactly?

Data composability is the data-centric counterpart to application composability, akin to how composable commerce leverages the MACH architecture (microservices, API-first, Cloud-native SaaS, headless). It emphasizes the interactions of data applications built directly on top of a cloud data warehouse architecture.
- Apps are data applications on top of the cloud data warehouse architecture
- Where possible, data remains within the CD, and most apps “bring compute” to the data
- It is composed of a logical pipeline of modular stages with bounded context and robust interfaces
- Extends end-to-end beyond modeling, through data applications, and back to generated data capture

It also fundamentally exposes data to an organization throughout its traditionally CDP-managed lifecycle. Rather than internally processing data opaquely and then exporting it into downstream marketing channels, a data-composable approach allows an organization to power additional, potentially non-CDP, use cases such as inventory management, supply chain optimization, or customer service improvement from each stage of data processing and keep the data within the CDW throughout more of the process.

## Data composability principles

Let’s break down the core principles of data composability.

**Data proximity:** data predominantly remains within the CDW, minimizing data movement. Most applications bring computing to the data rather than transferring data to the computing environment, enhancing efficiency and security.

**Modular design:** The data processing pipeline is structured as a series of logical, modular stages, each defined by a bounded context with a robust interface. This modularization ensures a clear separation of concerns and facilitates easier management and scalability.

**End-to-end integration**: The composability extends from data modeling through various data applications to the capture of the data they generate. This comprehensive approach ensures a continuous loop of data utilization and enhancement.

**Cross-organizational accessibility**: Data is made accessible at all stages of processing and modeling, enabling a wide range of cross-organizational use cases. This openness allows for greater collaboration and innovation across different departments.

**Extensible utilization**: By exposing data at various stages, data composability supports extensible uses, from advanced analytics and machine learning to real-time decision-making and operational reporting.

## How is that different than a traditional SaaS CDP?

In traditional SaaS CDP environments, data is often exported to and processed in a separate system, limiting visibility and control over the data.

These platforms typically use a closed environment for processing, and scalability depends on the provider’s capabilities, which may not always align with your organization’s growth or needs.

![](/images/writing/data-composability-blueprint-for-modern-data-management/fig1.jpg)

Conversely, a data-composable CDP utilizes the cloud data warehouse architecture to keep data centralized and secure within your cloud environment. This approach reduces costs associated with data movement and enhances security by leveraging cloud-native protections.

The flexibility of integration and customization allows businesses to tailor the system to their specific requirements, promoting a more effective and efficient use of data.

Furthermore, the data composable model provides unparalleled transparency in data operations, giving organizations complete oversight of how data is handled, transformed, and utilized.

This open access to data at all stages, coupled with the ability to scale effortlessly using cloud resources, sets the data-composable CDP apart from traditional models, making it a superior choice for businesses looking for agility and deep data integration into their strategic operations.

## How is that different than reverse ETL?

Reverse ETL vendors can provide you with a head start in tooling that lets you put together a stage more quickly; however, you’ll find their view is limited to how components work with maybe some illustrative recipes for integrating components into a use case but lacks the broader strategic view of your whole ecosystem.

They place the burden of composability on the user, requiring significant technical skills such as SQL expertise and integration know-how. This can make it acceptable for simpler data tasks but increasingly complex and labor-intensive for more sophisticated data scenarios.

![](/images/writing/data-composability-blueprint-for-modern-data-management/fig2.jpg)

In contrast, a composable CDP is inherently designed to ensure data composability across various stages of data handling without requiring users to possess excellent technical skills.

Thanks to its largely no-code interfaces and AI-assisted functionalities, a composable CDP democratizes data access, allowing users from various backgrounds to engage effectively with data.

It simplifies operations and specifically supports critical business functions like marketing, advertising, and customer support, making it highly relevant and tailored to these domains.

Moreover, while reverse ETL can sometimes struggle with more complex data requirements, composable CDPs are explicitly optimized to handle intricate data scenarios.

This ensures that even the most challenging data workflows are streamlined and efficient, minimizing the user’s effort and maximizing the business value extracted from the data.

## Data composability benefits

Data composability offers several benefits:

### Cross-org utility

Each module in the pipeline is designed with a bounded context, ensuring that interactions between modules are well-defined and manageable. This design allows different departments within your organization to effectively tap into the data pipeline.

For instance, your data science team can access marketing user profiles or behavioral datasets to enhance their models, applying insights gained within marketing strategies and across various operational realms of the organization.

### Security and governance

With data composability, your organization maintains complete control over the security and governance of your data. This control defines who can access the data and what actions they can perform with it.

As the data remains within your CDW, you leverage your cloud environment's inherent security protocols and compliance measures, enhancing the overall protection of your data assets.

### Swappable components

The architecture of a composable CDP is inherently modular. Each stage of the data pipeline acts as a distinct module, allowing you to customize your setup by selecting the best components suited to your needs — whether those are provided by your CDP vendor, sourced from leading technologies in the ecosystem, or developed in-house. This modularity fosters innovation and ensures your data architecture can evolve without disruptive overhauls.

### Cost efficiency

One of the primary advantages of data composability is the significant cost savings. Keeping data within your cloud data warehouse and minimizing replication saves on storage costs and reduces the operational complexities of managing multiple data copies. This efficiency is financial and temporal, as it streamlines data management processes, saving time and resources.

## Theory vs. reality

This diagram lays out many concepts in the straightforward logical pipeline structure I’ve been using to describe data composability. The boxes represent stages of data processing and data applications, and the arrows represent the data interfaces between each.

![theory of data structure](/images/writing/data-composability-blueprint-for-modern-data-management/fig3.jpg)

In reality, there are many other domain concepts and more sophisticated interactions between the stages of data processing.

![reality of composable data structure with a cdp](/images/writing/data-composability-blueprint-for-modern-data-management/fig4.jpg)

One strong advantage of selecting a composable CDP to begin tackling powering these data applications for your organization is that you can draw upon the CDP’s applications as well as the data-side artifacts that drive them.

Of course, Simon has expertise derived from years in the market and supporting use cases across a wide range of business models at all stages of data maturity. Simon partners with our clients in a way that goes beyond simply integrating the CDP and instead focuses on your broader composable data strategy.

However, one primary reason to look to a composable CDP to handle your data applications is that your upstream business model likely has a very similar structure.

Though you can likely describe the overall business model succinctly, growing and scaling the business leads to complexities as your product and service offerings increase and your customer base expands in volume, geography, and more.

Hand-selecting the components that best fit your organization from those offered by a composable CDP lets you direct your time, effort, and focus on the most unique and most valuable aspects of your business, all the while ensuring that you have proper structure downstream to enable your marketing, advertising, and support teams.

Selecting a composable CDP means that as you need new capabilities, you have a starting point with its suite of components, so you are never starting from scratch.

## Data beyond customer data

In much the same way that a data composable approach keeps data in the cloud data warehouse for easy access by the rest of your organization, the data of the rest of your organization is also more easily accessible by a composable CDP because there’s no need to establish a heavyweight ETL process to get it there.

Gone are the notions of “SQL traits” or “linked audiences” that take a day to backfill and only update every day after that. And there’s no “data refresh” for either the customer or the non-customer data because it becomes available soon after it lands in the CDW.

In a data-composable approach, including non-customer data is a matter of simply joining tables. This can be done throughout the logical data composable pipeline in modeling, segmentation, or personalization.

Care must be taken not to introduce undue or unsupported dependencies between composable pipeline stages nor to violate bounded context or interfaces.

Simon Data provides high-level guidance for data modeling that is not demanding or inflexible. This ensures that it is compatible with any business model and structured just enough to maintain downstream composability.

## Data modeling in the Simon CDP

Simon divides the world into four categories of inbound data.

![data modeling in simon data cdp](/images/writing/data-composability-blueprint-for-modern-data-management/fig5.jpg)

**Identity data** can arise from anywhere in your organization and only need to provide associations between contact identifiers. It is treated specially, as it is put through rigorous entity resolution to cleanse and deduplicate it due to the sensitivity of identity resolution to bad data.

Additionally, **identity resolution** is a unique modeling process that not only ensures a model tailored to marketing, advertising, and support use cases but also goes through a rigorous QA process and a versioned deployment framework before being utilized in the downstream pipeline.

**Contact data** is subdivided into data that maps 1-1 to a contact and many-1 to a contact, primarily designed for modeling contact properties and events. Profiles within Simon are “logical,” only assembled and materialized on an as-needed basis.

However, several data applications (like trait syncing) will materialize the profile and then monitor it for changes. The cornerstone of the contact profile is identity, which is why it receives elevated treatment.

Lastly, **non-contact data** can be joined to the contact profile on any property, not just contact identifiers like contact data. This permits “enrichment” of the profile with external data like product listing details, fulfillment data, and more, and is generally very use case- or campaign-specific in its application.

The structure and information in this data model are provided to Simon through our identity resolution and schema explorer applications. Essentially, the user offers Simon with enough metadata to power downstream data applications appropriately, and those applications are where Simon truly begins to unlock the value of your Snowflake data.

## Conclusion

In this deep dive into data composability, we've explored how this approach can revolutionize your organization's use of data. By centering on data applications and maintaining data within the cloud data warehouse, data composability offers unparalleled flexibility, scalability, and efficiency.

A composable CDP, like Simon Data, is a cornerstone of this strategy. Providing a framework for data modeling, integration, and application development empowers organizations to unlock the full potential of their data so that businesses can be well-positioned to thrive in the data-driven economy.
