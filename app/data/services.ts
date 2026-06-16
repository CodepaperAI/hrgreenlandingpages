export type ServiceFact = {
  label: string;
  value: string;
};

export type ServiceItem = {
  title: string;
  text: string;
};

export type ServiceImage = {
  src: string;
  alt: string;
};

export type Service = {
  name: string;
  shortName: string;
  slug: string;
  sourceUrl: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  lead: string;
  summary: string;
  heroImage: ServiceImage;
  secondaryImage: ServiceImage;
  gallery: ServiceImage[];
  facts: ServiceFact[];
  badgeTitle: string;
  badgeText: string;
  overviewTitle: string;
  overview: string[];
  benefitsEyebrow: string;
  fitTitle: string;
  benefits: ServiceItem[];
  processEyebrow: string;
  processTitle: string;
  processIntro: string;
  process: ServiceItem[];
};

export const phoneDisplay = "(647) 915-6507";
export const phoneHref = "tel:6479156507";
export const whatsappHref = "https://wa.me/16479156507";
export const address =
  "100 Matheson Blvd E unit 202, Mississauga, ON L4Z 3P8, Canada";
export const sourceSite = "https://www.hrgreenrootslandscaping.com";

export const serviceAreas = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Richmond Hill",
  "North York",
  "Thornhill",
  "Etobicoke",
  "Scarborough",
  "Ajax",
  "Oshawa",
  "Niagara Region",
  "Guelph",
  "Cambridge",
  "Kitchener",
  "London",
  "Newmarket",
  "Aurora",
  "Barrie"
];

