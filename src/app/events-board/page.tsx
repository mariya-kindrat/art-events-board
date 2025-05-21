import { EVENTS_CATEGORIES } from '@/store/dummy-store/data'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button, Box, CardActions } from "@mui/material"

const EventsBoardPage = () => {
  return (
    <div className="px-4 lg:px-20 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Futured Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {EVENTS_CATEGORIES.map((category) => (
          <Card
            key={category.id}
            sx={{
              maxWidth: "100%",
              height: 400,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
                "& .MuiCardMedia-root": {
                  transform: "scale(1.1)",
                },
              },
            }}
            elevation={3}
          >
            <CardMedia
              component="div"
              sx={{
                height: "100%",
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                backgroundImage: `url(${category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.5s ease",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
                  backdropFilter: "blur(2px)",
                },
              }}
            />

            <CardContent
              sx={{
                position: "relative",
                zIndex: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 3,
              }}
            >
              <Box
                sx={{
                  transform: "translateY(0)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    mb: 1.5,
                    letterSpacing: "0.5px",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  {category.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.9)",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    lineHeight: 1.6,
                    mb: 2,
                    transition: "all 0.4s ease",
                    padding: 1,
                    borderRadius: 1,
                    position: "relative",
                    maxHeight: "4.8em",
                    ".MuiCard-root:hover &": {
                      color: "#ffffff",
                      backgroundColor: "rgba(0,0,0,0.75)",
                      textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                      padding: 2,
                      position: "absolute",
                      zIndex: 10,
                      maxHeight: "none",
                      WebkitLineClamp: "unset",
                      display: "block",
                      width: "calc(100% - 2rem)",
                      fontWeight: 500,
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                      backdropFilter: "blur(4px)",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {category.description}
                </Typography>
              </Box>

              <CardActions sx={{ p: 0, mt: "auto" }}>
                <Button
                  component={Link}
                  href={`/events-board/${category.slug}`}
                  variant="contained"
                  size="small"
                  sx={{
                    width: "60%",
                    mx: "auto",
                    bgcolor: "#b45309",
                    color: "white",
                    textTransform: "none",
                    py: 0.8,
                    px: 2,
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    borderRadius: "20px",

                    "&:hover": {
                      bgcolor: "#92400e",

                    },
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Discover
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default EventsBoardPage; 