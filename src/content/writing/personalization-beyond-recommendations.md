---
title: "Unlocking Personalization Beyond Recommendations"
date: "2024-06-06"
description: "Right time, right person, right channel, right content, in that order. The personalization pipeline, with an Equinox case study."
tags: ["personalization", "data"]
draft: true
---

The standard definition of personalization is often limited to using contact properties when composing marketing messages, essentially personalized content. However, true personalization extends far beyond just the message. Unfortunately, most tools in the market today do a poor job of addressing this broader concept (except for Simon, of course!).

Personalization is a buzzword in MarTech these days, but the typical usage tends to over-fixate on recommender systems, like those on Amazon and Netflix. While recommendations are certainly an effective technique for generating personalized content, the journey to truly custom-tailored messaging is much broader. It begins well before populating fields in a template.

The essence of personalization involves answering these critical questions:

* How do I send a message at the right time?
* To the right person?
* Through the right channel?
* With the right content?

While the order of these questions might seem unusual, I chose to list them this way on purpose. This structure underscores a concept I call...

## The Personalization Pipeline

A pipeline formed by capabilities paired with the necessary behavioral and data context must be gathered and forwarded to the next stage. It's common for marketing tools to provide these capabilities. However, it's much less common for them to capture and communicate all the necessary context at each stage to enable deep personalization when you get to messaging. Critically, you need a single tool that can maintain this context seamlessly from end to end.

### Key Components of the Personalization Pipeline

1. **Event Triggers**:
   * What activities triggered the message?
   * What did their session look like, and how did it start?
   * For a new user registration, where did they come from, and what referred them initially?
   * For a purchase or an abandoned cart, what items did they add to their cart?
2. **Segmentation**:
   * What attributes of their customer profile placed them in a specific segment?
   * What other attributes should be used to build the message?
   * This involves segmenting on aggregated customer data and being able to pull out raw contributing events.
3. **Coordination**:
   * Which campaigns are they involved in?
   * Which experimental treatments have they received in the past, and which should they receive now?
   * What channels do they respond to best?
4. **Personalized Content**:
   * What are the full details of the items they browsed or left in their cart?
   * What promotions are running right now?
   * What are the full details of items I should recommend given all of the above?

At the time of sending a message, you need to know all the context that precipitated it. This is why threading that context through the pipeline is essential.

Now, let's walk through each stage in the pipeline and explore how it impacts personalization.

# The Right Time (aka Event Triggers)

Capturing behavior is the baseline for any effective personalization strategy. However, all too often, event data is lost as context for messaging. To ensure effective personalization, your event capture must propagate raw, unaggregated event context all the way down the pipeline to message hydration.

## Why Context Matters

Consider these examples of critical event triggers:

* **Item SKUs left in an abandoned cart**: Knowing exactly which items were left behind can tailor follow-up messages to encourage completion of the purchase.
* **Browsing history before new user registration**: Understanding what products or services interested a user before they signed up can personalize their welcome experience.
* **Initial referrer into a converting session post-purchase**: Recognizing the source of a conversion can help in crafting thank-you messages and future engagement strategies.

Timeliness is essential to maintaining the high intent that makes triggered messaging so effective. It's not just about the trigger itself but also about gathering all the surrounding context—items in the cart, the initial referrer of the session, and major parts of the application the customer interacted with. These key attributes enable a personalized response downstream.

## The Power of Low-Latency Event Triggers

Looking across Simon's clients, we've discovered significant advantages in using event-triggered flows over high-latency segment-triggered flows:

* **Performance Boost**: Event triggers perform 100% better without an increase in unsubscribes.
* **Higher Conversion Rates**: Triggered abandonment journeys see up to 3x higher conversion rates and a 24% higher open rate compared to single messages.

A compelling example of this is illustrated by Simon's client, Equinox.

## Case Study: Equinox's Onboarding Journey

Equinox, a 30-year-old company, faced significant challenges in coordinating member communication across multiple systems—app, email, SMS, and more. These systems operated independently, lacking user interaction context from one another.

