---
title: "Building Composable AI Agents: Why We Chose Snowflake Cortex"
date: "2025-09-05"
description: "How Simon extended composability from applications, to data, to AI agents running natively inside the customer's Snowflake."
tags: ["agents", "data", "snowflake"]
cover: "/images/writing/cortex.jpg"
canonical: "https://medium.com/snowflake/why-simon-data-chose-snowflake-cortex-ai-to-deliver-1-1-personalization-b81785e8d2df"
mirrorName: "Snowflake Builders Blog on Medium"
mirrorUrl: "https://medium.com/snowflake/why-simon-data-chose-snowflake-cortex-ai-to-deliver-1-1-personalization-b81785e8d2df"
---

*How Simon Data extended composability from applications to data to AI agents, creating a new paradigm for governed, scalable AI in the enterprise*

## Introduction

At Simon Data, we've spent years pioneering the concept of composability in customer data platforms. We started by moving away from monolithic SaaS CDPs toward modular, best-of-breed components. Then we extended this philosophy to data composability itself—keeping data within the cloud data warehouse, enabling cross-organizational access, and building modular pipelines with strong interfaces.

Today, we're taking composability to its logical next evolution: **composable agents**.

As AI reshapes how businesses operate, we faced a critical decision point. Our customers needed AI capabilities that could surface hidden insights, automate complex workflows, and activate personalized campaigns at scale—but without sacrificing the governance, security, and data proximity principles that make composable architectures so powerful.

Traditional AI implementations require moving data out of secure boundaries, rely on black-box processing, and create vendor lock-in. This fundamentally conflicts with the composable philosophy that has driven our success: keeping data where it belongs, maintaining transparent operations, and ensuring customers retain control over their most valuable asset.

**The solution: composable agents built natively on Snowflake Cortex.**

Our composable agents maintain three critical principles that extend our data composability framework to AI:

* **Data remains securely in the client's Snowflake environment**
* **LLMs are housed within the client's Snowflake instance**
* **Prompts, model selection, and processing are all client-specific and contained within their Snowflake environment**

This isn't just about where AI runs—it's about creating a new operating model for enterprise AI that gives organizations direct access to context, decisioning, and execution while maintaining complete governance and control.

The development results speak for themselves. Our engineering team was able to bring composable agents to market in months rather than years, and the flexible architecture allows us to rapidly compose additional agents as our product offering grows—adding new capabilities without rebuilding foundational infrastructure.

In this post, I'll walk through why we chose Snowflake Cortex as the foundation for our AI strategy, how we implemented composable agents that honor our core principles, and what this architectural approach enables for the future of AI in customer data platforms.

---

## The AI Challenge for Customer Data Platforms

The promise of AI in marketing has been clear for years: understand customers better, personalize at scale, and automate complex decisions. The reality, however, has been frustrating for most organizations.

Despite significant investments in analytics resources and marketing clouds with integrated data platforms, most marketing teams still lack visibility into what data is missing, let alone how to act on it. They can't easily access subtle behavioral patterns, emotional cues from support conversations, or real-world contextual triggers that drive customer decisions.

### The Governance Imperative

As a customer data platform, Simon handles some of the most sensitive information organizations possess: personally identifiable information, behavioral data, purchase histories, and communication preferences. Any AI implementation must maintain the highest standards of security and compliance.

Traditional AI approaches require moving this sensitive data to external processing environments, creating potential security vulnerabilities and compliance risks. For enterprises in regulated industries or those handling international customer data, this is often a non-starter.

### The Scale Problem

Customer data platforms process massive volumes of data—billions of events, millions of customer records, and terabytes of behavioral information. AI systems need to operate on this data at scale, but most AI infrastructure is designed for smaller, more controlled datasets.

When AI processing happens outside the data warehouse, organizations face the expensive and time-consuming process of extracting, transforming, and loading massive datasets just to run AI workloads. This creates latency, increases costs, and makes real-time AI applications nearly impossible.

### The Architecture Mismatch

