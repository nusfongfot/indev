import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
export default function WebSite() {
  return (
    <Box className="bg_image">
      <Container maxWidth="xl" sx={{ mt: { md: 8, xs: 7 }, pt: 8 }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: { xs: "flex", md: "flex", lg: "block" },
              justifyContent: "center",
            }}
          >
            <Stack
              sx={{ flexDirection: { xs: "column", md: "column", lg: "row" } }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <img
                src="../img/website1.jpg"
                style={{
                  width: "330px",
                  height: "480px",
                  borderRadius: "1rem",
                }}
                data-aos="fade-right"
                data-aos-delay="500"
              />

              <Box
                sx={{
                  display: { xs: "none", md: "none", lg: "none", xl: "block" },
                }}
                data-aos="fade-right"
                data-aos-delay="1000"
              >
                <DoubleArrowIcon sx={{ fontSize: 60 }} />
              </Box>

              <Box
                sx={{ display: { xs: "block", md: "block", lg: "none" } }}
                data-aos="fade-right"
                data-aos-delay="1000"
              >
                <KeyboardDoubleArrowDownIcon sx={{ fontSize: 60 }} />
              </Box>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              display: { xs: "flex", md: "flex", lg: "block" },
              justifyContent: "center",
            }}
          >
            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              justifyItems={"center"}
              sx={{
                width: "100%",
                height: "100%",
                flexDirection: { xs: "column", md: "column", lg: "row" },
              }}
              data-aos="fade-right"
              data-aos-delay="1500"
            >
              <Stack
                sx={{
                  background: "rgba(11, 7, 22, 0.6)",
                  width: { xs: "380px", md: "400px" },
                  // height: {
                  //   xs: "500px",
                  //   sm: "500px",
                  //   md: "500px",
                  //   lg: "480px",
                  //   xl: "480px",
                  // },
                  height: "fit-content",
                  p: 2,
                  borderRadius: "1rem",
                }}
              >
                <Typography variant="h5" fontWeight={900} lineHeight={2}>
                  คืออะไร
                </Typography>
                <Typography variant="h6" lineHeight={2.4}>
                  Web Design คือ
                  การออกแบบรูปลักษณ์ภายนอกของเว็บไซต์ที่ตาเรามองเห็น เช่น
                  ความสวยงาม รวมถึงการออกแบบฟังก์ชันการทํางานต่าง ๆ
                  โดยออกแบบจากมุมมองของผู้ใช้งานเป็นหลัก ซึ่งคน
                  ที่ออกแบบเว็บไซต์ หรือที่เราเรียกกันว่า Web Designer
                  มักใช้ซอฟต์แวร์ เช่น Figma หรือ Adobe XD ในการออกแบบ
                  เพื่อสร้าง User Experience
                </Typography>
              </Stack>
              <Box
                sx={{
                  display: { xs: "none", md: "none", lg: "none", xl: "block" },
                }}
                data-aos="fade-right"
                data-aos-delay="2000"
              >
                <DoubleArrowIcon sx={{ fontSize: 60 }} />
              </Box>

              <Box
                sx={{ display: { xs: "block", md: "block", lg: "none" } }}
                data-aos="fade-right"
                data-aos-delay="700"
              >
                <KeyboardDoubleArrowDownIcon sx={{ fontSize: 60 }} />
              </Box>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              display: { xs: "flex", md: "flex", lg: "block" },
              justifyContent: "center",
            }}
          >
            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              justifyItems={"center"}
              flexDirection={"row"}
              sx={{
                width: "100%",
                height: "100%",
                display: { xs: "none", md: "none", lg: "flex" },
              }}
              data-aos="fade-right"
              data-aos-delay="2700"
            >
              <Stack
                sx={{
                  background: "rgba(11, 7, 22, 0.6)",
                  width: { xs: "380px", md: "400px" },
                  height: "480px",
                  p: 2,
                  borderRadius: "1rem",
                }}
              >
                <Typography variant="h5" fontWeight={900} lineHeight={2}>
                  ทำอะไรได้บ้าง
                </Typography>
                <Typography variant="h6" lineHeight={2.4}>
                  เว็บไซต์ เป็นชุดหน้าเว็บ
                  หรือเอกสารที่เข้าถึงได้ผ่านอินเทอร์เน็ต
                  เราสามารถเข้าถึงหน้าเว็บไซต์ได้
                  โดยใช้เบราว์เซอร์เพื่อซื้อสินค้า หรือบริการ
                  ผู้เข้าชมอาจต้องการซื้อซอฟต์แวร์ที่ขายดี หรือล่าสุด,
                  ดาวน์โหลดโปรแกรมซอฟต์แวร์
                  และเข้าร่วมการสนทนาออนไลน์เกี่ยวกับงานอดิเรกที่ชื่นชอบ เป็นต้น
                </Typography>
              </Stack>
            </Stack>

            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              justifyItems={"center"}
              sx={{
                width: "100%",
                height: "100%",
                flexDirection: { xs: "column", md: "column", lg: "none" },
                display: { xs: "flex", md: "flex", lg: "none" },
              }}
              data-aos="fade-right"
              data-aos-delay="1200"
            >
              <Stack
                sx={{
                  background: "rgba(11, 7, 22, 0.6)",
                  width: { xs: "380px", md: "400px" },
                  height: "480px",
                  p: 2,
                  borderRadius: "1rem",
                }}
              >
                <Typography variant="h5" fontWeight={900} lineHeight={2}>
                  ทำอะไรได้บ้าง
                </Typography>
                <Typography variant="h6" lineHeight={2.4}>
                  เว็บไซต์ เป็นชุดหน้าเว็บ
                  หรือเอกสารที่เข้าถึงได้ผ่านอินเทอร์เน็ต
                  เราสามารถเข้าถึงหน้าเว็บไซต์ได้
                  โดยใช้เบราว์เซอร์เพื่อซื้อสินค้า หรือบริการ
                  ผู้เข้าชมอาจต้องการซื้อซอฟต์แวร์ที่ขายดี หรือล่าสุด,
                  ดาวน์โหลดโปรแกรมซอฟต์แวร์
                  และเข้าร่วมการสนทนาออนไลน์เกี่ยวกับงานอดิเรกที่ชื่นชอบ เป็นต้น
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box height={105} />
    </Box>
  );
}
