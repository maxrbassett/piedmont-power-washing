/**
 * Single source of truth for site copy — Piedmont Power Washing, LLC.
 *
 * Piedmont Power Washing is a commercial & residential pressure-washing company
 * serving the Charlotte, NC metro and surrounding NC/SC communities, based in
 * Lancaster, SC. This file holds the real, public-facing content sourced from
 * the business's existing website (piedmontpowerwashing.com) and Facebook page,
 * crawled June 2026.
 *
 * Everything here is traceable to content.md. Where a detail is genuinely
 * unconfirmed it carries a `// CONFIRM` comment rather than a guess — we do not
 * invent reviews, hours, an owner name, certifications, or services.
 */

// --- Identity ------------------------------------------------------------------
export const name = 'Piedmont Power Washing';
export const longName = 'Piedmont Power Washing, LLC';
export const tagline = 'Commercial & Residential Pressure Washing';
export const heroSubhead =
  'Eco-friendly pressure washing for homes and businesses — backed by 12+ years of experience.';

// One-line positioning used in a few places.
export const positioning =
  'Eco-friendly pressure washing for homes and businesses across the Charlotte metro — free estimates, 12+ years of experience.';

// The business's own mission statement (verbatim from the site).
export const mission =
  'It is our mission to provide excellent workmanship and complete customer satisfaction from start to completion of a project. In order to understand the needs and expectations of our customers, we take great care to work and communicate with every customer in a professional manner. Our reputation is based on service, safety, and quality, regardless of how large or small the job.';

// --- Navigation ----------------------------------------------------------------
export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Service Area', href: '#area' },
  { label: 'Why Us', href: '#trust' },
  { label: 'Contact', href: '#contact' },
];

// --- Contact / location --------------------------------------------------------
export const phone = '704-297-5461';
export const phoneTel = '+17042975461';

// Single canonical, public-facing email (the site displays info@; the mailto in
// the old markup used eric@ — we standardize on the displayed address).
export const email = 'info@piedmontpowerwashing.com';

