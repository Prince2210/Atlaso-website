---
title: 'Introducing Lens 2.0: ask your map anything'
description: 'Natural-language questions over satellite imagery, grounded in evidence you can inspect. Here’s what’s new and how it works.'
pubDate: 2026-09-18
author: 'Sofia Marques'
authorRole: 'VP of Product'
category: 'Product'
featured: true
---

For the past three years, our customers have used Lens to detect objects and monitor change across millions of square kilometers. But one piece of feedback came up again and again: _“The answers are in there — I just can’t always phrase my question as a model and a polygon.”_

Today we’re launching **Lens 2.0**, with a new way to work: just ask.

## What’s new

**Ask panel.** Type a question about any area of interest — _“How many new buildings appeared north of the river since March?”_ or _“Which substations have solar farms within 5 km?”_ — and Lens returns an answer as a number, a map, a chart or a table.

**Evidence for every answer.** Each answer links to the exact scenes, models and features used to compute it. Click through to inspect individual detections, compare imagery dates, or export the underlying data.

**Save questions as monitors.** Any question can become a recurring monitor. Lens re-runs it on every new capture and alerts you when the answer changes meaningfully.

:::feature{name="developers"}
**A new `/v1/ask` endpoint.** Everything in the Ask panel is available through the API, so you can build natural-language geospatial search into your own products.
:::

## How it works

Under the hood, Lens doesn’t “look” at an image and guess. It translates your question into a **query plan**: which area and time range to use, which models to apply, how to aggregate results and what comparison to draw. It then runs that plan on our analysis-ready data cube and summarizes the result.

This approach has three big advantages:

1. **Answers are reproducible.** The same question over the same data returns the same answer, and the plan is stored with the result.
2. **Answers are auditable.** Because every step is explicit, you can see — and challenge — how a number was produced.
3. **Answers scale.** Plans run on the same infrastructure as our batch analyses, so a question over a continent works just like a question over a city block.

## Built for teams, not just specialists

In early access, more than half of all questions came from people who had never used a GIS tool. Insurance analysts asked about roof conditions across a portfolio. Sourcing managers asked about crop health in supplier regions. Planners asked about new construction without permits.

That’s the point: geospatial intelligence shouldn’t require a specialist as an intermediary.

## Availability

Lens 2.0 is available today for all Growth and Enterprise customers. Starter customers can try Ask during a 14-day preview from their workspace. [Book a demo](/demo) to see it on your own area of interest.
