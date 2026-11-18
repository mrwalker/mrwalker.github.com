---
title: "My AI model rotation: August 2026 edition"
date: "2026-08-30"
tags: ["models"]
linkedin: "https://www.linkedin.com/posts/mwalker_my-ai-model-rotation-august-2026-edition-activity-7499888826287443969-HdoR"
---

It's pretty hard to keep up with everything that has happened even this month, but here's where I'm at with models (we'll talk harnesses in a bit):

**Claude Fable 5**: Too expensive. $10/$50 per million tokens, which is 2× the Opus line. It's Anthropic's first publicly available "Mythos-class" model (a new tier above Opus) and reportedly hits ~80% on SWE-Bench Pro, which is genuinely impressive. But I can't afford this sucker.

**Claude Opus 5**: Please, just shut up. The output is so verbose it buries the point under a mountain of hedging and overexplaining. And yet it's actually the new state-of-the-art on coding and knowledge work benchmarks, more than doubling Opus 4.8 on Frontier-Bench at the same $5/$25 pricing. Anthropic shipped this five weeks after Fable 5, at half the price, and it _outperforms_ Fable on several benchmarks. But the "load-bearing" point here is it's too aggravating to work with.

**Claude Opus 4.8**: The sleeper hit. Released May 28, it scored 88.6% on SWE-bench Verified and 1890 on GDPval-AA (121 Elo points ahead of GPT-5.5). The new Fast mode is 3× cheaper than Opus 4.7's equivalent. Still a strong choice for planning and complex reasoning if you're watching your token spend.

**Claude Sonnet 5**: Would be my daily driver if I could swing the Max plan. Efficient, obedient, great at code. It launched June 30 as the more accessible agentic coding option, and it fills the gap between "I need Opus-level power" and "I don't want to mortgage my house for tokens."

**DeepSeek V4 Flash Free**: Smart, fast, aggressive. But if you haven't used a flash model before, the speed is jarring. You blink and the response is already streaming past you. Takes some adjustment, and it's a reminder that the Chinese labs are playing in a different league on cost-to-capability.

**Ox Alpha Free (GLM 5.3)**: Turns out it was Zhipu AI's GLM 5.3 in disguise. Not quite as fast as DeepSeek but still solid. Sadly, no longer free :(

**MiMo V2.5 Free**: My current daily driver. To me, it's the most similar in capability and tone to Sonnet, and it's completely free via OpenCode Zen. If you're on a budget and want that Sonnet-like feel without the Sonnet price tag, this is it.

Looking ahead, I want to spend more time with the GLM family, and I'm very much looking forward to kicking the tires on Hy4. I also missed the wave on Kimi K3, so I'll have to circle back to that family when I can.

The takeaway from August 2026: the free tier is the best it's ever been. Six months ago, free models were toys. Today, MiMo V2.5 and DeepSeek V4 Flash are genuinely competitive with models that cost real money. The gap between "free and capable" and "expensive and capable" is closing faster than anyone predicted.
