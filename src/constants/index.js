import {
  backend,
  web,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  blogApp,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero Page",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const projects = [
  {
    name: "Blog App",
    description:
      "A web-based platform for creating, editing, and managing blog posts, featuring user authentication and a responsive interface for seamless content management.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressJs",
        color: "pink-text-gradient",
      },
    ],
    image: blogApp,
    source_code_link: "https://github.com/HPx-Chandan/My-Blog-app.git",
  },
];

export { services, technologies, projects };
