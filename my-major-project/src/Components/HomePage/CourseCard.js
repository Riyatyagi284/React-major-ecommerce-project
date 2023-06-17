import React from 'react'
import users from "../../assets/icons/users.png";
import user from "../../assets/icons/user.png";
import "../../Pages.css/Home.css";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div>
      <div className={currentCard === cardData?.heading ? "card card1" : "card card2"} onClick={() => setCurrentCard(cardData?.heading)}>

        <div className={currentCard === cardData?.heading &&"para1"}>{cardData?.heading}</div>

        <div className='para2'>{cardData.description}</div>

        <div className="bottom">
          <div className="left l-1">
            <img className="image" src={users} alt="users" />
            <p>Beginner</p>
          </div>
          <div className="right l-1">
            <img className="image" src={user} alt="user" />
            <p>6 Lessons</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CourseCard


{/*  < div className = "cards" >
          <div className="card card1">
            <p className="para1">Learn HTML</p>
            <p className="para2">
              This course covers the basic concepts of HTML including creating
              and structuring web pages, adding text, links, images, and more.
            </p>

            <div className="bottom">
              <div className="left">
                <img className="image" src={users} alt="users" />
                <p>Beginner</p>
              </div>
              <div className="right">
                <img className="image" src={user} alt="user" />
                <p>6 Lessons</p>
              </div>
            </div>
          </div>

          <div className="card card2">
            <p className="para-a">Learn HTML</p>
            <p className="para-b">
              This course covers the basic concepts of HTML including creating
              and structuring web pages, adding text, links, images, and more.
            </p>

            <div className="bottom">
              <div className="left l-2">
                <img className="image" src={users} alt="users" />
                <p>Beginner</p>
              </div>
              <div className="right l-2">
                <img className="image" src={user} alt="user" />
                <p>6 Lessons</p>
              </div>
            </div>
          </div>

          <div className="card card2 card3">
            <p className="para-a">Learn HTML</p>
            <p className="para-b">
              This course covers the basic concepts of HTML including creating
              and structuring web pages, adding text, links, images, and more.
            </p>

             <div className="bottom">
              <div className="left l-1">
                <img className="image" src={users} alt="users" />
                <p>Beginner</p>
              </div>
              <div className="right l-1">
                <img className="image" src={user} alt="user" />
                <p>6 Lessons</p>
              </div>
            </div>
          </div>
        </div >
        </div > */}