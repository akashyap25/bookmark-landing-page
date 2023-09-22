import React from 'react';
import chrome from '../images/logo-chrome.svg';
import firefox from '../images/logo-firefox.svg';
import opera from '../images/logo-opera.svg';
import dots from '../images/bg-dots.svg';

const Download = () => {
  return (
    <div className='mt-16 text-center'>
      <div className='p-8 lg:p-16 max-w-screen-sm mx-auto'>
        <h2 className='text-slate-900 font-medium text-3xl lg:text-5xl'>
          Download the extension
        </h2>
        <p className='text-slate-600 font-normal opacity-75 my-4 text-base'>
          We've got more browsers in the pipeline.
          Please do let us know if you've got a favorite you'd like us to prioritize.
        </p>
      </div>

      <div className='flex flex-wrap justify-center'>
        <div className='p-4 lg:p-4 text-center'>
          <div className='bg-white rounded-lg p-0 shadow-lg'>
            <img src={chrome} alt='Chrome Logo' className='mx-auto' />
            <h3 className='text-slate-900 font-medium text-2xl lg:text-3xl mt-4 mb-2'>
              Add to Chrome
            </h3>
            <p className='text-slate-600 font-normal opacity-75 my-4 text-base'>
              Minimum version 62
            </p>
            <div className='my-10 w-full'>
              <img src={dots} alt='dots' />
            </div>
            <div className='flex justify-center '>
              <button className='bg-blue-500 mb-6 hover:bg-white text-white hover:text-blue-500 font-medium py-2 px-4 border border-blue-700 rounded'>
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>

        <div className='p-4 lg:p-4 text-center lg:mt-8'>
          <div className='bg-white rounded-lg p-0 shadow-lg'>
            <img src={firefox} alt='Firefox Logo' className='mx-auto' />
            <h3 className='text-slate-900 font-medium text-2xl lg:text-3xl mt-4 mb-2'>
              Add to Firefox
            </h3>
            <p className='text-slate-600 font-normal opacity-75 my-4 text-base'>
              Minimum version 55
            </p>
            <div className='my-10 w-full'>
              <img src={dots} alt='dots' />
            </div>
            <div className='flex justify-center'>
              <button className='bg-blue-500 mb-6 hover:bg-white text-white hover:text-blue-500 font-medium py-2 px-4 border border-blue-700 rounded'>
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>

        <div className='p-4 lg:p-4 text-center lg:mt-16'>
          <div className='bg-white rounded-lg p-0 shadow-lg'>
            <img src={opera} alt='Opera Logo' className='mx-auto' />
            <h3 className='text-slate-900 font-medium text-2xl lg:text-3xl mt-4 mb-2'>
              Add to Opera
            </h3>
            <p className='text-slate-600 font-normal opacity-75 my-4 text-base'>
              Minimum version 55
            </p>
            <div className='my-10 w-full'>
              <img src={dots} alt='dots' />
            </div>
            <div className='flex justify-center'>
              <button className='bg-blue-500 mb-6 hover:bg-white text-white hover:text-blue-500 font-medium py-2 px-4 border border-blue-700 rounded'>
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
