import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cartIcon from "../../public/temporary/cartpng.png"

const CartIcon = () => {
  return (
    <Link href="/cart" className='flex items-center gap-4'>
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <Image src={cartIcon} alt="" fill />
      </div>
      <span>Cart</span>
    </Link>
  )
}

export default CartIcon