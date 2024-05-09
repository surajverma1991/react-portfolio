import React from "react";
import firstPortfolio from "../assets/portfolio/resturant-html.png";
import resturant from "../assets/portfolio/resturant-react.png";
import javascriptExit from "../assets/portfolio/exit-pop.png";
import weatherReact from "../assets/portfolio/weather-react.png"
import todoList from "../assets/portfolio/todo-list.png";
import dashBoard from "../assets/portfolio/dashboard.png"


// lang. icon
import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import javascriptImage from "../assets/javascript.png";
import reactImage from "../assets/react.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: "HTML/CSS/JavaScript - Projects",
      portfolioList: [
        {
          id: 1,
          src: firstPortfolio,
          demoLink:
            "https://surajverma1991.github.io/website-for-restaurants-bootstrap/",
          codeLink:
            "https://github.com/surajverma1991/website-for-restaurants-bootstrap",
          lang: {
            htmlData: htmlImage,
            cssData: cssImage,
          },
        },
        {
          id: 2,
          src: javascriptExit,
          demoLink:
            "https://surajverma1991.github.io/exit-popup-app-javascript/",
          codeLink:
            "https://github.com/surajverma1991/exit-popup-app-javascript",
          lang: {
            javascriptData: javascriptImage,
          },
        }
      ],
    },
    {
      id: 2,
      title: "React - Projects",
      portfolioList: [
        {
          id: 1,
          src: weatherReact,
          demoLink:
            "https://weather-infom-reactjs.netlify.app/",
          codeLink:
            "https://github.com/surajverma1991/TodoList-React",
          lang: {
            reactData: reactImage,
          },
        },
        {
          id: 2,
          src: todoList,
          demoLink:
            "https://todolists-reactjs.netlify.app/",
          codeLink:
            "https://github.com/surajverma1991/weather-react-project",
          lang: {
            reactData: reactImage,
          },
        },
        {
          id: 3,
          src: resturant,
          demoLink: "https://restaurant-sites-reactjs.netlify.app/",
          codeLink: "https://github.com/surajverma1991/restaurant-react/",
          lang: {
            reactData: reactImage,
          },
        },
        {
          id: 4,
          src: dashBoard,
          demoLink: "https://dashboard-admin-panel-react.netlify.app/",
          codeLink: "https://github.com/surajverma1991/react-responsive-admin-dashboard-panel/",
          lang: {
            reactData: reactImage,
          },
        },
      ],
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="w-full h-full max-w-screen-lg mx-auto p-4 flex flex-col justify-center pt-28">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="pt-6">Check out some of my work right here</p>
        </div>

        {portfolio.map(({ id, title, portfolioList }) => (
          <div key={id} className="mb-10">
            <h1 className="py-7 font-bold text-2xl">{title}</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolioList.map(({ id, src, demoLink, codeLink, lang }) => (
                <div
                  key={id}
                  className="shadow-md shadow-gray-600 rounded-lg relative"
                >
                  <div className="absolute top-2 right-2 z-10 w-4 h-4 flex gap-1 flex-row-reverse">
                    {Object.entries(lang).map(([id, dataImage]) => (
                      <img
                        key={id}
                        src={dataImage}
                        alt={`${id} Icon`}
                        className="w-4 h-4"
                      />
                    ))}
                  </div>
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <a
                      href={demoLink}
                      target="_blank" rel="noreferrer"
                      className="w-1/2 px-6 py-3 duration-200 hover:scale-105"
                    >
                      Demo
                    </a>
                    <a
                      href={codeLink}
                      target="_blank" rel="noreferrer"
                      className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-right"
                    >
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
