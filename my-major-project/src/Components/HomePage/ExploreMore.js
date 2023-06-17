import React,{useState} from 'react'
import {HomePageExplore} from "../../data/homepage-explore";
import CourseCard from './CourseCard';
import "./ExploreMore.css";

const tabsName=[
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",  
]

const ExploreMore = () => {
    const [currentTab,setCurrentTab] = useState(tabsName[0]);
    const [courses,setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard,setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) =>{
        setCurrentTab(value);
        const result = HomePageExplore.filter((course)=>course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    };

  return (
    <div>
      

      <div className="code-power">
        <h2>
          Unlock the <span className="span">Power of Code</span>
        </h2>
        <p className="code-power-para">
          Learn to Build Anything You Can Imagine
        </p>

       <div className='tabs'>
        {tabsName.map((ele,i)=>{
            return(
             <div key={i} onClick = {()=>setMyCards(ele)} className={currentTab === ele ? 'active-true' : 'active-false'}>
                {ele}
             </div>
            )
        })}
       </div>

       <div className='cards'>
        {courses.map((ele,i)=>{
            return (
                <CourseCard 
                   key={i}
                   cardData={ele}
                   currentCard={currentCard}
                   setCurrentCard={setCurrentCard}
                />
            )
        })}
       </div>

      </div>



    </div>
  )
}

export default ExploreMore
