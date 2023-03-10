import React from 'react';
import dogsApp from '../assets/portfolio/dogs-app.png';
import vinoRojo from '../assets/portfolio/vino-rojo-restaurante.png';
import weatherApp from '../assets/portfolio/weather-app.png';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Portfolio() {

  const portfolios = [
    {
      id: 1,
      src: weatherApp,
      href: 'https://weather-app-constantino.vercel.app/',
      github: 'https://github.com/consbenjamin/Weather-App',
    },
    {
      id: 2,
      src: vinoRojo,
      href: 'https://vino-rojo-bodegon.vercel.app/',
      github: 'https://github.com/consbenjamin/Vino-Rojo-Bodegon',
    },
    {
      id: 3,
      src: dogsApp,
      href: 'https://pi-henry-dogs-v3i7.vercel.app/',
      github: 'https://github.com/consbenjamin/PI-Henry-Dogs',
    },
  ];


  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit'>
      <div className='max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work 👇</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 px-12 sm:px-0'>
        {portfolios.map(({ id, src, href, github }) => (
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-evenly p-4'>
            <a className='text-3xl cursor-pointer duration-150 hover:scale-110' href={github} target='_blank' rel='noopener noreferrer'>
                <FaGithub/>
              </a>
              <a className='text-3xl cursor-pointer duration-150 hover:scale-110' href={href} target='_blank' rel='noopener noreferrer'>
                <FaExternalLinkAlt/>
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

