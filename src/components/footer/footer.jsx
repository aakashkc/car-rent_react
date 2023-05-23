import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'
import { navigation } from '../../assets/data/navdata'
import { Link } from 'react-router-dom'
import {FiSend} from 'react-icons/fi'

function Footer() {
    return (
        <div className="section bg-primary  bottom-0 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className=" grid md:grid-cols-3 gap-5">
                    <div className="col-span-2 ">
                        <div className="flex flex-col space-y-3">
                            <div className="flex space-x-2 ">
                                <AiOutlineCar className="text-white font-extrabold text-4xl " />
                                <h2 className=" text-[#fff] font-medium text-2xl ">
                                    Rent Car <br /> Service
                                </h2>
                            </div>
                            <p className="descriptions !text-parag text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consequuntur, distinctio, itaque reiciendis ab cupiditate harum
                                ex quam veniam, omnis expedita animi quibusdam obcaecati
                                mollitia? Delectus et ad illo recusandae temporibus?
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1  flex flex-col items-start space-y-4 ">
                        <h2 className=" text-[#fff] !font-medium text-xl ">Quick Links</h2>
                        <div className="flex flex-col  space-y-4">
                            {navigation.map((item, index) => {
                                return (
                                    <div className="cursor-pointer text-parag hover:text-secondary transition-all duration-200 capitalize">
                                        <Link to={`${item.path}`}> {item.name}</Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="flex flex-col items-start space-y-4">
                            <h2 className=" text-[#fff] !font-medium text-xl ">
                                Head Office
                            </h2>
                            <div className="flex flex-col  space-y-4 font-medium">
                                <h4 className="!text-parag font-medium">
                                    123 Zindabazar, Sylhet, Bangladesh
                                </h4>
                                <h4 className=" !text-parag font-medium">
                                    Phone: +0995345875365
                                </h4>
                                <h4 className=" !text-parag font-medium">
                                    Email: muhib5532@gmail.com
                                </h4>
                                <h4 className=" !text-parag font-medium">
                                    Office Time: 10am - 7pm
                                </h4>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-start space-y-3">
                            <h2 className=" text-[#fff] !font-medium text-xl ">Newsletter</h2>
                            <p className="descriptions !text-parag">
                                Subscripbe our newsletter
                            </p>
                            <div className="py-2 px-3 flex items-center justify-between bg-[#020a4de9] rounded-3xl border border-[#7c8a972f] ">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="bg-transparent text-white outline-none"
                                    
                                    />
                                        <FiSend className='text-white cursor-pointer text-lg' />
                                    
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
