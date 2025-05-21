"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CountDown from './CountDown';

const Offer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const handleComplete = () => {
    setIsVisible(false);
  };

  const handleBookNow = () => {
    router.push('/event/11');
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-amber-100">
      <div className="relative bg-cover bg-center md:h-[60vh] flex items-center justify-center text-center px-6 py-10 md:py-20 bg-[url('/events/ocean2.jpeg')]">
        <div className="bg-black/50 rounded-xl px-6 py-10 max-w-2xl w-full">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Ocean Art Night
          </h1>
          <p className="text-white text-sm md:text-lg mb-6">
            A serene art evening for women by the ocean.
            Slow down.
            Breathe deep.
            Let the ocean reflect your inner magic
          </p>
          <CountDown onComplete={handleComplete} />
          <button
            onClick={handleBookNow}
            className="mt-6 bg-black text-white rounded-md py-2 px-6"
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;