Here's where most organizations get tripped up: they assume AI workloads fit neatly into traditional data lakehouse architectures. The popular medallion architecture (Bronze → Silver → Gold layers) works well for structured BI and ML workflows, but customer data platforms need something more flexible.

Simon's use cases span marketing automation, real-time personalization, customer support, advertising optimization, and campaign orchestration. These diverse workloads don't follow the linear, layered processing model that medallion architectures expect. Instead, they require a data cloud architecture that can support distributed, multi-purpose data applications with different latency, scale, and governance requirements.

| **Concept** | **Lakehouse architecture** | **Data cloud architecture** |
| --- | --- | --- |
| Data processing model | Centralized | Decentralized |
| Focal point of architecture | Emphasizes sequential structure for centralized analytics | Emphasizes asset sharing across business entities, partners, and clouds |
| Target audience | Technical teams, IT | Business users, applications |

### The "Build vs. Buy" Dilemma

The AI infrastructure landscape is rapidly evolving, with new models, frameworks, and capabilities emerging constantly. Organizations face a challenging choice:

* **Build:** Invest heavily in AI infrastructure, talent, and ongoing maintenance while trying to keep pace with innovation
* **Buy:** Accept vendor lock-in, limited customization, and potential security compromises

Neither option is ideal for organizations that need AI capabilities that are both cutting-edge and deeply integrated with their existing data infrastructure.

---

## Why We Chose Snowflake Cortex

When evaluating AI infrastructure for composable agents, we needed a solution that could satisfy three non-negotiable requirements: enterprise-grade governance, massive scale, and architectural flexibility. After extensive evaluation, Snowflake Cortex emerged as the only platform that could deliver all three without compromising our composable principles.

### Data Centrality & Governance: The Foundation

The most compelling aspect of Snowflake Cortex isn't what it enables—it's what it eliminates. By running AI workloads natively within Snowflake, we completely avoid the data movement that creates security vulnerabilities, compliance risks, and operational complexity.

**Governance Without Compromise**: Every composable agent operates under the same governance framework that already protects customer data in Snowflake. Role-based access controls, column-level security, and audit trails apply to AI workloads exactly as they do to traditional SQL queries. There's no separate security perimeter to manage, no additional compliance framework to maintain.

**Data Residency Guarantees**: For our enterprise customers, data sovereignty isn't negotiable. With Cortex, customer data never leaves their Snowflake environment—not for model training, not for inference, not for any AI operation. The LLMs come to the data, not the other way around.

**Transparent Operations**: Unlike black-box AI services, every Cortex operation is visible through Snowflake's query history, resource monitors, and observability tools. Our customers can see exactly what AI workloads are running, what data they're accessing, and what compute resources they're consuming.

### 100x Data Access: Beyond Traditional Boundaries

Traditional AI implementations operate on extracted datasets—samples, aggregations, or exports that represent a fraction of available data. Cortex inverts this model entirely.

**Complete Data Universe**: Our composable agents have access to every piece of data in the Snowflake environment—not just customer data, but product catalogs, inventory systems, support interactions, financial records, and external data from the Snowflake Marketplace. This comprehensive data access enables AI insights that would be impossible with traditional approaches.

**Zero-ETL AI Workloads**: There's no data pipeline to maintain between your data warehouse and your AI infrastructure because they're the same system. When new data arrives in Snowflake, it's immediately available to composable agents without any additional processing or movement.

**Cross-Organizational Intelligence**: Because Snowflake serves as the data hub for entire organizations, our agents can correlate customer behaviors with supply chain data, financial performance, operational metrics, and external market conditions. This cross-functional data access transforms AI from a departmental tool into an enterprise capability.

### Home Base for AI Agents: The Model Ecosystem

Snowflake Cortex provides access to industry-leading LLMs—Anthropic's Claude, Meta's Llama, Mistral, and others—without the complexity of managing multiple vendor relationships or the security risks of external API calls.

