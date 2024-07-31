import React from 'react';
import './FeatureSec.css';
import classroom from '../assets/classroom.jpg';
import library from '../assets/libruary.jpg';
import drawing from '../assets/drawing.jpg';
import school_bus from '../assets/school-bus.jpg';



const FeaturesSec = () => {
  return (
    <div className='feature_sec my-20'>
        <h1 className='mb-10 w-[90%] sm:w-[70%] md:w-[50%] m-auto font-bold text-zinc-800 text-[1.5rem] sm:text-[4.5vw] md:text-[3.5vw] text-center'>Welcome to <span className='text-[#f37335]'>Cambridge</span></h1>
        <div className='px-[20px] md:px-[50px] lg:px-[30px] w-[100%] flex gap-5 flex-wrap m-auto justify-center'>
            <div className='p-3 flex rounded-lg flex-wrap shadow-lg gap-3 w-[100%] md:w-[45%] h-auto' id='features_div'>
                <div className='w-[100%] md:w-[100%] lg:w-[40%] h-[200px] sm:h-[150px] md:h-[200px] lg:h-[150px] bg-cover bg-center rounded-lg' style={{backgroundImage : `url(${classroom})`}} id='feature_img_div'>
                    {/* <img className='w-[100%] object-contain' src={classroom} alt='' /> */}
                </div>
                <div className='w-[100%] md:w-[100%] lg:w-[50%] flex flex-col gap-3 items-center md:items-center pb-3 md:pb-3 lg:pb-0 lg:items-start justify-center' id='feature_content'>
                    <h1 className='text-[#003399] text-xl font-semibold'>Classroom</h1>
                    <div className='Features_line h-1 w-[40%] bg-[#ff9900]'></div>
                    <p className='text-zinc-400 text-sm text-center md:text-center lg:text-left'>Bright, airy classrooms with essential teaching aids.</p>
                </div>
            </div>
            <div className='p-3 flex rounded-lg flex-wrap shadow-lg gap-3 w-[100%] md:w-[45%] h-auto' id='features_div'>
                <div className='w-[100%] md:w-[100%] lg:w-[40%] h-[200px] sm:h-[150px] md:h-[200px] lg:h-[150px] bg-cover bg-center rounded-lg' style={{backgroundImage : `url(${library})`}} id='feature_img_div'>
                    {/* <img className='w-[100%] object-contain' src={classroom} alt='' /> */}
                </div>
                <div className='w-[100%] md:w-[100%] lg:w-[50%] flex flex-col gap-3 items-center md:items-center pb-3 md:pb-3 lg:pb-0 lg:items-start justify-center' id='feature_content'>
                    <h1 className='text-[#003399] text-xl font-semibold'>Library</h1>
                    <div className='Features_line h-1 w-[40%] bg-[#ff9900]'></div>
                    <p className='text-zinc-400 text-sm text-center md:text-center lg:text-left'>A library with a variety of books and resources.</p>
                </div>
            </div>
            <div className='p-3 flex rounded-lg flex-wrap shadow-lg gap-3 w-[100%] md:w-[45%] h-auto' id='features_div'>
                <div className='w-[100%] md:w-[100%] lg:w-[40%] h-[200px] sm:h-[150px] md:h-[200px] lg:h-[150px] bg-cover bg-center rounded-lg' style={{backgroundImage : `url(${drawing})`}} id='feature_img_div'>
                    {/* <img className='w-[100%] object-contain' src={classroom} alt='' /> */}
                </div>
                <div className='w-[100%] md:w-[100%] lg:w-[50%] flex flex-col gap-3 items-center md:items-center pb-3 md:pb-3 lg:pb-0 lg:items-start justify-center' id='feature_content'>
                    <h1 className='text-[#003399] text-xl font-semibold'>Arts & Drawing</h1>
                    <div className='Features_line h-1 w-[40%] bg-[#ff9900]'></div>
                    <p className='text-zinc-400 text-sm text-center md:text-center lg:text-left'>Drawing classes to develop artistic skills.</p>
                </div>
            </div>
            <div className='p-3 flex rounded-lg flex-wrap shadow-lg gap-3 w-[100%] md:w-[45%] h-auto' id='features_div'>
                <div className='w-[100%] md:w-[100%] lg:w-[40%] h-[200px] sm:h-[150px] md:h-[200px] lg:h-[150px] bg-cover bg-center rounded-lg' style={{backgroundImage : `url(${school_bus})`}} id='feature_img_div'>
                    {/* <img className='w-[100%] object-contain' src={classroom} alt='' /> */}
                </div>
                <div className='w-[100%] md:w-[100%] lg:w-[50%] flex flex-col gap-3 items-center md:items-center pb-3 md:pb-3 lg:pb-0 lg:items-start justify-center' id='feature_content'>
                    <h1 className='text-[#003399] text-xl font-semibold'>Transportation</h1>
                    <div className='Features_line h-1 w-[40%] bg-[#ff9900]'></div>
                    <p className='text-zinc-400 text-sm text-center md:text-center lg:text-left'>Safe and reliable transportation services for students.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturesSec