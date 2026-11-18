---
title: "Opus orchestrates a local fine-tune"
tags: ["models", "agents"]
featured: true
date: "2026-11-03"
linkedin: "https://www.linkedin.com/posts/mwalker_it-blows-my-mind-that-opus-is-orchestrating-share-7523537192284114944-h4ax/"
---

It blows my mind that Opus is orchestrating a fine tune on my laptop using Sonnet as the teacher and Nemotron Bolt as the base.

It had to monkey patch a proxy to make tool calls and returns work, patch mlx-lm to train only 8 layers, and cherry-pick short tests to fit into a 14k context window, and of course I have to do this at night because I can’t run any other applications on the machine to avoid blowing the 24GB of unified memory, but it’s actually working!

I’m taking a minute to enjoy the sheer power and complexity of what I can do now on my laptop, where I could barely even imagine or understand such a thing in general just a year ago. What a time to be a software engineer (or really more of an agent babysitter)!
