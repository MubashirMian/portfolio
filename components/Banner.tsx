import React from 'react';
import Image from 'next/image'; 
import profile from "../public/images/profilepic.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={profile}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">John Doe</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Full Stack Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
        From humble beginnings to the summit of success,
             my story is one of resilience, strategic thinking,
              and an unwavering belief in the power of entrepreneurship
               to shape the future. I thrive on challenges, viewing them a
               s opportunities to learn, grow, and inspire others. Beyond the boardroom, 
               I am dedicated to philanthropy, using my resources to address pressing global
              issues and uplift communities.
        </p>
      </div>
    </div>
  );
};

export default Banner;
