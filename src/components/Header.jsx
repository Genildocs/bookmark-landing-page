import React, { useState } from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Logo from "../assets/logo-bookmark.svg";
import IconHamburger from "../assets/icon-hamburger.svg";
import IconClose from "../assets/icon-close.svg";

export default function Header({ mobile }) {
  const [isOpen, setIsOpen] = useState(false);
  const listItem = ["Features", "Pricing", "Contact"];

  const styleMenu = {
    background: "#242A45",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    paddingTop: "3.75rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
  };

  return (
    <Box
      sx={
        isOpen
          ? styleMenu
          : {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "3.75rem",
            }
      }
    >
      <Box>
        <img src={Logo} alt="Logo" />
      </Box>
      <Box>
        <List
          sx={{
            display: {
              sm: "flex",
            },
            alignItems: "center",
            position: {
              xs: "absolute",
              sm: "static",
            },
            top: "50%",
            left: "50%",
            transform: {
              xs: "translate(-50%, -50%)",
              sm: "translate(0, 0)",
            },
          }}
        >
          {listItem.map((item) => (
            <ListItem variant="p" style={{ width: "fit-content" }} key={item}>
              <Link
                href="#"
                underline="none"
                textTransform="uppercase"
                color="black"
              >
                {item}
              </Link>
            </ListItem>
          ))}
          <Button
            variant="outlined"
            size="large"
            sx={{
              pl: 5,
              pr: 5,
              background: "#FA5959",
              color: "white",
              border: "2px solid #FA5959",
              fontFamily: "inherit",
              letterSpacing: "1.5px",
              transition:
                "background 0.5s ease-in-out, color 0.3s ease-in-out, border 0.5s ease-in-out",

              "&:hover": {
                background: "white",
                color: "#FA5959",
                border: "2px solid #FA5959",
              },
            }}
          >
            Login
          </Button>
        </List>

        <Button
          sx={{
            display: { xs: "block", sm: "none" },
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <img src={IconClose} alt="IconClose" />
          ) : (
            <img src={IconHamburger} alt="IconHamburger" />
          )}
        </Button>
      </Box>
    </Box>
  );
}
