import React from 'react'
import {bag, cart, logo} from "../assets/index";

const Header = () => {
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-grey-800 font-titleFont'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <div>
                <img className='w-30' src={logo} alt="logo" />
            </div>

            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-black font-bold gover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                    <li className='text-base text-black font-bold gover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                    <li className='text-base text-black font-bold gover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                    <li className='text-base text-black font-bold gover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                    <li className='text-base text-black font-bold gover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
                </ul>
                <div className='relative'>
                <img className='w-6' src={bag} alt="cart" />
                <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>0</span>
                </div>
                <img className='w-6 h-6' src={cart} alt="cart" />
            </div>
        
        </div>
        
    </div>
  )
}

export default Header