export const address = {
  street: '109 Sycamore Dr',
  city: 'Lancaster',
  state: 'SC',
  zip: '29720',
};
export const addressOneLine = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${longName}, ${addressOneLine}`,
)}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  addressOneLine,
)}`;
// Keyless Google Maps embed (the &output=embed form needs no API key).
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  addressOneLine,
)}&z=12&output=embed`;

// --- External links ------------------------------------------------------------
// NOTE: the old site's Instagram icon pointed at a generic instagram.com/wix/
// placeholder — intentionally omitted until a real handle is supplied.
export const links = {
  facebook: 'https://www.facebook.com/piedmontpowerwashing',
  // Angie's List / Angi search for the business (the site shows an Angi badge
  // but no on-site reviews). Generic search rather than an unverified profile URL.
  angi: 'https://www.angi.com/companylist/us/sc/lancaster.htm',
};

// --- Services ------------------------------------------------------------------
// Strictly the services named on the existing site / meta description. We do NOT
// add roof washing or anything not in content.md. "scope" marks who it's for.
export interface Service {
  id: string;
  title: string;
  benefit: string;
  detail: string;
  scope: 'Residential' | 'Commercial' | 'Residential & Commercial';
  /** simple inline icon key drawn in the component */
  icon: 'house' | 'surface' | 'deck' | 'fence' | 'restore';
}

export const servicesIntro =
  'From siding to driveways, decks to fences — we match the right pressure and eco-friendly, biodegradable cleaners to each surface. Every job is residential or commercial, large or small, done with the same care.';

export const services: Service[] = [
  {
    id: 'house',
    title: 'House & Siding Washing',
    benefit: 'Technique matched to your siding — gentle where it counts.',
    detail:
      'We adjust our power washing technique based on the age and type of the material, so vinyl, brick, stucco, and painted surfaces get cleaned safely — soft-wash friendly where a softer touch is needed.',
    scope: 'Residential & Commercial',
    icon: 'house',
  },
  {
    id: 'surface',
    title: 'Surface Washing',
    benefit: 'Driveways, walkways, and patios brought back to life.',
    detail:
      'Pressure washing for driveways, walkways, decks, and patios — lifting away dirt, grime, mildew, and stains from concrete and hardscape surfaces.',
    scope: 'Residential & Commercial',
    icon: 'surface',
  },
  {
    id: 'deck',
    title: 'Deck & Patio Cleaning',
    benefit: 'Strip away grime and weathering without damaging the wood.',
    detail:
      'Careful cleaning of decks and patios to clear built-up dirt, algae, and graying — the right first step before sealing, staining, or simply enjoying the space again.',
    scope: 'Residential & Commercial',
    icon: 'deck',
  },
  {
    id: 'fence',
    title: 'Fence Cleaning',
    benefit: 'Wood and vinyl fences looking fresh again.',
    detail:
      'Wash away the dirt, mildew, and green buildup that dull a fence over time — restoring its appearance and prepping it for sealing or staining if you want it.',
    scope: 'Residential & Commercial',
    icon: 'fence',
  },
  {
    id: 'restore',
    title: 'Restoration — Seal, Stain & Paint',
    benefit: 'Protect and renew decks and fences after cleaning.',
    detail:
      'Beyond washing, we offer cleaning or sealing, painting, and staining of decks and fences — protecting the wood and giving it a renewed, finished look.',
    scope: 'Residential & Commercial',
    icon: 'restore',
  },
];

// --- Service area --------------------------------------------------------------
export const areaIntro =
  'Based in Lancaster, SC and serving the Charlotte metro across the NC/SC line. If you’re near one of these communities, we’ve got you covered — call to confirm we reach your spot.';

// Order roughly NC (north) to SC (south) of the Charlotte line.
export const serviceArea = [
  'Charlotte',
  'Pineville',
  'Matthews',
  'Steele Creek',
  'Ballantyne',
  'Mint Hill',
  'Stallings',
  'Indian Trail',
  'Monroe',
  'Waxhaw',
  'Indian Land',
  'Lake Wylie',
  'Fort Mill',
  'Rock Hill',
  'Lancaster',
];

export const areaNote =
  'Our service area spans the North Carolina / South Carolina state line, just south of Charlotte.';

// --- Trust / "Why us" band -----------------------------------------------------
export const trustPoints = [
  {
    stat: '12+',
    label: 'Years of experience',
    note: 'Over a decade of expertise, quality, and customer service.',
  },
  {
    stat: 'Eco',
    label: 'Eco-friendly products',
    note: 'All of our chemicals are eco-friendly and biodegradable.',
  },
  {
    stat: 'Free',
    label: 'Free estimates',
    note: 'No-obligation quotes for residential and commercial work.',
  },
  {
    stat: 'Res + Com',
    label: 'Residential & Commercial',
    note: 'Every job done with care — no matter how large or small.',
  },
];

// --- Before/After comparators (the hero centerpiece) ---------------------------
// Real, owner-supplied before/after job photos in src/assets. The hero uses the
// CLEAN, unbranded pairs in an interactive drag-to-compare slider; `src` values
// are basenames of files in src/assets (.jpg). Captions double as alt text and
// describe the actual photos truthfully.
export interface ComparePair {
  id: string;
  label: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

export const compareIntro = 'Drag the slider to see the difference we make.';

export const comparePairs: ComparePair[] = [
  {
    id: 'two-story-home',
    label: 'Two-story home',
    before: 'before5',
    after: 'after5',
    beforeAlt: 'Two-story home siding before washing, with algae and grime built up near the base',
    afterAlt: 'The same two-story siding after a soft wash, clean and even',
  },
  {
    id: 'tan-siding-home',
    label: 'Tan siding home',
    before: 'before4',
    after: 'after4',
    beforeAlt: 'Tan vinyl siding before washing, streaked with green algae',
    afterAlt: 'The same tan siding after washing, with the algae removed',
  },
  {
    id: 'white-outbuilding',
    label: 'White outbuilding',
    before: 'before6',
    after: 'after6',
    beforeAlt: 'A white clapboard outbuilding with maroon doors, its siding streaked with green algae before washing',
    afterAlt: 'The same outbuilding after washing, with bright, clean white siding',
  },
  {
    id: 'brick-steps',
    label: 'Brick steps',
    before: 'before7',
    after: 'after7',
    beforeAlt: 'Brick steps covered in green moss and grime before surface washing',
    afterAlt: 'The same brick steps after surface washing, clean and moss-free',
  },
];

// --- "Our Work" showcase -------------------------------------------------------
// The branded before/after graphics (logo + BEFORE/AFTER + category baked in)
// are shown as-is, side by side, since their built-in labels read intentionally.
export const galleryIntro = "Here's a look at the difference we make.";
export const galleryNote =
  'More recent residential and commercial jobs across the Charlotte metro.';

export const showcasePairs: {
  id: string;
  label: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}[] = [
  {
    id: 'house-cleaning',
    label: 'House Cleaning',
    before: 'before1',
    after: 'after1',
    beforeAlt: 'Two-story home with algae-stained siding before house cleaning',
    afterAlt: 'The same home after house cleaning, with bright, clean siding',
  },
  {
    id: 'rust-removal',
    label: 'Pressure Washing',
    before: 'before2',
    after: 'after2',
    beforeAlt: 'Home siding with a rust stain and dirt before pressure washing',
    afterAlt: 'The same siding after pressure washing, with the rust stain gone',
  },
  {
    id: 'siding-stone',
    label: 'Pressure Washing',
    before: 'before3',
    after: 'after3',
    beforeAlt: 'Home with stone accent and dirt-streaked siding before pressure washing',
    afterAlt: 'The same home after pressure washing, with clean siding',
  },
];

// Standalone (non-pair) shots, if any. Empty for now.
export const showcaseSingles: { id: string; src: string; caption: string; alt: string }[] = [];

// --- Contact form --------------------------------------------------------------
// Mirrors the original Wix contact form fields. The form is a front-end demo:
// it validates, then opens the visitor's email client via mailto (no backend).
// See the TODO in Contact.astro to wire it to a real handler/form service.
export const contactIntro =
  'Tell us about your property and what you’d like cleaned — we’ll get back to you with a free estimate. Prefer to talk? Call or text anytime.';

export const contactConfirmation = 'Thanks for reaching out! We will reply as soon as we can.';

// --- SEO -----------------------------------------------------------------------
// Reuses the strong existing meta description (services + area + phone).
export const seo = {
  title: 'Piedmont Power Washing | Pressure Washing in Charlotte, NC & SC',
  description:
    'Piedmont Power Washing, LLC — commercial & residential pressure washing serving Charlotte, NC and surrounding NC/SC areas. Home, driveway, deck, patio, and fence power washing plus restoration. Eco-friendly, biodegradable products, 12+ years experience, free estimates. Call 704-297-5461.',
};
