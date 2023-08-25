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
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const icons = [
  {
    title: "Facebook",
    img: "../img/fb.jpg",
    link: "https://www.facebook.com/profile.php?id=100095225520798",
  },
  {
    title: "Tiktok",
    img: "../img/tk.jpg",
    link: "https://www.tiktok.com/@dev.in.dream?lang=th-TH",
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
            height={"100%"}
          >
            <Box />
            <Stack
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-around"}
              height={"100%"}
            >
              <Box>
                <Link href={"/"}>
                  <img
                    src="../img/logo.png"
                    style={{ width: 200, height: 72, objectFit: "cover" }}
                  />
                </Link>
              </Box>

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
            height={"100%"}
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
              <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                <LocalPhoneIcon />
                <Typography>065-454-2888</Typography>
              </Stack>

              <Stack gap={1} mt={1}>
                {icons.map((item, i) => (
                  <Link href={item.link} key={i} target="_blank">
                    <Stack
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <img
                        src={item.img}
                        style={{ width: 40, height: 40, borderRadius: "50%" }}
                      />
                      <Typography>{item.title}</Typography>
                    </Stack>
                  </Link>
                ))}
              </Stack>
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
            flexDirection={"column"}
            alignItems={"center"}
            height={"100%"}
            justifyContent={"space-between"}
          >
            <Typography className="title2 color_purple">Address</Typography>
            <Typography>บริษัท อิน เดฟ แอดไวเซอรี่ จำกัด</Typography>
            <Typography>(สำนักงานใหญ่)</Typography>
            <Typography>127 ถนนวิภาวดีรังสิต แขวงสามเสนใน</Typography>
            <Typography>เขตพญาไท กรุงเทพมหานคร 10400</Typography>
          </Stack>
          <Stack flexDirection={"column"} alignItems={"flex-end"}>
            <Typography sx={{ fontSize: 10 }}>&#174; DEV IN DREAM</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
