import React from 'react';

export default function NavBar() {
  return (
    <div>
      <nav className='flex flex-col sm:flex-row max-w-full bg-[#f8fafc] px-4 py-4 justify-between items-center'>
        <ul className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mx-4'>
          <li>
            <a href="/" className='text-2xl sm:text-3xl px-2 font-semibold'>TextUtils</a>
          </li>
          <li>
            <a href="/home" className='text-xl sm:text-2xl px-2 font-medium'>Home</a>
          </li>
          <li>
            <a href="/about" className='text-base sm:text-xl my-2 sm:my-0 text-[#71717a] font-normal'>About</a>
          </li>
        </ul>
        <ul className='flex flex-col sm:flex-row items-center mx-4 gap-2 sm:gap-4'>
          <li className='w-full sm:w-auto'>
            <input className='w-full sm:w-auto rounded-md px-2 py-1 border-1 border' placeholder='Search...'/>
          </li>
          <li>
            <button className='w-full sm:w-auto border-2 p-1 px-2 rounded-md text-sm border-[#bbf7d0] text-[#4ade80] group-hover:border-[#4ade80] hover:bg-[#4ade80] hover:text-white hover:font-medium'>Search</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
