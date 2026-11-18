---
title: "How Simon Unlocks Data"
date: "2024-08-10"
series: "Data composability"
seriesOrder: 3
description: "Identity, profiles, segmentation, and activation, each a tap-in point for the rest of the organization."
tags: ["data", "composability"]
draft: true
---

## Identity

* Core to adapting business data model to CDP contact profile
* Gathers together identifier associations form across the organization, user profiles, web and app authentication, lead lists, POS records
* Creates a stable identifier that can be used to identify an individual in data applications
* Accessible as "identifier mappings" outside CDP both to map into various channel identifiers and to map back to business identifiers
* Core algorithm is deterministic connected components
* Identity must be deterministic for marketing and support use cases since a person will be addressed by name (not as important for advertising or analytics)

## Segmentation

* Segments allow marketers to divvy up contacts for more targeted messaging and analytics
* Any attribute of logical contact profile or any other data that can be joined to the profile can be used to form segments
* For instance, segment may involve behavior of contact, recently browsing for a certain item
* But it may also involve specific aspects of that item
* Segments are available as "instantaneous definitions", evaluated on demand
* Or you can activate segments and write them back into the CDW, forming a historical record of their membership over time

## Personalization

* Simon provides a powerful personalization engine that combines any data from within the CDW with data fetched from content APIs before activating in downstream channels
* The bedrock of this is data joined to the contact profile, whether that be profile attributes (like name), behavioral context (like recent browsing history), and any other data in the CDW joined alongside (like product listing information, attributes of accounts or agents they've interacted with, etc.)
* While the RTC isn't available until post-rendering, the inputs are all directly available in the CDW and, as with historical segment membership, writing the outputs back into the CDW makes the output rendered personalizations available there, as well

## Activation

* Activation allows a marketer, advertiser, or support rep to publish data from the cloud data warehouse into downstream channels, and, once published, to keep it in sync as data changes over time
* The constructs in the activation domain record the historical membership, personalizations, and change in both over time, and act as a queue before this data is fed into downstream APIs
* Some constructs, like contact lists, are relatively easy to keep in sync using basic tables and views
* In other cases, for example forwarding profile changes in real-time, we utilize change data capture streams and tasks
* In both cases, an organization can "subscribe" to these constructs to observe the data powering activation
