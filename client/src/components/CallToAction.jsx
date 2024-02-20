import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl'>
                Want to contact me?
            </h2>
            <p className='text-gray-500 my-2'>
                You can access all my information here
            </p>
            <Link to='/about' className='flex justify-center'>
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                Contact Me!
            </Button>
            </Link>
        </div>
        <div className="p-7 flex-1">
            <img src="https://res.cloudinary.com/wajahatkarimcom/image/upload/v1518636807/contactme.png" />
        </div>
    </div>
  )
}
