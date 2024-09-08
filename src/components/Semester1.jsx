import React from 'react'
import discrete from './../assets/discrete.jpeg'

function Semester1() {
    return (
        <section className='mt-20 mx-24'>
            <div>
                <div className='h-60 border-2 border-white w-60 rounded-lg hover:border-2 hover:border-[#646cff] p-5 hover:p-4 flex flex-wrap items-center justify-center'>
                    <img src={discrete} alt="" className='' />
                    <a href="./Unit1.pdf" download="Unit1.pdf">
                    <button className='button mt-4 hover:font-semibold'>Download Notes</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Semester1
