"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        backgroundColor: "#fefefe",
      }}
    >
      {/* Photo Section */}
      <Box sx={{ width: "100%", maxWidth: 700 }}>
        <Box sx={{ position: "relative", width: "100%", height: 300, borderRadius: 2, overflow: "hidden", mb: 2 }}>
          <Image
            src="/events/art4.jpeg"
            alt="Artwork on wall"
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </Box>
      </Box>

      {/* Info Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 700,
          mt: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          textAlign: { xs: "center", sm: "left" },
          gap: 4,
        }}
      >
        {/* Contact */}
        <Box>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            CONTACT
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: { xs: 2, sm: 3 }, mt: 1 }}>
            <Typography
              variant="body1"
              component="a"
              href="mailto:kindratmariya92@gmail.com"
              sx={{ textDecoration: "none", color: "inherit", "&:hover": { textDecoration: "underline" } }}
            >
              kindratmariya92@gmail.com
            </Typography>
            <Typography
              variant="body1"
              component="a"
              href="tel:+15673992"
              sx={{ textDecoration: "none", color: "inherit", "&:hover": { textDecoration: "underline" } }}
            >
              +15673992
            </Typography>

            <Typography
              component="a"
              href="https://instagram.com/maria_kindrat"
              target="_blank"
              rel="noopener"
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: 20 }} />
              @mari_kindrat
            </Typography>
          </Box>
        </Box>

        {/* Location */}
        <Box>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            LOCATION
          </Typography>
          <Typography variant="body1">Palm Coast, FL</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;