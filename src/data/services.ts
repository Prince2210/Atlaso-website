import { AppWindow, Network, ServerCog, Wrench } from '@lucide/astro';
import type { AstroComponent } from '@lucide/astro';

export type Service = {
  slug: string;
  name: string;
  icon: AstroComponent;
  summary: string;
  hero: { title: string; description: string };
  /** Why the work is needed now. */
  context: { title: string; description: string }[];
  deliverables: { title: string; description: string }[];
  stack: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'utility-network-migration',
    name: 'Utility Network migration',
    icon: Network,
    summary: 'Move electric, gas, water and sewer data from the Geometric Network to the ArcGIS Utility Network.',
    hero: {
      title: 'Geometric Network to Utility Network, without losing a valve',
      description:
        'We assess your data, map it to the Utility Network model for your domain, load it, and work through the errors until subnetworks update and traces return what your engineers expect.',
    },
    context: [
      {
        title: 'ArcMap is retired',
        description: 'ArcMap reached retirement in March 2026. Editing workflows built on it need a home in ArcGIS Pro.',
      },
      {
        title: 'Geometric networks stop at Pro',
        description: 'ArcGIS Pro can display a geometric network but cannot edit one. The Utility Network is the supported path.',
      },
      {
        title: 'Legacy data is rarely clean',
        description: 'Disconnected features, missing attributes and undocumented subtypes surface the moment you build topology.',
      },
    ],
    deliverables: [
      {
        title: 'Readiness assessment',
        description:
          'A report on connectivity errors, attribute gaps, domains and subtypes, with an estimate of the clean-up effort before any migration starts.',
      },
      {
        title: 'Data model mapping',
        description:
          'Source classes and fields mapped to the Esri asset package for your domain, with extensions you need documented and agreed.',
      },
      {
        title: 'Migration runs',
        description:
          'Data loaded with Esri’s Utility Network Package and Data Loading Tools, scripted in ArcPy or FME so every run is repeatable.',
      },
      {
        title: 'Error resolution',
        description:
          'Topology validated, dirty areas and error features worked down, tiers and subnetworks defined and updated, traces tested.',
      },
      {
        title: 'Cut-over support',
        description:
          'The final load into your enterprise geodatabase or ArcGIS Enterprise, with a freeze window planned around your editors.',
      },
      {
        title: 'Handover pack',
        description: 'Field mappings, scripts, a known-issues log and editor notes, so your team or the next vendor can carry it on.',
      },
    ],
    stack: ['ArcGIS Pro', 'ArcGIS Utility Network', 'UN Package Tools', 'Data Loading Tools', 'ArcPy', 'FME', 'ArcGIS Enterprise'],
    faq: [
      {
        q: 'Which domains do you migrate?',
        a: 'Water, sewer, stormwater, gas and electric, using the matching Esri asset package as the starting point.',
      },
      {
        q: 'Do we need to clean our data first?',
        a: 'No. The readiness assessment tells you what needs fixing and we can do the clean-up as part of the project, before or during migration.',
      },
      {
        q: 'Can you work inside our environment?',
        a: 'Yes, and we prefer to. We work over your VPN, VDI or Citrix with accounts you control, so data never has to leave your network.',
      },
    ],
  },
  {
    slug: 'gis-data-maintenance',
    name: 'GIS data maintenance',
    icon: Wrench,
    summary: 'As-built posting, edits from field markups and ongoing QA, on a monthly retainer.',
    hero: {
      title: 'Keep the network clean after go-live',
      description:
        'A migrated network only stays useful if edits keep up with the field. We post as-builts and markups, resolve validation errors and keep subnetworks current, on a fixed monthly scope.',
    },
    context: [
      {
        title: 'Backlogs build quietly',
        description: 'As-builts and field markups pile up when GIS staff are pulled onto projects, and the map drifts from the ground.',
      },
      {
        title: 'Validation never stops',
        description: 'Every edit to a Utility Network can create error features and dirty areas that someone has to resolve.',
      },
      {
        title: 'Time zones can help',
        description: 'Work sent at the end of your day in North America, the UK or Australia can be posted and checked by the next morning.',
      },
    ],
    deliverables: [
      {
        title: 'As-built and markup posting',
        description: 'Redlines, CAD and PDF as-builts turned into network edits that follow your editing standards.',
      },
      {
        title: 'Validation and error clean-up',
        description: 'Dirty areas validated, error features resolved and subnetworks updated after each batch of edits.',
      },
      {
        title: 'Attribute and asset updates',
        description: 'Material, size, install dates, condition and lifecycle fields kept complete for planning and reporting.',
      },
      {
        title: 'Monthly QA report',
        description: 'What was posted, what was fixed and what is waiting on your team, in a short report you can forward.',
      },
    ],
    stack: ['ArcGIS Pro', 'ArcGIS Utility Network', 'Attribute rules', 'Branch versioning', 'ArcPy', 'Field Maps'],
    faq: [
      {
        q: 'Do you work on a geometric network too?',
        a: 'Yes. Many teams keep maintaining the geometric network until cut-over, and we can do both during the transition.',
      },
      {
        q: 'How is the retainer scoped?',
        a: 'By the volume and type of edits you expect each month, with an agreed turnaround. We review the scope together every quarter.',
      },
    ],
  },
  {
    slug: 'web-gis-apps',
    name: 'Web GIS apps',
    icon: AppWindow,
    summary: 'Custom web maps and Experience Builder widgets, built with the ArcGIS Maps SDK for JavaScript or OpenLayers.',
    hero: {
      title: 'Web GIS apps your crews and planners will actually open',
      description:
        'Once the data is right, people need a fast way to use it. We build browser apps on the ArcGIS Maps SDK for JavaScript, custom Experience Builder widgets, and OpenLayers or Leaflet apps on top of OGC services.',
    },
    context: [
      {
        title: 'Web AppBuilder is retired',
        description: 'Apps built on Web AppBuilder need rebuilding in Experience Builder or as standalone apps.',
      },
      {
        title: 'Out-of-the-box only goes so far',
        description: 'Configurable templates stop short of utility workflows like isolation traces, work packages and inspections.',
      },
      {
        title: 'Not everyone needs a full GIS',
        description: 'Field crews, call centres and planners want one focused screen, not a desktop GIS in a browser.',
      },
    ],
    deliverables: [
      {
        title: 'Web AppBuilder replacements',
        description: 'Existing apps rebuilt in Experience Builder, with custom widgets where the stock ones fall short.',
      },
      {
        title: 'Custom Experience Builder widgets',
        description: 'Widgets in React and TypeScript for traces, reports, editing forms and integrations with your other systems.',
      },
      {
        title: 'Standalone ArcGIS JS apps',
        description: 'Focused apps on the ArcGIS Maps SDK for JavaScript, including Utility Network tracing in the browser.',
      },
      {
        title: 'OpenLayers and Leaflet apps',
        description: 'Lightweight maps on WMS, WFS and vector tiles from GeoServer or ArcGIS, for public or internal use.',
      },
    ],
    stack: ['ArcGIS Maps SDK for JavaScript', 'Experience Builder', 'OpenLayers', 'Leaflet', 'TypeScript', 'React'],
    faq: [
      {
        q: 'Who owns the code?',
        a: 'You do. Source code and build scripts are handed over in your repository at the end of the project.',
      },
      {
        q: 'Can you work with ArcGIS Online and ArcGIS Enterprise?',
        a: 'Yes, both. We build against your portal, using your existing layers, web maps and security.',
      },
    ],
  },
  {
    slug: 'open-source-gis',
    name: 'Open-source GIS',
    icon: ServerCog,
    summary: 'GeoServer, PostGIS and OpenLayers for teams that want web GIS without per-seat licences.',
    hero: {
      title: 'A complete web GIS on open standards',
      description:
        'For utilities and councils without an Esri licence, or that want to reduce one, we design a PostGIS database, publish it through GeoServer and build the web map on OpenLayers or Leaflet.',
    },
    context: [
      {
        title: 'Licences add up',
        description: 'Smaller utilities and councils often need a reliable web map more than a full enterprise GIS platform.',
      },
      {
        title: 'Data is stuck in files',
        description: 'Shapefiles, CAD drawings and spreadsheets on a shared drive are hard to keep current and share safely.',
      },
      {
        title: 'Standards keep you free to move',
        description: 'OGC services and an open database mean you can change vendors or tools later without migrating again.',
      },
    ],
    deliverables: [
      {
        title: 'PostGIS database',
        description: 'A schema designed for your assets, loaded from shapefiles, file geodatabases or CAD, with constraints that keep data clean.',
      },
      {
        title: 'GeoServer publishing',
        description: 'WMS, WFS and vector tile services with styling, access rules and caching set up for your users.',
      },
      {
        title: 'Web map',
        description: 'An OpenLayers or Leaflet app with search, identify, printing and the layers each team needs.',
      },
      {
        title: 'Desktop editing',
        description: 'QGIS projects set up for your editors, so updates go straight into PostGIS and show up on the web map.',
      },
      {
        title: 'Network analysis',
        description: 'Where you need connectivity and tracing, a network model in PostGIS with pgRouting.',
      },
      {
        title: 'Hosting on your cloud',
        description: 'Deployed with Docker on your AWS, Azure or on-premise servers, with backups and an update plan.',
      },
    ],
    stack: ['PostGIS', 'GeoServer', 'OpenLayers', 'Leaflet', 'QGIS', 'pgRouting', 'Docker'],
    faq: [
      {
        q: 'Is there an open-source Utility Network?',
        a: 'Not an equivalent one. For utility networks that need rule-based tracing at scale, ArcGIS is usually the better fit, and we will say so during scoping.',
      },
      {
        q: 'Can we mix open source with ArcGIS?',
        a: 'Yes. A common setup keeps editing in ArcGIS and publishes read-only maps through GeoServer and OpenLayers.',
      },
    ],
  },
];

/** How every engagement runs, shown on the home and partner pages. */
export const process = [
  {
    title: 'Scoping call',
    description: 'Thirty minutes on where your data lives, what has to change and by when. You get a written next step either way.',
  },
  {
    title: 'Assessment',
    description: 'We look at a copy of your data or work in your environment and send a findings report with a fixed price for the work.',
  },
  {
    title: 'Pilot',
    description: 'One service area, one pressure zone or one app first, so you can judge the quality before committing to the rest.',
  },
  {
    title: 'Delivery and support',
    description: 'The full scope in agreed stages, then handover, or a maintenance retainer if you want us to keep the data current.',
  },
];
