import React from 'react';
import { BiChevronRight } from "react-icons/bi";

export default function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl'>I’m a fullstack web developer from Argentina, who enjoys the creation of content living on the internet. I have always been passionate about technology and i consider myself a perfectionist in what I do. Always trying to give my best, committed to the work and seeking to obtain new knowledge to improve my development as a programmer.
        </p>
        <br/>
        <p className='text-xl'>
        Whenever I’m not coding, you can find me either playing videogames or learning something worthy of my time.
        </p>
        <p className='text-xl'>Some of the technologies I've been learning recently are:</p>
        <br />
        <ul className='grid grid-cols-2'>
          <li className='flex items-center text-lg'><i><BiChevronRight/></i>Spring</li>
          <li className='flex items-center text-lg'><i><BiChevronRight/></i>Typescript</li>
          <li className='flex items-center text-lg'><i><BiChevronRight/></i>React-Native</li>
          <li className='flex items-center text-lg'><i><BiChevronRight/></i>Java</li>
        </ul>
        
      </div>
    </div>
  )
};

