import React from 'react'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline'
import Logo from '../utils/Logo.svg'

const Navbar = () => {
  return (
    <div>
        <div className='flex h-20 mx-2 mt-4 '>
            <img src={Logo} alt="Logo" className='h-14 w-14 ' />   
            <h1 className='text-2xl font-semibold mt-6 px-4 ' >Wid App</h1>         
            <button> <ChevronLeftIcon className='w-7'/></button>
            <button> <ChevronRightIcon className='w-7'/></button>

       
        </div>
        <hr />
    </div>
  )
}

export default Navbar