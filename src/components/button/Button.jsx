import React from 'react';

const Button = ({ bgColor, textContent, textColor, borderColor }) => {

    return (
        <button className={` bg-[${bgColor}] text-[${textColor}] border border-[${borderColor}] uppercase rounded-full py-4.25 font-heading px-8 font-bold hover:shadow-dynamic-glow transition-all duration-150 ease-in-out`}>
            {textContent}
        </button>
    );
};

export default Button;