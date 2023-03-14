import React, { useState } from 'react'
import {HiArrowRight, HiArrowLeft} from "react-icons/hi"

const Banner = () => {



const data = [
    "https://img.freepik.com/free-vector/cashier-concept-worker-cashier-counter-supermarket-shop-store-client-service-payment-operation-cash-accounting-calculations-vector-illustration_613284-808.jpg?w=826&t=st=1678726178~exp=1678726778~hmac=7b441d1796e0e27b83b3c32aaff88ea8b8a7e5c6da3f41be1af57aa56dc72bef",
    "https://img.freepik.com/free-vector/flooring-installer-online-service-platform-professional-parquet-laying-wooden-tile-floor-home-repair-renovation-concept-online-shop-flat-vector-illustration_613284-1616.jpg?w=740&t=st=1678726223~exp=1678726823~hmac=fa64cb1574084ccb7b1e1a3b54eda5f655b7ed1f7c51406425e7dc81736e8224",
    "https://img.freepik.com/free-vector/costumers-using-digital-gadgets-online-shopping-sales-professional-drones-delivering-parcels-from-internet-stores-female-users-flat-vector-illustration-delivery-ecommerce-concept_74855-22426.jpg?w=740&t=st=1678726245~exp=1678726845~hmac=fe3eb58754b3a218f0b29d53f7b50a2fdb8bc3a9de35d9530357e53eec3aa0a7",
    "https://img.freepik.com/free-vector/market-research-studies-abstract-concept-vector-illustration-explore-new-market-segment-product-testing-customers-needs-research-brand-management-studies-paid-focus-group-abstract-metaphor_335657-2948.jpg?w=740&t=st=1678726279~exp=1678726879~hmac=526d075e8005e2f906d673efbecbd0cb5f3a1d2a4db35e60477bded5b5c22446"
]


const [currentSlide, setCurrentSlide] = useState(0)

const prevSlide = ()=>{
setCurrentSlide(currentSlide === 0 ? 3 : (prev)=>prev-1)
}
const nextSlide = ()=>{
setCurrentSlide(currentSlide === 3 ? 0 : (prev)=>prev+1)
}




  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
            <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
                <img className='w-screen h-[90vh] object-cover' src={data[0]} alt="ImgOne" loading="priority" />
               
                <img className='w-screen h-[90vh] object-cover' src={data[1]} alt="ImgTwo" loading="priority" />
                <img className='w-screen h-[90vh] object-cover' src={data[2]} alt="ImgThree" loading="priority" />
                <img className='w-screen h-[90vh] object-cover' src={data[3]} alt="ImgFour" loading="priority" />
            </div>
            <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-32">
                <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                    <HiArrowLeft/>
                </div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                    <HiArrowRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner