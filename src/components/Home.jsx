import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import MovingComponent from 'react-moving-text'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ccd6f6] font-bold'>
          <MovingComponent
            type="slideInFromRight"
            duration="1100ms"
            delay="index * 100ms"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            Hello! My name is
          </MovingComponent>
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-orange-600'>
          <MovingComponent
            type="slideInFromLeft"
            duration="1100ms"
            delay="index * 100ms"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            Garrett Clark
          </MovingComponent>
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        <MovingComponent
            type="jelly"
            duration="1100ms"
            delay="index * 100ms"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <Typewriter
              options={{
                strings: ["I'm a Software Developer.", "I'm a CS Student.", "I'm an Active Learner."],
                autoStart: true,
                loop: true,
              }}
            />
          </MovingComponent>
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          <MovingComponent
            type="jelly"
            duration="1100ms"
            delay="index * 100ms"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            I'm a software developer and student who is learning to build exceptional user-focused applications and digital experiences. 
            Currently, I am achieving this through developing an application for Berea College's CELTS program alongside a 
            team of excellent software developers.
          </MovingComponent>
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600'>
              <MovingComponent
                type="jelly"
                duration="1100ms"
                delay="index * 100ms"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                View Work  
              </MovingComponent>
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;