export const services: Service[] = [
  {
    name: "Sod Installation",
    shortName: "Sod",
    slug: "sod-installation",
    sourceUrl: `${sourceSite}/services/sod-installation`,
    seoTitle: "Sod Installation in Toronto & the GTA",
    seoDescription:
      "Premium sod installation with proper prep, grading, and aftercare for an instant, healthy lawn.",
    headline: "Roll out a fuller lawn without waiting a full season.",
    lead: "Professional Sod Installation in Toronto & the GTA",
    summary:
      "We prep, grade, and install premium sod so new builds, lawn replacements, and tired yards look finished quickly and root in evenly.",
    heroImage: {
      src: "/images/sod-hero.jpg",
      alt: "Fresh sod installation with a landscaper working along a clean lawn edge"
    },
    secondaryImage: {
      src: "/images/sod-detail.jpg",
      alt: "Fresh sod rolls being installed for a healthy green lawn"
    },
    gallery: [
      {
        src: "/images/sod-hero.jpg",
        alt: "Finished sod installation with bright green lawn coverage"
      },
      {
        src: "/images/sod-detail.jpg",
        alt: "Fresh sod installation close up"
      },
      {
        src: "/images/sod-gallery.jpg",
        alt: "Professional handling of lawn sod during installation"
      }
    ],
    facts: [
      { label: "Best for", value: "Fresh lawns" },
      { label: "Timeline", value: "Fast install" },
      { label: "Focus", value: "Rooting success" }
    ],
    badgeTitle: "Instant curb appeal",
    badgeText:
      "Fresh sod gives the property a clean, complete look the same day the install is finished.",
    overviewTitle: "Professional Sod Installation in Toronto & the GTA",
    overview: [
      "HR Greenroots installs sod for clients who want an immediate lawn upgrade without waiting through a long regrowth cycle. We begin with proper soil preparation, grading, and leveling so the finished lawn looks smooth and drains the way it should.",
      "We use sod varieties suited to Ontario conditions and install them tightly for a clean finished surface. Whether the yard is brand new or replacing patchy grass, the goal is the same: a healthier lawn that looks complete right away and establishes evenly with the right aftercare."
    ],
    benefitsEyebrow: "What This Improves",
    fitTitle: "Why sod installation makes the property feel more resolved.",
    benefits: [
      {
        title: "Instant curb appeal",
        text: "Fresh sod gives the property a clean, complete look the same day the install is finished."
      },
      {
        title: "Prep before placement",
        text: "We correct grade issues, loosen the top layer, and prep the base instead of laying over weak conditions."
      },
      {
        title: "Clear watering handoff",
        text: "You leave with straightforward aftercare guidance so the lawn roots in evenly and stays healthy."
      }
    ],
    processEyebrow: "Execution Flow",
    processTitle: "A cleaner process from prep to finish.",
    processIntro:
      "We prep, grade, and install premium sod so new builds, lawn replacements, and tired yards look finished quickly and root in evenly.",
    process: [
      {
        title: "Strip and prepare",
        text: "Remove failing turf, improve the topsoil layer, and shape the lawn for drainage and smoothness."
      },
      {
        title: "Lay and trim",
        text: "Install sod in a tight staggered pattern, trim the edges cleanly, and roll it in for solid contact."
      },
      {
        title: "Set the lawn up",
        text: "Review watering, early mowing, and settlement expectations so the new lawn establishes properly."
      }
    ]
  },
  {
    name: "Interlocking & Paver Installation",
    shortName: "Interlocking & Pavers",
    slug: "interlocking-paver-installation",
    sourceUrl: `${sourceSite}/services/interlocking-pavers`,
    seoTitle: "Interlocking & Paver Installation in Oakville & the GTA",
    seoDescription:
      "Durable interlocking and paver installations for patios, driveways, walkways, and outdoor living areas.",
    headline: "Hardscape surfaces that feel crisp, durable, and built into the site.",
    lead: "Interlocking & Paver Installation in Oakville & the GTA",
    summary:
      "We install driveways, patios, walkways, and pool surrounds with strong base prep, clean edge control, and layouts that hold their finish over time.",
    heroImage: {
      src: "/images/pavers-hero.jpg",
      alt: "Interlocking paver pathway with clean garden edges"
    },
    secondaryImage: {
      src: "/images/pavers-detail.jpg",
      alt: "Interlocking concrete pavers installed in a clean pattern"
    },
    gallery: [
      {
        src: "/images/pavers-hero.jpg",
        alt: "Hardscape paver surface with crisp borders"
      },
      {
        src: "/images/pavers-detail.jpg",
        alt: "Interlocking concrete paver detail"
      },
      {
        src: "/images/pavers-gallery.jpg",
        alt: "Backyard paving stones for hardscape installation"
      }
    ],
    facts: [
      { label: "Best for", value: "Patios + drives" },
      { label: "Base", value: "Compacted prep" },
      { label: "Result", value: "Clean lines" }
    ],
    badgeTitle: "Layout and excavation",
    badgeText:
      "Confirm the footprint, remove existing material, and excavate to the proper depth for the finished use.",
    overviewTitle: "Built around the sequence that keeps the finish stable and clean.",
    overview: [
      "Interlocking is one of the most visible upgrades on a property, so the finish needs to look sharp and perform well through seasonal weather changes. HR Greenroots installs paver systems for patios, walkways, driveways, and poolside surfaces with proper excavation and a stable compacted base.",
      "We help clients choose patterns, borders, and tones that suit the home and surrounding landscaping instead of forcing a generic layout. The result is a surface that improves circulation, handles daily use, and lifts the overall curb appeal of the property."
    ],
    benefitsEyebrow: "Client Value",
    fitTitle: "What homeowners gain from well-planned interlocking & pavers.",
    benefits: [
      {
        title: "Base-built durability",
        text: "Strong excavation, aggregate prep, and compaction help the finished surface resist shifting and low spots."
      },
      {
        title: "Sharper circulation",
        text: "Walkways, patios, and driveway layouts are planned to improve how people move through the property."
      },
      {
        title: "Material match",
        text: "We choose styles, borders, and scale that fit the home instead of treating every project the same."
      }
    ],
    processEyebrow: "Execution Flow",
    processTitle: "Built around the sequence that keeps the finish stable and clean.",
    processIntro:
      "Interlocking is one of the most visible upgrades on a property, so the finish needs to look sharp and perform well through seasonal weather changes. HR Greenroots installs paver systems for patios, walkways, driveways, and poolside surfaces with proper excavation and a stable compacted base.",
    process: [
      {
        title: "Layout and excavation",
        text: "Confirm the footprint, remove existing material, and excavate to the proper depth for the finished use."
      },
      {
        title: "Base and setting bed",
        text: "Build the structural base, compact in lifts, and set grade so drainage and stability are handled first."
      },
      {
        title: "Install and finish",
        text: "Lay the pavers cleanly, secure the edge, compact the surface, and finish the joints for a locked-in look."
      }
    ]
  },
  {
    name: "Professional Fence Installation",
    shortName: "Fence Installation",
    slug: "professional-fence-installation",
    sourceUrl: `${sourceSite}/services/fence-installation`,
    seoTitle: "Professional Fence Installation in Toronto & the GTA",
    seoDescription:
      "Fence installation that improves privacy, security, and the finished look of the property.",
    headline: "Privacy, definition, and a cleaner perimeter for the whole yard.",
    lead: "Professional Fence Installation in Toronto & the GTA",
    summary:
      "We install fencing that improves privacy and security while also helping the property feel better finished and more organized.",
    heroImage: {
      src: "/images/fence-hero.jpg",
      alt: "Wood fence defining a landscaped backyard"
    },
    secondaryImage: {
      src: "/images/fence-detail.jpg",
      alt: "Wooden fence in a landscaped yard"
    },
    gallery: [
      {
        src: "/images/fence-hero.jpg",
        alt: "Straight fence line around a finished yard"
      },
      {
        src: "/images/fence-detail.jpg",
        alt: "Wood fence detail in a landscaped setting"
      },
      {
        src: "/images/fence-gallery.jpg",
        alt: "Garden pathway bordered by a wooden fence"
      }
    ],
    facts: [
      { label: "Best for", value: "Privacy + edge" },
      { label: "Material", value: "Custom fit" },
      { label: "Result", value: "Defined yard" }
    ],
    badgeTitle: "Confirm layout",
    badgeText:
      "Review the property line, openings, desired privacy level, and the most appropriate fence style.",
    overviewTitle: "Built around the sequence that keeps the finish stable and clean.",
    overview: [
      "Fence installation is not only about boundary lines. The right fence changes how a yard feels by adding privacy, improving security, and creating a more intentional edge around the space. HR Greenroots installs fence systems that work with the layout and style of the property rather than fighting against it.",
      "We help clients choose the right height, material, and configuration for the level of screening and appearance they want. The finished installation is meant to feel sturdy, tidy, and visually connected to the rest of the outdoor work on site."
    ],
    benefitsEyebrow: "Client Value",
    fitTitle: "What homeowners gain from well-planned fence installation.",
    benefits: [
      {
        title: "Stronger privacy control",
        text: "Fence height, layout, and spacing are chosen around the actual level of screening the property needs."
      },
      {
        title: "Cleaner property edges",
        text: "A well-installed fence helps the full yard feel more finished, framed, and visually organized."
      },
      {
        title: "Material-fit decisions",
        text: "We match the fence type to your priorities for durability, maintenance, budget, and look."
      }
    ],
    processEyebrow: "Execution Flow",
    processTitle: "Built around the sequence that keeps the finish stable and clean.",
    processIntro:
      "Fence installation is not only about boundary lines. The right fence changes how a yard feels by adding privacy, improving security, and creating a more intentional edge around the space. HR Greenroots installs fence systems that work with the layout and style of the property rather than fighting against it.",
    process: [
      {
        title: "Confirm layout",
        text: "Review the property line, openings, desired privacy level, and the most appropriate fence style."
      },
      {
        title: "Set and build",
        text: "Install the structural elements carefully so the fence line stays straight, stable, and consistent."
      },
      {
        title: "Refine the finish",
        text: "Tighten alignment, gates, transitions, and visual details so the final run reads cleanly across the yard."
      }
    ]
  },
  {
    name: "Professional Deck Design & Installation",
    shortName: "Deck Design",
    slug: "professional-deck-design-installation",
    sourceUrl: `${sourceSite}/services/deck-services`,
    seoTitle: "Professional Deck Design & Installation in Mississauga & the GTA",
    seoDescription:
      "Custom residential deck design and installation planned for durability, comfort, and everyday backyard use.",
    headline: "Outdoor decks that extend the house in a way that feels natural.",
    lead: "Professional Deck Design & Installation in Mississauga & the GTA",
    summary:
      "We design and build deck layouts that support lounging, dining, circulation, and long-term outdoor use without feeling tacked on.",
    heroImage: {
      src: "/images/deck-hero.jpg",
      alt: "Outdoor deck extending into a landscaped backyard"
    },
    secondaryImage: {
      src: "/images/deck-detail.jpg",
      alt: "Wooden backyard deck in a landscaped setting"
    },
    gallery: [
      {
        src: "/images/deck-hero.jpg",
        alt: "Finished deck connected to backyard landscaping"
      },
      {
        src: "/images/deck-detail.jpg",
        alt: "Wooden backyard deck detail"
      },
      {
        src: "/images/deck-gallery.jpg",
        alt: "Finished outdoor deck with seating area"
      }
    ],
    facts: [
      { label: "Best for", value: "Outdoor living" },
      { label: "Use", value: "Dining + lounge" },
      { label: "Build", value: "Custom layouts" }
    ],
    badgeTitle: "Better backyard flow",
    badgeText:
      "Deck placement and stairs are planned around how the yard connects to the home and surrounding landscape.",
    overviewTitle: "Professional Deck Design & Installation in Mississauga & the GTA",
    overview: [
      "A deck works best when it feels like part of the home instead of an add-on sitting in the yard. HR Greenroots plans deck projects around how clients want to relax, entertain, and move between the house, the lawn, and the rest of the landscape.",
      "We shape the layout, access points, and finish details to suit the property and the level of use the space will get. Whether the project is straightforward or more layered, the goal is a deck that feels comfortable, durable, and well integrated with the backyard around it."
    ],
    benefitsEyebrow: "Service Overview",
    fitTitle: "Professional Deck Design & Installation in Mississauga & the GTA",
    benefits: [
      {
        title: "Better backyard flow",
        text: "Deck placement and stairs are planned around how the yard connects to the home and surrounding landscape."
      },
      {
        title: "Built for real use",
        text: "We shape the deck around seating, dining, lounging, and access rather than only the footprint."
      },
      {
        title: "Cleaner integration",
        text: "The finished deck is designed to sit naturally with planting, paving, and the home architecture."
      }
    ],
    processEyebrow: "Project Flow",
    processTitle: "How deck services moves from idea to finished work.",
    processIntro:
      "We design and build deck layouts that support lounging, dining, circulation, and long-term outdoor use without feeling tacked on.",
    process: [
      {
        title: "Plan the footprint",
        text: "Review how the space will be used, where the deck should sit, and how it should connect back to the house."
      },
      {
        title: "Build the structure",
        text: "Construct the framing and platform with durability, safety, and clean alignment as the priority."
      },
      {
        title: "Finish the outdoor room",
        text: "Refine access, edges, and visual integration so the deck feels complete inside the larger backyard plan."
      }
    ]
  },
  {
    name: "Garden Suites",
    shortName: "Garden Suites",
    slug: "garden-suite",
    sourceUrl: `${sourceSite}/services/garden-suites`,
    seoTitle: "Garden Suite Design & Construction in Toronto & the GTA",
    seoDescription:
      "Garden suite design and construction support for backyard living, rental, guest, or office use.",
    headline: "Detached backyard suites planned as real extensions of the property.",
    lead: "Professional Garden Suite Design & Construction in Toronto & the GTA",
    summary:
      "We help shape garden suite projects so access, footprint, privacy, and surrounding landscape all work together from the start.",
    heroImage: {
      src: "/images/garden-suite-hero.jpg",
      alt: "Detached backyard garden suite framed by landscaping"
    },
    secondaryImage: {
      src: "/images/garden-suite-detail.jpg",
      alt: "Modern detached backyard shed-style structure"
    },
    gallery: [
      {
        src: "/images/garden-suite-hero.jpg",
        alt: "Garden suite planned as part of a backyard layout"
      },
      {
        src: "/images/garden-suite-detail.jpg",
        alt: "Modern detached backyard structure"
      },
      {
        src: "/images/garden-suite-gallery.jpg",
        alt: "Backyard garden suite with landscape context"
      }
    ],
    facts: [
      { label: "Best for", value: "Backyard suites" },
      { label: "Uses", value: "Guest or rental" },
      { label: "Focus", value: "Site fit" }
    ],
    badgeTitle: "Stronger site planning",
    badgeText:
      "Garden suites work better when access, privacy, and yard use are planned alongside the structure.",
    overviewTitle: "Professional Garden Suite Design & Construction in Toronto & the GTA",
    overview: [
      "Garden suites introduce a much larger program into the backyard, so they need more than a footprint on paper. HR Greenroots looks at how the structure will sit on the site, how it will be approached, and how the surrounding landscape needs to support privacy, usability, and visual balance.",
      "Whether the goal is extra family space, a guest suite, an office, or a rental opportunity, the suite should feel integrated into the property. The outdoor layout around it matters just as much as the structure itself if the finished result is going to work well."
    ],
    benefitsEyebrow: "Service Overview",
    fitTitle: "Professional Garden Suite Design & Construction in Toronto & the GTA",
    benefits: [
      {
        title: "Stronger site planning",
        text: "Garden suites work better when access, privacy, and yard use are planned alongside the structure."
      },
      {
        title: "Smarter backyard organization",
        text: "The suite, lawn, walkways, and supporting landscape can be arranged to feel balanced rather than crowded."
      },
      {
        title: "Better long-term usability",
        text: "Thoughtful placement helps the space function well for guests, family, tenants, or work use over time."
      }
    ],
    processEyebrow: "Project Flow",
    processTitle: "How garden suites moves from idea to finished work.",
    processIntro:
      "We help shape garden suite projects so access, footprint, privacy, and surrounding landscape all work together from the start.",
    process: [
      {
        title: "Plan the siting",
        text: "Review placement, circulation, visibility, and how the suite should relate to the primary home and yard."
      },
      {
        title: "Coordinate the footprint",
        text: "Shape the supporting outdoor areas so the structure has a practical and visually coherent setting."
      },
      {
        title: "Finish the surrounding landscape",
        text: "Refine access, transitions, and exterior context so the suite feels like part of the property plan."
      }
    ]
  }
];

export const serviceBySlug = new Map(services.map((service) => [service.slug, service]));
