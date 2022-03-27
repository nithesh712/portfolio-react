import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Portfolio item title",
      github: "https://github.com/nithesh712",
      demo: "https://github.com/nithesh712",
    },
    {
      id: 2,
      image: IMG2,
      title: "Portfolio item title",
      github: "https://github.com/nithesh712",
      demo: "https://github.com/nithesh712",
    },
    {
      id: 3,
      image: IMG3,
      title: "Portfolio item title",
      github: "https://github.com/nithesh712",
      demo: "https://github.com/nithesh712",
    },
    {
      id: 4,
      image: IMG4,
      title: "Portfolio item title",
      github: "https://github.com/nithesh712",
      demo: "https://github.com/nithesh712",
    },
    {
      id: 5,
      image: IMG5,
      title: "Portfolio item title",
      github: "https://github.com/nithesh712",
      demo: "https://github.com/nithesh712",
    },
    {
      id: 6,
      image: IMG6,
      title: "Portfolio item title",
      github: "https://github.com/nithesh712",
      demo: "https://github.com/nithesh712",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => {
          return (
            <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt="" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.github} className="btn">
                Github
              </a>
              <a href={item.demo} target="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
