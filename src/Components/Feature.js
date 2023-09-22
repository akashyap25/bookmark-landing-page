import React, {useState} from 'react';
import img1 from '../images/illustration-features-tab-1.svg';
import img2 from '../images/illustration-features-tab-2.svg';
import img3 from '../images/illustration-features-tab-3.svg';

const data = [
    {
        id: 1,
        title: 'Bookmark in one click',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        link: 'More Info',
        button: 'Simple Bookmarking',
        image: img1
    },
    {
        id: 2,
        title: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        link: 'More Info',
        button: 'Speedy Searching',
        image: img2
    },
    {
        id: 3,
        title: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        link: 'More Info',
        button: 'Easy Sharing',
        image: img3
    }
 ]

const Feature = () => {
    const [cards] = useState(data);
    const [value, setValue] = useState(0);

    const {image, title, description, link } = cards[value];

  return (
    <>
        <div className=' mt-24 items-center'>
            <div className='p-8 lg:p-16 text-center max-w-screen-sm mx-auto'>
                <h2 className='text-slate-900 font-medium text-3xl lg:text-5xl'>
                    Features
                </h2>
                <p className='text-slate-600 font-normal opacity-75 my-4 text-base'>
                    Our aim is to make it quick and easy for you to access your favourite websites.
                     Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>

            <div>
          <ul className="flex justify-center flex-col text-center my-10 md:flex-row">
            {cards.map((tab, index) => (
              <li
                key={tab.id}
                className="border-t border-slate-400 last:border-b md:border-t-0 md:border-b"
              >
                <button
                  onClick={() => setValue(index)}
                  className={`py-3 md:px-6 ${
                    index === value && "border-b-2 border-red-400"
                  }`}
                >
                  {tab.button}
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:flex items-center justify-center lg:gap-16 pt-10 max-w-7xl mx-auto">
            <div className="lg:flex-1 relative p-12 lg:p-12">
              <img src={image} alt="" className="block mx-auto w-full" />
            </div>

            <div className="pt-20 lg:text-left lg:flex-1 p-8 lg:p-16 text-center  max-w-screen-sm mx-auto">
              <h2 className="text-slate-900 font-medium text-2xl lg:text-4xl">{title}</h2>
              <p className="text-slate-600 font-normal opacity-75 my-4">{description}</p>
              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 px-4 border border-blue-700 rounded">
                {link}
              </button>
            </div>
          </div>
        </div>

            
        </div>
    </>
  )
}

export default Feature