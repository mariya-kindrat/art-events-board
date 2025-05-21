"use client";

import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { GALLERY_EVENTS } from "@/store/dummy-store/data";
import Link from "next/link";

const Gallery = () => {
  return (
    <Box sx={{ px: 4, py: 6, display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
      {GALLERY_EVENTS.map((event) => (
        <Card key={event.id} sx={{ width: 300, borderRadius: 2, boxShadow: 3 }}>
          <Link href={`/gallery/${event.id}`} passHref legacyBehavior>
            <CardActionArea component="a">
              <CardMedia
                component="img"
                height="180"
                image={event.cover}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="h6" component="h3" textAlign="center">
                  {event.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      ))}
    </Box>
  );
};

export default Gallery;