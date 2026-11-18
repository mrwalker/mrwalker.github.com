---
title: "score = success × quality"
tags: ["evals"]
date: "2026-02-17"
linkedin: "https://www.linkedin.com/feed/update/urn:li:share:7429492965003362305/"
---

A few months ago, I shared how we're making our agents get good at Simon AI: trace in production, classify failure as a prompt, context, or tool problem, add an eval, and repeat.

But I didn't go into detail on how we actually make sure the evals work. My colleague Adrian gives us the key insight: split every eval into two categories and multiply them.

**Success** = Did it work? (Right tools, right tables, reasonable turns)

**Quality** = Was it good? (Well-structured, appropriate tone, efficient)

`score = success × quality`

That way, if you call the wrong tool with a well written response, you get zero. If you take all actions correctly but respond overly verbose, you can only earn partial credit.

Read Adrian's post for the full breakdown. The mental model of gates versus scores changes how you think about what "good" means.
