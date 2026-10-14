import { product, site } from '../config/site';

const pkg = site.name.toLowerCase();
const apiHost = `api.${new URL(site.url).hostname}`;
const cls = product.shortName;

export type CodeSample = { label: string; lang: 'python' | 'ts' | 'bash' | 'json'; code: string };

export const quickstartSamples: CodeSample[] = [
  {
    label: 'Python',
    lang: 'python',
    code: `from ${pkg} import ${cls}

client = ${cls}()  # reads ${site.name.toUpperCase()}_API_KEY

aoi = client.aoi.from_file("rotterdam_port.geojson")

job = client.analyses.create(
    aoi=aoi,
    models=["buildings-v4", "vessels-v3"],
    period=("2025-03-01", "2026-09-30"),
    detect_change=True,
)

for change in job.wait().changes(min_confidence=0.9):
    print(change.kind, change.area_m2, change.first_seen)`,
  },
  {
    label: 'TypeScript',
    lang: 'ts',
    code: `import { ${cls} } from '@${pkg}/sdk';

const client = new ${cls}({ apiKey: process.env.${site.name.toUpperCase()}_API_KEY });

const monitor = await client.monitors.create({
  aoi: 'aoi_8f2k1',
  models: ['buildings-v4', 'vessels-v3'],
  cadence: 'weekly',
  alert: { when: 'change.count > 25', webhook: 'https://example.com/hooks/geo' },
});

console.log(monitor.id, monitor.nextRunAt);`,
  },
  {
    label: 'cURL',
    lang: 'bash',
    code: `curl https://${apiHost}/v1/ask \\
  -H "Authorization: Bearer $${site.name.toUpperCase()}_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "aoi": "aoi_8f2k1",
    "question": "How many new buildings appeared since March 2025?"
  }'`,
  },
];

export const responseSample: CodeSample = {
  label: 'Response',
  lang: 'json',
  code: `{
  "answer": "214 new structures inside the AOI since 2025-03-01.",
  "confidence": 0.96,
  "evidence": {
    "model": "buildings-v4",
    "scenes": ["optical_20250304", "optical_20260918"],
    "features": "https://${apiHost}/v1/results/res_93kd/features.geojson"
  },
  "usage": { "km2": 38.4, "credits": 12 }
}`,
};
