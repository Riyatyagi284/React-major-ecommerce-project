import React, { useEffect, useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import "../Pages.css/Home.css";
import ExploreMore from "../Components/HomePage/ExploreMore";
import ButtonGroup from "../Components/HomePage/ButtonGroup";
import video from "../assets/Images/banner.mp4";
import frame from "../assets/Images/frame.png";
import Leadership from "../assets/icons/leadership.png";
import Responsibility from "../assets/icons/responsibility.png";
import Flexibility from "../assets/icons/flexibility.png";
import Solveproblem from "../assets/icons/solveProblem.png";
import Timeline from "../assets/Images/TimelineImage.png";
import compareCard from "../assets/Images/Compare_with_others.png";
import planLesson from "../assets/Images/Plan_your_lessons.png";
import knowProgress from "../assets/Images/Know_your_progress.png";
import instructor from "../assets/Images/Instructor.png";
import Bstar from "../assets/icons/brightstar.png";
import Star from "../assets/icons/star.png";
import reviewgirl from "../assets/Images/review-girl1.png";
import reviewboy1 from "../assets/Images/review-boy1.png";
import reviewboy2 from "../assets/Images/review-boy2.png";
import reviewboy3 from "../assets/Images/review-boy3.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../Components/common/Footer.js";
import LoginSignup from "../Components/common/LoginSignup";

const Home = () => {
  return (
<>
    <LoginSignup/>

    <div className="Home-wrapper">
      {/* section2 */}
      <Link className="no-underline" to="/signup">
        <div className="round-btn">
          <div className="round-btn-wrapper">
            <p>Become an Instructor</p>
            <GoArrowRight className="icon" />
          </div>
        </div>
      </Link>

      <div className="home-para">
        <h2>
          Empower Your Future with <span className="span">Coding Skills</span>
        </h2>
        <p>
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.{" "}
        </p>
      </div>

      <div className="btn-group">
        < ButtonGroup
          btnText={"Learn More"}
          btnLink={"/signup"}
          btnColor={"yellow-btn"}
        />

        < ButtonGroup
          btnText={"Book a Demo"}
          btnLink={"/login"}
          btnColor={"black-btn"}
        />
      </div>

      <div className="video">
        <video src={video} autoPlay loop muted />
      </div>


      <TypeAnimation
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
            sequence={[
      <div className="coding-section">
        <div className="coding-content">
          <h2>
            Unlock your <span className="span">coding potential</span> with our
            online courses.
          </h2>
          <p>
            Our courses are designed and taught by industry experts who have
            years of experience in coding and are passionate about sharing their
            knowledge with you.
          </p>


          <div className="btn-group">

            < ButtonGroup
              btnText={"Try it Yourself"}
              btnLink={"/login"}
              btnColor={"yellow-btn"}
            />

            < ButtonGroup
              btnText={"Learn More"}
              btnLink={"/signup"}
              btnColor={"black-btn"}
            />
          </div>
        </div>

        <div className="coding">
          <div className="numbering">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
          </div>

          <div className="Html-Template html_template_1">
            <div className="highlight-brown">{`<!DOCTYPE html>`}</div>
            <div>{`<html>`}</div>
            <div>{`<head><title>Example</title>`}</div>
            <div>{`<link rel="stylesheet" href="styles.css">`}</div>
            <div>{`</head>`}</div>
            <div>{`<body>`}</div>
            <div className="highlight-red">{`<h1><a href="/">Header</a></h1>`}</div>
            <div>{`<nav><a href="one/">One</a><a href="two/">Two`}</div>
            <div className="highlight-red">{`</a><a href="three/">Three</a>`}</div>
            <div>{`</nav>`}</div>
          </div>
        </div>
      </div> ]} />


      <div className="coding-section extra">
        <div className="coding-content extra-content-css" style={{ order: 2 }}>
          <h2>
            Start{" "}
            <span className="span">
              coding <br />
              in seconds
            </span>
          </h2>
          <p>
            Go ahead, give it a try. Our hands-on learning environment means
            you'll be writing real code from your very first lesson.
          </p>

          <div className="btn-group">

          < ButtonGroup
              btnText={"Continue Lesson"}
              btnLink={"/login"}
              btnColor={"yellow-btn"}
            />

            < ButtonGroup
              btnText={"Learn More"}
              btnLink={"/signup"}
              btnColor={"black-btn"}
            />
          </div>
        </div>

        <div
          className="coding extra-coding-css"
          style={{ order: 1, marginLeft: 0 }}
        >
          <div className="numbering">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
          </div>

          <div className="Html-Template">
            <div className="highlight-brown">{`<!DOCTYPE html>`}</div>
            <div>{`<html>`}</div>
            <div>{`<head><title>Example</title>`}</div>
            <div>{`<link rel="stylesheet" href="styles.css">`}</div>
            <div>{`</head>`}</div>
            <div>{`<body>`}</div>
            <div className="highlight-red">{`<h1><a href="/">Header</a></h1>`}</div>
            <div>{`<nav><a href="one/">One</a><a href="two/">Two`}</div>
            <div className="highlight-red">{`</a><a href="three/">Three</a>`}</div>
            <div>{`</nav>`}</div>
          </div>
        </div>
      </div>

      <ExploreMore />

      <div className="parent-frame">
        <img className="frame" />
      </div>

      <div className="btn-group"style={{position:"relative",top: "-18rem"}}>

          < ButtonGroup
              btnText={"Continue Lesson"}
              btnLink={"/login"}
              btnColor={"yellow-btn"}
            />

            < ButtonGroup
              btnText={"Learn More"}
              btnLink={"/signup"}
              btnColor={"black-btn"}
            />
          </div>
    
      <div
        className="white-bg demanded__section"
        style={{ background: "#F9F9F9", height: "auto", width: "100%" }}
      >
        <div className="demanded_skill">
          <div className="demand-content-heading">
            <h2>
              Get the skills you need for a{" "}
              <span className="span">job that is in demand.</span>
            </h2>
          </div>

          <div className="demand-content-para">
            <p>
              The modern StudyNotion is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
            </p>
            {/*<div className='button-group'>
                        <ButtonGroup
                            YellowButtonText="Learn More"
                            YellowButtonLink="/signup"
                        />
                    </div>*/}
             < ButtonGroup style={{border:"none"}}
              btnText={"Try it Yourself"}
              btnLink={"/login"}
              btnColor={"yellow-btn"}
            />  


          </div>
        </div>

        <div className="lists">
          <div className="lists-content">
            <div className="list">
              <div className="parent-image">
                <img
                  className="l-img"
                  src={Leadership}
                  alt="leadership-image"
                />
              </div>
              <div className="about-img">
                <h2>Leadership</h2>
                <p>Fully committed to the success company</p>
              </div>
            </div>

            <div className="list">
              <div className="parent-image">
                <img
                  className="l-img"
                  src={Responsibility}
                  alt="leadership-image"
                />
              </div>
              <div className="about-img">
                <h2>Responsibility</h2>
                <p>Students will always be our top priority</p>
              </div>
            </div>

            <div className="list">
              <div className="parent-image">
                <img
                  className="l-img"
                  src={Flexibility}
                  alt="leadership-image"
                />
              </div>
              <div className="about-img">
                <h2>Flexibility</h2>
                <p>The ability to switch is an important skills</p>
              </div>
            </div>

            <div className="list">
              <div className="parent-image">
                <img
                  className="l-img"
                  src={Solveproblem}
                  alt="leadership-image"
                />
              </div>
              <div className="about-img">
                <h2>Solve the problem</h2>
                <p>Code your way to a solution</p>
              </div>
            </div>
          </div>

          <div className="list-right">
            <img src={Timeline} alt="girl-image" />
            <div className="list-box">
              <div className="box">
                <h2>10</h2>
                <p>
                  YEARS <br /> EXPERIENCES
                </p>
              </div>

              <div className="line"></div>

              <div className="box">
                <h2>250</h2>
                <p>
                  TYPES OF
                  <br />
                  COURSES
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="learn-language">
          <h2>
            Your swiss knife for
            <span className="span"> learning any language</span>
          </h2>
          <center>
            <p>
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
            </p>
          </center>
          <div className="three-images">
            <img className="image1" src={knowProgress} alt="image1" />
            <img className="image2" src={compareCard} alt="image2" />
            <img className="image3" src={planLesson} alt="image3" />
          </div>
        </div>
      </div>

      <div className="Become_Instructor">
        <div className="instructor_image">
          <img src={instructor} alt="instructor" />
        </div>

        <div className="instructor-content">
          <h2>
            Become an <br />
            <span className="span">instructor</span>
          </h2>
          <p>
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
        </div>
      </div>

      <OwlCarousel
        className="owl-theme reviews__carousel"
        items={4}
        autoplay={true}
        loop={true}
        nav={false}
        margin={30}
        dots={false}
        autoplayTimeout={3000}
        autoplayHoverPause={true}
      >
        <div className="item">
          <div className=" review-card">
            <div className="row-1">
              <img src={reviewgirl} alt="girl" />
              <div className="about-girl">
                <h2>Cody Fisher</h2>
                <p>tim.jennings@example.com</p>
              </div>
            </div>

            <div className="row-2">
              <p>
                Coordination of activities improved tremendously with Learn
                codings.
              </p>
            </div>

            <div className="row-3">
              <p>4.5</p>
              <div className="stars">
                <img src={Bstar} alt="star icon" />
                <img src={Bstar} alt="star icon" />
                <img src={Bstar} alt="star icon" />
                <img src={Bstar} alt="star icon" />
                <img src={Star} alt="star icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className=" review-card">
            <div className="row-1">
              <img src={reviewboy1} alt="boy" />
              <div className="about-girl">
                <h2>Cody Fisher</h2>
                <p>tim.jennings@example.com</p>
              </div>
            </div>
            <div className="row-2">
              <p>
                Coordination of activities improved tremendously with Learn
                codings.
              </p>
            </div>
            <div className="row-3">
              <p>4.5</p>
              <div className="stars">
                <img src={Bstar} alt="star icon" />
                <img src={Bstar} alt="star icon" />
                <img src={Bstar} alt="star icon" />
                <img src={Bstar} alt="star icon" />
                <img src={Star} alt="star icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className=" review-card">
            <div className="row-1">
              <img src={reviewboy2} alt="boy" />
              <div className="about-girl">
                <h2>Cody Fisher</h2>
                <p>tim.jennings@example.com</p>
              </div>
            </div>
            <div className="row-2">
              <p>
                Coordination of activities improved tremendously with Learn
                codings.
              </p>
            </div>
            <div className="row-3">
              <p>4.5</p>
              <div className="stars">
                <img src={Bstar} alt="star icon" />
                <img src={Bstar} alt="star icon" />
                <img src={Bstar} alt="star icon" />
                <img src={Bstar} alt="star icon" />
                <img src={Star} alt="star icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className=" review-card">
            <div className="row-1">
              <img src={reviewboy3} alt="boy" />
              <div className="about-girl">
                <h2>Cody Fisher</h2>
                <p>tim.jennings@example.com</p>
              </div>
            </div>
            <div className="row-2">
              <p>
                Coordination of activities improved tremendously with Learn
                codings.
              </p>
            </div>
            <div className="row-3">
              <p>4.5</p>
              <div className="stars">
                <img src={Bstar} alt="star icon" />
                <img src={Bstar} alt="star icon" />
                <img src={Bstar} alt="star icon" />
                <img src={Bstar} alt="star icon" />
                <img src={Star} alt="star icon" />
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>

      {/* #############FOOTER SECTION############## */}

      <Footer />
    </div>

    </>
  );
};

export default Home;
