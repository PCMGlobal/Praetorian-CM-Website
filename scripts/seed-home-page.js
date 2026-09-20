// One-time (re-runnable) script that creates and publishes the "homePage"
// singleton document in Sanity with the current live homepage copy, so you
// don't have to type ~40 fields into Studio by hand.
//
// Usage (PowerShell, from the pcml-website folder):
//   $env:SANITY_WRITE_TOKEN = "paste-your-token-here"
//   node scripts/seed-home-page.js
//
// The token needs "Editor" (or higher) permissions. Create one at
// https://manage.sanity.io -> Praetorian-CM-Website project -> API -> Tokens.
// Never commit the token or put it in .env.local -- it's only used for this
// one run, straight from the terminal's environment variable.

const { createClient } = require('@sanity/client');

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error('Missing SANITY_WRITE_TOKEN. Set it first with:');
  console.error('  $env:SANITY_WRITE_TOKEN = "your-token-here"');
  process.exit(1);
}

const client = createClient({
  projectId: 'ke8lgl8i',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

let keyCounter = 0;
function key() {
  keyCounter += 1;
  return 'k' + keyCounter;
}

const homePageDoc = {
  _id: 'homePage-singleton',
  _type: 'homePage',
  hero: {
    eyebrow: 'Global Mining · Built Right',
    headline: 'Mining Construction Management with a Technology Edge',
    subhead:
      "Praetorian integrates directly into your ownership team, from feasibility through commissioning. AI-powered cost intelligence, global experience, and an unwavering focus on your project outcomes.",
    primaryCtaLabel: 'Speak with Our Team',
    secondaryCtaLabel: 'View Our Projects',
    stats: [
      { _key: key(), _type: 'stat', value: '20', suffix: '+', label: 'Years delivering' },
      { _key: key(), _type: 'stat', value: '60', suffix: '+', label: 'Projects globally' },
      { _key: key(), _type: 'stat', value: '6', suffix: '', label: 'Countries of operation' },
    ],
  },
  serviceTeasers: [
    {
      _key: key(),
      _type: 'serviceTeaser',
      number: '01',
      title: "Owner's Team Support",
      description: 'Study development, execution readiness, and H&S oversight, embedded directly in your team.',
    },
    {
      _key: key(),
      _type: 'serviceTeaser',
      number: '02',
      title: 'Project Services',
      description: 'Procurement, cost control, scheduling, document management and risk, integrated from Day 1.',
    },
    {
      _key: key(),
      _type: 'serviceTeaser',
      number: '03',
      title: 'Construction Execution',
      description:
        'On-the-ground construction management across civil, structural, mechanical, electrical and commissioning.',
    },
    {
      _key: key(),
      _type: 'serviceTeaser',
      number: '04',
      title: 'Operational Consulting',
      description: 'Leadership alignment, asset optimisation, and process safety for long-term operational performance.',
    },
  ],
  whatWeDo: {
    eyebrow: 'What we do',
    heading: 'End-to-End Project Management Services',
    subhead:
      'From the first feasibility study to final commissioning, Praetorian provides integrated services across every phase of your project lifecycle.',
    cards: [
      {
        _key: key(),
        _type: 'whatWeDoCard',
        title: 'Engineering Support',
        description: 'Constructability reviews and value engineering that reduce cost before ground is broken.',
      },
      {
        _key: key(),
        _type: 'whatWeDoCard',
        title: 'Early Planning & Feasibility',
        description: 'Stage gate development, feasibility, and financing support from inception through FS.',
      },
      {
        _key: key(),
        _type: 'whatWeDoCard',
        title: 'Procurement & Logistics',
        description: 'Contract development, tendering strategy, and full vendor management through award.',
      },
      {
        _key: key(),
        _type: 'whatWeDoCard',
        title: 'Project Controls',
        description: 'Cost, schedule, document management and reporting, integrated with your systems.',
      },
      {
        _key: key(),
        _type: 'whatWeDoCard',
        title: 'Construction Management',
        description: "On-site supervision, contractor management, and quality oversight as your owner's representative.",
      },
      {
        _key: key(),
        _type: 'whatWeDoCard',
        title: 'Quality, Commissioning & Turnover',
        description: 'QA/QC frameworks, commissioning planning, and turnover packages that protect your investment.',
      },
    ],
  },
  onTheGround: [
    {
      _key: key(),
      _type: 'groundPanel',
      eyebrow: 'On the ground',
      heading: "Mining operations, run by people who've stood on the pit floor",
      body:
        "Open pit, underground, heap leach, Praetorian's owner's teams have overseen fleet, crusher and haul-road programmes across every major mining geography.",
    },
    {
      _key: key(),
      _type: 'groundPanel',
      eyebrow: 'Engineering & Construction',
      heading: 'Structural steel to process plant, delivered on schedule',
      body:
        "Constructability review through commissioning, Praetorian's project controls keep complex builds on cost and on schedule.",
    },
    {
      _key: key(),
      _type: 'groundPanel',
      eyebrow: 'Health, Safety, Social, and Environment',
      heading: "Owner's team culture sets the site culture",
      body: "HSSE oversight isn't a checkbox, it's embedded leadership, from toolbox talk to turnover.",
    },
  ],
  footprint: {
    eyebrow: 'Global presence',
    heading: 'Praetorian Footprint',
    body:
      'Praetorian has worked extensively across Canada, the United States, South America, Central America and Eurasia. The tour runs on its own, hover a pin or pick a project to take control.',
  },
  allLocations: {
    eyebrow: 'All Locations',
    heading: 'Where we have worked',
    body:
      'A sample of 60 projects our team and senior managers have delivered across 6 countries. Select a country to expand the full list.',
  },
  resources: {
    eyebrow: 'Knowledge Hub',
    heading: 'Resources for Project Owners',
    cards: [
      { _key: key(), _type: 'resourceCard', title: 'Blog & Insights', description: 'Industry commentary' },
      { _key: key(), _type: 'resourceCard', title: 'Business Guides', description: 'Best-practice guides' },
      { _key: key(), _type: 'resourceCard', title: 'Case Studies', description: 'Project case studies' },
      { _key: key(), _type: 'resourceCard', title: 'Whitepapers', description: 'Downloadable reports' },
      { _key: key(), _type: 'resourceCard', title: 'Webinars & Video', description: 'Expert-led sessions' },
    ],
  },
  newsSection: {
    eyebrow: 'Latest from Praetorian',
    heading: 'News & Insights',
  },
};

client
  .createOrReplace(homePageDoc)
  .then((res) => {
    console.log('Success. Home Page document created and published:', res._id);
    console.log('Open it in Studio to review, or hand it straight to Femi.');
  })
  .catch((err) => {
    console.error('Failed to create the Home Page document.');
    console.error(err.message || err);
    process.exit(1);
  });
