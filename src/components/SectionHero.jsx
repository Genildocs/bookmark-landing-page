import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Hero from "../assets/illustration-hero.svg";

export default function SectionHero() {
  return (
    <Grid container gap={4} sx={{ paddingTop: "5rem" }}>
      <Grid item xs={12} md={6} sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "36rem",
            height: "12.5rem",
            borderRadius: "16rem",
            backgroundColor: "#5267DF",
            position: "absolute",
            left: "10%",
            top: "15%",
            zIndex: -1,
          }}
        ></Box>
        <Box>
          <img src={Hero} alt="Hero" style={{ width: "100%", zIndex: 1 }} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography
            component={"h1"}
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "3rem",
              },
              fontFamily: "inherit",
              fontWeight: 500,
              color: "#242A45",
              lineHeight: {
                xs: "2.5rem",
                sm: "3.2rem",
              },
              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            A Simple Bookmark Manager
          </Typography>
          <Typography
            variant="body1"
            component={"p"}
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
              },
              fontFamily: "inherit",
              fontWeight: 400,
              color: "#242A45",
              lineHeight: {
                xs: "1.5rem",
                sm: "1.8rem",
              },
              textAlign: {
                xs: "center",
                sm: "left",
              },
              marginTop: { xs: "1rem" },
              marginBottom: { xs: "1.5rem" },
            }}
          >
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Typography>
          <Grid container spacing={2} wrap="nowrap">
            <Grid item>
              <Button variant="contained">Get it on Chrome</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Get it on Firefox</Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
