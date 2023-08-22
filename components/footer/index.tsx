import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  Link,
} from "@mui/material";

const icons = [{}];

const ourService = [
  { title: "บริการของเรา", link: "/ourservice" },
  { title: "เกี่ยวกับเรา", link: "/about" },
  { title: "ติดต่อเรา", link: "/contact" },
];

export default function Footer() {
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
              <Typography mt={2}>055-555-5555</Typography>
              <Stack flexDirection={"row"} gap={1} mt={2}>
                {[1, 2].map((item, i) => (
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                    }}
                    key={i}
                  />
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