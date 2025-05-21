"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SLIDER_DATA } from "@/store/dummy-store/data";
import Link from "next/link";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide((prev) =>
          prev === SLIDER_DATA.length - 1 ? 0 : prev + 1
        );
        setIsFading(false);
      }, 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto bg-amber-50 rounded-xl shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row h-[400px] md:h-[500px]">
        {/* TEXT SIDE */}
        <div className="flex-1 flex flex-col justify-center items-start px-6 py-8">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">
            {SLIDER_DATA[currentSlide].title}
          </h1>
          <Link href="/events-board">
            <button className="mt-4 bg-amber-600 hover:bg-gray-900 text-white px-6 py-2 rounded-md transition">
              Explore
            </button>
          </Link>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex-1 relative h-full">
          <Image
            src={SLIDER_DATA[currentSlide].image}
            alt={SLIDER_DATA[currentSlide].title}
            fill
            className={`object-cover transition-opacity duration-500 ease-in-out ${isFading ? "opacity-0" : "opacity-100"
              }`}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;