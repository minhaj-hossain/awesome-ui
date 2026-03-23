import React from 'react';

const Button = ({ bgColor, textContent, textColor, borderColor }) => {

    console.log(textColor)

    return (
        <button className={` bg-[${bgColor}] text-[${textColor}] border border-[${borderColor}] uppercase rounded-full py-4.25 font-heading px-8 font-bold`}>
            {textContent}
        </button>
    );
};

export default Button;