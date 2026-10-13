import { Anchor, Landmark, Sprout, Trees, Umbrella, Zap } from '@lucide/astro';
import type { AstroComponent } from '@lucide/astro';
import { product } from '../config/site';

export type Solution = {
  slug: string;
  name: string;
  icon: AstroComponent;
  summary: string;
  hero: { title: string; description: string };
  metrics: { value: string; label: string }[];
  challenges: { title: string; description: string }[];
  useCases: { title: string; description: string }[];
  models: string[];
  quote: { text: string; name: string; role: string; company: string };
};

export const solutions: Solution[] = [
  {
    slug: 'agriculture',
    name: 'Agriculture & Food',
    icon: Sprout,
    summary: 'Field-level crop intelligence, from planting to harvest, across every region you source from.',
    hero: {
      title: 'Crop intelligence for every field you care about',
      description:
        'Map field boundaries, classify crops and forecast yield weeks before harvest — across millions of hectares, refreshed every few days.',
    },
    metrics: [
      { value: '92%', label: 'crop-type accuracy at field level' },
      { value: '5 days', label: 'average revisit across regions' },
      { value: '6 wks', label: 'earlier yield signals vs. surveys' },
    ],
    challenges: [
      { title: 'Ground surveys don’t scale', description: 'Agronomists can visit a fraction of fields, and reports arrive after decisions are made.' },
      { title: 'Cloud cover hides the season', description: 'Optical imagery alone leaves gaps exactly when crop stress matters most.' },
      { title: 'Fragmented supply data', description: 'Sourcing teams reconcile spreadsheets from dozens of suppliers with no common baseline.' },
    ],
    useCases: [
      { title: 'Field boundary delineation', description: 'Automatically extract field polygons for whole regions and keep them current every season.' },
      { title: 'Crop-type mapping', description: 'Classify 20+ crop types using fused optical and radar time series, even through cloud.' },
      { title: 'Yield forecasting', description: 'Combine vegetation indices, weather and history to forecast yield at field and county level.' },
      { title: 'Irrigation & stress alerts', description: 'Get notified when moisture or vigor drops below expected ranges for a field.' },
    ],
    models: ['Field boundaries v3', 'Crop type v5', 'Vegetation vigor', 'Soil moisture (SAR)'],
    quote: {
      text: `We went from sampling 4% of our sourcing regions to seeing every field, every week. Our procurement team now plans around ${product.shortName} forecasts.`,
      name: 'Priya Raman',
      role: 'Head of Sourcing Analytics',
      company: 'Northwind Agro',
    },
  },
  {
    slug: 'insurance',
    name: 'Insurance & Risk',
    icon: Umbrella,
    summary: 'Underwrite with current property data and respond to catastrophes in hours, not weeks.',
    hero: {
      title: 'Know every property before — and after — the event',
      description:
        'Extract roof condition, footprints and hazards for any address, then triage claims after floods, fires and storms with post-event imagery.',
    },
    metrics: [
      { value: '24 hrs', label: 'from event to portfolio damage view' },
      { value: '30+', label: 'property attributes per structure' },
      { value: '41%', label: 'fewer on-site inspections' },
    ],
    challenges: [
      { title: 'Stale property data', description: 'Underwriting relies on self-reported or years-old attributes that miss real risk.' },
      { title: 'Slow catastrophe response', description: 'Adjusters can’t reach affected areas for days, delaying payouts and reserves.' },
      { title: 'Manual inspections are costly', description: 'Sending people to every roof doesn’t scale across a national book.' },
    ],
    useCases: [
      { title: 'Roof condition scoring', description: 'Detect staining, patching, debris and structural damage on every roof in your portfolio.' },
      { title: 'Catastrophe damage assessment', description: 'Classify damage severity per structure within hours of post-event imagery.' },
      { title: 'Hazard proximity', description: 'Measure vegetation overhang, distance to water and wildfire fuel around each property.' },
      { title: 'Portfolio exposure', description: 'Aggregate attributes and damage across policies to manage accumulation risk.' },
    ],
    models: ['Building footprints v4', 'Roof condition v2', 'Damage assessment', 'Flood extent (SAR)'],
    quote: {
      text: 'After the spring floods we had a damage estimate for 18,000 policies before our first adjuster arrived on site.',
      name: 'Marcus Lindqvist',
      role: 'VP, Catastrophe Response',
      company: 'Meridian Re',
    },
  },
  {
    slug: 'energy',
    name: 'Energy & Utilities',
    icon: Zap,
    summary: 'Monitor thousands of kilometers of grid, pipeline and generation assets from orbit.',
    hero: {
      title: 'Watch every kilometer of your network',
      description:
        'Detect vegetation encroachment, third-party construction and asset changes along transmission lines and pipelines — and track new generation as it’s built.',
    },
    metrics: [
      { value: '120k km', label: 'of corridor monitored per customer' },
      { value: '3x', label: 'faster vegetation work prioritization' },
      { value: '−60%', label: 'helicopter patrol hours' },
    ],
    challenges: [
      { title: 'Vast, remote networks', description: 'Patrolling corridors by helicopter or truck is expensive and infrequent.' },
      { title: 'Wildfire & outage risk', description: 'Vegetation contact is a leading cause of outages and ignition events.' },
      { title: 'Encroachment goes unnoticed', description: 'Unauthorized digging and building near pipelines is found too late.' },
    ],
    useCases: [
      { title: 'Vegetation management', description: 'Estimate canopy height and clearance along every span and prioritize trimming.' },
      { title: 'Right-of-way monitoring', description: 'Alert on new construction, excavation or vehicles inside pipeline corridors.' },
      { title: 'Renewables tracking', description: 'Detect new solar and wind installations and measure capacity added by region.' },
      { title: 'Storm damage triage', description: 'Locate downed lines and damaged structures after severe weather.' },
    ],
    models: ['Vegetation height', 'Solar panels v3', 'Wind turbines', 'Construction activity'],
    quote: {
      text: `${product.shortName} replaced two-thirds of our patrol flights and pointed crews to the spans that actually needed work.`,
      name: 'Hannah Okoye',
      role: 'Director of Asset Intelligence',
      company: 'Terrafirm Energy',
    },
  },
  {
    slug: 'government',
    name: 'Government & Cities',
    icon: Landmark,
    summary: 'Up-to-date maps of buildings, land use and infrastructure for planning and public services.',
    hero: {
      title: 'Plan cities with a map that keeps up',
      description:
        'Keep building inventories, land use and infrastructure maps current automatically — and spot unpermitted change, informal growth and urban heat early.',
    },
    metrics: [
      { value: '1.2M', label: 'buildings mapped per city, on average' },
      { value: 'Monthly', label: 'refresh vs. multi-year surveys' },
      { value: '95%', label: 'footprint precision' },
    ],
    challenges: [
      { title: 'Maps age quickly', description: 'Cadastral and land-use data can lag reality by years in fast-growing areas.' },
      { title: 'Limited field capacity', description: 'Inspectors can’t monitor permits and land use across an entire jurisdiction.' },
      { title: 'Climate adaptation needs data', description: 'Heat, flood and green-space planning require consistent, current baselines.' },
    ],
    useCases: [
      { title: 'Building inventory', description: 'Maintain footprints, heights and change history for every structure.' },
      { title: 'Permit compliance', description: 'Flag new construction that doesn’t match issued permits.' },
      { title: 'Urban heat & green cover', description: 'Map tree canopy, impervious surfaces and heat islands neighborhood by neighborhood.' },
      { title: 'Informal settlement mapping', description: 'Track growth of unplanned areas to direct services and infrastructure.' },
    ],
    models: ['Building footprints v4', 'Land cover (12 classes)', 'Tree canopy', 'Road network'],
    quote: {
      text: 'Our planning department finally has a single, current view of the city. Permit audits that took a quarter now take an afternoon.',
      name: 'Dr. Elena Costa',
      role: 'Chief Data Officer',
      company: 'Civica Planning Authority',
    },
  },
  {
    slug: 'environment',
    name: 'Climate & Environment',
    icon: Trees,
    summary: 'Measure, report and verify nature outcomes with transparent, auditable evidence.',
    hero: {
      title: 'Evidence for every hectare you protect',
      description:
        'Monitor deforestation, biomass and land degradation continuously — with auditable time series that stand up to verifiers, regulators and buyers.',
    },
    metrics: [
      { value: '10 m', label: 'deforestation alerts, every 5 days' },
      { value: '80M ha', label: 'of forest under monitoring' },
      { value: 'EUDR', label: 'ready supply-chain due diligence' },
    ],
    challenges: [
      { title: 'Trust in nature claims', description: 'Buyers and regulators want independent, repeatable evidence — not self-reporting.' },
      { title: 'Monitoring remote land', description: 'Forest and wetland projects are vast, remote and expensive to visit.' },
      { title: 'Regulatory pressure', description: 'New deforestation-free rules require plot-level proof across supply chains.' },
    ],
    useCases: [
      { title: 'Deforestation alerts', description: 'Detect canopy loss within days using optical and radar, even under cloud.' },
      { title: 'Carbon project MRV', description: 'Estimate biomass change and leakage with transparent, versioned methods.' },
      { title: 'Supply-chain due diligence', description: 'Screen sourcing plots against cut-off dates and protected areas.' },
      { title: 'Wildfire & burn scars', description: 'Map burned area and recovery to quantify impact and reversals.' },
    ],
    models: ['Forest loss v2', 'Above-ground biomass', 'Burn scar', 'Wetland extent'],
    quote: {
      text: `${product.shortName} gives our verifiers the same evidence we see, with full history. It changed the tone of every audit.`,
      name: 'Tomás Herrera',
      role: 'Head of MRV',
      company: 'Verdant Carbon',
    },
  },
  {
    slug: 'maritime',
    name: 'Maritime & Logistics',
    icon: Anchor,
    summary: 'Track port activity, vessels and supply-chain chokepoints with daily satellite coverage.',
    hero: {
      title: 'See global supply chains in motion',
      description:
        'Count vessels, containers and vehicles at ports and logistics hubs worldwide — and spot congestion, dark ships and disruptions before they hit your schedule.',
    },
    metrics: [
      { value: '450+', label: 'ports monitored daily' },
      { value: '97%', label: 'vessel detection precision' },
      { value: '48 hrs', label: 'earlier congestion signals' },
    ],
    challenges: [
      { title: 'AIS gaps', description: 'Vessels switch off transponders, and coverage is patchy in key regions.' },
      { title: 'Lagging indicators', description: 'Official throughput statistics arrive weeks or months after the fact.' },
      { title: 'Global footprint', description: 'Monitoring hundreds of facilities manually isn’t feasible.' },
    ],
    useCases: [
      { title: 'Port congestion', description: 'Count anchored and berthed vessels to measure waiting times and throughput.' },
      { title: 'Dark vessel detection', description: 'Match SAR detections against AIS to surface vessels that aren’t broadcasting.' },
      { title: 'Container & yard utilization', description: 'Estimate container stacks and yard occupancy at terminals and depots.' },
      { title: 'Facility activity indices', description: 'Track trucks, railcars and stockpiles at factories and mines as economic signals.' },
    ],
    models: ['Vessels v3 (optical + SAR)', 'Containers', 'Vehicles v4', 'Stockpile volume'],
    quote: {
      text: 'We now see congestion building at transshipment hubs two days before it shows up in our ETAs.',
      name: 'James Achterberg',
      role: 'Head of Network Planning',
      company: 'Bluecoast Logistics',
    },
  },
];
