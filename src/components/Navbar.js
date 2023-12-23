import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import favicon from '../img/favicon.jpg'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='max-w-[1640px] mx-auto w-full z-20 fixed flex justify-between p-4 bg-gradient'>
            {/* left side */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={25} />
                </div>
                <h1 className='font-light text-2xl sm:text-3xl lg:text-4xl px-2'>Flavor
                    <span className='font-bold text-gradient'>Fiesta.
                    </span>
                </h1>
            </div>


            {/* search input */}
            <div className='bg-gray-50 rounded-full hidden sm:flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20} />
                <input type="text" className='bg-transparent p-2 focus:outline-none w-full' placeholder='search tools' />
            </div>
            {/* cart button */}
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2 cursor-pointer'>Delivery</p>
                <p className='p-2 cursor-pointer'>Pickup</p>
                <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                    <BsFillCartFill size={20} className='mr-2' /> cart
                </button>
            </div>
            {/* mobile menu */}
            {nav ?
                <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 '></div>
                : ''}
            {/* sidebar */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 cursor-pointer top-4' />
                <h2 className='text-2xl p-4'>Flavor
                    <span className='font-bold text-gradient'>Fiesta.</span>
                </h2>
                <nav className='flex flex-col'>
                    <ul className='flex flex-col p-4 text-gray-600'>
                        <li className='text-xl py-4 flex flex-row'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                        <li className='text-xl py-4 flex flex-row'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                        <li className='text-xl py-4 flex flex-row'><FaWallet size={25} className='mr-4' /> Wallet</li>
                        <li className='text-xl py-4 flex flex-row'><MdHelp size={25} className='mr-4' /> Help</li>
                        <li className='text-xl py-4 flex flex-row'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                        <li className='text-xl py-4 flex flex-row'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                        <li className='text-xl py-4 flex flex-row'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                    </ul>
                    <div className='flex items-end'>
                        <img src={favicon} alt='not found' className='p-3 h-auto w-auto' />
                    </div>

                </nav>
            </div>
        </div >
    )
}

export default Navbar