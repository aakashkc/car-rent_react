import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { navigation } from '../../assets/data/navdata'
import { Link } from 'react-router-dom'

function Mobilenav() {
    const [toogle, settoogle] = useState(false)
    return (
        <div className="py-5 bg-primary  block md:hidden">
            <div className="container">
                <div className="">
                    <AiOutlineMenu
                        onClick={() => settoogle(!toogle)}
                        className="text-white text-2xl"
                    />
                </div>
                <div className={`grid grid-cols-3 w-[100%]   h-screen  z-40 absolute left-0 bg-white transition-all duration-500   ${toogle ? 'top-0 ' : '-top-[100%]'}`} onClick={() => settoogle(!toogle)}>
                    <div className={` col-span-2 flex flex-col justify-center items-center space-y-10 `}>
                        {navigation.map((item, index) => {
                            return (
                                <div
                                    className="capitalize cursor-pointer text-lg font-semibold"
                                    key={index}
                                >
                                    <Link to={`${item.path}`}> {item.name}</Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className='col-span-1 bg-[rgba(0,13,107,0.6)] '>
                       

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobilenav
