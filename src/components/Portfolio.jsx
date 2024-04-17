import React from "react";
import firstPortfolio from "../assets/portfolio/firstPortfolio.png";
import resturant from "../assets/portfolio/resturant.jpg";
import javascriptExit from "../assets/portfolio/exit-pop.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: resturant,
      demoLink: "https://surajverma1991.github.io/restaurant-react/",
      codeLink: "https://github.com/surajverma1991/restaurant-react/",
    },
    {
      id: 2,
      src: firstPortfolio,
      demoLink:
        "https://surajverma1991.github.io/personal-portfolio-latest-2023/",
      codeLink:
        "https://github.com/surajverma1991/personal-portfolio-latest-2023",
    },
    {
      id: 3,
      src: javascriptExit,
      demoLink: "https://surajverma1991.github.io/exit-popup-app-javascript/",
      codeLink: "https://github.com/surajverma1991/exit-popup-app-javascript",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="w-full h-full max-w-screen-lg mx-auto p-4 flex flex-col justify-center pt-28">
        <div className=" pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="blank"
                  className="w-1/2 px-6 py-3 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="blank"
                  className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-right"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
