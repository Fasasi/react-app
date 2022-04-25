
import { GiCheckMark } from "react-icons/gi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { BsCameraReels } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.gif"
import img6 from "../images/img6.png"
import {FaMapMarkerAlt } from "react-icons/fa";


const Home = () => {
  return (
    <><div className="main-text">
        <div className="nav-text">
          <h2>LEARNING IS AN EXPERIENCE. <br />EVERYTHING ELSE IS JUST INFORMATION.</h2>
          <p>Albert Einstein</p>
        </div>
      </div><div className="why-wrapper">
        <div className="why-box">
          <div className="why-text">
            <p className="why-choose-us">Why Choose Us?</p>
            <p className="we-are-small">
              We are a small, agile agency that listens first and then tailors
              our learning design to meet your specific need.We’re with you
              every step of the development process, providing advice and
              expertise.We enjoy the challenge of finding ways to create
              learning that moves beyond the ordinary and promotes memorable
              learning experiences.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className="why-image"></div>
        </div>
      </div>
      <div className="what-wrapper">
      <div className="what-box">
        <div className="what">
          <p className="what-we-do">What We Do</p>
          <p>
            The crowded media landscape means that there’s more competition than
            ever for our attention. We integrate learning theory with modern
            visual design to deliver a product that’s both engaging and meets
            the learning objectives. Our focus on the learner means that we may
            sometimes challenge project sponsors to push beyond the
            organizational perspective to arrive at content that is meaningful
            to the learner.{" "}
          </p>
          <p>
            Even the best-executed course has little impact if it doesn’t move
            the learner toward positive change. We strive to provide more than
            simple information dumps. Meaningful instruction requires careful
            listening, identifying obstacles to behavior change, and crafting
            objectives that reflect learners’ needs.
          </p>
        </div>
        <div className="icons-wrapper">
          <div className="mark-camera">
            <div className="mark-box">
              <GiCheckMark className="icon1" />
              <p>instructional Design</p>
            </div>
            <div className="camera-box">
              <BsCameraReels className="icon2" />
              <p>Video production</p>
            </div>
          </div>
          <div className="comp-doc">
            <div className="comp-box">
              <RiComputerLine className="icon3" />
              <p>E-learning Development</p>
            </div>
            <div className="doc-box">
              <HiOutlineDocumentDuplicate className="icon4" />
              <p>Needs Analysis</p>
            </div>
          </div>
        </div>
        <div className="take-look">
        <p className="h2">TAKE A LOOK AT OUR WORK</p>
        <div className="button">
          <p className="ecourse">
            <a href="#">E-Courses</a>
          </p>
          <p className="video">
            <a href="#">videos</a>
          </p>
        </div>
      </div>
      
      </div>
    </div>
    <div className="client-wrapper">
            <p className="our-client">Our Clients</p>
            <p className="client-text">Our clients include organizations in Higher Education, Life Science, Transportation, the Public Sector, Agriculture, and  Government. Though our business has grown, we have never lost sight of our specialization in supporting Academic/Public partnerships to educate a diverse group of employees and public audiences. </p>
            <div className="sponsors">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
        
            </div>
        </div>
        <div className="location-wrapper">
            <p className="location">Location</p>
            <div className="map-text">
                <FaMapMarkerAlt className="map" />
                <p className="text">We are located in the San Francisco Bay Area. Verse Learning values our client relationships, and sometimes the best way to get to know someone is to meet them in person. Most of our business is from repeat clients located in Northern California, however we also work with clients from across the country and around the globe.
                </p>
            </div>
            <p className="verse">Verse Learning</p>
            <p className="copyright">Copyright © 2021</p>
        </div>
    </>

  );
};

export default Home;
