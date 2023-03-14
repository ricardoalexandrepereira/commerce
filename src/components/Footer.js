import React from 'react'
import { logoWhite } from '../assets';
import {FaFacebookF,FaInstagram,FaGithub, FaHome} from "react-icons/fa"
import {BsPaypal, BsPersonFill} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-10 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4 items-center'>
            <div className='flex flex-col gap-7'>
                <img className='w-32 text-white' src={logoWhite} alt="logo" />
                <p className='text-white font-titleFont text-sm tracking-wide'>Ricardo Pereira Coder</p>
                <div className='flex gap-5 text-lg'>
                    <FaGithub className='hover:text-white duration-300 cursor-pointer'/>
                    <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                    <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                </div>
            </div>

           <div className='text-base flex flex-col gap-2'>
           <h2 className='text-2xl font-semibold text-white mb-4 '>locate us</h2>
           <p>Lisbon ,Portugal</p>
           <p>Phone: +351 912250365</p>
           <p>Email: ricardo_certe@hotmail.com</p>
           </div>

          <div>
          <h2 className='text-2xl font-semibold text-white mb-4 '>Profile</h2>
          <div className='flex flex-col gap-2'>
          <p className='flex items-center gap-3'><span><BsPersonFill/></span> my account</p>
          
          <p className='flex items-center gap-3'><span><BsPaypal/></span>checkout</p>
         
          <p className='flex items-center gap-3'><span><FaHome/></span> Order tracking</p>
         
          <p className='flex items-center gap-3'><span><MdLocationOn /></span> Help & Support</p>
          </div>

          </div>
          
          <div className='flex flex-col justify-center'>
            <input className='bg-transparent border py-2 px-4 text-sm mb-2' placeholder='email' type="text" />
            <button>Subscribe</button>
          </div>
        </div>

    </div>
  )
}

export default Footer