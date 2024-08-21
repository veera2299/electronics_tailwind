import React from 'react'
import { IoIosClose } from 'react-icons/io'
import Button from '../Shared/Button'

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
    {orderPopup && (
    <div className='h-screen w-screen fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-sm'>
        <div className='w-[300px] fixed top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 p-4 shadow-md dark:bg-gray-900 dark:text-white rounded-xl duration-200  '>
            {/* Header section */}
            <div className='flex items-center justify-between'>
                <h1>Order Now</h1>
                <div>
                <IoIosClose 
                  onClick={handleOrderPopup}
                className='text-3xl cursor-pointer'  />

                </div>
            </div>
            {/* form section */}
            <div className='mt-4'>
                <input type='text' placeholder='Name' className='form-input' />
                <input type='text' placeholder='Email' className='form-input'/>
                <input type='text' placeholder='Address' className='form-input'/>
                <div className='flex justify-center'>
                    <Button 
                    text={"Order Now"}
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                    />
                </div>
            </div>
        </div>
    </div>
   )}
   </>
  )
}

export default Popup
