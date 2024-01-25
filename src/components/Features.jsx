import React from "react";
import { Box, Typography } from "@mui/material";

export default function Features() {
  return (
    <Box>
      <Typography
        variant="body"
        component={"h2"}
        textAlign={"center"}
        sx={{ marginBottom: "1rem" }}
      >
        Features
      </Typography>
      <Typography
        variant="body"
        component={"p"}
        textAlign={"center"}
        sx={{ opacity: 0.5, fontWeight: 400 }}
      >
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </Typography>
      <Box sx={{ marginTop: "2.5rem" }}>
        <hr className="mt-0 mb-0" />
        <Typography
          variant="body"
          component={"p"}
          textAlign={"center"}
          sx={{
            lineHeight: { xs: "17px" },
            letterSpacing: { xs: "0.5px" },
            cursor: "pointer",
          }}
          className="bef py-4 text-blue_dark font-medium relative"
        >
          Simple Bookmarking
        </Typography>
        <hr className="mt-0 mb-0" />
        <Typography
          variant="body"
          component={"p"}
          textAlign={"center"}
          sx={{
            lineHeight: { xs: "17px" },
            letterSpacing: { xs: "0.5px" },
            cursor: "pointer",
          }}
          className="bef py-4 text-blue_dark font-medium relative"
        >
          Speedy Searching
        </Typography>
        <hr className="mt-0 mb-0" />
        <Typography
          variant="body"
          component={"p"}
          textAlign={"center"}
          sx={{
            lineHeight: { xs: "17px" },
            letterSpacing: { xs: "0.5px" },
            cursor: "pointer",
          }}
          className="bef py-4 text-blue_dark font-medium relative"
        >
          Easy Sharing
        </Typography>
        <hr className="mt-0 mb-0" />
      </Box>
    </Box>
  );
}
