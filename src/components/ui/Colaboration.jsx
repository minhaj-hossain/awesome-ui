import React from 'react';

const Colaboration = () => {
    return (
        <div className='space-y-16 mb-44'>

            {/* colaboration header  */}
            <div className="cola-header space-y-4 text-center">
                <h1 className='font-heading text-5xl font-bold'>Let’s Build Something Remarkable</h1>
                <p className='font-body text-description '>Open for collaborations and revolutionary digital architectures.</p>
            </div>


            {/* colaboration form  */}
            <div className='space-y-8'>

                {/* upper form  */}
                <div className="upper-form flex flex-col sm:flex-row gap-8">
                    <div className="form-left flex flex-col space-y-2 flex-1">
                        <label className='font-heading uppercase font-bold text-[#474754] text-label' htmlFor="commander">Commander Name</label>
                        <input className='font-body text-[rgba(117,116,130,0.4)] rounded-md bg-[#1e1e2d] py-4.25 px-6' type="text" id='commander' placeholder='Identity Code' />
                    </div>

                    <div className="form-right flex flex-col space-y-2 flex-1">
                        <label className='font-heading uppercase font-bold text-[#474754] text-label' htmlFor="access">Access Email</label>
                        <input className='font-body text-[rgba(117,116,130,0.4)] rounded-md bg-[#1e1e2d] py-4.25 px-6' type="email" id='access' placeholder='protocol@domain.com' />
                    </div>
                </div>

                {/* lower form  */}

                <div>
                    <div className="form-right flex flex-col space-y-2 flex-1">
                        <label className='font-heading uppercase font-bold text-[#474754] text-label' htmlFor="project">Project Blueprint</label>
                        <textarea className='font-body text-[rgba(117,116,130,0.4)] rounded-md bg-[#1e1e2d] py-4.25 px-6' type="email" rows={4} id='project' placeholder='Describe the vision...' ></textarea>
                    </div>
                </div>
            </div>

            {/* btn  */}

            <div className=' flex justify-center'>
                <button className={` bg-primary hover:bg-primary-glow text-[#610034]  uppercase rounded-full py-4.25 font-heading px-8 font-bold hover:shadow-dynamic-glow transition-all duration-150 ease-in-out flex gap-2 items-center`}>
                    Send Inquiry <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13ZM2 13V8V3V6.5V9.5V13Z" fill="#610034" />
                    </svg>
                </button>

            </div>
        </div>
    );
};

export default Colaboration;