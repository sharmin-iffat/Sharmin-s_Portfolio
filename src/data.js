// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";

import numpyLogo from "./assets/tech_logo/numpy.png";
import pandasLogo from "./assets/tech_logo/pandas.png";
import matplotlibLogo from "./assets/tech_logo/matplotlib.png";
import seabornLogo from "./assets/tech_logo/seaborn.png";
import scikitLogo from "./assets/tech_logo/sklearn.png";

import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import jupyternootbookLogo from "./assets/tech_logo/jupyterNotebook.png";
import googlecolabLogo from "./assets/tech_logo/colb.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import edunetLogo from './assets/Experience/edunet-foundation.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import sbuLogo from "./assets/Education_logo/sbu.png";
import loyolaLogo from "./assets/Education_logo/loyola.png";
import mpsLogo from "./assets/Education_logo/mps.png";

// Project Section Logo's
import codeCrafter from "./assets/Work_image/codeCrafter.png";
import EpicEscape from "./assets/Work_image/EpicEscape.jpg";
import notesapp from "./assets/Work_image/NotesApp.png";
import netflix from "./assets/Work_image/Netflix.png";
import housePrice from "./assets/Work_image/HousePricePrediction.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
 
  {
    title: "Artificial Intelligence & Machine Learning",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "NumPy", logo: numpyLogo },
      { name: "Pandas", logo: pandasLogo },
      { name: "Matplotlib", logo: matplotlibLogo },
      { name: "Seaborn", logo: seabornLogo },
      { name: "Scikit-learn", logo: scikitLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Jupyter Notebook", logo: jupyternootbookLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Google Colab", logo: googlecolabLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: edunetLogo,
    role: "Artificial Intelligence Intern",
    company: "Edunet Foundation",
    date: "May 2025 - June 2025",
    desc: "During this internship, I developed an AI assistant aimed at improving user interaction and automating repetitive tasks. I worked extensively with Python and its core libraries, including NumPy, Pandas, and scikit-learn, to implement machine learning logic and handle data processing. I also integrated basic natural language processing using libraries like NLTK and spaCy to enable smarter user communication.",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: sbuLogo,
    school: "Sarala Birla University, Ranchi",
    date: "Aug 2022 - Expected(May 2026)",
    grade: "8.12 CGPA(upto 6th sem)",
    desc: "I pursuing  Bachelor of Technology in Computer Science and Engineering from Sarala Birla University,Ranchi. Throughout my studies, A comprehensive four-year program combining foundational computer science education with advanced coursework in AI and ML. Developed expertise in programming, algorithms, neural networks, and deep learning, while exploring real-world applications of intelligent systems. Alongside academic training, I built practical experience in full-stack web development with the MERN stack (MongoDB, Express.js, React, Node.js)—strengthening my skills in both intelligent computing and scalable software development.",
    degree:
      "Bachelor of Technology in Computer Science and Engineering (Specialization in Artificial Intelligence & Machine Learning)",
  },
  {
    id: 1,
    img: loyolaLogo,
    school: "Loyola Convent School, Ranchi",
    date: "Apr 2018 - March 2020",
    grade: "75.4%",
    desc: "I completed Higher Secondary education from Loyola Convent School, Ranchi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "Higher Secondary Education - PCM ",
  },
  {
    id: 2,
    img: mpsLogo,
    school: "Munam Public School, Hazaribagh, Jharkhand",
    date: "Apr 2017 - March 2018",
    grade: "71.2%",
    desc: "I completed Secondary education from Munam Public School, Hazaribagh, under the CBSE board, where I studied Science with Computer.",
    degree: "Secondary Education, Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Code Crafter",
    description:
      "Code Crafter is a smart code review assistant that analyzes your codebase, identifies potential improvements, and suggests enhancements using the Gemini API. Built with React.js, Node.js, and styled with CSS, this tool helps developers write cleaner, more efficient code by offering intelligent, real-time feedback right in their development workflow.",

    image: codeCrafter,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "API",
      "Node.js",
      "Express",
    ],
    github:
      "https://github.com/sharmin-iffat/CodeCrafter-A-Code-Reviewer-Website",
    // webapp:
  },
  {
    id: 1,
    title: "Epic Escape",
    description:
      "Epic Escape is a visually rich, responsive travel website designed to inspire wanderlust and streamline trip planning. Built using HTML, CSS, JavaScript, and PHP, it features dynamic destination showcases, real-time booking interactions, and an adaptive layout that delivers seamless user experiences across devices.",
    image: EpicEscape,
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/sharmin-iffat/Epic-Escape-A-Travel-Website",
    // webapp:
  },
  {
    id: 2,
    title: "Notes App",
    description:
      "Simple Notes lets you create, search, edit, and delete notes with ease. Just add a title and content, then quickly find notes by searching titles. Edit anytime or remove what you no longer need—simple and efficient.",
    image: notesapp,
    tags: ["React JS", "ReactDOM"],
    github: "https://github.com/sharmin-iffat/Notes-App",
    // webapp:
  },
  {
    id: 3,
    title: "Netflix Data Analysis",
    description:
      "The Netflix Data Analysis Project examines patterns in titles, genres, and release trends to uncover viewer insights using Python and data visualization tools. It showcases skills in data cleaning, exploratory analysis, and storytelling through visuals.",
    image: netflix,
    tags: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],
    github: "https://github.com/sharmin-iffat/NetflixDataAnalysis",
    // webapp:
  },
  {
    id: 4,
    title: "House Price Prediction",
    description:
      "This project uses the California Housing dataset and XGBRegressor to predict house prices based on features like location, income, and population. It highlights skills in data preprocessing, model building, and evaluation.",
    image: housePrice,
    tags: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Jupyter Notebook",
    ],
    github: "https://github.com/sharmin-iffat/House-Price-Prediction",
  },
];
