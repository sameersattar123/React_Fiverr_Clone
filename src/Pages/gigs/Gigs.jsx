import React from "react";
import GigCard from "../../Components/GigCard/GigCard";
import { gigs } from "../../data";
import "./Gigs.scss";
import down from "../../assets/down.png";
import { useState } from "react";
import "../../App.scss"

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };
  return (
    <>
      <div className="gigs">
        <div className="container">
          <span className="breadcrumbs">fiverr  Graphics & Design</span>
          <h1>AI Artists</h1>
          <p>
            Explore the boundaries of art and technology with Liverr's AI
            artists
          </p>
          <div className="menu">
            <div className="left">
              <span>Budget</span>
              <input type="text" placeholder="max" />
              <input type="text" placeholder="min" />
              <button>Apply</button>
            </div>
            <div className="right">
              <span className="sortBy">Sort By</span>
              <span className="sortType">
                {sort === "sales" ? "Best Selling" : "Newest"}
              </span>
              <img src={down} alt="" onClick={() => setOpen(!open)} />
              {open && (
                <div className="rightMenu">
                  {sort === "sales" ? (
                    <span onClick={() => reSort("createdAt")}>Newest</span>
                  ) : (
                    <span onClick={() => reSort("sales")}>Best Selling</span>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="cards">
            {gigs.map((gig) => {
              return <GigCard item={gig} key={gig.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gigs;
