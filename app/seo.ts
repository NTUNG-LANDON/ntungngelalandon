export const site = {
  url: "https://ntungngelalandon.com",
  name: "Ntung Ngela Landon",
  shortName: "NNL",
  title: "Ntung Ngela Landon — AI/ML Security Researcher",
  description:
    "Ntung Ngela Landon researches AI/ML security at Carnegie Mellon University, focusing on biometric security, fairness, robustness, and trustworthy evaluation.",
  socialDescription:
    "Research in AI/ML security, biometric security, fairness, robustness, malware analysis, and trustworthy evaluation.",
  email: "nngelala@andrew.cmu.edu",
  image: "/Landon.jpg",
  github: "https://github.com/NTUNG-LANDON",
  linkedin: "https://www.linkedin.com/in/ntung-landon",
} as const;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      alternateName: [site.shortName, "ntungngelalandon.com"],
      description: site.description,
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile-page`,
      url: `${site.url}/`,
      name: `${site.name} — Research Profile`,
      description: site.description,
      inLanguage: "en",
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": `${site.url}/#person` },
      dateModified: "2026-08-30",
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: `${site.url}/`,
      image: `${site.url}${site.image}`,
      email: `mailto:${site.email}`,
      jobTitle: "Research Associate",
      description: site.description,
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Carnegie Mellon University",
        url: "https://www.cmu.edu/",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Carnegie Mellon University",
          url: "https://www.cmu.edu/",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "University of Buea",
          url: "https://www.ubuea.cm/",
        },
      ],
      knowsAbout: [
        "AI security",
        "Machine learning security",
        "Biometric security",
        "Face presentation attack detection",
        "Algorithmic fairness",
        "Model robustness",
        "Malware analysis",
        "Trustworthy AI evaluation",
      ],
      sameAs: [site.github, site.linkedin],
    },
  ],
} as const;
