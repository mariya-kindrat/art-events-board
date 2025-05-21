"use client";

import { useParams } from "next/navigation";
import { GALLERY_EVENTS } from "@/store/dummy-store/data";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";

const GalleryCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const gallery = GALLERY_EVENTS.find((event) => event.id === category);

  if (!gallery) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" color="error">
          Gallery not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ px: 8, py: 6 }}>
      {/* Back Button */}
      <Box sx={{ mb: 4 }}>
        <Link href="/gallery" passHref>
          <Button variant="outlined" sx={{ textTransform: "none" }}>
            ← Back to Gallery
          </Button>
        </Link>
      </Box>

      {/* Title */}
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        fontWeight={600}
      >
        {gallery.title}
      </Typography>

      {/* Images */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {gallery.images.map((img, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: 400,
              height: 300,
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Image
              src={img}
              alt={`${gallery.title} ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GalleryCategoryPage;