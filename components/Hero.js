import { Fugaz_One } from 'next/font/google';
import React from 'react';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']});

export default function Hero() {
  return (
    <div className='py-4 sm:py-10 flex flex-col gap-4 sm:gap-8'>
        <h1 className={ 'text-5xl sm:text-6xl md:text-7xl ' +
        'text-center ' + fugaz.className
        }>
            Track your <span className='textGradient'>daily</span> mood with
            <span className='textGradient'> Moodl</span>!
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]'>
            Check if your in the mood or out of the zone
            <span className='font-semibold'> every day, every month, every year.</span>
        </p>
    </div>
  );
}
