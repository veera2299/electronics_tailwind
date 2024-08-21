import React from 'react'
import Button from '../Shared/Button';
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";

const Category = () => {
    return (
        <div className='py-8'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* first col */}
                    <div className='bg-gradient-to-br  from-black/90 to-black/70
                     py-10 pl-5 h-[320px] rounded-3xl  flex items-end relative text-white'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='mb-[2px] text-2xl font-semibold'>With</p>
                                <p className='text-4xl mb-4 opacity-20 font-bold'>Earphone</p>
                                <Button
                                    text={"Browse"}
                                    bgColor={"bg-primary"}
                                    textColor={'text-white'}
                                />
                                <img src={Image1} alt=""
                                    className='w-[320px] absolute bottom-0' />
                            </div>
                        </div>
                    </div>
                    {/* second col */}
                    <div className='bg-gradient-to-br  from-brandYellow to-brandYellow/90
                     py-10 pl-5 h-[320px] rounded-3xl  flex items-end relative text-white'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='mb-[2px] text-2xl font-semibold'>With</p>
                                <p className='text-4xl mb-4 opacity-40 font-bold'>Gadget</p>
                                <Button
                                    text={"Browse"}
                                    bgColor={"bg-white"}
                                    textColor={'text-brandYellow'}
                                />
                                <img src={Image2} alt=""
                                    className='w-[320px] absolute -right-4 bottom-10 ' />
                            </div>
                        </div>
                    </div>
                    {/* third col */}
                        <div className='bg-gradient-to-br sm:col-span-2 from-primary to-primary/90
                     py-10 pl-5 h-[320px] rounded-3xl  flex items-end relative text-white'>
                            <div>
                                <div className='mb-4'>
                                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                    <p className='mb-[2px] text-2xl font-semibold'>With</p>
                                    <p className='text-4xl mb-4 opacity-40 font-bold'>Laptop</p>
                                    <Button
                                        text={"Browse"}
                                        bgColor={"bg-white"}
                                        textColor={'text-primary'}
                                    />
                                    <img src={Image3} alt=""
                                        className='w-[250px] absolute sm:right-20 -right-5 bottom-5 ' />
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Category
