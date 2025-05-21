"use client";

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { FUTURE_EVENTS_DATA } from '@/store/dummy-store/data';
import Price from '@/components/Price';

const SingleEvent = () => {
  const { id } = useParams();
  const eventId = Number(id);
  const event = FUTURE_EVENTS_DATA.find((e) => e.id === eventId);
  console.log("id from params:", id);
  console.log("Parsed ID:", eventId);
  console.log("Found event:", event);

  if (!event) {
    return <div className="p-10 text-red-700 font-bold">Event not found</div>;
  }

  return (
    <div className='p-4 lg:px-20 xl:px-40 min-h-screen flex flex-col md:flex-row justify-around items-center text-amber-800 gap-3 md:gap-4 lg:gap-8 bg-amber-50'>
      {/* IMAGE CONTAINER */}
      <div className='relative w-full h-1/2 md:w-1/2 md:h-[80vh]'>
        <Image src={event.image} alt={event.title} className='object-cover rounded-lg' fill />
      </div>

      {/* TEXT CONTAINER */}
      <div className='h-1/2 flex flex-col gap-4 md:w-1/2 md:h-[80vh] justify-center items-center'>
        <h1 className='text-3xl font-bold uppercase'>{event.title}</h1>
        <p className="text-sm text-gray-700 text-center">{event.description}</p>
        <Price price={event.price} id={event.id} title={event.title} image={event.image} />
      </div>
    </div>
  );
};

export default SingleEvent;