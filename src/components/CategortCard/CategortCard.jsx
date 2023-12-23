import React from "react";
import "./CategortCard.scss";
import { Link } from "react-router-dom";

function CategortCard({ item }) {
  return (
    <>
      <Link to="/gigs?cat=cinema">
        <div className="card">
          <img src={item.img} alt="" />
          <span className="desc">{item.desc}</span>
          <span className="title">{item.title}</span>
        </div>
      </Link>
    </>
  );
}

export default CategortCard;
