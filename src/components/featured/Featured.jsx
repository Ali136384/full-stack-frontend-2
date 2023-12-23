import React from "react";
import "./Featured.scss";
function Featured() {
  return (
    <>
      <div className="featured">
        <div className="container">
          <div className="left">
            <h1>
              Find the perfect <i>freelance</i> services for your buisiness
            </h1>
            <div className="search">
              <div className="searchInput">
                <img
                  src="https://raw.githubusercontent.com/safak/youtube23/fiverr-ui/public/img/search.png"
                  alt=""
                />
                <input type="text" placeholder='Try "building Mobile Apps "' />
              </div>
              <button>Search</button>
            </div>
            <div className="popular">
              <span>popular :</span>
              <button>Web Design</button>
              <button>Logo Design</button>
              <button>Wordpress</button>
              <button>AI services</button>
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
    </>
  );
}

export default Featured;
