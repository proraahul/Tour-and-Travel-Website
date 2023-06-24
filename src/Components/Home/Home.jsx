import React, {useEffect} from "react";
import video1 from "../../Assets/video1.mp4";
import "./home.scss";
import {CiLocationOn} from 'react-icons/ci';
import {FaFilter} from 'react-icons/fa';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {BsListTask} from 'react-icons/bs';
import {TbApps} from 'react-icons/tb';

import Aos from 'aos';
import 'aos/dist/aos.css'

const Home =()=> {
// let create a react hook to add a scroll animation
useEffect(()=> {
    Aos.init({duration:"2000"})
}, [])


  return (
    <section className="home">
      <div className="overlay">
        <video src={video1} muted autoPlay loop type="video/mp4" />

        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos='fade-up' className="smallText">
              Our Packages
              </span>
            <h1 data-aos='fade-up'  className="homeTitle">
              Search your Holidays
            </h1>
          </div>

          <div data-aos='fade-up' className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search your destination:</label>
                <div className="input flex">
                  <input type="text" placeholder="Enter name here...." id="city"/>
                  <CiLocationOn className="icon"/>
                </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Search your date:</label>
                <div className="input flex">
                  <input type="date" id="date"/>
                </div>
            </div>

            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max price:</label>
                <h3 className="total">$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min='1000' id="price"/>
              </div>
            </div>

            <div className="searchOptions flex">
               <FaFilter className='icon' />
               <span>MORE FILTERS</span>
            </div>
          </div>

          <div data-aos='fade-up' className="homeFooterIcons flex">
            <div className="rightIcons">
                <AiOutlineFacebook className='icon' />
                <AiOutlineInstagram className='icon' />
                <FaTripadvisor className='icon' />
            </div>

            <div className="leftIcons">
            <BsListTask className='icon' />
            <TbApps className='icon' />
            </div>
          </div>
        </div> 
      </div>
    </section>
  )}

export default Home