A critical moment in the Equinox member lifecycle is onboarding. They identified it as the highest leverage experience to increase retention and lifetime value, crucial for hitting their growth goals. Previously, their onboarding series involved sending between 7 and 12 messages to new customers within the first seven days of their membership. This approach resulted in many redundant touchpoints, as the next message was rarely informed by the user's previous behavior or response.

### Transforming Onboarding with Contextual Triggers

The revamped onboarding journey at Equinox now captures the context of each user's interaction with each triggered message, enabling informed, automated decisions about the best next message. For instance, if a member schedules their fitness assessment at any point, they no longer receive messages promoting the free fitness assessment. Previously, new members who had already signed up for the assessment would still receive redundant messages.

This seamless maintenance of context, as described, allowed Equinox to achieve deep coordination and personalization. The results were significant:

* **Increased Coordination**: Messages were no longer redundant, reducing user frustration and increasing engagement.
* **Enhanced Personalization**: Every interaction was informed by the previous one, creating a coherent and tailored onboarding experience.

Equinox saw impressive results in a short period, underscoring the importance of gathering and coordinating as much context as possible. This case makes a strong argument for the necessity of maintaining comprehensive context to unlock the full potential of personalization.

In the next section, we will explore how segmentation plays a vital role in the personalization pipeline and how it can be effectively implemented.

# The Right Customer (aka No-Code Segmentation)

Building audiences based on contact properties is the baseline for any segmentation strategy. However, the ability to form dynamic behavioral aggregates is much rarer, and the capacity to pull the full context of triggering events is virtually unheard of but absolutely essential for downstream personalized messaging.

Your segmentation tool must be capable of propagating raw, unaggregated event context all the way through the pipeline to message hydration.

## Why Deep Context Matters

Here are some examples where deep context enhances segmentation:

* **Exclusive Segments**: Suppose a contact is in an exclusive segment of taste-makers when leaving product reviews. To personalize effectively, you need to know which product reviews were their most recent.
* **Issue Impact**: If a contact was affected by a delivery issue in a specific geographic region and this is noted in your customer support tool, it's crucial to understand the exact content of the impacted delivery.
* **Recent Interactions**: When recommending similar items to recently active contacts, knowing the specific items they interacted with recently can drive more relevant recommendations.

Segmentation serves different purposes depending on whether it's for triggered campaigns or ad-hoc, scheduled, or recurring blasts. With triggered campaigns, segmentation acts as a router, linking triggered customers to the right campaign. For non-triggered messages, the goal is to define segments large enough to justify the marketing effort but small enough to allow deep personalization in the actual message.

## Requirements for Effective Segmentation Tools

For segmentation tools to be truly effective, they need to meet several criteria:

1. **Seamless Integration with Data**: The tool must work across both real-time and historical data.
2. **Self-Service Capability**: Marketers need to self-serve, without relying on the data team for CSVs of customers meeting specific criteria. They should be able to interact with the data, build intuition, and manage numerous business rules and fine-grained segmentation details independently.
3. **Contextual Depth**: To achieve deep personalization, the segmentation tool cannot operate solely on aggregated data. For example, if a segment comprises active users with more than 10 listing interactions in the last day, it's crucial to identify which specific listings each user interacted with for downstream personalization.

## Impact of Advanced Segmentation

At Simon, we've observed that moving from broadly defined to highly targeted segments can result in a dramatic increase in conversion rates—ranging from 5 to 20 times higher. One of our clients transitioned from fewer than 10 segments to nearly 1,400 active segments after gaining access to no-code segmentation tools. This transformation enabled them to create highly targeted and personalized segments, significantly boosting their marketing effectiveness.

Segmentation, when executed with precision and depth, becomes a powerful tool in the personalization pipeline. It ensures that every message sent is relevant and tailored to the individual's specific context and behavior.

In the next section, we will discuss coordination, which ties together the various elements of personalization to ensure consistency and relevance across all touchpoints.

