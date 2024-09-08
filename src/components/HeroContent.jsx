import React from 'react'
import hero from './../assets/hero.png'

function HeroContent() {
    return (
        <section className='w-auto mt-24 h-[500px] mx-12'>
            <div className='flex'>
                <h1 className='text-6xl font-semibold mx-12 w-1/2 leading-tight'>
                "Your Gateway to Mastering Computer Science with Business Systems" 
                </h1>
                
                <div className='mr-14 w-auto'>
                <img src={hero} alt="" className='rounded-xl'/>
                </div>
            </div>
            
        </section>
    )
}

export default HeroContent
