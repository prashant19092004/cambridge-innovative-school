import React from 'react'
import apple_and_books from '../assets/apple-and-books.png';
import games from '../assets/games.png';
import open_book from '../assets/open-book.png';
import school from '../assets/school.png';
import seesaw from '../assets/seesaw.png';
import sister_and_brother from '../assets/sister-and-brother.png';

const Features = () => {


  const featuresList = [
    {
      icon : seesaw, 
      heading : "Infrastructure",
      content : "Classrooms with interactive whiteboards and sports fields."
    },
    {
      icon : apple_and_books,
      heading : "Certified Tutors",
      content : "We have a team of highly qualified and certified tutors."
    },
    {
      icon : sister_and_brother,
      heading : "small Class Size",
      content : "Focused learning with fewer students per class."
    },
    {
      icon : open_book, 
      heading : "Library",
      content : "A library with a variety of books and resources."
    },
    {
      icon : games, 
      heading : "Activities",
      content : "Engaging extracurricular programs including music, arts, and sports."
    },   
    {
      icon : school, 
      heading : "Safety First",
      content : " The safety and well-being of our students are our top priorities."
    }, 
  ]
  return (
    <div>
        <div class="content-side">
          <h1 className='mb-10 w-[90%] sm:w-[70%] md:w-[50%] m-auto font-semibold text-zinc-800 text-[1.5rem] sm:text-[4.8vw] md:text-[3.8vw] text-center'>Welcome to <span className='text-[#ff9900]'>Cambridge</span></h1>
          <div class="inner-main-box">
              {
                featuresList.map((feature) => {
                  return(
                    <div class="boxes box-1">
                      <div class="feature-box-img">
                        <img src={feature.icon} alt="" />
                      </div>
                      <h4>{feature.heading}</h4>
                      <div class="feature-line"></div>
                      <p class="text-cont">{feature.content}</p>
                    </div>
                  )
                })
              }
          </div>
        </div>
    </div>
  )
}

export default Features