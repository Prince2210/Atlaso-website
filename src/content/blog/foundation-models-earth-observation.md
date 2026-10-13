---
title: 'Why foundation models are changing Earth observation'
description: 'Pre-training on billions of square kilometers of imagery lets us build accurate models with a fraction of the labels. A look at what changed and why it matters.'
pubDate: 2026-08-04
author: 'Daniel Okafor'
authorRole: 'Head of Machine Learning'
category: 'Research'
---

For most of the last decade, building a model for satellite imagery followed the same recipe: collect thousands of labeled examples, train a task-specific network, and hope it generalizes beyond the regions you labeled. It rarely did.

Foundation models have changed that recipe — and with it, the economics of geospatial AI.

## The labeling bottleneck

Earth observation has an unusual data profile. Imagery is abundant: public missions alone capture the entire land surface every few days. Labels are scarce, expensive and often inconsistent. A building in Lagos looks nothing like one in Oslo, and a field in Punjab looks nothing like one in Iowa.

Task-specific models trained on limited labels learn shortcuts — the color of roofs in one city, the texture of soil in one season — and fail quietly elsewhere.

## Learning from the imagery itself

Our geospatial foundation model is pre-trained with **self-supervised objectives** on more than four billion square kilometers of optical and radar imagery. Instead of learning from labels, it learns to reconstruct masked regions, align different sensors over the same place, and predict how locations change over time.

The result is a representation that already “understands” a lot about the planet:

- what built-up areas, vegetation, water and bare soil look like across sensors;
- how landscapes vary across seasons and climates;
- which changes are meaningful and which are noise.

## Fewer labels, better generalization

When we fine-tune the foundation model for a specific task, we need dramatically fewer labels. In internal benchmarks, a building detector fine-tuned on **30 labeled tiles** matched the accuracy of our previous production model trained on more than 10,000 — and outperformed it on regions it had never seen.

| Approach | Labels | F1 (seen regions) | F1 (unseen regions) |
| --- | --- | --- | --- |
| Task-specific model | 10,000+ | 0.93 | 0.81 |
| Foundation model, fine-tuned | 30 | 0.92 | 0.89 |
| Foundation model, fine-tuned | 500 | 0.95 | 0.93 |

## What this means for customers

The practical impact is that custom models are no longer a six-month project. A customer can label a few dozen examples of the object they care about — a specific kind of storage tank, a crop, a type of damage — and have a production-grade detector the same week.

It also means our pre-trained models keep improving everywhere at once. Each improvement to the foundation flows into every downstream task.

## What’s next

We’re now extending pre-training to include elevation, hyperspectral and very-high-resolution aerial data, and exploring how the same representations can power natural-language reasoning over imagery. We’ll share more results — including failures — in future posts.
