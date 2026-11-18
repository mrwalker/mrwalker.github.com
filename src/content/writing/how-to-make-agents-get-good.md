---
title: "How to Make Agents Get Good"
date: "2025-12-20"
series: "Agents in production"
seriesOrder: 3
description: "The gap between \"it worked in the demo\" and real users succeeding: prompts, context, tools, evals, and the loop that ties them together."
tags: ["agents", "evals"]
cover: "/images/writing/how-to-make-agents-get-good.jpg"
mirrorName: "Medium"
mirrorUrl: "https://medium.com/@data_daddy/how-to-make-agents-get-good-188b52a5789e"
---

So you've built an agent and it works… sometimes. Now what? At Simon, we've found out-of-the-box frameworks to get you only so far, but the gap between "it worked in the demo" and "my users are actively and successfully utilizing it" is where the real work happens. Here's our guide to make your agents get good.

## Prompt Engineering: Define the Job

Your agent needs to know three things clearly: the domain and application context, the specific problem it's solving, and the process behind the job to be done. This goes beyond the "you are an expert data analyst" to include full domain knowledge (e.g. a description of the part of the application the agent inhabits, how its tools interact with that app, what happens beyond this step in the user's workflow) and the process involved in successfully solving the problem (what it needs to confirm with the user vs what it can learn from data exploration, which of its tools are for its own internal use vs which are going to render artifacts that the user can see, when it has run into missing data and what to do about it).

The more explicit you can be, the better and more reliable your agent will become. Lack of specificity will lead to inconsistency, a tendency to get stuck, and over-reliance upon the user to provide context or lower level guidance in order to get to the desired outcome.

The most common prompt problems show up as agents that'll try anything a user asks (no guidance toward achievable outcomes), poor tool coordination where they call things in the wrong order or forget earlier context, and my favorite: recreating functionality from scratch that your app already provides.

## Context Engineering: Feed It What It Needs

This is where most agent failures actually live. The LLM can only work with what you give it, and if your context is ambiguous or incomplete, you get misinterpreted data structures, hallucinated aggregates that sound plausible but are completely made up, and unnecessary exploration where the agent asks for data it already has.

The fix is usually straightforward but tedious: structure your context deliberately, name things clearly, include schema and semantic information. If you're seeing consistent misinterpretation of specific fields, that's a context documentation problem, not a model problem.

It's worth calling out that context and prompt engineering tend to blend together and it can sometimes be difficult to decide or determine when what's needed is a prompt vs context change. In both cases, we've found giving a small number of clear, concise examples of both good and bad outputs can go a very long way in improving the quality of interaction.

## Tools: Reliability Over Flexibility

Tools not only integrate your agent into your application, but they also provide a refactoring route in which you can convert potentially unreliable agent behavior into guaranteed, deterministic, well-tested application behavior that's still accessible to your agents.

But the tools need to come with the manual - if you don't prompt the agent with when to use the tool, how to integrate it into their workflow (is it exploratory? or single-shot? does it have side effects?), and how to perform the calls (fine it takes a query as input, but what does the structure of the query need to be? how is it going to be used?), the agent could use the wrong tool or use the tool at the wrong time.

One pattern we've seen consistently is that agents don't understand the presentation layer. They'll explain a chart they just rendered for the user, or narrate actions that are already visible. Tool descriptions matter way more than you think. Include failure modes, and for common sequences, consider whether you need a higher-level tool instead.

## When to Change What

Agent messed up again. Is it the prompt, context, or tools?

Change the prompt when the agent has the right information and capabilities but makes poor decisions about when or how to use them. Change the context when the agent is working with incomplete, misleading, or poorly structured information (e.g. it thought it had the right query, but when it went to use the tool it failed). Change the tools when the agent needs capabilities it doesn't have, or when existing tools are too low-level for reliable composition.

Refactor into a skill when you have a prompt + context + tools combination that multiple agents need, especially if it requires specialized knowledge. Skills let you version and test this bundle independently, and they're how you avoid duplicating the same fixes across different agents.

## Evals: Make It Systematic

Evals aren't just for the initial build of the agent, they're how you maintain quality as you iterate. Build scenarios that cover common workflows for regression testing, edge cases where agents typically fail, and quality attributes like tone and bias detection.

Good evals replace manual testing with automation. Even better, they run continuously in production to catch drift. The goal isn't perfection on day one, it's having a systematic way to improve.

## The Loop: Continuous Refinement

Making agents good is iteration: ship something that works, watch where it fails, classify the failure (prompt, context, or tool?), fix it, add an eval, repeat. The agents that users trust are the ones where teams systematically eliminated failure modes until reliability crossed the threshold.
