import React from "react";
import sucessImage from "../assets/success.jpg";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* <!-- Hero Section --> */}
      <section
        id='hero'
        className='bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom'
      >
        {/* <!-- Hero container --> */}
        <div className='container mx-auto px-6 text-center md:pt-10 pb-52'>
          <h1
            className='
          border-b border-b-white 
          max-w-2xl mx-auto mb-5 text-3xl font-bold leading-normal mt-14 md:text-4xl'
          >
            Education is not preparation for life; education is life itself
          </h1>

          <img src={sucessImage} alt='' className='mx-auto xl:w-1/2 ' />

          <button 
          onClick={()=> {
            navigate("/");
          }}
          className='p-3 mt-5 cursor-pointer font-bold text-white rounded-full w-80 bg-teal-600 hover:scale-95'>
            Go Back
          </button>
        </div>
      </section>
    </div>
  );
};

export default Success;
