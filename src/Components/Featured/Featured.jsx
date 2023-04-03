import React from 'react'
import man from "../../assets/man.png"
import search from "../../assets/search.png"
import "./Featured.scss"

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>Find the perfect <span>freelance</span> services <br />
                 for your business</h1>
                <div className="search">
                    <div className="serachInput">
                        <img src={search} alt="" />
                        <input type="text"  placeholder='Try "building mobile app"' />
                    </div>
                    <button>Search</button> 
                </div>
                <div className="popular">
                    <span>Popular: </span>
                    <button>Web Design</button>
                    <button>WordPress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src={man} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured