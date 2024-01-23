import React from "react";
import { Box } from "@mui/material";
import Hero from "../assets/illustration-hero.svg";

export default function SectionHero() {
  return (
    <Box>
      <img src={Hero} alt="Hero" />
    </Box>
  );
}
