import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'
import { FaGlobeAsia } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { FiPhone } from 'react-icons/fi'
function Headermid() {
    return (
        <div className='py-5 bg-white hidden md:flex'>
            <div className='container mx-auto flex justify-between items-center '>
                <div className='flex space-x-2 items-center'>
                    <AiOutlineCar className='text-primary font-extrabold text-4xl' />
                    <h1 className='font-bold text-primary text-xl'>Rent Car <br />Service</h1>

                </div>
                <div className='flex space-x-2 items-center'>
                    <FaGlobeAsia className='text-primary font-bold text-4xl' />
                    <h1 className='font-bold text-primary text-lg'>Bangladesh<br /><span className='font-medium text-base'>Sylhet City, Bangladesh</span></h1>

                </div>
                <div className='flex space-x-2 items-center'>
                    <FiClock className='text-primary font-bold text-4xl' />
                    <h1 className='font-bold text-primary text-lg'>Sunday to Friday<br /><span className='font-medium text-base'>10am-7am</span></h1>
                </div>

                <button className='btn '> <FiPhone className='text-sm mr-1' /> Request a call </button>





            </div>
        </div>

    )
}

export default Headermid
