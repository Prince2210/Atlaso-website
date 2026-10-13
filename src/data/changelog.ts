export type ChangeTag = 'New' | 'Improved' | 'Fixed';

export const changelog: {
  version: string;
  date: string;
  title: string;
  summary: string;
  changes: { tag: ChangeTag; text: string }[];
}[] = [
  {
    version: '2.0',
    date: '2026-09-18',
    title: 'Ask your map anything',
    summary: 'Natural-language questions over your areas of interest, with answers grounded in imagery and linked evidence.',
    changes: [
      { tag: 'New', text: 'Ask panel in the workspace and a new /v1/ask API endpoint.' },
      { tag: 'New', text: 'Evidence view showing the scenes, models and features behind every answer.' },
      { tag: 'Improved', text: 'Workspace map renders 3× faster on large detection layers.' },
    ],
  },
  {
    version: '1.9',
    date: '2026-08-06',
    title: 'SAR fusion for change detection',
    summary: 'Change detection now uses radar automatically when optical imagery is cloudy.',
    changes: [
      { tag: 'New', text: 'Automatic optical/SAR fusion for Forest loss v2 and Buildings v4 change.' },
      { tag: 'Improved', text: 'Alert noise reduced by 38% through seasonal baselining.' },
      { tag: 'Fixed', text: 'Monitors created via API now respect the workspace time zone.' },
    ],
  },
  {
    version: '1.8',
    date: '2026-06-24',
    title: 'GeoParquet exports and Python SDK 1.0',
    summary: 'Stream results into your warehouse with GeoParquet, and build on a stable, typed Python SDK.',
    changes: [
      { tag: 'New', text: 'GeoParquet and Cloud-Optimized GeoTIFF exports.' },
      { tag: 'New', text: 'Python SDK 1.0 with async support and typed results.' },
      { tag: 'Improved', text: 'Vessel detection precision improved to 97.4% on optical imagery.' },
    ],
  },
  {
    version: '1.7',
    date: '2026-05-08',
    title: 'Custom models from a few dozen labels',
    summary: 'Fine-tune detectors and segmenters on our foundation model with as few as 30 labeled examples.',
    changes: [
      { tag: 'New', text: 'Labeling tool with AI-assisted polygons.' },
      { tag: 'New', text: 'One-click fine-tuning with automatic evaluation reports.' },
      { tag: 'Fixed', text: 'Large AOI uploads no longer time out on slow connections.' },
    ],
  },
];
