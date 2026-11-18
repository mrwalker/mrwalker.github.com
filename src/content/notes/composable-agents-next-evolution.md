---
title: "Composable agents: the next evolution"
tags: ["agents", "snowflake"]
date: "2025-05-15"
linkedin: "https://www.linkedin.com/posts/mwalker_simondata-composableagents-composableai-activity-7329476207618543617-s9kb/"
---

I've been speaking a lot about our internal Cyborgs and Autobots, but today I want to spotlight work we've been doing in collaboration with Snowflake on "composable agents" - the next logical step in the evolution of our data infrastructure here at Simon.

What exactly is a composable agent? We arrived here naturally:

* We started with a composable CDP (vs. packaged solutions)
* Then moved to [data composability](https://www.simondata.com/blog-posts/data-composability-blueprint-for-modern-data-management) (extending beyond just applications)
* Now we're applying this philosophy to AI agents

Our composable agents maintain three critical principles:

1. Data remains securely in the client's Snowflake environment
2. LLMs are housed within the client's Snowflake instance
3. Prompts, model selection, and processing are all client-specific and contained within their Snowflake environment

But the collaboration with Snowflake crystalized more than just our architectural philosophy - it perfectly timed with explorations we've been doing with MCP (you knew I'd say it) to ensure that these safeguarded composable agents don't just get "locked away" in the CDW, but that we can maintain bi-directional access between them and our internal enterprise tooling.

First, we've collaborated with Snowflake Lab's Alejandro Herrera, who just pushed a change allowing the Agent Gateway in [orchestration-framework](https://github.com/Snowflake-Labs/orchestration-framework) to [utilize MCP](https://github.com/Snowflake-Labs/orchestration-framework/pull/147).

Second, Snowflake released a [quickstart](https://quickstarts.snowflake.com/guide/mcp-server-for-cortex-agents/index.html) for building an MCP server that gives Claude Desktop access to Cortex Agents, creating a powerful bridge between our Cyborgs and production agents.

This composability isn't just about flexibility—it's about governance, security, and truly client-centric AI that respects data boundaries while maximizing utility.

I encourage you to explore Snowflake's rapidly evolving ecosystem as we've found both the technology and the people to be a pleasure to work with. Thanks to Ed DiCosmo for facilitating this collaboration!
