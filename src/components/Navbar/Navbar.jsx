import React from 'react';
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';


const menuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Shop",
        link: "/#"
    },
    {
        id: 3,
        name: "About",
        link: "/#"
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#"
    },
]

const dropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: '/#',
    },
    {
        id: 2,
        name: "Best Selling",
        link: '/#',
    },
    {
        id: 3,
        name: "Top Rated",
        link: '/#',
    },
]

const Navbar = ({handleOrderPopup}) => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 '>
            <div className='py-4' >
                <div className='container flex items-center justify-between'>
                    {/* logo and links section */}
                    <div className='flex items-center gap-4'>
                        <a className='text-primary font-semibold tracking-widest  text-2xl  uppercase sm:text-3xl' >
                            Ecommerce
                        </a>
                        {/* Menu items */}
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4'>
                                {menuLinks.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            className='inline-block px-4 font-semibold text-gray-500  hover:text-black dark:hover:text-white duration-200'
                                            href={item.link}>{item.name}</a>
                                    </li>
                                ))}
                                {/* drop down */}
                                <li className='relative cursor-pointer group'>
                                    <a href=""
                                        className='flex items-center gap-[2px] font-semibold text-gray-500  dark:hover:text-white py-2 '
                                    >Quick Links
                                        <span><FaCaretDown
                                            className='group-hover:rotate-180 duration-300'
                                        /></span>
                                    </a>
                                    {/* dropdown links */}
                                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white  shadow-md dark:bg-gray-900 dark:text-white space-y-2'>
                                        {dropdownLinks.map((item)=>(
                                            <li key={item.id}>
                                                <a 
                                                className='text-gray-500 hover:text-black dark:hover:text-white duration-200
                                                 inline-block w-full p-2 rounded-md hover:bg-primary/20  font-semibold'
                                                href={item.link}>{item.name}</a>
                                            </li>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* Navbar right Section */}
                    <div className='flex justify-center items-center gap-4'>
                        {/* searchBar */}
                        <div className='relative group hidden sm:block'>
                            <input type="text"
                                placeholder='Search'
                                className='search-bar'
                            />
                            <FaSearch className='text-xl text-gray-600 dark:text-gray-400 
                group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                        {/* Order Button Section */}
                        <button onClick={handleOrderPopup} className='relative p-3'>
                            <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400 ' />
                            <div className='w-4 h-4 bg-red-500 rounded-full text-white absolute top-0 right-0 text-xs flex items-center justify-center  '>
                                4
                            </div>
                        </button>
                        {/* DarkMode Section */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

