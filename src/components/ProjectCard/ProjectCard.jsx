import React from "react";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";

function CategortCard({ item }) {
  return (
    <>
      <Link className="link" to="/gigs?cat=cinema">
        <div className="cardProject">
          <img src={item.img} alt="" />
          <div className="info">
            <img src={item.pp} alt="" />
            <div className="texts">
              <h2>{item.cat}</h2>
              <span>{item.username}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CategortCard;
