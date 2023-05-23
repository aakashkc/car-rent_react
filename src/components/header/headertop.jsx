import React from 'react'
import {TbPhone} from 'react-icons/tb'
import {AiOutlineLogin} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
function Headertop() {
    return (
    
        <div className='py-2 bg-primary hidden md:flex items-center '>
            <div className=' container mx-auto flex justify-between items-center' >
                <div className='flex space-x-3'>
                    <p className='text-white font-medium'> Need Help? </p>
                    <div className='flex space-x-1 items-center'>
                    <TbPhone className='text-white' />
                    <p className='text-white font-medium'>+1-202-555-0149</p>
                    </div>
                    
                </div>
                <div className='flex space-x-3'>
                    <div className='flex space-x-1 items-center'>
                        <AiOutlineLogin className='text-white' />
                        <p className='text-white font-medium'>Login</p>


                    </div>
                    <div className='flex space-x-1 items-center'>
                        <BiUser className='text-white' />
                        <p className='text-white font-medium'>Register</p>


                    </div>
               

                </div>


            </div>


            
        </div>
        
    )
}

export default Headertop

