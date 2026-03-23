import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const CoreStack = () => {
    return (
        <div className='space-y-16 '>
            <div className="top flex justify-between ">
                <div className="left space-y-4">
                    <h3 className='font-heading text-4xl font-black'>CORE_STACK</h3>
                    <p className='font-body text-description'>Technical foundations engineered for maximum velocity and
                        atomic consistency.</p>
                </div>

                <div className="right text-secondary flex items-end ">
                    <p className='font-body text-14 font-bold '>
                        VER_2026.3.23
                    </p>
                </div>
            </div>

            <div className="bottom">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

                    {/* card one */}
                    <div className=' lg:col-span-2 bg-[linear-gradient(175deg,#1e1e2d_0%,#12121e_100%)] rounded-2xl p-8 hover:brightness-110 hover:saturate-120 ease-in-out transition-all duration-200'>
                        <div className='mb-8'>
                            <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 10.5C2.175 10.5 1.46875 10.2062 0.88125 9.61875C0.29375 9.03125 0 8.325 0 7.5V3C0 2.175 0.29375 1.46875 0.88125 0.88125C1.46875 0.29375 2.175 0 3 0H16.5V10.5H3ZM3 7.5H13.5V3H3V7.5ZM3 24C2.175 24 1.46875 23.7062 0.88125 23.1187C0.29375 22.5312 0 21.825 0 21V16.5C0 15.675 0.29375 14.9688 0.88125 14.3813C1.46875 13.7938 2.175 13.5 3 13.5H19.5V24H3ZM3 21H16.5V16.5H3V21ZM22.5 24V10.5H19.5V0H30L27 7.5H30L22.5 24ZM4.125 19.875H6.375V17.625H4.125V19.875ZM4.125 6.375H6.375V4.125H4.125V6.375ZM3 7.5V3V7.5ZM3 21V16.5V21Z" fill="#FF88B5" />
                            </svg>
                        </div>
                        <h2 className='font-heading font-bold text-2xl mb-4'>MERN Architecture</h2>
                        <p className='font-body text-description text-14 mb-6'>Robust full-stack systems built on MongoDB, Express, React, and Node.js for
                            scalable enterprise solutions.</p>

                        <div className='space-x-3'>
                            <button className='text-[#757482] text-[10px] font-body font-bold bg-[#242434] py-1 px-3 rounded-full text-shadow-cyan  hover:border hover:border-[#757482] hover:text-white transition-all duration-200 '>Scalable</button>
                            <button className='text-[#757482] text-[10px] font-body font-bold bg-[#242434] py-1 px-3 rounded-full text-shadow-cyan   hover:border hover:border-[#757482] hover:text-white transition-all duration-200'>Reactive</button>
                        </div>

                    </div>

                    {/* div 2 */}
                    <div className='bg-[linear-gradient(175deg,#1e1e2d_0%,#12121e_100%)] rounded-2xl p-8 hover:brightness-110 hover:saturate-120 transition-all duration-200 ease-in-out'>

                        <div className='mb-8'>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.6 7.99556L5.55 8.82056C5.78333 8.3539 6.025 7.9039 6.275 7.47056C6.525 7.03723 6.8 6.6039 7.1 6.17056L5.7 5.89556L3.6 7.99556ZM7.15 10.0706L10 12.8956C10.7 12.6289 11.45 12.2206 12.25 11.6706C13.05 11.1206 13.8 10.4956 14.5 9.79556C15.6667 8.6289 16.5792 7.33306 17.2375 5.90806C17.8958 4.48306 18.1833 3.17056 18.1 1.97056C16.9 1.88723 15.5833 2.17473 14.15 2.83306C12.7167 3.4914 11.4167 4.4039 10.25 5.57056C9.55 6.27056 8.925 7.02056 8.375 7.82056C7.825 8.62056 7.41667 9.37056 7.15 10.0706ZM11.6 8.44556C11.2167 8.06223 11.025 7.5914 11.025 7.03306C11.025 6.47473 11.2167 6.0039 11.6 5.62056C11.9833 5.23723 12.4583 5.04556 13.025 5.04556C13.5917 5.04556 14.0667 5.23723 14.45 5.62056C14.8333 6.0039 15.025 6.47473 15.025 7.03306C15.025 7.5914 14.8333 8.06223 14.45 8.44556C14.0667 8.8289 13.5917 9.02056 13.025 9.02056C12.4583 9.02056 11.9833 8.8289 11.6 8.44556ZM12.075 16.4706L14.175 14.3706L13.9 12.9706C13.4667 13.2706 13.0333 13.5414 12.6 13.7831C12.1667 14.0247 11.7167 14.2622 11.25 14.4956L12.075 16.4706ZM19.9 0.145565C20.2167 2.16223 20.0208 4.12473 19.3125 6.03306C18.6042 7.9414 17.3833 9.76223 15.65 11.4956L16.15 13.9706C16.2167 14.3039 16.2 14.6289 16.1 14.9456C16 15.2622 15.8333 15.5372 15.6 15.7706L11.4 19.9706L9.3 15.0456L5.025 10.7706L0.1 8.67056L4.275 4.47056C4.50833 4.23723 4.7875 4.07056 5.1125 3.97056C5.4375 3.87056 5.76667 3.8539 6.1 3.92056L8.575 4.42056C10.3083 2.68723 12.125 1.46223 14.025 0.745565C15.925 0.0288979 17.8833 -0.171102 19.9 0.145565ZM1.875 13.9456C2.45833 13.3622 3.17083 13.0664 4.0125 13.0581C4.85417 13.0497 5.56667 13.3372 6.15 13.9206C6.73333 14.5039 7.02083 15.2164 7.0125 16.0581C7.00417 16.8997 6.70833 17.6122 6.125 18.1956C5.70833 18.6122 5.0125 18.9706 4.0375 19.2706C3.0625 19.5706 1.71667 19.8372 0 20.0706C0.233333 18.3539 0.5 17.0081 0.8 16.0331C1.1 15.0581 1.45833 14.3622 1.875 13.9456ZM3.3 15.3456C3.13333 15.5122 2.96667 15.8164 2.8 16.2581C2.63333 16.6997 2.51667 17.1456 2.45 17.5956C2.9 17.5289 3.34583 17.4164 3.7875 17.2581C4.22917 17.0997 4.53333 16.9372 4.7 16.7706C4.9 16.5706 5.00833 16.3289 5.025 16.0456C5.04167 15.7622 4.95 15.5206 4.75 15.3206C4.55 15.1206 4.30833 15.0247 4.025 15.0331C3.74167 15.0414 3.5 15.1456 3.3 15.3456Z" fill="#00F4FE" />
                            </svg>
                        </div>
                        <h2 className='font-heading font-bold text-2xl mb-4'>Next.js</h2>
                        <p className='font-body text-description text-14 mb-6'>SSR & Static Generation for lightning-
                            fast performance and SEO excellence.</p>
                    </div>

                    {/* div 3 */}
                    <div className='bg-[linear-gradient(175deg,#1e1e2d_0%,#12121e_100%)] rounded-2xl p-8 hover:brightness-110 hover:saturate-120 ease-in-out transition-all duration-200'>
                        <div className='mb-8'>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.45 17H14.55L17.625 7.775L10 2.45L2.375 7.775L5.45 17ZM4 19L0 7L10 0L20 7L16 19H4Z" fill="#FF88B5" />
                            </svg>
                        </div>
                        <h2 className='font-heading font-bold text-2xl mb-4'>Figma</h2>
                        <p className='font-body text-description text-14 mb-6'>SSystem-based design focusing on
                            component modularity and motion
                            behavior.</p>
                    </div>

                    {/* div 4 */}
                    <div className='bg-[linear-gradient(175deg,#1e1e2d_0%,#12121e_100%)] rounded-2xl p-8 hover:brightness-110 hover:saturate-120 transition-all duration-200 ease-in-out'>
                        <div className='mb-8'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.6 12.6L8 11.175L5.825 9L8 6.825L6.6 5.4L3 9L6.6 12.6ZM11.4 12.6L15 9L11.4 5.4L10 6.825L12.175 9L10 11.175L11.4 12.6ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16ZM2 2V16V2Z" fill="#BEEE00" />
                            </svg>

                        </div>
                        <h2 className='font-heading font-bold text-2xl mb-4'>Node Engine</h2>
                        <div className='flex justify-between items-center'>
                            <p className='font-black text-[#242434] text-4xl font-heading'>01</p>
                            <div className='flex items-center w-8 h-8 p-2 border border-[#474754] rounded-full'><FaArrowRight /></div>
                        </div>

                    </div>

                    {/* div 5 */}
                    <div className='lg:col-span-3 bg-[linear-gradient(175deg,#1e1e2d_0%,#12121e_100%)] rounded-2xl p-8 ease-in-out hover:brightness-110 hover:saturate-120 transition-all duration-200 flex'>
                        <div className="left space-y-4 flex-1">
                            <h2 className='font-bold font-heading text-2xl text-secondary'>Kinetic Motion Systems</h2>
                            <p className='font-body text-14 text-description w-100'>Beyond static layouts. I specialize in Anime.js, Framer Motion,
                                and GSAP to create interfaces that feel alive and responsive to
                                human interaction.</p>

                            <div className='flex gap-8 py-3'>
                                <div>
                                    <h2 className='font-heading font-bold text-2xl text-primary'>120+</h2>
                                    <p className='font-body text-[10px] font-bold text-description'>Animations</p>
                                </div>
                                <div>
                                    <h2 className='font-heading font-bold text-2xl text-secondary'>60FPS</h2>
                                    <p className='font-body text-[10px] font-bold text-description'>Consistency</p>
                                </div>

                            </div>
                        </div>

                        <div className="right flex-1">
                            <div></div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default CoreStack;