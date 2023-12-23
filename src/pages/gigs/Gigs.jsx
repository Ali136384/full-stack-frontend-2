import React, { useState } from "react";
import GigCard from "../../components/GigCard/GigCard";
import { gigs } from "../../CardData";
import "./Gigs.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function Gigs() {
  const [isopen, setOpen] = useState(false);
  const [valuefilter, setValuefilter] = useState("");

  const handelFilterValue = (e) => {
    const innerHtml = e.target.innerHTML;
    setValuefilter(innerHtml);
    setOpen(false);
  };
  return (
    <>
      <div className="gigs-page">
        <div className="container">
          <p className="tit">Logo Design </p>
          <p className="desc">
            Find a freelance Wordpress development expert to build your
            WordPress website
          </p>
          <div className="filters">
            <div className="filter">
              <span>Budget</span>
              <input type="text" placeholder="min" />
              <input type="text" placeholder="max" />
              <button>Apply</button>
            </div>
            <div className="drop-dow">
              <span>Sort by</span>{" "}
              <span className="sort-by">{valuefilter}</span>{" "}
              <FontAwesomeIcon
                onClick={() => setOpen(!isopen)}
                icon={faCaretDown}
              />
              <div className={isopen ? "menu menu-open" : "menu"}>
                <span onClick={handelFilterValue}>Newest</span>
                <span onClick={handelFilterValue}>Besst Selling</span>
              </div>
            </div>
          </div>
          <div className="gigs">
            {gigs.map((item) => {
              return (
                <>
                  <GigCard item={item}></GigCard>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gigs;
