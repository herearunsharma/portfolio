import Image1 from "../../assets/img/portfolio/scanme.png"
import Image2 from "../../assets/img/portfolio/tictactoe.png"
import Image3 from "../../assets/img/portfolio/nepdesk.png"
import Image4 from "../../assets/img/portfolio/notepad.png"
import Image5 from "../../assets/img/portfolio/callrecord.png"
import Image6 from "../../assets/img/portfolio/ui1.png"
import Image7 from "../../assets/img/portfolio/inc42.png"
import Image8 from "../../assets/img/portfolio/resume-builder.png"


const PortfolioData = [
  {
    id: 3,
    type: "Web",
    image: Image3,
    tag: ["web"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Nepdesk",
        client: "Nepdesk",
        language: "Php, laravel",
        preview: "Nepdesk",
        link: "https://www.nepdesk.com/",
      },
    ],
  },
  {
    id: 7,
    type: "Web",
    image: Image7,
    tag: ["web"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Inc42 | News Site",
        client: "Personal",
        language: "Php, laravel",
        preview: "Inc42",
        link: "https://www.inc42.org/",
      },
    ],
  },
  {
    id: 1,
    type: "App",
    image: Image1,
    tag: ["apps"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Scan Me | Document Scanner App",
        client: "Nepdesk",
        language: "Java",
        preview: "Playstore",
        link: "https://play.google.com/store/apps/details?id=com.nepdesk.scanme",
      },
    ],
  },
  {
    id: 8,
    type: "Web",
    image: Image8,
    tag: ["web"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Resume Builder",
        client: "Personal",
        language: "Reactjs",
        preview: "Github - Vercel",
        link: "https://resume-builder-vert.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    type: "App",
    image: Image2,
    tag: ["apps"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Tic Tac Toe",
        client: "Personal",
        language: "Java",
        preview: "Playstore",
        link: "https://play.google.com/store/apps/details?id=com.techriderarun.tictactoegames",
      },
    ],
  },
  {
    id: 4,
    type: "App",
    image: Image4,
    tag: ["apps"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Notepad",
        client: "Personal",
        language: "Java",
        preview: "Playstore",
        link: "https://play.google.com/store/apps/details?id=com.techriderarun.notepad",
      },
    ],
  },
  {
    id: 5,
    type: "App",
    image: Image5,
    tag: ["apps"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Call Recording",
        client: "Personal",
        language: "Java",
        preview: "Playstore",
        link: "https://play.google.com/store/apps/details?id=com.techriderarun.autocallrecorder",
      },
    ],
  },
  {
    id: 6,
    type: "UI/UX",
    image: Image6,
    tag: ["uiux"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Personal Resume and Landing Page",
        client: "Vivek",
        language: "HTML, CSS, Javascript",
        preview: "Nepdesk",
        link: "https://www.nepdesk.com/projects/web/personal-resume",
      },
    ],
  },
];

export default PortfolioData;
