import React from 'react';
import hero from '../images/illustration-hero.svg';

const Landing = () => {
  return (
    <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
      
      <div className="lg:w-1/2 lg:order-2">
        <img src={hero} alt="hero" className="w-full" />
      </div>

      
      <div className="lg:w-1/2 lg:order-1  p-8 lg:p-24 text-center lg:text-left">
        <h1 className="text-slate-900 font-medium text-3xl lg:text-5xl">
          A Simple Bookmark Manager
        </h1>
        <p className="text-slate-600 opacity-75 my-7 text-base">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="space-x-4 flex ">
          <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 px-4 border border-blue-700 rounded">
            Get it on Chrome
          </button>
          <button className="bg-white hover:bg-white text-slate-900 hover:text-slate-800 font-medium py-2 px-4 border shadow-md hover:border-slate-800 rounded">
            Get it on Firefox
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
