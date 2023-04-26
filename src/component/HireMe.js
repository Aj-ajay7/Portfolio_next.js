import Link from 'next/link';
import React from 'react';

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <img src='../../SDE1.png' className='fill-black animate-spin-slow'></img>
        </div>
        <Link href="mailto:ajsatyageeta@gmail.com" className='flex items-center justify-center text-light
        absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 bg-dark rounded-full 
        border border-solid-dark w-20 h-20 font-semibold
        hover:bg-light hover:text-dark'>Hire Me</Link>        
    </div>
  )
}

export default HireMe