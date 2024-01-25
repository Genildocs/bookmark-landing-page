import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Hero from "../assets/illustration-hero.svg";

export default function SectionHero() {
  return (
    <Grid
      container
      gap={4}
      sx={{
        paddingTop: "5rem",
        flexDirection: { sm: "row-reverse" },
        flexWrap: { sm: "nowrap" },
      }}
    >
      <Grid item xs={12} md={6} sx={{ position: "relative" }}>
        <Box
          sx={{
            width: { xs: "36rem", sm: "50rem" },
            height: { xs: "12.5rem", sm: "20rem" },
            borderRadius: "16rem",
            backgroundColor: "#5267DF",
            position: "absolute",
            left: { xs: "10%", sm: "30%" },
            top: { xs: "15%", sm: "30%" },
            zIndex: -1,
          }}
        ></Box>
        <Box>
          <img src={Hero} alt="Hero" style={{ width: "100%", zIndex: 1 }} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} className="mb-[9rem]">
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
                xs: "0.9rem",
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
              opacity: 0.5,
            }}
          >
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Typography>
          <Grid container spacing={2} wrap="nowrap">
            <Grid item>
              <Button
                variant="contained"
                className="font-[inherit] bg-soft_blue capitalize py-[10px] px-[17px]"
              >
                Get it on Chrome
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                className="font-[inherit] shadow-sh_gray border-none capitalize text-[#242A45] py-[10px] px-[17px]"
              >
                Get it on Firefox
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
