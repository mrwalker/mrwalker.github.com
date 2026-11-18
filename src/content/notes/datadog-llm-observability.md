---
title: "Wiring Datadog LLM Observability into my agents"
tags: ["agents", "observability"]
featured: true
date: "2026-09-13"
linkedin: "https://www.linkedin.com/posts/mwalker_i-spent-a-few-evenings-last-week-wiring-datadogs-activity-7504893791628066816-GDId"
---

I spent a few evenings last week wiring Datadog's LLM Observability into an agent setup I run day to day. I wanted deeper visibility into what my agents were doing, and Datadog's tool provides powerful trace search and exploration (way to go, Samer Atiani and team!)

Some of my takeaways:

→ Most LLM observability tooling assumes you own the code calling the model. Agents blow that assumption up because the actual LLM call is buried under processes, subprocesses, and tool calls you didn't write.

→ Getting real traces out of it is a plumbing problem: multiple instrumentation layers, mismatched response formats, stitching spans across process boundaries, the occasional networking rabbit hole that has nothing to do with observability at all.

→ Once it's wired up, seeing every message in every turn is eye opening: chronically failing tool calls, some truly weird "thinking", a lot of meta context management that I was not aware this personal assistant was doing.

→ I was surprised how much LLM use is invisible by design. Cheap models quietly naming your sessions. Agents checking out repos and running code outside any sandbox, all without you ever asking for that explicitly in chat.

The lesson I learned is observability shouldn't be an afterthought. By the time you're motivated to add it, the agent's already been doing things you couldn't see for weeks. Instrument from the outset.
