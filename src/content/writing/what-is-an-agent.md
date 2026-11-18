---
title: "What is an \"agent\"?"
date: "2025-12-06"
series: "Agents in production"
seriesOrder: 1
description: "Cyborgs vs. Autobots turned out to be the wrong axis. What \"agent\" actually unlocked for us: tool use, chat, and state."
tags: ["agents"]
cover: "/images/writing/what-is-an-agent.jpg"
coverPosition: "50% 0%"
mirrorName: "Medium"
mirrorUrl: "https://medium.com/@data_daddy/what-is-an-agent-9b64074b0946"
---

Around the time I drew the distinction between Cyborgs (assistants) and Autobots (autonomous agents), I imagined the notion of "agent" would really be about unlocking and proliferating the latter. However, after living and working with agents for the last several months, and entirely transforming our application to be agent-friendly, I've been somewhat disappointed with the growth of the Autobots.

"Agent" has really come to unlock a few things that I didn't fully appreciate:

* **Tool use** - This one should have been obvious given the explosion of MCP based upon its raw utility, but for Simon AI it has become even more central to the value of an agent. The reason is that we already have such valuable pre-existing functionality in our core composable application that much of what we build is tools that allow agents to tap into that functionality. Even in cases where the "vanilla" LLM can do 99% of the work (e.g. in generating a Jinja template), we've found that encapsulating that capability in a tool can unlock both integration into pre-existing applications (e.g. our content editor) as well as a superior user experience (e.g. it edits inline or in a rich artifact, rather than requiring the user to cut-paste into the app).
* **Chat** - I had imagined Autobots predominantly working in the background and only communicating with users asynchronously. But we've found real value in exposing agents via a chat window both for development purposes and for ongoing end user experience. I think much of this is because we already have a mature, fully featured "automation layer" in our core composable application, so our agents provide the most value in assisting users to configure and control that application, and that is best accomplished via a chat interface. We've adopted [AG-UI](https://docs.ag-ui.com/introduction) as our protocol of choice and it has been outstanding in enabling us to build rich interfaces.

This is not to say that we haven't built our share of Autobots. They just didn't manifest exactly as I had originally imagined them:

* **Per-row inference** - Several of our new capabilities rely upon Snowflake's Cortex AISQL directly which lets us evaluate an LLM (cheaper models!) on every row of a data set. This unlocks inference, summarization, entity extraction, categorization, and more, all entirely within Snowflake. In this case, though, these aren't "agents", just highly valuable LLM use.
* **Pipeline agents** - Agents have made their way into our data pipelines, and these formally meet the definition of Autobot. They are defined within our agent framework (Pydantic AI) and are equipped with advanced tools to search the web and analyze images, allowing us to do things like mine social trends and re-rank images based upon visual appeal.

So the end result is that, for me, "agent" is less about assistant vs autonomy and more about "raw" or direct use of LLMs vs building a system that centrally depends upon LLM use, but has a much deeper focus on tool use, user interaction, and state management (basically, the message history and memory). We have a proliferation of LLM use everywhere because they are so useful and our frameworks make it easy for developers to utilize them in their apps, but only some of these need to be formally assembled into "agents".

Next up, I'm going to write about an incredibly useful construct that has taken off in our user-facing agent development: skills.
