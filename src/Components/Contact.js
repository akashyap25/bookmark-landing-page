import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="mt-24 bg-blue-500 px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-white font-normal text-sm uppercase tracking-widest mb-8 text-center">
            35,000+ already joined
          </h3>
          <h2 className="text-white text-3xl mb-8 lg:text-4xl text-center lg:w-96 lg:mx-auto">
            Stay up to date with what we're doing
          </h2>

          <form className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:max-w-xl md:mx-auto">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
              className="w-full py-2 px-4 rounded shadow-lg text-sm"
            />
            <button
              type="submit"
              className="bg-red-400 text-white py-2 px-4 rounded shadow-lg hover:opacity-75 md:w-40 text-sm"
            >
              Contact Us
            </button>
          </form>
        </div>
        </div>
    </>
  )
}

export default Contact;