import React from 'react'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { TrophyIcon } from '@heroicons/react/24/solid'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

export default function About() {
  return (
    <>
    <div id="how-it-works">
    <div class="text-left md:text-justify p-7 mt-20">
   
      <div className='flex items-center'>
        
      <h1 className='text-4xl sm:text-6xl '><b>Delivering good designs since 1954  </b></h1>
    </div>
      <p className='mt-10 text-3xl sm:text-2xl'>Designs that prioritize user experience blend functionality with aesthetics seamlessly.
Effective designs communicate ideas visually, evoking emotions and driving engagement.




</p>
    </div>
    <div class="grid grid-cols-1 p-10 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 gap-40 mt-1" >
      <div class="w-full h-64">
      <div className=" flex justify-center items-center w-20 h-20 bg-pink-600 rounded-full">
      <PhoneIcon className="h-15 w-10 text-white  " />
      </div>
      <br></br>
     <div className='text-left'>
     <h1 className='text-3xl sm:text-4xl'><b>Support</b></h1>
    <p className='text-2xl sm:text-xl  mt-5'>Offering reliable assistance and guidance, ensuring you never face challenges alone and trust us.</p>
    <button type="button" class="text-xl   font-bold leading-6 mt-5 text-violet-600 bg-white rounded-md py-3 px-5  border-zinc-500 border-2">Learn more</button>
    </div>
      
      </div>
      <div class="w-full h-64 ">
      <div className=" flex justify-center items-center w-20 h-20 bg-blue-500 rounded-full">
      <TrophyIcon className="h-15 w-10 text-white" />
      </div>
      <br></br>
      <div className='text-left'>
      <h1 className=' text-3xl sm:text-4xl '><b>Sales growth</b></h1>
      <p className='text-2xl  sm:text-xl mt-5'>Driving success through strategic initiatives, expanding horizons and maximizing revenue.</p>
      <button type="button" class="text-xl   font-bold leading-6 mt-5 text-violet-600 bg-white rounded-md py-3 px-5 border-zinc-500 border-2">Learn more</button>
      </div>
      </div>
      <div class="w-full h-64">
      <div className=" flex justify-center items-center w-20 h-20 bg-violet-600 rounded-full">
      < EnvelopeIcon className="h-15 w-10 text-white  " />
      </div>
      <br></br>
      <div className='text-left '>
      <h1 className='  text-3xl sm:text-4xl '><b>Swap icon</b></h1>
      <p className='text-2xl sm:text-xl  mt-5'> Facilitating intuitive user experiences through easily recognizable symbols for quick actions.</p>
      <button type="button" class="text-xl   font-bold leading-6 mt-5 text-violet-600 bg-white rounded-md py-3 px-5  border-zinc-500 border-2">Learn more</button>
      </div>
      </div>
      <div class="w-full h-64">
      <div className=" flex justify-center items-center w-20 h-20 bg-lime-600 rounded-full">
      <BeakerIcon className="h-15 w-10 text-white   " />
      </div>
      <br></br>
      <div className='text-left'>
      <h1 className='text-3xl sm:text-4xl'><b>Component</b></h1>
      <p className='text-2xl sm:text-xl mt-5'> Empowering seamless development by building modular components for efficient applications.</p>
      <button type="button" class="text-xl   font-bold leading-6 mt-5 text-violet-600 bg-white rounded-md py-3 px-5  border-zinc-500 border-2">Learn more</button>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}
