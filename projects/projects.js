const Projects = [
  {
    name: "Rebook Clone",
    about: "A Web application Clone of Shop shoes, clothing and collections.",
    img: "./images/rebook.png",
    gitrepo: "https://github.com/sibtain189/Reebok_clone",
    // blog: "https://medium.com/@mohanpalleti/our-first-project-coschedule-5fa76fea2a3a",
    tech_stack: "HTML |CSS | JavaScript  ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://rebookclone.netlify.app/",
    project_type: "Team Project",
  },
  {
    name: "Clone of Faasos",
    about:
      "Enjoy tasty and hygienic food delivered safely to your doorstep. Eat good, eat exciting!.",
    img: "./images/faasos.png",
    gitrepo: "https://github.com/shihab-fw11-297/Back-End-Fassos-Project",
    // blog: "https://medium.com/@mohanpalleti/our-first-project-coschedule-5fa76fea2a3a",
    tech_stack: "HTML | CSS | JavaScript | NodeJS | MongooDB ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" width="45px" height="50px"/>`,
      `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
    ],
    project_link: "https://faasos7781.netlify.app/",
    project_type: "Team Project",
  },
  // {
  //   name: "Clone of Sony",
  //   about:
  //     "Sony website that sells All kinds of sony products like phones, TV's, Headphone etc.,",
  //   img: "./sony.png",
  //   gitrepo: "https://github.com/mohan-palleti/unit-3_project_Sony.co.in",
  //   blog: "https://medium.com/@mohanpalleti/our-group-project-connecting-frontend-and-backend-b159a686b3d0",
  //   tech_stack: "HTML | CSS | JAVASCRIPT",
  //   tech_stackicons: [
  //     `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
  //     `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
  //     `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
  //     `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
  //     `<img src="https://img.icons8.com/color/48/000000/redis.png"/>`,
  //   ],
  //   project_link: "https://sonyclone.netlify.app/index.html",
  //   project_type: "Team Project",
  // },
  {
    name: "Mini Restaurant",
    about:
      "This is a mini-app which shows Food of all type and every food item sort by ratings. and this app built with HTML , CSS , JS ReactJs.",
    img: "./images/resto.png",
    gitrepo: "https://github.com/dnyaneshwarwagh0072/Cinematic",
    blog: "",
    tech_stack: "HTML | CSS | JAVASCRIPT | React",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/react-native.png" width="48px"/>`,
    ],
    project_link: "https://cinematical.netlify.app/",
    project_type: "Individual Project",
  },
];

let projects__container = document.getElementById("projects--container");

Projects.forEach((pro) => {
  let main = document.createElement("div");
  main.setAttribute("class", "portfolio-item padd-15");
  main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="photo" class="pro-i">
      <div class="project-desc"> <h1 class="project-name"><b>${
        pro.name
      }</b></h1> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <button> <a href=${
        pro.project_link
      } target="_blank" class="see-project">LIVE</a></button>
      <button> <a href=${
        pro.gitrepo
      } target="_blank" class="github-repo">GitHub💻</a> </button>
      
     
      </div>
    
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span >${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ""}
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ""}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ""}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ""}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ""}
      </span> </div>
     
      
    </div>
  </div>
    `;
  projects__container.append(main);
});
