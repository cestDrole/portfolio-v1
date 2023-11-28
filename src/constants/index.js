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
  { href: "#contact-me", label: "Contact Me" },
];

export const techStack = [
  {
    imgURL: html,
    name: "HTML",
  },
  {
    imgURL: css,
    name: "CSS",
  },
  {
    imgURL: javascript,
    name: "Javascript",
  },
  {
    imgURL: react,
    name: "React JS",
    styles: "bg-slate-700 py-1 px-1",
  },
  {
    imgURL: tailwind,
    name: "Tailwind",
    styles: "bg-slate-700 py-1 px-1",
  },
  {
    imgURL: typescript,
    name: "Typescript",
  },
];

export const aboutMe = [
  {
    imgURL: developer,
    title: "Front-End Developer",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus eget ipsum non tempor. Aliquam lobortis elit sed sem tincidunt, et eleifend lacus vestibulum. Sed bibendum, odio at venenatis egestas, lacus orci facilisis dolor, a rhoncus sapien quam eget dui. Nulla nec semper felis, et lobortis eros. Suspendisse sodales velit ac sem placerat malesuada.",
  },
  {
    imgURL: manager,
    title: "Experienced Designer/Manager",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus eget ipsum non tempor. Aliquam lobortis elit sed sem tincidunt, et eleifend lacus vestibulum. Sed bibendum, odio at venenatis egestas, lacus orci facilisis dolor, a rhoncus sapien quam eget dui. Nulla nec semper felis, et lobortis eros. Suspendisse sodales velit ac sem placerat malesuada.",
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
  },
  {
    name: "Metaverse Madness",
    description:
      "Landing page for the Virtual Reality Startup with animated transistions using Framer Motion library",
    tech: ["React", "Tailwind", "Framer Motion"],
    imgURL: metaverse,
    githubUrl: "https://github.com/cestDrole/metaversus-nextjs",
    demoUrl: "https://metaversus-madnesss.netlify.app/",
  },
  {
    name: "HooBank",
    description:
      "Landing page for the next generation Finance Startup with resposive design using tailwindcss",
    tech: ["React", "Tailwind"],
    imgURL: hoobank,
    githubUrl: "https://github.com/cestDrole/bank_tailwind",
    demoUrl: "https://bank-hoo-bank.netlify.app/",
  },
  {
    name: "Shoes Store",
    description:
      "Landing page for the Nike shoes store with responsive design using tailwindcss",
    tech: ["React", "Tailwind"],
    imgURL: shoes,
    githubUrl: "https://github.com/cestDrole/tailwind-shoes",
    demoUrl: "https://shoes-with-goose.netlify.app/",
  },
];
