export type ExperienceItem = {
  id: string;
  period: string;
  company: string;
  location: string;
  role: string;
  stack: string[];
  summary: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "lottoland",
    period: "June 2025 - Present",
    company: "Lottoland",
    location: "Remote",
    role: "Senior Frontend Software Engineer",
    stack: ["JavaScript", "Karma", "Sass"],
    summary: [
      "Contributed as part of a frontend engineering team maintaining and evolving a large-scale, multi-application platform.",
      "Updated shared brand assets across numerous applications to ensure visual consistency.",
      "Diagnosed and resolved production incidents to maintain platform stability.",
      "Contributed to dependency and package upgrades across multiple projects to reduce technical debt and improve build reliability.",
      "Gained experience working within a complex monorepo and service-oriented frontend architecture.",
    ],
  },
  {
    id: "amiqus",
    period: "Oct 2024 - Mar 2025",
    company: "Amiqus",
    location: "Remote",
    role: "Senior Frontend Software Engineer",
    stack: ["JavaScript", "Vue", "Twig", "Jest"],
    summary: [
      "Contributed to the development of a digital identity verification platform, building scalable and reusable Vue components.",
      "Maintained robust Jest test coverage to support stable, reliable releases.",
      "Participated actively in code reviews, helping uphold team standards for code quality, consistency, and maintainability.",
      "Worked in a regulated, security-conscious product environment.",
      "Mapped product data flows to improve onboarding and team understanding.",
      "Helped shape a scalable design system and introduced workflow improvements that streamlined ticket handling and boosted delivery speed.",
    ],
  },
  {
    id: "gamma",
    period: "Jul 2021 - Jan 2024",
    company: "Gamma",
    location: "Remote",
    role: "Senior Software Engineer",
    stack: [
      "JavaScript",
      "React",
      "TypeScript",
      "Redux",
      "Electron",
      "REST API",
      "Jest",
      "CI/CD",
    ],
    summary: [
      "Contributed to the re-platforming of a communications product into a cross-platform Electron application for Windows and macOS.",
      "Delivered core features including video calling, chat, screen sharing, and Outlook integration.",
      "Improved performance, accessibility, and overall user experience across platforms.",
      "Supported junior developers, CI/CD pipelines, automated testing, and the migration to TypeScript.",
      "Helped improve code maintainability and development velocity.",
    ],
  },
  {
    id: "in-the-style",
    period: "Oct 2019 - Jul 2021",
    company: "In The Style",
    location: "Manchester",
    role: "Frontend Developer / UI Designer",
    stack: [
      "JavaScript",
      "React",
      "CSS",
      "Next.js",
      "Figma",
      "React Native",
      "Magento",
    ],
    summary: [
      "Designed and developed user interfaces for the core website and mobile app using Figma, React, and Next.js.",
      "Focused on maintaining brand consistency and enhancing usability across devices.",
      "Led the adoption of a design system to streamline UI development.",
      "Helped increase efficiency and speed up feature delivery.",
      "Improved the user experience and customer satisfaction across digital products.",
    ],
  },
  {
    id: "sofology",
    period: "Jun 2015 - Oct 2019",
    company: "Sofology",
    location: "Golborne",
    role: "Frontend Developer",
    stack: ["JavaScript", "React", "CSS", "Umbraco"],
    summary: [
      "Developed React components for marketing and product pages, creating a smooth and engaging user experience.",
      "Led frontend standards by implementing a utility-first CSS approach.",
      "Created a scalable and maintainable frontend codebase.",
      "Mentored junior developers and supported their growth.",
      "Built a sofa product configurator that enabled customers to personalise their selections.",
      "Created a dynamic marketing banner system, giving the content team greater flexibility across the site.",
    ],
  },
];
