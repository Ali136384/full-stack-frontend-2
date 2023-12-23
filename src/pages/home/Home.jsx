import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import Trusted from "../../components/trustedBy/Trusted";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../CardData";
import CategortCard from "../../components/CategortCard/CategortCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.scss";
import { useTranslation } from "react-i18next";
function Home() {
  // const [pices, setPices] = useState(1);

  // const calcWidth = () => {
  //   if (window.innerWidth > 767) {
  //     setPices(4);
  //   }
  // };

  // useEffect(() => {
  //   calcWidth();
  // }, []);

  const { t } = useTranslation();

  return (
    <>
      <Featured></Featured>
      <Trusted></Trusted>
      <Slide arrowsScroll={3} slidesToShow={4} dots={true}>
        {cards.map((item) => {
          return (
            <>
              <CategortCard key={item.id} item={item}></CategortCard>
            </>
          );
        })}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="left">
            <h1>
              A whole world of <i>freelance</i> talent at your fingertips
            </h1>
            <div className="icon-text-parent">
              <div className="icon-text">
                <div className="to">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span>The best for every budget</span>
                </div>
                <p>
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
                  ipsum dolor sit amet
                </p>
              </div>{" "}
            </div>
            <div className="icon-text-parent">
              <div className="icon-text">
                <div className="to">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span>The best for every budget</span>
                </div>
                <p>
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
                  ipsum dolor sit amet
                </p>
              </div>{" "}
            </div>
            <div className="icon-text-parent">
              <div className="icon-text">
                <div className="to">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span>The best for every budget</span>
                </div>
                <p>
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
                  ipsum dolor sit amet
                </p>
              </div>{" "}
            </div>
            <div className="icon-text-parent">
              <div className="icon-text">
                <div className="to">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span>The best for every budget</span>
                </div>
                <p>
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
                  ipsum dolor sit amet
                </p>
              </div>{" "}
            </div>
          </div>
          <div className="right">
            <img
              src="https://raw.githubusercontent.com/safak/youtube23/fiverr-ui/public/img/man.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Slide arrowsScroll={3} slidesToShow={4} dots={true}>
        {projects.map((item) => {
          return (
            <>
              <ProjectCard key={item.id} item={item}></ProjectCard>
            </>
          );
        })}
      </Slide>
    </>
  );
}

export default Home;
