---
title: "A powerful and totally free family assistant"
tags: ["agents", "models"]
date: "2026-08-16"
linkedin: "https://www.linkedin.com/feed/update/urn:li:share:7494730730917257217/"
---

I finally took the rate limiter off my family assistant this weekend.

That little mac mini that had been sitting in the kitchen gathering dust is now running OpenClaw, wired into our family Slack, and quietly handling the stuff that used to eat my mental bandwidth: calendar coordination, vacation planning, and optimizing my Pokemon Sleep roster (priorities).

And it's doing all this *for free*. OpenCode has been a free, drop-in replacement for Claude Code for me. And because OpenCode Zen provides access to powerful free models like DeepSeek V4 Flash Free and Big Pickle, I literally paid $20 one time to open the API account but haven't paid a cent for the thousands of tokens my agent has burned through this weekend so far.

To get there, I had to contribute back (or well, DeepSeek did =), fixing a config issue in OpenClaw's opencode extension that was blocking free-tier models with overly restrictive rate limits (PR here: https://github.com/openclaw/openclaw/pull/124317).

And a note on DeepSeek V4 Flash Free: it is *fast*, and it is *aggressive*. By the time you realize it's writing code, it's already opened the PR. I respect the initiative; it reads like a fellow startup founder to me!

If you're interested in your own free family assistant, here's the full setup:
- Mac mini (not really even that great a model)
- OpenClaw (with the config patch above applied)
- OpenCode Zen ($20 to open the account, only free models enabled, using DeepSeek V4 Flash Free by default with Big Pickle as the backup)
- Slack bot (in a free tier family account, using OpenClaw's out-of-the-box setup guide)