# The Right Channel (aka Cross-Channel Coordination)

In digital marketing, the true power of personalization lies in effective experimentation and cross-channel coordination. These elements are layered over audience definition and campaign orchestration, allowing marketing teams to learn from past campaigns and tailor future efforts to individual preferences and behaviors.

## Personalized Orchestration

Personalization at the orchestration level means custom-tailoring channel preferences, send times, and messaging cadences and sequences to individual contacts. Here are a few examples:

* **Preferred Messaging Channel**: Understanding whether a contact prefers email, push notifications, or SMS can significantly improve engagement.
* **Optimal Message Receipt Time**: Sending messages when a contact is most likely to engage ensures higher open and response rates.
* **Shopping Style**: Identifying whether a contact is a price-sensitive spender or a convenience shopper allows for tailored promotional deals and messaging cadences.

## Cross-Channel Coordination

Effective orchestration requires the ability to send messages across various channels, including email, push notifications, SMS, ads, surveys, postcards, and more. This necessitates having contact information and data stitched together through an identity model, combined with your CRM or user table, to form a comprehensive customer identity.

Cross-channel experiments enable you to compare and contrast different channels, messages, customers, and triggers across campaigns. This is a powerful tool for identifying the best-performing campaign treatments or correlating customer properties with their responses to various treatments, thereby building smaller, more targeted segments. Learning from these experiments is a critical input for ongoing personalization efforts, as understanding the context of past campaigns helps set the context for future messages.

### The Impact of Experimentation

At Simon, we've observed significant benefits from robust experimentation:

* **Performance Lift**: Experimentation can drive up to a 63% lift in campaign performance, with more variants under test leading to dramatic increases in effectiveness.
* **Enhanced Journeys**: Campaigns using both push and email messaging see a 260% boost in conversion rates compared to those composed only of emails.

## Case Study: Freshly's Seamless Coordination

Freshly, a meal delivery service, provides an impressive example of cross-channel coordination and contextual campaign routing. Striving to create an exceptional customer experience across their organization, Freshly heavily utilizes email, push notifications, and SMS. Initially, SMS was primarily used for marketing rather than transactional messaging.

Freshly launched an innovative SMS program to create a seamless experience between their in-app and onsite chats and their new SMS capabilities. Customers could reply to SMS messages to speak with an actual person, facilitated through Twilio's SMS API for sending automated texts. However, replies needed to reach the customer service team to ensure a seamless conversational marketing experience.

Here's how it works:

* **Message Parsing**: When an SMS is received, it's parsed via webhooks. If the message is an opt-in or opt-out, auto-responses handle these, updating the subscription status accordingly.
* **Customer Support Integration**: For other messages, a webhook creates a ticket in Zendesk, including the person's email, phone number, and message content. This allows Freshly's customer service team to respond, tag the customer as needed, and update their profile with this context.

This system enables not only cross-channel coordination but also cross-function coordination, creating a seamless communication experience for customers. Marketers can manage everything within Simon without needing to switch between SMS and customer support tools, and customer service can rely solely on Zendesk to track and respond to inquiries.

In conclusion, effective experimentation and cross-channel coordination are at the heart of successful digital marketing campaigns. By leveraging these strategies, you can achieve deeper personalization, resulting in significantly improved campaign performance and customer satisfaction.

In the next section, we will delve into the final stage of the personalization pipeline: delivering personalized content that resonates with your audience.

# The Right Message (aka Dynamic Templates)

The final component of the personalization pipeline is dynamic message templating. This is where all the gathered context—events, segments, experiments, and channel preferences—converges with the marketer's creativity to produce highly personalized messages.

## The Role of Templating Tools

To achieve true personalization, your templating tool must be capable of integrating:

* **Event Data**: Information about recent customer interactions and triggers.
* **Segment Data**: Detailed segmentation criteria and context.
* **Experimental Context**: Insights from past campaigns and A/B tests.
* **Channel Preferences**: Customer's preferred communication channels and optimal send times.