**Unified Model Access**: Instead of integrating with separate APIs for different LLM providers, composable agents access all models through Snowflake's consistent interface. This simplifies development, reduces operational overhead, and ensures that model selection becomes a configuration choice rather than an architectural decision.

**Performance at Scale**: Cortex handles model hosting, scaling, and optimization. Our agents can process millions of customer records through LLMs without worrying about rate limits, API quotas, or infrastructure management. The compute scales elastically based on workload demands.

**Cost Efficiency**: By running AI workloads on Snowflake's compute, customers pay only for what they use and can apply the same cost controls they use for other data workloads. There's no minimum commitment, no separate billing relationship, and no vendor lock-in.

---

## Technical Implementation: Composable Agents in Practice

### Architecture Principles in Code

Our composable agents implement three core principles that extend data composability to AI:

**Principle 1: Data Proximity**

```sql
-- AI processing happens directly on data in place
SELECT
  customer_id,
  SNOWFLAKE.CORTEX.COMPLETE(
    'claude-3-haiku',
    'Analyze customer sentiment from support interactions: ' || support_conversation
  ) as sentiment_analysis
FROM customer_support_data
WHERE conversation_date >= CURRENT_DATE - 30;
```

**Principle 2: Governed Compute**

```sql
-- All AI operations respect existing security and governance
CREATE OR REPLACE SECURE FUNCTION analyze_customer_intent(
  customer_data STRING,
  behavior_context STRING
)
RETURNS STRING
LANGUAGE SQL
AS $$
  SELECT SNOWFLAKE.CORTEX.COMPLETE(
    'claude-3-sonnet',
    'Given customer profile: ' || customer_data ||
    ' and recent behavior: ' || behavior_context ||
    ' predict likely next action and recommend engagement strategy'
  )
$$;
```

**Principle 3: Composable Intelligence**

```sql
-- Agents combine and reuse each other's outputs
WITH sentiment_scores AS (
  SELECT customer_id, analyze_sentiment(support_logs) as sentiment
  FROM support_interactions
),
intent_predictions AS (
  SELECT customer_id, predict_intent(behavior_data) as intent
  FROM customer_behaviors
)
SELECT
  s.customer_id,
  generate_personalized_campaign(s.sentiment, i.intent, p.profile_data) as campaign_strategy
FROM sentiment_scores s
JOIN intent_predictions i ON s.customer_id = i.customer_id
JOIN customer_profiles p ON s.customer_id = p.customer_id;
```

### Row-Level LLM Operations: Scale Without Complexity

Traditional AI implementations batch process data, creating latency and complexity. Cortex enables row-level LLM operations that can process individual customer records in real-time.

**Massive Parallel Processing**: Cortex can process thousands of customer records simultaneously, applying LLM operations to each row independently. This parallelization happens automatically—there's no need to manage worker pools, queue systems, or batch scheduling.

**Dynamic Resource Allocation**: Compute resources scale automatically based on workload demands. During high-traffic periods, additional compute spins up to maintain performance. During quiet periods, compute scales down to minimize costs.

**Streaming Intelligence**: By combining Cortex with Snowflake Streams, composable agents can process new data as it arrives, enabling real-time AI reactions to customer behaviors, support requests, or market changes.

---

## Real Application Examples: Composable Agents in Action

### Case Study 1: Smart Fields - Beyond Basic Demographics

**The Challenge**: A major retailer wanted to understand customer context beyond basic demographics. They had rich data—support conversations, browsing patterns, seasonal purchase behaviors—but no way to transform this unstructured information into actionable customer attributes.

**Traditional Approach**: Export customer data, run batch processing jobs, manually create derived fields, and sync back to marketing systems. This process took weeks and produced static attributes that quickly became stale.

**Composable Agent Solution**: We deployed Data Agents that use breakthrough "Smart Fields" technology to transform contextual data into dynamic customer attributes directly within Snowflake.

