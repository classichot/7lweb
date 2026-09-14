export const CONTACT_EMAIL = "contact@7l-advisory.com";
export const MAILTO = `mailto:${CONTACT_EMAIL}`;

export const platforms = [
  {
    slug: "pit24",
    name: "PIT24",
    index: "01",
    accent: "#e10600",
    onAccent: "#f4f5f8",
    short: "Personal income tax",
    menu: "Personal income tax platform",
    tagline: "Personal income tax, simplified.",
    blurb:
      "An intelligent personal income tax platform that streamlines data collection, tax calculations, document management and filing workflows.",
    figure: "Income documents and a payslip on a desk",
    image: "/platforms/pit24.jpg",
    bullets: [
      "AI-assisted document extraction",
      "Automated tax calculations",
      "Filing workflow management",
      "Compliance checks",
      "Secure taxpayer records",
    ],
  },
  {
    slug: "cit24",
    name: "CIT24",
    index: "02",
    accent: "#ff2a1f",
    onAccent: "#f4f5f8",
    short: "Thai corporate tax",
    menu: "Thai corporate tax operating system",
    tagline: "A corporate tax operating system, not a form generator.",
    blurb:
      "An AI-assisted Thai corporate tax platform that turns trial balance, general ledger and supporting documents into a provision, a PND51, a PND50 and a defensible evidence trail.",
    figure: "A bound ledger and trial-balance printout",
    image: "/platforms/cit24.jpg",
    bullets: [
      "Trial balance and GL ingestion",
      "Section 65 ter rule library",
      "Versioned tax adjustment ledger",
      "Provision, PND51 and PND50",
      "Append-only audit trail",
    ],
  },
  {
    slug: "risk24",
    name: "RISK24",
    index: "03",
    accent: "#ff6b1a",
    onAccent: "#070b16",
    short: "Risk, tax & deal",
    menu: "Risk, tax & deal intelligence",
    tagline: "One data room. Four kinds of review.",
    blurb:
      "A modular platform for forensic, tax and transaction review. Upload the financial and tax data once, then examine it through a fraud, tax-exposure, due-diligence or earnings-quality lens.",
    figure: "Invoice stack and warehouse racking under inspection",
    image: "/platforms/risk24.jpg",
    bullets: [
      "Forensic — fraud and leakage detection",
      "Tax Review — continuous exposure testing",
      "Tax DD — historical liability, priced",
      "Financial DD — earnings quality and net debt",
      "Deal Room — requests, evidence, reports",
    ],
  },
  {
    slug: "tp24",
    name: "TP24",
    index: "04",
    accent: "#ffcc00",
    onAccent: "#070b16",
    short: "Transfer pricing",
    menu: "Transfer pricing intelligence",
    tagline: "Transfer pricing intelligence beyond documentation.",
    blurb:
      "A technology-enabled transfer pricing platform that helps businesses manage related-party transactions, arm's-length analysis, compliance documentation and audit readiness.",
    figure: "Container port gantry — intercompany goods",
    image: "/platforms/tp24.jpg",
    bullets: [
      "Related-party transaction mapping",
      "Functional and risk analysis",
      "Method selection and benchmarking",
      "Local file and document generation",
      "Audit trail and compliance management",
    ],
  },
  {
    slug: "gmt24",
    name: "GMT24",
    index: "05",
    accent: "#e10600",
    onAccent: "#f4f5f8",
    short: "Global minimum tax",
    menu: "Global minimum tax / Pillar Two",
    tagline: "Global minimum tax intelligence for the Pillar Two era.",
    blurb:
      "An enterprise platform for managing OECD Pillar Two and global minimum tax calculations, data requirements, compliance and strategic impact.",
    figure: "Financial-district skyline at dusk",
    image: "/platforms/gmt24.jpg",
    bullets: [
      "GloBE scope, income and covered tax",
      "Jurisdictional effective tax rate",
      "Safe harbour testing and SBIE",
      "QDMTT, IIR and UTPR allocation",
      "GIR support, scenarios and audit trails",
    ],
  },
  {
    slug: "law24",
    name: "LAW24",
    index: "06",
    accent: "#ff2a1f",
    onAccent: "#f4f5f8",
    short: "Legal intelligence",
    menu: "Legal operations & intelligence",
    tagline: "Legal work as a system, not a filing cabinet.",
    blurb:
      "A legal intelligence platform that turns contracts, corporate records and due-diligence materials into a controlled operating system — obligations, deadlines and opinions attached to the documents they came from.",
    figure: "A statute volume, signed contract and minute books on a desk",
    image: "/platforms/law24.jpg",
    bullets: [
      "Contract ingestion and clause extraction",
      "Obligation and deadline register",
      "Corporate records and legal calendar",
      "Legal due diligence in the deal room",
      "Versioned opinions a lawyer can sign",
    ],
  },
  {
    slug: "cfo24",
    name: "CFO24",
    index: "07",
    accent: "#ff6b1a",
    onAccent: "#070b16",
    short: "CFO operating system",
    menu: "Close, cash and board intelligence",
    tagline: "The close, the cash and the board pack from one model.",
    blurb:
      "A finance operating system for the monthly close, cash and working capital, forecast versus actual, and the board pack — with the tax provision from CIT24 sitting on the same numbers the CFO signs.",
    figure: "A cash-flow worksheet and board-pack printout on a desk",
    image: "/platforms/cfo24.jpg",
    bullets: [
      "Controlled monthly close",
      "Cash and working-capital view",
      "Forecast versus actual",
      "Board pack from the same model",
      "Tax provision handshake with CIT24",
    ],
  },
  {
    slug: "trade24",
    name: "TRADE24",
    index: "08",
    accent: "#ffcc00",
    onAccent: "#070b16",
    short: "Trade & customs",
    menu: "Customs, origin and landed cost",
    tagline: "Customs, origin and landed cost as a controlled system.",
    blurb:
      "A trade-compliance platform that turns shipments, classifications, origin claims and broker packs into a defensible record — so duty is calculated, FTA preference is evidenced, and a customs question is answered from the file.",
    figure: "A bill of lading, origin certificate and cargo seal on a desk",
    image: "/platforms/trade24.jpg",
    bullets: [
      "Tariff classification with evidence",
      "Origin and FTA preference",
      "Landed cost and duty accrual",
      "Broker pack and filing trail",
      "Shared flows with TP24 and LAW24",
    ],
  },
] as const;

export type PlatformSlug = (typeof platforms)[number]["slug"];

export function platformBySlug(slug: string) {
  return platforms.find((p) => p.slug === slug);
}
