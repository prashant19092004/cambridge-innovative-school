import React from 'react'
import './Principal.css';
import about_banner from '../assets/principal_banner.webp';
import principal_one from '../assets/about-shape-3.webp';
import principal_name from '../assets/principal_name.webp';
import principal_contact from '../assets/principal_contact.webp';

const Principal = () => {


  return (
    <div className='principal_div px-6 sm:px-12 mt-28 mb-10 md:my-40'>
        <section class="section about" id="about" aria-label="about">
        <div class="w-full flex flex-wrap justify-between">

          <figure class="about-banner w-[100%] md:w-[60%] flex justify-center items-center relative">

            <div class="rounded-lg overflow-hidden w-[65%]">
              <img src={about_banner} loading="lazy" alt="about banner"
                class="img-cover" />
            </div>
            
            <img src={principal_name} className='principal_con absolute -bottom-5 left-12 w-[30%] drop-shadow-2xl' alt='' />


            <img src={principal_contact} className='absolute -top-10 right-10 w-[22%] drop-shadow-2xl' alt='' />

            <img src={principal_one} className='absolute top-0 left-0 lg:-top-16 lg:-left-14 w-[80%] lg:w-full drop-shadow-2xl -z-10' alt='' />



          </figure>

          <div class="about-content w-[100%] md:w-[35%] mt-20 md:mt-0">

            <p class="text-lg text-[#ff9900] font-medium">Our Principal</p>
            <h2 className='text-2xl lg:text-3xl text-[#000066] font-semibold'>Laxmi Kant Bhatia</h2>
            <p class="text-lg text-[#ff9900] font-medium mt-3 mb-1">Qualification : </p>

            <p className='text-[#000066]'>M.A (Eng., Hist. Sociology and Psychology), M.Ed., M.Phil., Ph.D (pursuing)</p>

            <p class="text-lg text-[#ff9900] font-medium mt-3 mb-1">Principal's Message : </p>
            <p className='text-zinc-500'>Our team of passionate educators is committed to providing a supportive and engaging learning environment. We believe in the power of collaboration between school and home to guide our students toward success.</p>
            {/* <ul class="about-list">

              <li class="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                <span class="span">Expert Trainers</span>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                <span class="span">Online Remote Learning</span>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                <span class="span">Lifetime Access</span>
              </li>

            </ul> */}
{/* 
            <img src="./assets/images/about-shape-4.svg" width="100" height="100" loading="lazy" alt=""
              class="shape about-shape-4" /> */}

          </div>

        </div>
      </section>
    </div>
  )
}

export default Principal