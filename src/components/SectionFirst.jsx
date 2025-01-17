import React from 'react'
import './SectionFirst.css'
import one from '../assets/one_pic.webp';
import two from '../assets/two_pic.webp';
import three from '../assets/three_pic.webp';
import four from '../assets/four_pic.webp';

const SectionFirst = () => {
  return (
    <div>
        <div class="divisions division_4 pt-10 pb-20" onmousemove="animate_balls(event)">
            <div class="title_header">
                <h2 class="text-[1.5rem] sm:text-[4vw] md:text-[3vw] title medium mb-4 text-zinc-800 font-semibold">We promise best future for your kids</h2>                <p className='mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                {/* <aside class="fixed_flex">
                    <a href="#" class="btn btn_1">Explore more</a>
                    <i class="fa fa-angle-right"></i>
                    <a href="javascript:void(0)">Gallery Portfolio</a>
                </aside> */}
            </div>
            <div class="cards">
                <span class="ball"></span>
                <span class="ball"></span>
                <span class="ball"></span>
                <span class="ball"></span>
                <section class="fixed_flex">
                    <figure class="flex_content">
                        <img src={one} alt="" loading="lazy" />
                    </figure>
                    <figure class="flex_content">
                        <img src={two} alt="" loading="lazy" />
                    </figure>
                    <figure class="flex_content">
                        <img src={three} alt="" loading="lazy" />
                    </figure>
                    <figure class="flex_content">
                        <img src={four} alt="" loading="lazy" />
                    </figure>
                </section>
            </div>
        </div>
    </div>
  )
}

export default SectionFirst