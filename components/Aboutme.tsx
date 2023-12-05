/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Title from './Title';
import { SiInformatica } from 'react-icons/si';

const Aboutme = () => {
  return (
    <div className='wrapper'>
      <Title text="About Me" icon={<SiInformatica />} />
      <div className='text-lg tracking-wide flex flex-col gap-6'>
        <p>
          Hello, I'm Mian A. M, an entrepreneur, and a trailblazing developer
          with a passion for pushing the boundaries of what technology can achieve.
          My journey in the tech world has been marked by a relentless pursuit of innovation,
          and WMX is the culmination of my vision to redefine the messaging experience.
        </p>
        <p>
          I, a proficient and creative developer, excel in diverse technologies.
          A problem-solving maestro with a passion for continual learning,
          adaptability, tenacity, and effective communication underscore a commitment
          to excellence in the dynamic world of software development.
        </p>
        <p>
          Passion for the future of software development is an unwavering
          commitment to continual learning, embracing emerging technologies, and
          crafting innovative solutions that shape the digital landscape with
          creativity and excellence.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;


