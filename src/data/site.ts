export const siteConfig = {
  name: "Designer Plus Interiors",
  shortName: "Designer Plus",
  tagline: "We Design Spaces That Inspire.",
  description:
    "Designer Plus Interiors is a premium turnkey interior design studio in Bangalore, crafting architecturally considered residential and commercial spaces from concept to handover.",
  url: "https://www.designerplusinteriors.com",
  ogImage: "/images/og-cover.jpg",
  phone: "+91 98450 00000",
  whatsapp: "919845000000",
  email: "hello@designerplusinteriors.com",
  address: {
    street: "100 Feet Road, Indiranagar",
    city: "Bangalore",
    region: "Karnataka",
    postalCode: "560038",
    country: "IN",
  },
  hours: "Mon – Sat, 10:00 AM – 7:00 PM",
  social: {
    instagram: "https://instagram.com/designerplusinteriors",
    facebook: "https://facebook.com/designerplusinteriors",
    linkedin: "https://linkedin.com/company/designerplusinteriors",
    pinterest: "https://pinterest.com/designerplusinteriors",
    youtube: "https://youtube.com/@designerplusinteriors",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    slug: "residential-interiors",
    name: "Residential Interiors",
    short: "Full-home interiors tailored to how you live.",
    description:
      "End-to-end residential design for apartments, villas, and penthouses — spatial planning, material palettes, and furniture curated around your family's daily rhythm.",
  },
  {
    slug: "commercial-interiors",
    name: "Commercial Interiors",
    short: "Brand-forward spaces for retail and hospitality.",
    description:
      "Commercial environments engineered for footfall, brand recall, and operational efficiency — from boutique retail to hospitality lobbies.",
  },
  {
    slug: "office-interiors",
    name: "Office Interiors",
    short: "Workplaces designed for focus and culture.",
    description:
      "Corporate interiors balancing acoustics, ergonomics, and brand identity to support how modern teams actually work.",
  },
  {
    slug: "modular-kitchens",
    name: "Modular Kitchens",
    short: "Precision-engineered culinary spaces.",
    description:
      "German and Italian hardware, soft-close mechanisms, and layouts planned around real cooking workflows — not just showroom aesthetics.",
  },
  {
    slug: "false-ceiling",
    name: "False Ceiling",
    short: "Architectural ceilings that shape light.",
    description:
      "Gypsum and POP ceiling systems integrated with cove lighting and HVAC to complete a room's architectural language.",
  },
  {
    slug: "lighting-design",
    name: "Lighting Design",
    short: "Layered lighting as a design material.",
    description:
      "Ambient, task, and accent lighting layered in tandem with interiors — because a room is only as luxurious as its shadows.",
  },
  {
    slug: "furniture-design",
    name: "Furniture Design",
    short: "Bespoke pieces built for the space.",
    description:
      "Custom-fabricated furniture designed to the millimetre, in materials sourced to match your palette and scale.",
  },
  {
    slug: "turnkey-projects",
    name: "Turnkey Projects",
    short: "One studio, zero coordination overhead.",
    description:
      "Design, procurement, civil work, and execution under a single accountable team — you receive keys, not a checklist.",
  },
  {
    slug: "3d-visualization",
    name: "3D Visualization",
    short: "See the space before it exists.",
    description:
      "Photorealistic renders and walkthroughs so every material, finish, and light fixture is approved before execution begins.",
  },
  {
    slug: "renovation",
    name: "Renovation",
    short: "Reimagining spaces without starting over.",
    description:
      "Structural and cosmetic renovation for older homes and offices — retaining what works, elevating what doesn't.",
  },
] as const;

export const stats = [
  { label: "Projects Completed", value: 420, suffix: "+" },
  { label: "Years of Experience", value: 14, suffix: "+" },
  { label: "Happy Clients", value: 380, suffix: "+" },
  { label: "Cities Served", value: 6, suffix: "" },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We begin with a detailed conversation about how you live or work, your budget, and the vision for the space.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Spatial planning and layout studies translate your brief into a workable architectural plan.",
  },
  {
    step: "03",
    title: "3D Design",
    description:
      "Photorealistic 3D visualization lets you walk through every room before a single wall is touched.",
  },
  {
    step: "04",
    title: "Material Selection",
    description:
      "Curated material and finish palettes, sourced from trusted premium suppliers, matched to your design intent.",
  },
  {
    step: "05",
    title: "Execution",
    description:
      "Civil work, carpentry, electrical, and finishing carried out by in-house teams under a single project manager.",
  },
  {
    step: "06",
    title: "Quality Check",
    description:
      "A rigorous multi-point quality audit before anything is signed off — nothing reaches you unfinished.",
  },
  {
    step: "07",
    title: "Handover",
    description:
      "A final walkthrough, documentation, and warranty briefing — then the keys, and the space, are yours.",
  },
] as const;
