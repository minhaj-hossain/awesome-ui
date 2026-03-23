import React from 'react';

const Academic = () => {
    return (
        <div className='space-y-6'>
            <div className="academic-section grid grid-cols-1 md:grid-cols-12">

                {/* academic left card */}
                <div className="academic-left md:col-span-7 bg-[#12121e] rounded-2xl p-8 space-y-12">

                    {/* header  */}
                    <div className='flex justify-between'>
                        <h3 className='font-heading font-bold text-3xl'>Academic
                            Journey</h3>
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 18L4 14.2V8.2L0 6L11 0L22 6V14H20V7.1L18 8.2V14.2L11 18ZM11 9.7L17.85 6L11 2.3L4.15 6L11 9.7ZM11 15.725L16 13.025V9.25L11 12L6 9.25V13.025L11 15.725Z" fill="#00F4FE" />
                        </svg>
                    </div>

                    {/* edu details  */}
                    <div className='border-l border-[#757482] space-y-8'>

                        {/* university details  */}
                        <div className="uni font-heading pl-6 py-3">
                            <h2 className=' text-primary font-bold text-[18px]'>Northern University Bangladesh</h2>
                            <h4 className='font-body text-14 text-description'>BSc in Computer Science & Engineering</h4>
                            <p className='text-[10px] text-[#757482]'>ONGOING</p>
                        </div>

                        {/* polytechnic */}
                        <div className="uni font-heading pl-6">
                            <h2 className=' text-secondary font-bold text-[18px]'>Chapainawabganj Polytechnic Institute</h2>
                            <h4 className='font-body text-14 text-description'>Diploma in Computer Technology</h4>
                            <p className='text-[10px] text-[#757482]'>COMPLETED</p>
                        </div>
                    </div>

                    <div className='flex gap-4 bg-[#1e1e2d] rounded-md border items-center border-[rgba(255,255,255,0.05)] p-4'>
                        <div className='bg-[rgba(243,255,202,0.1)] p-4 rounded-2xl'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8L16.75 5.25L14 4L16.75 2.75L18 0L19.25 2.75L22 4L19.25 5.25L18 8ZM18 22L16.75 19.25L14 18L16.75 16.75L18 14L19.25 16.75L22 18L19.25 19.25L18 22ZM8 19L5.5 13.5L0 11L5.5 8.5L8 3L10.5 8.5L16 11L10.5 13.5L8 19ZM8 14.15L9 12L11.15 11L9 10L8 7.85L7 10L4.85 11L7 12L8 14.15Z" fill="#F3FFCA" />
                            </svg>
                        </div>
                        <p className='text-label font-body text-description'>Focusing on high-performance algorithms and creative visual computing.</p>
                    </div>

                </div>

                {/* academic right card  */}
                <div className="academic-right md:col-span-5 p-8 space-y-8 bg-[#1e1e2d] rounded-2xl">

                    <h3 className='font-bold text-3xl font-heading'>Expertise</h3>

                    <div className='space-y-6'>
                        <div className='flex justify-between items-center'>
                            <p className='font-medium flex-3 text-[#e9e6f7] font-body'>Front-end Engine</p>
                            <div className='flex-1'>
                                <div className='w-[90%] h-1  bg-[#00F4FE] rounded-4xl'></div>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p className='font-medium flex-3 text-[#e9e6f7] font-body'>UI Design Systems</p>
                            <div className='flex-1'>
                                <div className='w-[85%] h-1  bg-[#FF88B5] rounded-4xl'></div>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p className='font-medium flex-3 text-[#e9e6f7] font-body'>Back-end Core</p>
                            <div className='flex-1'>
                                <div className='w-[80%] h-1  bg-[#BEEE00] rounded-4xl'></div>
                            </div>
                        </div>
                    </div>

                    {/* experties info */}
                    <div className='flex gap-5'>
                        <div className='left space-y-2 p-4 flex-1 rounded-md bg-[#242434]'>
                            <svg width="152" height="18" viewBox="0 0 152 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.85 18C9.95 18 9.19167 17.6917 8.575 17.075C7.95833 16.4583 7.65 15.7167 7.65 14.85C7.65 13.5833 8.1625 12.4375 9.1875 11.4125C10.2125 10.3875 11.4917 9.75 13.025 9.5C12.975 8.9 12.825 8.44583 12.575 8.1375C12.325 7.82917 11.9833 7.675 11.55 7.675C11.05 7.675 10.5083 7.88333 9.925 8.3C9.34167 8.71667 8.65 9.4 7.85 10.35C6.55 11.9 5.59583 12.9083 4.9875 13.375C4.37917 13.8417 3.725 14.075 3.025 14.075C2.175 14.075 1.45833 13.7583 0.875 13.125C0.291667 12.4917 0 11.725 0 10.825C0 9.925 0.195833 9.00417 0.5875 8.0625C0.979167 7.12083 1.64167 5.99167 2.575 4.675C2.89167 4.24167 3.125 3.875 3.275 3.575C3.425 3.275 3.5 3.03333 3.5 2.85C3.5 2.73333 3.47917 2.64583 3.4375 2.5875C3.39583 2.52917 3.33333 2.5 3.25 2.5C3.08333 2.5 2.875 2.60417 2.625 2.8125C2.375 3.02083 2.08333 3.34167 1.75 3.775L0 2C0.533333 1.35 1.075 0.854167 1.625 0.5125C2.175 0.170833 2.71667 0 3.25 0C4.01667 0 4.66667 0.266667 5.2 0.8C5.73333 1.33333 6 2 6 2.8C6 3.28333 5.875 3.81667 5.625 4.4C5.375 4.98333 4.95833 5.68333 4.375 6.5C3.74167 7.4 3.27083 8.19167 2.9625 8.875C2.65417 9.55833 2.5 10.1583 2.5 10.675C2.5 10.9583 2.54583 11.1792 2.6375 11.3375C2.72917 11.4958 2.85833 11.575 3.025 11.575C3.19167 11.575 3.3375 11.5292 3.4625 11.4375C3.5875 11.3458 3.81667 11.125 4.15 10.775C4.36667 10.5417 4.625 10.2542 4.925 9.9125C5.225 9.57083 5.59167 9.15 6.025 8.65C7.075 7.4 8.025 6.50833 8.875 5.975C9.725 5.44167 10.6167 5.175 11.55 5.175C12.6667 5.175 13.5833 5.55 14.3 6.3C15.0167 7.05 15.425 8.075 15.525 9.375H18V11.875H15.525C15.3917 13.7417 14.9042 15.2292 14.0625 16.3375C13.2208 17.4458 12.15 18 10.85 18ZM10.9 15.5C11.4333 15.5 11.8833 15.1958 12.25 14.5875C12.6167 13.9792 12.8667 13.1333 13 12.05C12.2333 12.2333 11.5667 12.5958 11 13.1375C10.4333 13.6792 10.15 14.2167 10.15 14.75C10.15 14.9833 10.2167 15.1667 10.35 15.3C10.4833 15.4333 10.6667 15.5 10.9 15.5Z" fill="#00F4FE" />
                            </svg>
                            <p className='text-[10px] font-heading text-description'>
                                Motion
                            </p>
                        </div>

                        <div className='left space-y-2 p-4 flex-1 rounded-md bg-[#242434]'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18C6.48333 18 4.35417 17.6125 2.6125 16.8375C0.870833 16.0625 0 15.1167 0 14V4C0 2.9 0.879167 1.95833 2.6375 1.175C4.39583 0.391667 6.51667 0 9 0C11.4833 0 13.6042 0.391667 15.3625 1.175C17.1208 1.95833 18 2.9 18 4V14C18 15.1167 17.1292 16.0625 15.3875 16.8375C13.6458 17.6125 11.5167 18 9 18ZM9 6.025C10.4833 6.025 11.975 5.8125 13.475 5.3875C14.975 4.9625 15.8167 4.50833 16 4.025C15.8167 3.54167 14.9792 3.08333 13.4875 2.65C11.9958 2.21667 10.5 2 9 2C7.48333 2 5.99583 2.2125 4.5375 2.6375C3.07917 3.0625 2.23333 3.525 2 4.025C2.23333 4.525 3.07917 4.98333 4.5375 5.4C5.99583 5.81667 7.48333 6.025 9 6.025ZM9 11C9.7 11 10.375 10.9667 11.025 10.9C11.675 10.8333 12.2958 10.7375 12.8875 10.6125C13.4792 10.4875 14.0375 10.3333 14.5625 10.15C15.0875 9.96667 15.5667 9.75833 16 9.525V6.525C15.5667 6.75833 15.0875 6.96667 14.5625 7.15C14.0375 7.33333 13.4792 7.4875 12.8875 7.6125C12.2958 7.7375 11.675 7.83333 11.025 7.9C10.375 7.96667 9.7 8 9 8C8.3 8 7.61667 7.96667 6.95 7.9C6.28333 7.83333 5.65417 7.7375 5.0625 7.6125C4.47083 7.4875 3.91667 7.33333 3.4 7.15C2.88333 6.96667 2.41667 6.75833 2 6.525V9.525C2.41667 9.75833 2.88333 9.96667 3.4 10.15C3.91667 10.3333 4.47083 10.4875 5.0625 10.6125C5.65417 10.7375 6.28333 10.8333 6.95 10.9C7.61667 10.9667 8.3 11 9 11ZM9 16C9.76667 16 10.5458 15.9417 11.3375 15.825C12.1292 15.7083 12.8583 15.5542 13.525 15.3625C14.1917 15.1708 14.75 14.9542 15.2 14.7125C15.65 14.4708 15.9167 14.225 16 13.975V11.525C15.5667 11.7583 15.0875 11.9667 14.5625 12.15C14.0375 12.3333 13.4792 12.4875 12.8875 12.6125C12.2958 12.7375 11.675 12.8333 11.025 12.9C10.375 12.9667 9.7 13 9 13C8.3 13 7.61667 12.9667 6.95 12.9C6.28333 12.8333 5.65417 12.7375 5.0625 12.6125C4.47083 12.4875 3.91667 12.3333 3.4 12.15C2.88333 11.9667 2.41667 11.7583 2 11.525V14C2.08333 14.25 2.34583 14.4917 2.7875 14.725C3.22917 14.9583 3.78333 15.1708 4.45 15.3625C5.11667 15.5542 5.85 15.7083 6.65 15.825C7.45 15.9417 8.23333 16 9 16Z" fill="#FF88B5" />
                            </svg>
                            <p className='text-[10px] font-heading text-description'>
                                Architecture
                            </p>
                        </div>


                    </div>
                </div>
            </div>

                {/* quote */}
            <div className="quote p-12 rounded-4xl bg-[rgba(255,136,181,0.1)]">
                <p className='font-heading text-[48px] font-light text-center text-[#ff88b5]'>"Design is not just what it looks like; it's how it <span className='underline'>moves</span> through time"</p>
            </div>
        </div>
    );
};

export default Academic;