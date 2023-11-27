import {
  html,
  css,
  javascript,
  typescript,
  tailwind,
  react,
  manager,
  developer,
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
