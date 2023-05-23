import React from 'react'
import formimage from "../../assets/all-images/toyota-offer-2.png"
import Formcomp from './formcomp'
function Heroform() {
    return (
        <div className=' relative -mt-[100px] w-full h-80 border border-black  '>
            <div className='container mx-auto border border-black '>
                <div className='grid grid-cols-3 gap-4 bg-white px-3 '>

                <div className='col-span-1 border border-red-500 py-[65px] px-[35px] bg-cover bg-center' style={{ backgroundImage: `linear-gradient(to bottom, rgba(249, 168, 38, 0.9), rgba(249, 168, 38, 0.9)), url(${formimage})`}}>
                    <h2 className='font-bold text-[2.8rem]  '>Find your best car here</h2>
                </div>
                <div className='col-span-2 border border-green-500 py-[55px] px-[15px]'>
                    
                    <Formcomp />
                   

                </div>
                </div>

            </div>

        </div>
        
    )
}

export default Heroform
