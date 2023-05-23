import React from 'react'
import { Link, useLocation, } from "react-router-dom";
import {BiSearch} from 'react-icons/bi'

import { navigation } from '../../assets/data/navdata'
function Headerbuttom() {
    const location= useLocation() 
  return (
    <div className="py-4 bg-primary hidden md:block">
      <div className="container mx-auto flex justify-between items-center border border-white">
        <div className=' flex  space-x-10  border border-white '>
          {navigation.map((item, index) => {
            return <div className={` ${location.pathname === item.path ? 'text-secondary':'text-white'}  cursor-pointer capitalize`}  key={index}><Link to={`${item.path}`}> {item.name}</Link></div>
          })}
        </div>
        <div className='py-2 px-3 hidden md:flex items-center justify-between bg-[#020a4de9] rounded-3xl border border-[#7c8a972f] '>
            <input type="text" className='bg-transparent text-white outline-none' placeholder='Search' />
            <BiSearch  className='text-white cursor-pointer'/>


        </div>
      </div>

    </div>
  )
}

export default Headerbuttom
