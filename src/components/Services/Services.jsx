import React from 'react'
import { IconBase } from 'react-icons'
import { FaCarSide, FaCheckCircle, FaHeadphonesAlt, FaWallet } from 'react-icons/fa'


const serviceData = [
    {
        id: 1,
        Icon: <FaCarSide className='text-4xl text-primary' />,
        title: "Free Shipping",
        description: "Free Shipping on All Orders"
    },
    {
        id: 1,
        Icon: <FaCheckCircle className='text-4xl text-primary' />,
        title: "Safe Money ",
        description: "30 Days Money Back"
    },
    {
        id: 1,
        Icon: <FaWallet className='text-4xl text-primary' />,
        title: "Secure Payments",
        description: "All Payments Secure"
    },
    {
        id: 1,
        Icon: <FaHeadphonesAlt className='text-4xl text-primary' />,
        title: "Online Support 24/7",
        description: "Technical Support 24/7"
    },
]

const Services = () => {
    return (
        <div>
            <div className="container my-14 md:my-20">
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                    {serviceData.map((data) => (
                        <div key={data.id} className='flex flex-col s sm:flex-row items-start gap-4'>
                            {data.Icon}
                            <div>
                                <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                                <h1 className='text-sm text-gray-400'>{data.description}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
