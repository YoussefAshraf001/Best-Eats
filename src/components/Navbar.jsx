import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [kind, setKind] = useState('delivery');

  function handleDelivery() {
    setKind('delivery');
  }
  function handlePickup() {
    setKind('pickup');
  }

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Foods</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p
            onClick={handleDelivery}
            className={
              kind === 'delivery'
                ? 'bg-black text-white rounded-full p-2 cursor-pointer'
                : 'text-black rounded-full p-2 cursor-pointer'
            }
          >
            Delivery
          </p>
          <p
            onClick={handlePickup}
            className={
              kind === 'pickup'
                ? 'bg-black text-white rounded-full p-2 cursor-pointer'
                : 'text-black rounded-full p-2 cursor-pointer'
            }
          >
            Pickup
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/* Cart */}
      <button className="bg-black text-white hidden md:flex items-center py-2">
        <BsFillCartFill size={16} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ''
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNav(!nav)}
          size={30}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {/* <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li> */}
            <li className="cursor-pointer text-xl flex py-4 hover:bg-gray-300 rounded-lg hover:p-4">
              <TbTruckDelivery className="mr-4" size={25} /> Orders
            </li>
            <li className="cursor-pointer text-xl flex py-4 hover:bg-gray-300 rounded-lg hover:p-4">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="cursor-pointer text-xl flex py-4 hover:bg-gray-300 rounded-lg hover:p-4">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="cursor-pointer text-xl flex py-4 hover:bg-gray-300 rounded-lg hover:p-4">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="cursor-pointer text-xl flex py-4 hover:bg-gray-300 rounded-lg hover:p-4">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="cursor-pointer text-xl flex py-4 hover:bg-gray-300 rounded-lg hover:p-4">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="cursor-pointer text-xl flex py-4 hover:bg-gray-300 rounded-lg hover:p-4">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