**Results**:
- **Immediate Activation**: Smart Fields are computed in real-time as customers interact with the platform
- **Dynamic Updates**: Field values update automatically as new data arrives—no batch processing delays
- **Cross-Organizational Utility**: The same Smart Fields power marketing campaigns, customer support prioritization, and inventory planning
- **Scale**: Processing 50M+ customer records with contextual AI analysis in minutes, not hours

**Business Impact**: The retailer launched weather-based promotions to high-sensitivity customers during storm seasons, resulting in 40% higher engagement rates compared to generic seasonal campaigns.

### Case Study 2: Smart Segments - From Static Groups to Dynamic Cohorts

**The Challenge**: A financial services company needed to identify customers showing early signs of churn, but their existing segmentation was based on static demographic data and produced broad, less actionable groups.

**Traditional Approach**: Quarterly segment refreshes based on aggregated metrics, with no ability to incorporate real-time behavioral signals or contextual triggers.

**Composable Agent Solution**: We deployed a combination of Insights Agents and Automation Agents to create "Smart Segments" that continuously analyze customer behavior and automatically adjust segment membership based on real-time context.

**Results**:
- **Real-Time Insights**: Churn risk segments update continuously as new behavioral data arrives
- **Contextual Precision**: Instead of broad demographic groups, segments are based on specific behavioral patterns and contextual triggers
- **Automated Response**: Retention campaigns launch automatically when customers enter high-risk segments
- **Cross-Functional Intelligence**: The same churn analysis informs product development, customer success, and marketing teams

**Business Impact**: The financial services company reduced churn by 25% in the first quarter after implementation, with retention campaigns showing 3x higher response rates compared to previous demographic-based approaches.

---

## The New Marketing Workflow: From Segments to Goals

Traditional marketing workflows start with segments—demographic groups or basic behavioral cohorts. With composable agents, the workflow inverts: it starts with business goals and uses AI to discover the optimal path to achieve them.

### Three Types of Composable Agents Working Together

**Insights Agents** analyze the full spectrum of customer interactions to surface high-impact opportunities:
- Discover that parents buying kids' products who mention "back-to-school stress" in support calls are 4x more likely to respond to convenience-focused messaging
- Identify seasonal patterns that traditional analytics miss
- Surface contextual triggers that drive purchase decisions

**Data Agents** transform insights into actionable customer attributes:
- Create dynamic "parent stress level" scores based on support conversation sentiment
- Generate "convenience preference" indicators from purchase timing patterns
- Build "family lifecycle stage" attributes from product category combinations

**Automation Agents** execute campaigns using deep contextual understanding:
- Automatically create hundreds of micro-targeted campaigns based on AI insights
- Optimize message timing based on individual customer context
- Continuously refine targeting based on real-time performance data

**Results**: Instead of a single "parents" segment receiving generic messaging, the system creates dozens of contextually relevant micro-campaigns that speak to specific family situations, stress levels, and convenience needs.

---

## Our Adoption Journey: From Concept to Production

### Initial Implementation: Speed Through Composability

The development velocity we achieved with composable agents surprised even us. Our engineering team had composable agents running in development environments within weeks, not months, because we could leverage our existing data composability foundation.

**What Accelerated Development**:
- **Familiar Patterns**: Our team already understood composable architectures, so extending to AI agents felt natural
- **Existing Infrastructure**: Snowflake was already our data platform, so no new infrastructure to learn or deploy
- **SQL-Native Development**: Developers could implement AI functionality using SQL skills they already had
- **Incremental Deployment**: We could deploy individual agents independently, testing and refining without affecting other systems

**Early Challenges and Solutions**:

**Challenge 1: Prompt Engineering at Scale**
Initially, our prompts were too generic, leading to inconsistent results across different customer contexts.
- **Solution**: We developed prompt templates with variable injection, allowing context-specific customization while maintaining consistency
- **Learning**: Treat prompts as code—version control, testing, and gradual rollout are essential

