---
title: "Clearly a Skill Issue"
date: "2025-12-09"
series: "Agents in production"
seriesOrder: 2
description: "Skills are agents you can bolt on at runtime: prompt + context + tools, loaded on demand. Why they beat bigger agents."
tags: ["agents"]
cover: "/images/writing/clearly-a-skill-issue.jpg"
mirrorName: "Simon Systems on Medium"
mirrorUrl: "https://medium.com/simon-systems/clearly-a-skill-issue-0780d3304067"
---

Sorry to make the AI design canvas larger before I clarify it, but another concept we've been using at Simon AI for agent development is the "skill". Created by my colleague Adrian and motivated by Claude Desktop skills, they have exactly the same components as an agent: a prompt, context, and tools. The difference is that they can be dynamically loaded by an agent, sort of "bolting on" what it needs to accomplish a user request while still achieving an economy of what it keeps in working memory, which is important due to the ever-looming context window.

Skills provide an avenue to refactor what otherwise would be components of an agent into a library which is accessible across agents. This leads to very fit-to-purpose prompts, with tight semantic context for a particular domain, with just the tool set needed to solve user problems within the domain. It also provides a nice, tight unit of assessment for evals, which we'll discuss when we get to how to make agents better in a future post.

The flexibility skills offer is primarily valuable in user-facing agents where there's always a degree of uncertainty in "the chat" – what, exactly, is the user going to ask the agent to do? By contrast, it offers less utility in highly constrained use cases, like the pipeline agents I mentioned before. There, there really is only one job to to be done, so a single prompt, with tailored context, and very specific tools (often with explicit instructions on when and how to use them) suffices, so there's really no need for skills.

Lastly, skills have afforded us a few unexpected benefits in development, iteration, and deployment of new AI capabilities at Simon AI. Whereas a user-facing agent is tightly coupled to our application via the way it interfaces with the end user, skills are more strongly coupled to the underlying data, semantic layer, and tool kit they bring. That means we can pilot and develop them in a "general purpose" agent (we call ours the Admin Agent) without concern for any impact to our users and then gate deployment into user-facing agents upon achieving the quality and robustness we require (as measured through evals). But opening the gate is super trivial, you just tell the receiving agent that it has a new skill available and that's essentially it.

Next up, I'm going to go into a little detail on how it is we make our agents actually good at what they do, which is really where the arts of prompt engineering, context engineering, tool design, and evals all come together.
