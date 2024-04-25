import React from 'react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { SocialIcon } from 'react-social-icons'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export default function Footer() {
    const [agreed, setAgreed] = useState(false)
  return (
   <>
   
   <div id="contact">
  
<div class="bg-gray-200 dark:bg-gray-900 mt-10 p-3 grid grid-cols-1 sm:gap-6 sm:grid-cols-2">

<div className='grid'>
<h4 class="tracking-widest text-xl uppercase  text-center  mt-20 text-gray-500 font-bold sm:text-left ml-20">Follow us </h4>
<div className='text-center  mt-5 sm:ml-20 sm:text-left'>
<SocialIcon url="https://twitter.com" />
<SocialIcon url="https://facebook.com" className='ml-5' />
<SocialIcon url='https://instagram.com' className='ml-5' />
<SocialIcon url='https://github.com' className='ml-5' />

</div>
   
          <div class="grid grid-cols-1 gap-2 sm:gap-6 sm:grid-cols-3">
              <div className='mt-10'>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900  dark:text-white">About Faster App</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <p>Get in touch</p>
                      </li>
                      <li>
                          <p>Things we like</p>
                      </li>
                  </ul>
              </div>
             
              <div className='mt-10'>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900  dark:text-white hover:underline">Onhovered/ Active</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
              <div className='mt-10'>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900  dark:text-white">We are hiring!</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                        <p> Resources</p>
                      </li>
                     
                  </ul>
              </div>
            
    
   </div>
  </div>
  <div className='grid '>
  <h4 class="tracking-widest text-xl uppercase  text-center  mt-20 text-gray-500 font-bold sm:text-left">Follow us </h4>
  <h1 class=" text-xl  text-center mt-8 text-violet-500 font-bold sm:text-4xl sm:text-left">hello@fasterapp.com </h1>
      <form action="#" method="POST" className="mx-auto  max-w-sm  text-center  mt-10 sm:ml-0 sm:text-left ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
         
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder='Your name'
              />
            
          </div>
         
          
            <div className="mt-2.5">
              <input
                type="text"
                name="e-mail"
                id="e-mail"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder='E-mail'
              />
            </div>
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                placeholder='Leave your messsage| '
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-purple-800"
                defaultValue={''}
              />
            </div>
          </div>
         
        </div>
        <div className="mt-3">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-6 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            SEND
          </button>
        </div>
        </div>
      </form>
    </div>
</div>
       
</div>

</>
  )
}
