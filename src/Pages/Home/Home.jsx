import React from 'react'
import CatCard from '../../Components/CatCard/CatCard'
import Featured from '../../Components/Featured/Featured'
import Slide from '../../Components/Slide/Slide'
import TrustedBy from '../../Components/TrustedBy/TrustedBy'
import { cards, gigs, projects } from '../../data'
import check from "../../assets/check.png"
import "./Home.scss"
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import ReactPlayer from 'react-player/youtube'

const Home = () => {
  return (
    <div className="home">
        <Featured/>
        <TrustedBy/>
        <Slide slidesToShow={5} arrowsScroll={5}>
          {
            cards.map((card) => {
              return (
                <CatCard key={card.id} item={card}/>
              )
            })
          }
        </Slide>
        <div className="features">
          <div className="container">
            <div className="item">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="title">
                <img src={check} alt="" />
                The best for every budget
              </div>
              <p>Find high-quality services at every price point. No hourly rates,
              just project-based pricing.</p>
              <div className="title">
                <img src={check} alt="" />
                The best for every budget
              </div>
              <p>Find high-quality services at every price point. No hourly rates,
              just project-based pricing.</p>
              <div className="title">
                <img src={check} alt="" />
                The best for every budget
              </div>
              <p>Find high-quality services at every price point. No hourly rates,
              just project-based pricing.</p>
              <div className="title">
                <img src={check} alt="" />
                The best for every budget
              </div>
              <p>Find high-quality services at every price point. No hourly rates,
              just project-based pricing.</p>
            </div>
            <div className="item">
            <ReactPlayer url="https://youtu.be/vkdcG0DlFbs"/>
          </div>
          </div>
        </div>
        <div className="features dark">
          <div className="container">
            <div className="item">
              <h1>Fiver <i> Bussiness</i> </h1>
              <h1> A business solution designed for <i>teams</i></h1>
              <p>  <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p></p>
              <div className="title">
                <img src={check} alt="" />
                Connect to freelancers with proven business experience
              </div>
              <div className="title">
                <img src={check} alt="" />
                Get matched with the perfect talent by a customer success manager
              </div>
              <div className="title">
                <img src={check} alt="" />
                Manage teamwork and boost productivity with one powerful workspace
              </div>
              <button>Explore Fiver Bussiness</button>
            </div>
            <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"/>
          </div>
          </div>
        </div>
        <Slide slidesToShow={4} arrowsScroll={4}>
        {
            projects.map((card) => {
              return (
              <ProjectCard key={card.id} item={card}/>
              )
            })
          }
        </Slide>
    </div>
  )
}

export default Home