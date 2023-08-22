import { Box, MenuItem, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Website Design Development",
    img: "../img/s4.png",
    link: "/ourservice?subpath=website_design",
  },
  {
    id: 2,
    title: "Mobile Application Design Development",
    img: "../img/s6.jpg",
    link: "/ourservice?subpath=mobile_design",
  },
  {
    id: 3,
    title: "Server Development Management",
    img: "../img/s5.png",
    link: "/ourservice?subpath=server",
  },
  {
    id: 4,
    title: "Website",
    link: "/ourservice?subpath=website",
    img: "../img/m1.jpg",
  },
  {
    id: 5,
    title: "Mobile Application",
    link: "/ourservice?subpath=mobile",
    img: "../img/d1.jpg",
  },
  {
    id: 6,
    title: "E-commerce",
    link: "/ourservice?subpath=e_commerce",
    img: "../img/w1.jpg",
  },
  {
    id: 7,
    title: "Digital Online Marketing",
    link: "/ourservice?subpath=digital",
    img: "../img/e1.jpg",
  },
];

function HoverImage() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    console.log("handleCloseNavMenu");
    setAnchorElNav(null);
  };
  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {data.map((value,i) => {
        return (
          <MenuItem
            sx={{
              width: "100%",
              background: "#191231",
              color: "white",
            }}
            onClick={handleCloseNavMenu}
            key={i}
          >
            <Link href={value.link}>
              <Typography align="left">{value.title}</Typography>
            </Link>
          </MenuItem>
        );
      })}
    </Box>
  );
}
export default HoverImage;
