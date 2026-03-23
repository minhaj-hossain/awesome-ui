import React from 'react';
import Button from '../button/Button';
import portraitImg from '../../assets/potrait.png';
import CoreStack from './CoreStack';

const Main = () => {
    return (
        <main className='text-white px-6 sm:px-0 font-body space-y-32 container mt-4  mx-auto'>

            <section className='banner-section grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4 items-center'>
                <div className="banner-left flex items-center order-2 lg:order-1">

                    <div className='space-y-8'>

                        {/* upper title text */}
                        <div className='flex gap-2 items-center'>
                            <div className="circle w-2 h-2 rounded-full bg-secondary"></div>

                            {/* text label means 12 px which i have set manualy */}
                            <p className='text-secondary font-bold text-label'>Available for technical architecture</p>
                        </div>

                        {/* banner header  */}
                        <div className='text-3xl md:text-4xl lg:text-6xl 2xl:text-8xl font-heading flex flex-col font-black'>
                            <span>
                                <span >CRAFTING </span>
                                <span>DIGITAL</span>
                            </span>
                            <span className='bg-gradient-to-r from-[#ff88b5] via-[#00f4fe] via-[#4ade80] to-[#d9ff00] bg-clip-text text-transparent  uppercase'>EXPERIENCES</span>
                            <span>THAT MOVE</span>
                        </div>

                        <p className="description text-description">
                            I'm Minhaj, a full stack developer who builds complete web products — from the UI down to the API. I'm currently a student, actively building projects and looking for my first professional role where I can contribute and grow fast.
                        </p>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <Button bgColor='#ff6ea9' textColor='#4b0027' borderColor='' textContent='Initiate Project' />

                            <Button textColor='#00f4fe' borderColor='rgba(71,71,84,0.3)' textContent='View Blueprints' />
                        </div>
                    </div>

                </div>

                <div className="banner-right order-1 lg:order-2 ">
                    <div className='py-8 pl-0 md:pl-8 '>
                        <img src={portraitImg} alt="" />
                    </div>
                </div>

            </section>


            <section>
                <CoreStack />
            </section>
        </main>
    );
};

export default Main;