"use client";
import Image from 'next/image'
import openMenuImg from '../../public/temporary/open-menu.png'
import closeMenuImg from '../../public/temporary/close.png'
import React, { useState } from 'react'
import Link from 'next/link';
import CartIcon from './CartIcon';


const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Events", url: "/events-board" },
  { id: 3, title: "About", url: "/about" },
  { id: 4, title: "Contact", url: "/contact" }
]

const Events = () => {
  const [open, setOpen] = useState(false);

  const user = false;
  return (
    <div>
      <Image src={open ? closeMenuImg : openMenuImg} alt="" width={20} height={20} onClick={() => setOpen(!open)} />
      {open && <div className='bg-amber-950 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
        {links.map(item => (
          <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
            {item.title}
          </Link>
        ))}
        {!user ? (
          <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
        ) : (
          <Link href="/booking" onClick={() => setOpen(false)}>Booking</Link>
        )
        }
        <Link href="/cart" onClick={() => setOpen(false)}>
          <CartIcon />
        </Link>
      </div>}
    </div>
  )
}

export default Events;