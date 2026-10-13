---
title: 'A practical guide to change detection with SAR and optical imagery'
description: 'Clouds, seasons and sensor differences make change detection hard. Here’s how combining radar and optical data produces reliable alerts.'
pubDate: 2026-06-21
author: 'Lena Fischer'
authorRole: 'Co-founder & CTO'
category: 'Guides'
---

Change detection sounds simple: compare two images and highlight what’s different. In practice, almost everything is different between two satellite images — the lighting, the season, the viewing angle, the atmosphere, the sensor. The hard part isn’t finding change. It’s finding the change that matters.

This guide covers the approach we use in production, and how you can apply it in your own monitors.

## Why naive differencing fails

Subtracting two optical images pixel by pixel produces a map dominated by false positives:

- **Clouds and shadows** appear and disappear between captures.
- **Phenology** — crops growing and being harvested, trees leafing out — looks like dramatic change.
- **Sensor and geometry differences** shift pixels and colors even when nothing on the ground moved.

The result is alert fatigue. If nine out of ten alerts are noise, people stop looking.

## Optical and radar: complementary strengths

**Optical imagery** is intuitive and high-resolution, but blind under clouds — which cover roughly two-thirds of the planet at any time.

**Synthetic aperture radar (SAR)** sees through clouds, day and night, and is highly sensitive to structure and moisture. But it’s noisy, harder to interpret, and usually lower resolution.

Combining both gives you the best of each: radar keeps the time series continuous, while optical provides detail and confirmation.

## Our approach

### 1. Learn a baseline, not a single “before” image

Rather than comparing against one earlier image, we build a **per-location baseline** from the full history of observations. This captures normal seasonal behavior, so a harvested field in September isn’t flagged as change.

### 2. Compare in feature space

We compare locations using representations from our foundation model rather than raw pixels. These features are trained to be stable across sensors and lighting, and sensitive to real change in land use and structures.

### 3. Fuse evidence over time

A single anomalous observation is weak evidence. We accumulate evidence across consecutive optical and SAR observations and raise an alert only when confidence crosses a threshold you control.

### 4. Classify the change

Finally, a classifier labels what kind of change occurred — construction, demolition, vegetation loss, flooding — so you can route alerts to the right team.

## Tuning monitors for your use case

When setting up a monitor in Lens, three settings matter most:

1. **Minimum mapping unit** — the smallest area you care about. Raising it is the single most effective way to reduce noise.
2. **Confidence threshold** — higher means fewer, more certain alerts; lower means earlier, noisier ones.
3. **Change classes** — restrict alerts to the types of change your team acts on.

Start conservative, review a week of alerts, then loosen thresholds until you’re catching what matters without drowning in noise.

## Learn more

Change detection is available on every plan, with SAR fusion on Growth and Enterprise. If you’d like help tuning a monitor for your use case, [get in touch](/contact) — our solutions engineers do this every day.
