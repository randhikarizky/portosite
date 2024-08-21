import GurilapIMG from "@/assets/img/portfolio/gurilap.png";
import RGBIMG from "@/assets/img/portfolio/ergb.png";
import LemtronIMG from "@/assets/img/portfolio/lemtron.png";
import ECOWater from "@/assets/img/portfolio/ecowater.png";

export const selfTitle = {
  full_name: "Randhika Rizkyaldi",
  position: "Experienced Front-End Developer",
  slogan: "I really love working using NextJS & MaterialUI.",
};

export const experience = [];

export const projects = [
  {
    title: "GURILAP Cianjur",
    date: "Dec 2023 - Now",
    description:
      "The GURILAP CIANJUR application is a groundbreaking platform designed to revolutionize the collection of toponymic data through dynamic crowdsourcing. This innovative approach actively engages the community to gather broad and insightful input on toponym names, fostering a collaborative effort to enrich geographical knowledge.",
    link: "https://gurilap.cianjurkab.go.id/",
    additionalLink: [
      {
        link: "https://play.google.com/store/apps/details?id=go.cianjur.gurilap",
        as: "Play Store",
      },
    ],
    stacks: ["NextJS", "TypeScript", "MaterialUI", "PHP", "Laravel"],
    image: GurilapIMG.src,
  },
  {
    title: "RGB - Rundown Gantangan Burung",
    date: "Oct 2023 - Feb 2024",
    description:
      "This project is a web application that functions for event ticket management. There are 2 sides to this application, namely client-side and administrator-side. I am in charge of developing both sides in the Front-End section. For the tech stack of this application, I use ReactJS and TypeScript. Also, I use MUI as the component library. For API matters, I use Axios and React-Query. This application is still being developed and is not yet available to the public.",
    link: "https://ergb.co.id/",
    additionalLink: [
      {
        link: "https://play.google.com/store/apps/details?id=com.asqi.ergb",
        as: "Play Store",
      },
    ],
    stacks: ["NextJS", "TypeScript", "MaterialUI", "Java"],
    image: RGBIMG.src,
  },
  {
    title: "ECO Water",
    date: "Dec 2021 - Jun 2022",
    description:
      "This is a project for the Government of Jakarta. I use React.JS, Redux, Axios, & Material UI Framework for this project, I build the app user-friendly so that it's easy to use and mobile-friendly using CSS Responsive Breakpoints. The project is an app that can monitor every government’s building in Jakarta’s water usage called ECO Water.",
    link: "",
    additionalLink: [],
    stacks: ["ReactJS", "JavaScript", "MaterialUI", "Java"],
    image: ECOWater.src,
  },
  {
    title: "LEMTRON - Lenmarc Training Online",
    date: "Jul 2019 - Sep 2019",
    description: "",
    link: "https://lemtron.id/",
    additionalLink: [],
    stacks: ["HTML", "JavaScript", "Bootstrap", "PHP", "Laravel"],
    image: LemtronIMG.src,
  },
];