Moreover, it should enrich messages with non-contact data, such as:

* **Product Information**: SKU details, images, current pricing.
* **Service Availability**: Booking and inventory availability, translations, product recommendations.
* **Offer Management**: Coupon codes, available discounts, promotional deals.

Time-sensitive data is crucial for accurate personalization. For example, the tool should be able to fetch the latest product catalog through an API and ensure that the recommended items are in stock. Consistency in producing outbound content across different message templates and data exports is also vital.

## Integrating Context in Messages

Templates should blend all gathered context:

* **Event Triggers**: Context in which triggers occurred.
* **Segmentation**: Unaggregated matching criteria context.
* **Cross-Channel Campaigns**: Coordinated messaging across various channels.
* **Experimental Treatments**: Insights from past experimental campaigns.

These elements meet in the message with recommenders:

* **Collaborative Filtering**: "People who bought X also bought Y."
* **Similarity Recommendations**: "See more items like..."
* **Personalized Recommendations**: "You might also like..."
* **Recent Items**: Browsing history and recent interactions.

Access to non-customer data, such as product catalogs with listing images, titles, descriptions, and current prices, is essential. This data often needs to be dynamically rendered on the client side, enabling dynamic content optimization.

## Real-World Impact

Based on Simon's customer data:

* **Conversion Boost**: Campaigns with more than two in-message personalization elements see a 6x increase in conversions.
* **Click-Through Rate Increase**: These campaigns experience a 2x increase in click-through rates.

## Case Study: Vivino's Innovative Recommender System

Vivino, a long-time Simon client, demonstrates the power of advanced templating in a highly regulated space—online alcohol sales. Their goal is to match great wines with the right customers, considering regional legal restrictions, available stock, and customer preferences.

Vivino's recommender system is sophisticated, involving:

* **Customer Preferences**: Similarity between users and wines.
* **Explore vs. Exploit**: Balancing serendipitous recommendations with predictable favorites.
* **User Ranking**: Individual taste profiles.
* **Implicit Data**: On-site interactions like browsing history, abandoned carts, and message engagement.
* **Regulations and Availability**: Compliance with regional laws and stock availability across partners.

Previously, Vivino's marketing team had to manually craft campaigns considering all these factors. Now, with Simon's advanced templating tools, recommendations are readily available through lookup tables. This automation allows the marketing team to focus on creativity and experimentation, incorporating recommendations seamlessly into various campaigns.

# Bringing It All Together: GenAI

Dynamic message templating is where the full potential of personalization is realized. By integrating rich event, segment, and experimental context with dynamic non-customer data, marketers can create highly personalized, effective campaigns.

The most powerful capability of Simon is that all of its templating tools – Custom Contexts, Blocks, Simon Templates, and the Drag and Drop Editor – provide the full context of the personalization pipeline in *all* outbound data rendering contexts. That means regardless of whether you are building a field for a data extension or personalizing a full-scale email template, you have not only the target contact's profile, but also:

* [Event trigger data](https://docs.simondata.com/docs/using-event-data-from-triggers-in-custom-contexts) - The full context of the triggering event for event triggered flows and journeys
* [Contact event content](https://docs.simondata.com/docs/use-contact-event-content) - All of the events that qualified the contact for the targeted segment, if it was a behavioral segment
* [Real-time content](https://docs.simondata.com/reference/real-time-content) - Access to any of your organization's own 1p and 2p API endpoints, serving up recommendations, inventory information, your product catalog, and more
* [Lookup tables](https://docs.simondata.com/docs/getting-started-with-lookup-tables) - Non-contact data arising from your data layer

In addition to Simon's intuitive editing and testing user interface, you also have a smart assistant to help you craft all of this dynamic context into a highly personalized template in the form of Simon's [Jinja generator](https://docs.simondata.com/docs/jinja-generator). That brings together the unparalleled breadth of dynamic context from the personalization pipeline into an unparalleled personalization experience for your marketing team.
