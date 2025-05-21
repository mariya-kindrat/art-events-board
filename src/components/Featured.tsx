"use client"

import Image from "next/image"
import { useRef, type FC } from "react"
import { FUTURE_EVENTS_DATA } from "../store/dummy-store/data"
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"

interface EventItem {
  id: number
  title: string
  image: string
  description: string
  date: string
  time: string
  location: string
  price: number
  quantity?: number
}

const Featured: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  const handleAddToCart = (event: EventItem) => {
    const cart = localStorage.getItem("cart")
    const parsedCart: EventItem[] = cart ? JSON.parse(cart) : []

    const existingIndex = parsedCart.findIndex((item) => item.id === event.id)

    if (existingIndex !== -1) {
      parsedCart[existingIndex].quantity = (parsedCart[existingIndex].quantity || 1) + 1
    } else {
      parsedCart.push({ ...event, quantity: 1 })
    }

    localStorage.setItem("cart", JSON.stringify(parsedCart))
    alert(`${event.title} added to cart`)
  }

  return (
    <div className="relative w-full px-6 py-10 bg-[#f8f6f2]">
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:bg-gray-800"
      >
        &#8592;
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:bg-gray-800"
      >
        &#8594;
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-2 py-4 scrollbar-thin scrollbar-thumb-gray-400"
      >
        {FUTURE_EVENTS_DATA.map((event) => (
          <Card
            key={event.id}
            sx={{
              minWidth: 280,
              maxWidth: 280,
              height: 480, // Fixed height for consistent sizing
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="div"
              sx={{
                height: "33.333%", // Exactly 1/3 of card height
                position: "relative",
              }}
            >
              <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            </CardMedia>

            <CardContent
              sx={{
                p: 0,
                height: "66.667%", // Exactly 2/3 of card height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden", // Prevent content overflow
              }}
            >
              <Box sx={{ p: 2, pb: 1, overflow: "hidden" }}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="center"
                  sx={{
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    mb: 1,
                    fontSize: "1rem",
                    lineHeight: 1.2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {event.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 1,
                    textAlign: "justify",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    fontSize: "0.8rem",
                    lineHeight: 1.4,
                    fontWeight: 400,
                  }}
                >
                  {event.description}
                </Typography>
              </Box>

              <Divider sx={{ mx: 2, opacity: 0.7 }} />

              <Box sx={{ p: 2, pt: 1, overflow: "hidden", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <List dense disablePadding sx={{ mb: 1, overflow: "hidden" }}>
                  <ListItem disablePadding sx={{ py: 0.2 }}>
                    <ListItemText
                      primary="Date"
                      secondary={event.date}
                      primaryTypographyProps={{
                        variant: "body2",
                        color: "text.secondary",
                        fontSize: "0.8rem",
                        fontWeight: 400,
                      }}
                      secondaryTypographyProps={{
                        variant: "body2",
                        fontSize: "0.8rem",
                        fontWeight: 400,
                        noWrap: true,
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding sx={{ py: 0.2 }}>
                    <ListItemText
                      primary="Time"
                      secondary={event.time}
                      primaryTypographyProps={{
                        variant: "body2",
                        color: "text.secondary",
                        fontSize: "0.8rem",
                        fontWeight: 400,
                      }}
                      secondaryTypographyProps={{
                        variant: "body2",
                        fontSize: "0.8rem",
                        fontWeight: 400,
                        noWrap: true,
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding sx={{ py: 0.2 }}>
                    <ListItemText
                      primary="Location"
                      secondary={event.location}
                      primaryTypographyProps={{
                        variant: "body2",
                        color: "text.secondary",
                        fontSize: "0.8rem",
                        fontWeight: 400,
                      }}
                      secondaryTypographyProps={{
                        variant: "body2",
                        fontSize: "0.8rem",
                        fontWeight: 400,
                        noWrap: true,
                      }}
                    />
                  </ListItem>
                </List>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                    mt: "auto",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "rgb(217, 119, 6)", fontSize: "1.2rem", letterSpacing: 0.5 }}
                  >
                    ${event.price}
                  </Typography>
                </Box>

                <Button
                  onClick={() => handleAddToCart(event)}
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 0.8,
                    bgcolor: "rgb(217, 119, 6)",
                    "&:hover": {
                      bgcolor: "rgb(120, 53, 15)",
                    },
                    textTransform: "none",
                    fontWeight: 500,
                    letterSpacing: 0.5,
                  }}
                >
                  Add to booking
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Featured
