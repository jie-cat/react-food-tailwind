import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* Left Side */}
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mx-2">
            Best <span className="font-bold">Eats</span>
          </h1>
          <div className="hidden lg:flex bg-gray-200 rounded-full text-[14px]">
            <p className="bg-black rounded-full text-white p-2">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>

        {/* Search input */}
        <div className="w-[200px] sm:w-[400px] xl:w-[500px] bg-gray-200 rounded-full flex p-2">
          <AiOutlineSearch size={25} className="cursor-pointer" />
          <input
            className="bg-transparent ml-2 w-full outline-none"
            type="text"
            placeholder="Search foods"
          />
        </div>

        {/* Cart button */}
        <div className="bg-black rounded-full p-2 flex items-center cursor-pointer">
          <BsFillCartFill className="text-white ml-1" />
          <p className="text-white text-[14px] mx-2">Cart</p>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 w-full h-screen fixed top-0 left-0 z-10"></div>
        ) : null}

        {/* Left drawer */}
        <div
          className={
            nav
              ? "bg-white w-[300px] h-screen fixed top-0 left-0 p-4 duration-300 z-10"
              : "bg-white w-[300px] h-screen fixed top-0 left-[-100%] p-4 duration-500 z-10"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            className="absolute right-4 top-4 cursor-pointer"
            size={25}
          />
          <h1 className="text-2xl ">
            Best <span className="font-bold">Eats</span>
          </h1>
          <ul className="text-lg mt-5">
            <li className="flex items-center p-1  cursor-pointer">
              <TbTruckDelivery className="mr-2" size={25} />
              Orders
            </li>
            <li className="flex items-center py-3 cursor-pointer">
              <MdFavorite className="mr-2" size={25} />
              Favorites
            </li>
            <li className="flex items-center py-3 cursor-pointer">
              <FaWallet className="mr-2" size={25} />
              Wallet
            </li>
            <li className="flex items-center py-3  cursor-pointer">
              <MdHelp className="mr-2" size={25} />
              Help
            </li>
            <li className="flex items-center py-3  cursor-pointer">
              <AiFillTag className="mr-2" size={25} />
              Promotions
            </li>
            <li className="flex items-center py-3  cursor-pointer">
              <BsFillSaveFill className="mr-2" size={25} />
              Best Ones
            </li>
            <li className="flex items-center py-3  cursor-pointer">
              <FaUserFriends className="mr-2" size={25} />
              Invite Friends
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
