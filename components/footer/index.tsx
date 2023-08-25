import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const icons = [
  {
    img: "../img/fb.jpg",
    link: "https://www.facebook.com/profile.php?id=100095225520798",
  },
  {
    img: "../img/tk.jpg",
    link: "/#",
  },
];

export default function Footer() {
  const { t } = useTranslation();
  const ourService = [
    { title: t("our_service"), link: "/ourservice" },
    { title: t("about_us"), link: "/about" },
    { title: t("contact"), link: "/contact" },
  ];
  return (
    <Box p={2} className="footer">
      <Grid container>
        <Grid item xs={12} md={4}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ height: 200 }}
          >
            <Box />
            <Stack
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{ height: "198px" }}
            >
              <Link href={"/"}>
                <img
                  src="../img/logo.png"
                  style={{ width: 200, height: 72, objectFit: "cover" }}
                />
              </Link>

              {ourService.map((item, i) => (
                <Link
                  href={item.link}
                  sx={{
                    ":hover": {
                      textDecoration: "underline",
                      textDecorationColor: "#860086",
                      textDecorationThickness: 4,
                    },
                    color: "white",
                  }}
                  key={i}
                >
                  <Typography>{item.title}</Typography>
                </Link>
              ))}
            </Stack>

            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: "#540e54", width: 3 }}
              sx={{ display: { xs: "none", md: "none", lg: "block" } }}
            />

            <Box sx={{ display: { xs: "block", md: "block", lg: "none" } }} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box />
            <Stack
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography className="title2 color_purple">
                Contact Us
              </Typography>
              <Typography mt={2}>065-454-2888</Typography>
              <Stack flexDirection={"row"} gap={1} mt={2}>
                {icons.map((item, i) => (
                  <Link href={item.link} key={i} target="_blank">
                    <img
                      src={item.img}
                      style={{ width: 30, height: 30, borderRadius: "50%" }}
                    />
                  </Link>
                ))}
              </Stack>

              <Typography mt={2}>Facebook,TikTok</Typography>
            </Stack>

            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: "#540e54", width: 3 }}
              sx={{ display: { xs: "none", md: "none", lg: "block" } }}
            />

            <Box sx={{ display: { xs: "block", md: "block", lg: "none" } }} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack flexDirection={"column"} alignItems={"center"}>
            <Typography className="title2 color_purple">Address</Typography>
            <Typography mt={1}>บริษัท อิน เดฟ แอดไวเซอรี่ จำกัด</Typography>
            <Typography mt={1}>(สำนักงานใหญ่)</Typography>
            <Typography mt={1}>127 ถนนวิภาวดีรังสิต แขวงสามเสนใน</Typography>
            <Typography mt={1}>เขตพญาไท กรุงเทพมหานคร 10400</Typography>
          </Stack>
          <Stack flexDirection={"column"} alignItems={"flex-end"}>
            <Typography mt={1} sx={{ fontSize: 10 }}>
              &#174; DEV IN DREAM
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