**Challenge 2: Resource Management**
Early implementations didn't optimize compute usage, leading to higher costs than expected.
- **Solution**: Implemented intelligent caching and prompt optimization to reduce LLM calls
- **Learning**: Snowflake's compute scaling is powerful, but thoughtful resource management still matters

**Challenge 3: Integration Complexity**
Connecting composable agents to existing marketing activation systems required more coordination than anticipated.
- **Solution**: Built standardized output formats that could be consumed by multiple downstream systems
- **Learning**: Composability requires discipline around interfaces and data contracts

### Evolution of Our Development Process

**Phase 1: Proof of Concept (Months 1-2)**
- Built individual agents for specific use cases
- Focused on technical feasibility and basic functionality
- Manual deployment and testing

**Phase 2: Production Pipeline (Months 3-4)**
- Implemented CI/CD workflows for agent deployment
- Added automated testing and validation
- Built monitoring and observability tools

**Phase 3: Scaled Deployment (Months 5-6)**
- Deployed agents across multiple customer environments
- Optimized performance and cost efficiency
- Added agent orchestration and workflow management

**Key Lessons Learned**:

1. **Start Small, Think Big**: Begin with narrowly defined use cases that provide clear value, then expand the scope as you learn
2. **Governance First**: Establish security and compliance frameworks before scaling, not after
3. **Developer Experience Matters**: The easier it is for developers to create and deploy agents, the faster innovation happens
4. **Monitor Everything**: AI workloads are different from traditional data workloads—invest in proper observability from day one

---

## The Future: Where We're Heading

### Next-Generation Agent Capabilities

**Multi-Modal Intelligence**: Our next generation of agents will process not just text and structured data, but images, audio, and video.

**Cross-System Orchestration**: We're expanding agents beyond Snowflake to orchestrate workflows across entire technology stacks while maintaining security boundaries. This includes integration with enterprise tools through protocols like the Model Context Protocol (MCP), creating bridges between AI agents and internal systems.

**Predictive Composition**: Future agents will automatically compose new workflows by combining existing agents based on changing business conditions and performance metrics.

### Strategic Vision: AI-Native Customer Data Platform

The ultimate goal isn't just to add AI to existing workflows—it's to create an AI-native platform where intelligence is woven into every aspect of customer data management.

**Continuous Intelligence**: Every customer interaction, every data point, and every business outcome feeds back into the AI system, creating a continuously learning and adapting platform.

**Enterprise AI Sovereignty**: Companies will have complete control over their AI capabilities while benefiting from the latest model innovations, eliminating the traditional trade-off between control and cutting-edge technology.

---

## Conclusion: The Strategic Advantage of Composable AI

Looking back at our journey from composable CDP to data composability to composable agents, the through-line is clear: the most powerful technology architectures are those that preserve flexibility while providing structure.

**Technical Innovation**: We've proven that enterprise AI doesn't require sacrificing governance, moving data outside security boundaries, or accepting vendor lock-in. Composable agents built on Snowflake Cortex provide a path to cutting-edge AI capabilities while maintaining complete control.

**Operational Transformation**: Our customers aren't just using AI—they're operating differently. Marketing teams that once waited weeks for data science support can now deploy AI-powered campaigns in hours.

**Strategic Positioning**: Organizations that adopt composable AI architectures are building sustainable competitive advantages. They can innovate faster, adapt more quickly to market changes, and leverage AI capabilities that are deeply integrated with their unique business processes and data.

**This is the future of enterprise AI: composable, governed, and under your control.**

---

## Resources

### Technical Documentation

* [Snowflake Cortex Documentation](https://docs.snowflake.com/en/user-guide/snowflake-cortex) - Comprehensive guide to Cortex capabilities and implementation
* [Snowpark Container Services](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/overview) - How to deploy custom applications within Snowflake

### Simon Data Resources

* [Simon AI Product Information](https://simondata.com/ai) - Learn more about our composable agent implementations

---

*Thank you to the Snowflake team, particularly Ed DiCosmo and Alejandro Herrera, for their collaboration and partnership in making composable agents a reality.*
