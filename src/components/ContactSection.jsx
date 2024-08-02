import React from 'react'
import './ContactSection.css'
import { FaLocationDot, FaPhone, FaPhoneFlip, FaRegClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <div className='px-0 lg:px-[75px] flex justify-center items-center my-20'>
            <div class="container">
                <div class="contactInfo"> 
                    <div>
                        <h2>Contact Info</h2>
                        <div className='flex flex-col gap-7 mt-4'>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaPhoneFlip className='text-[#fff] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Call</h3>
                                    <p className='text-zinc-600 text-sm'>+91 827875125</p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaRegClock className='text-[#fff] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Work Time</h3>
                                    <p className='text-zinc-600 text-sm'>Mon - Fri 9 AM - 3 PM</p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaLocationDot className='text-[#fff] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Address</h3>
                                    <p className='text-zinc-600 text-sm'>Nangran, Roopnagar, Punjab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contactForm border border-[#ff9900]">
                        <h2>Send a Message</h2>
                        <div class="formBox">
                        <div class="inputBox w50">
                            <input type="text" name="" required />
                            <span>Name</span>
                        </div>
                        <div class="inputBox w50">
                            <input type="email" required />
                            <span>Email Address</span>
                        </div>
                        <div class="inputBox w50">
                            <input type="number"  required />
                            <span>Contact</span>
                        </div>
                        <div class="inputBox w100">
                            <textarea required></textarea>
                            <span>Write your message here...</span>
                        </div>
                        <div class="inputBox w100">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>                    
            </div>         
    </div>
  )
}

export default ContactSection