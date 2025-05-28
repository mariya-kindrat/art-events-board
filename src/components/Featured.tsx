"use client"
import { useRef, type FC } from "react"
import { FUTURE_EVENTS_DATA } from "../store/dummy-store/data"
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import EventCard from "./EventCard";


const Featured: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full px-6 py-10 bg-[#f8f6f2]">
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "black",
          color: "white",
          zIndex: 10,
          "&:hover": { bgcolor: "gray.800" },
        }}
      // className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:bg-gray-800"
      >
        < ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "black",
          color: "white",
          zIndex: 10,
          "&:hover": { bgcolor: "gray.800" },
        }}
      // className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:bg-gray-800"
      >
        <ArrowForwardIos />
      </IconButton>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-2 py-4 scrollbar-thin scrollbar-thumb-gray-400"
      >
        {FUTURE_EVENTS_DATA.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default Featured
