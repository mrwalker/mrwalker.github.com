---
title: "The agents are building the agents"
tags: ["agents", "evals", "ai-assisted-dev"]
date: "2025-08-27"
linkedin: "https://www.linkedin.com/feed/update/urn:li:share:7366425776281317376/"
---

> Marketers have been told for years that personalization was solved, but the reality has been static segments, brittle workflows and missed customer moments. Simon has changed that by bringing reasoning, context and execution directly into the Snowflake data layer for marketing to use.
>
> — Matt Walker, Co-Founder and CTO, Simon Data

Building our composable AI agents (see the [case study](https://www.snowflake.com/en/customers/all-customers/case-study/simon-data/)) has been an incredible personal opportunity to become a prompt engineer.

Each one of our "agents" (a marketing term for "agentic workflow") is composed of many LLMs collaborating together to build a seamless user experience of interacting with a widely knowledgeable domain expert. We use Langfuse to trace these conversations in prod, but more importantly we use it to build offline benchmarks that evaluate every LLM interaction against a panel of critics across a wide range of quality dimensions – and that's the key to how we know where to take their prompts next.

We've built semantic layers by extending Snowflake's semantic views, we've armed our agents with a wide variety of tools for use directly in Snowflake and in the Simon application, and we have an amazing interface that lets marketers collaborate with our agents upon "artifacts", visually deep representations of CDW or CDP constructs that help a non-technical user grok what a data agent is doing on their behalf. This defines our agents' interface to the outside world: context in, tools out, and a window into the entire process for marketers to control and interact with the system.

And the most meta thing is, we're doing all of this using LLM coding assistants. The agent team is agents all the way down as we've adopted Claude Code subagents bolstering a team of only a handful of engineers into a department of product developers. So when I say I'm a prompt engineer, I really mean that my agent squad is: the agents are building the agents.
