import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import { useRouter } from "next/router";
import { NoSsr, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HoverImage from "./hoverImage";
import PublicIcon from "@mui/icons-material/Public";
import { useTranslation } from "react-i18next";

const settings = [
  {
    title: "ไทย",
    img: "../img/thIcon.webp",
    lang: "th",
  },
  {
    title: "English",
    img: "../img/enIcon.png",
    lang: "en",
  },
];

function ResponsiveAppBar() {
  const { t, i18n } = useTranslation();

  const [lang, setLang] = React.useState<string>("");

  const router: any = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [openSubMenu, setOpenSubMenu] = React.useState<null | HTMLElement>(
    null
  );

  const [flag, setFlag] = React.useState<string>("../img/thIcon.webp");

  const pages = [
    { title: t("home"), link: "/" },
    { title: t("our_service"), link: "/ourservice" },
    { title: t("about_us"), link: "/about" },
    { title: t("contact"), link: "/contact" },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenSubMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenSubMenu(event.currentTarget);
  };

  const handleCloseSubMenu = () => {
    setOpenSubMenu(null);
  };

  const handleChangeLang = (item: { img: string; lang: string }) => {
    const getFlag = item.img;
    const chooseLng = item.lang;
    setFlag(getFlag);
    setLang(chooseLng);
    i18n.changeLanguage(chooseLng);
    window.localStorage.setItem("selectedLang", chooseLng);
  };

  React.useEffect(() => {
    const getFlag: any = window.localStorage.getItem("selectedLang");
    if (getFlag == "th") {
      setFlag("../img/thIcon.webp");
    } else if (getFlag == "en") {
      setFlag("../img/enIcon.png");
    } else {
      setFlag("../img/thIcon.webp");
    }
    i18n.changeLanguage(getFlag);
  }, []);

  return (
    <NoSsr>
      <AppBar position="fixed" sx={{ background: "#100b1f" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link href={"/"}>
                <img src="../img/logo.png" className="logo" />
              </Link>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "#540e54" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, i) => (
                  <MenuItem
                    key={i}
                    onClick={handleCloseNavMenu}
                    sx={{ background: "#191231" }}
                  >
                    <Link href={page.link} style={{ color: "white" }}>
                      {page.title}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page, i) => (
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    my: 2,
                    mr: 6,
                    color: router.pathname == page.link ? "#860086" : "inherit",
                    ":hover": {
                      textDecoration:
                        router.pathname == page.link ? "none" : "underline",
                      textDecorationColor: "#860086",
                      textDecorationThickness: 4,
                    },
                  }}
                  key={i}
                >
                  <Link href={page.link}>{page.title}</Link>
                  {page.title == t("our_service") && (
                    <KeyboardArrowDownIcon
                      onClick={(e: any) => handleOpenSubMenu(e)}
                      sx={{ cursor: "pointer", fontSize: 30 }}
                    />
                  )}
                </Stack>
              ))}
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none", flexGrow: 1 } }}>
              <Link href={"/"}>
                <img src="../img/logo.png" className="logo" />
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
              >
                {/* <PublicIcon  sx={{ color: "#540e54", fontSize: 30 }} /> */}
                <img
                  style={{ borderRadius: "50%", width: 25, height: 25 }}
                  src={flag}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, i) => (
                  <MenuItem
                    sx={{ background: "#191231" }}
                    key={i}
                    onClick={() => {
                      handleCloseUserMenu();
                      handleChangeLang(setting);
                    }}
                  >
                    <Stack flexDirection={"row"} gap={2}>
                      <img
                        src={setting.img}
                        style={{ width: 25, height: 20 }}
                      />
                      <Typography textAlign="center" sx={{ color: "white" }}>
                        {setting.title}
                      </Typography>
                    </Stack>
                  </MenuItem>
                ))}
              </Menu>

              <Menu
                id="simple-menu"
                anchorEl={openSubMenu}
                open={Boolean(openSubMenu)}
                onClick={handleCloseSubMenu}
                // MenuListProps={{ onMouseLeave: handleCloseSubMenu }}
                sx={{
                  display: { xs: "none", sm: "none", lg: "flex" },
                }}
              >
                <HoverImage />
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </NoSsr>
  );
}
export default ResponsiveAppBar;
