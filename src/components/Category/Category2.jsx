import React from 'react'
import Button from '../Shared/Button';
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";

const Category2 = () => {
    return (
        <div>
            <div className='py-8'>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* first col */}
                        <div className='bg-gradient-to-br sm:col-span-2  from-gray-400/90 to-gray-100
                     py-10 pl-5 h-[320px] rounded-3xl  flex items-end relative text-white'>
                            <div>
                                <div className='mb-4'>
                                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                    <p className='mb-[2px] text-2xl font-semibold'>With</p>
                                    <p className='text-4xl mb-4 opacity-20 font-bold'>Laptop</p>
                                    <Button
                                        text={"Browse"}
                                        bgColor={"bg-primary"}
                                        textColor={'text-white'}
                                    />
                                    <img src={Image1} alt=""
                                        className='w-[200px] sm:w-[250px] absolute sm:-translate-x-20 top-5 right-0 ' />
                                </div>
                            </div>
                        </div>
                       

                        {/* second col */}
                        <div className='bg-gradient-to-br  from-brandGreen/90 to-brandGreen/90
                     py-10 pl-5 h-[320px] rounded-3xl  flex items-start relative text-white'>
                            <div>
                                <div className='mb-4'>
                                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                    <p className='mb-[2px] text-2xl font-semibold'>With</p>
                                    <p className='text-4xl mb-4 opacity-40 font-bold'>Earphone</p>
                                    <Button
                                        text={"Browse"}
                                        bgColor={"bg-white"}
                                        textColor={'text-brandGreen'}
                                    />
                                    <img src={Image2} alt=""
                                        className='w-[320px] absolute bottom-0  right-0 ' />
                                </div>
                            </div>
                        </div>
                         {/* third col */}

                         <div className='bg-gradient-to-br  from-brandBlue to-brandBlue/90
                     py-10 pl-5 h-[320px] rounded-3xl  flex items-start relative text-white'>
                            <div>
                                <div className='mb-4'>
                                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                    <p className='mb-[2px] text-2xl font-semibold'>With</p>
                                    <p className='text-4xl mb-4 opacity-40 font-bold'>Gadget</p>
                                    <Button
                                        text={"Browse"}
                                        bgColor={"bg-white"}
                                        textColor={'text-brandBlue'}
                                    />
                                    <img src={Image3} alt=""
                                        className='w-[250px] absolute -right-0 bottom-0 ' />
                                </div>
                            </div>
                        </div>
                        

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Category2
