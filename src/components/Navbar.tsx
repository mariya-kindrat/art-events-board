import React from 'react'
import Events from './Events';
import Link from 'next/link';
import CartIcon from './CartIcon';

const Navbar = () => {

  const user = false
  return (
    <div className='h-12 text-black-700 p-4 flex items-center justify-between border-b-2 uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* Left LINKS*/}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Home</Link>
        <Link href="/events-board">Events</Link>
        <Link href="/gallery">Galery</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/*LOGO*/}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">Art Events</Link>
      </div>
      {/*MOBILE MENU*/}
      <div className='md:hidden'>
        <Events />
      </div>
      {/* RIGHT LINKS*/}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-gray-300 rounded-md'>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/booking">Booking</Link>
        )}
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar;