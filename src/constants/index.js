import {
  html,
  css,
  javascript,
  typescript,
  tailwind,
  react,
  manager,
  developer,
  shoes,
  hoobank,
  metaverse,
  carRent,
} from "../assets";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-me", label: "About me" },
  { href: "#projects", label: "Projects" },
  { href: "#contact-me", label: "Contact" },
];

export const techStack = [
  {
    imgURL: html,
    name: "HTML",
    styles: "sm:order-1",
  },
  {
    imgURL: css,
    name: "CSS",
    styles: "sm:order-2",
  },
  {
    imgURL: javascript,
    name: "Javascript",
    styles: "sm:order-3",
  },
  {
    imgURL: react,
    name: "React JS",
    styles: "bg-slate-700 py-1 px-1 sm:order-5",
  },
  {
    imgURL: tailwind,
    name: "Tailwind",
    styles: "bg-slate-700 py-1 px-1 sm:order-6",
  },
  {
    imgURL: typescript,
    name: "Typescript",
    styles: "sm:order-4",
  },
];

export const aboutMe = [
  {
    imgURL: developer,
    title: "Front-End Developer",
    subtext:
      "Rooted in commercial retail space design, I aspire to develop user interfaces that harmoniously integrate merchandising with an exceptional user experience. My approach incorporates responsive web design principles and accessibility standards, ensuring a seamless and engaging online experience.",
  },
  {
    imgURL: manager,
    title: "Experienced Designer/Manager",
    subtext: `Over 5 years in commercial retail space design and management, I apply industry best practices to maximize sales potential without compromising client experience. Proven track record in delivering strategic implementations for increased revenue and customer satisfaction.`,
  },
];

export const projectList = [
  {
    name: "Car Rent Hub",
    description:
      "Car rental service featuring extensive car catalog working with Car Database and Image APIs",
    tech: ["React", "Next.js", "Typescript", "Tailwind"],
    imgURL: carRent,
    githubUrl: "https://github.com/cestDrole/cars-nextjs",
    demoUrl: "https://car-rentalhub.netlify.app/",
    cardStyles: "md:flex-row",
    transition: "hover:-translate-y-[50%]",
  },
  {
    name: "Metaverse Madness",
    description:
      "Landing page for the Virtual Reality Startup with animated transistions using Framer Motion library",
    tech: ["React", "Tailwind", "Framer Motion"],
    imgURL: metaverse,
    githubUrl: "https://github.com/cestDrole/metaversus-nextjs",
    demoUrl: "https://metaversus-madnesss.netlify.app/",
    cardStyles: "md:flex-row-reverse",
    transition: "hover:-translate-y-[77%]",
  },
  {
    name: "HooBank",
    description:
      "Landing page for the next generation Finance Startup with resposive design using tailwindcss",
    tech: ["React", "Tailwind"],
    imgURL: hoobank,
    githubUrl: "https://github.com/cestDrole/bank_tailwind",
    demoUrl: "https://bank-hoo-bank.netlify.app/",
    cardStyles: "md:flex-row",
    transition: "hover:-translate-y-[63%]",
  },
  {
    name: "Shoes Store",
    description:
      "Landing page for the Nike shoes store with responsive design using tailwindcss",
    tech: ["React", "Tailwind"],
    imgURL: shoes,
    githubUrl: "https://github.com/cestDrole/tailwind-shoes",
    demoUrl: "https://shoes-with-goose.netlify.app/",
    cardStyles: "md:flex-row-reverse",
    transition: "hover:-translate-y-[70%]",
  },
];
