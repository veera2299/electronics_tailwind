import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className="container">
                <div className='grid md:grid-cols-3 pb-20 pt-5'>
                    {/* company details */}
                    <div className='py-8 px-4'>
                        <a
                            className='text-primary text-2xl 
                            font-semibold uppercase tracking-widest 
                            sm:text-3xl'
                            href="#">Ecommerce</a>
                        <p className='text-gray-600
                                   dark:text-white/70 pt-3 lg:pr-24'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, ullam?</p>
                        <p className='text-gray-500 mt-4'>Made with love by the coding journey</p>
                        <a href=""
                            className='inline-block
                                   bg-primary/90 text-sm text-white 
                                      rounded-full py-2 px-4 mt-4'>
                            Visit our Instagram Page</a>

                    </div>
                    {/* Footer links */}
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3
                                     md:pl-10">
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data) => (
                                    <li key={data.link}>
                                        <a href="" className='text-gray-600 hover:text-black duration-300 
                                         dark:text-gray-400 hover:dark:text-white'>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* second links */}
                        <div className='py-8 px-4 '>
                            <h1 className='text-xl font-bold  sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data) => (
                                    <li key={data.link}>
                                        <a href="" className="text-gray-600 dark:text-gray-400
                                                              hover:dark:text-white hover:text-black
                                                               duration-300">{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* company address */}
                        <div className='py-8 px-4 col-span-2 sm:col-auto '>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow />
                                    <p>kakinada , andhra pradesh</p>
                                </div>
                                <div className='flex items-center gap-3 mt-6'>
                                    <FaMobileAlt />
                                    <p>+91 987654321</p>
                                </div>
                                <div className='flex  items-center gap-3 mt-6'>
                                    <a href="#"><FaInstagram className='text-3xl hover:text-primary duration-300' /></a>
                                    <a href="#"><FaFacebook className='text-3xl hover:text-primary duration-300' /></a>
                                    <a href="#"><FaLinkedin className='text-3xl hover:text-primary duration-300' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
