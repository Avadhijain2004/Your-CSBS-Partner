import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
    return (
        <section className='mx-32'>
            <div>
                <div>
                    <h3 className='text-5xl text-center mt-20'>Select Your Semester</h3>
                </div>
                <div className='flex gap-12 mt-10'>

                <Link to='/semester-1'>
                <div className='mt-10 border border-[#646cff] p-6 rounded-xl text-xl hover:font-semibold hover:text-violet-800 hover:bg-neutral-300 hover:border-1 hover:border-black'>
                    Semester 1
                </div>
                </Link>

                <Link to='/semester-2'>
                <div className='mt-10 border border-[#646cff] p-6 rounded-xl text-xl hover:font-semibold hover:text-violet-800 hover:bg-neutral-300 hover:border-1 hover:border-black'>
                    Semester 2
                </div>
                </Link>

                <Link to='/semester-3'>
                <div className='mt-10 border border-[#646cff] p-6 rounded-xl text-xl hover:font-semibold hover:text-violet-800 hover:bg-neutral-300 hover:border-1 hover:border-black'>
                    Semester 3
                </div>
                </Link>

                <Link to='/semester-4'>
                <div className='mt-10 border border-[#646cff] p-6 rounded-xl text-xl hover:font-semibold hover:text-violet-800 hover:bg-neutral-300 hover:border-1 hover:border-black'>
                    Semester 4
                </div>
                </Link>

                <Link to='/semester-5'>
                <div className='mt-10 border border-[#646cff] p-6 rounded-xl text-xl hover:font-semibold hover:text-violet-800 hover:bg-neutral-300 hover:border-1 hover:border-black'>
                    Semester 5
                </div>
                </Link>

                <Link to='/semester-6'>
                <div className='mt-10 border border-[#646cff] p-6 rounded-xl text-xl hover:font-semibold hover:text-violet-800 hover:bg-neutral-300 hover:border-1 hover:border-black'>
                    Semester 6
                </div>
                </Link>

                <Link to='/semester-7'>
                <div className='mt-10 border border-[#646cff] p-6 rounded-xl text-xl hover:font-semibold hover:text-violet-800 hover:bg-neutral-300 hover:border-1 hover:border-black'>
                    Semester 7
                </div>
                </Link>
                
                </div>
            </div>
        </section>
    )
}

export default Services
