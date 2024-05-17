import React from 'react'
import { MdOutlineSearch } from "react-icons/md";

const Header = () => {
  return (
    <nav className=" p-4 m-2 rounded-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <div className="flex items-center">
          <span className="text-black text-lg font-semibold">MyShop</span>
        </div>

        {/* SearchBar */}
        <div className="flex justify-center flex-grow ">
          <input
            className="w-[40vw] h-[35px] p-2 rounded-lg border border-gray-400 focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <span className='absolute right-[30vw] m-1'>
            <MdOutlineSearch size={30} color='gray' />
          </span>
        </div>

        {/* Login */}
        <div>
          <a
            className='className="bg-blue-500 hover:text-black hover:underline text-gray-700 font-semibold py-2 px-4 rounded'
            href="">Login</a>

        </div>
      </div>
    </nav>
  )
}

export default Header