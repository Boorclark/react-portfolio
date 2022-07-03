import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-orange-600'>Hello! My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
           Garrett Clark
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          <Typewriter
            options={{
              strings: ["I'm a Software Developer.", "I'm a Student.", "I'm an Active Learner."],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a software developer who builds and designs exceptional user-focused applications and digital experiences. 
          Currently, I am achieving this through developing an application for Berea College's CELTS program alongside a 
          team of excellent software developers.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600'>
            <Link to='work' smooth={true} duration={500}>
              View Work
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;