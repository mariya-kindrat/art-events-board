"use client"
import { FUTURE_EVENTS_DATA } from '@/store/dummy-store/data';
import Image from 'next/image';
// import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'

const CategoryPage = () => {
  const { category } = useParams();

  const filteredEvents = FUTURE_EVENTS_DATA.filter(
    (event) => event.category === category
  );

  return (
    <div className='flex flex-wrap text-amber-500 items-center justify-center md:mt-7 gap-4 md:gap-8'>
      {filteredEvents.map((event) => (
        <Link className='w-[80%] h-[40vh] md:h-[50vh] lg:h-[70vh] sm:w-1/3 lg:w-1/4 mt-4 
                  rounded-lg shadow-lg bg-white hover:scale-110 transition-transform duration-300 ease-in-out flex flex-col justify-between'
          href={`/event/${event.id}`}
          key={event.id}>
          <div className='relative h-[80%]'>
            <Image src={event.image} alt="" fill className='object-cover rounded-md' />
          </div>

          <div className='flex items-center justify-between p-3 gap-2 group'>
            <h1 className='text-2xl uppercase p-2 text-amber-800'>{event.title}</h1>
            <h2 className='font-bold group-hover:hidden'>${event.price}</h2>
            <button className=' hidden group-hover:block uppercase  bg-amber-800 text-white p-2 rounded-md flex-1'>Book</button>
          </div>
        </Link>
      ))
      }
    </div >

  )
}

export default CategoryPage;
