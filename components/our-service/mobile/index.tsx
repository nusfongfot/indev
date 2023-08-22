import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
export default function Mobile() {
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
                src="../img/mobile1.jpg"
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
                  height: { xs: "480px", sm: "500px", lg: "480px" },
                  p: 2,
                  borderRadius: "1rem",
                }}
              >
                <Typography variant="h6" lineHeight={2}>
                  คืออะไร
                  <br />
                  การพัฒนาโปรแกรมประยุกต์
                  เพื่อให้ใช้งานบนอุปกรณ์สื่อสารเคลื่อนที่
                  หรือสมาร์ทโฟนโดยเฉพาะนั้นเอง เพื่อ
                  ตอบสนองความต้องการของผู้บริโภค
                  พร้อมทั้งยังสนับสนุนให้ผู้ใช้สมาร์ทโฟนได้ใช้งานง่ายยิ่งขึ้น
                  ซึ่งมีหลายระบบ ปฏิบัตการที่พัฒนาออกมาให้ผู้บริโภคได้ใช้งานกัน
                  ส่วนที่ใช้งานกันอย่างแพร่หลายและเป็นที่นิยมมากก็คือ ระบบ iOS
                  และ Android จึงทําให้เกิดการพัฒนา Application
                  ลงบนสมาร์ทโฟนเป็นอย่างมาก
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
                data-aos-once="true"
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
                <Typography variant="h6">
                  ทำอะไรได้บ้าง
                  <br />
                  ประโยชน์ด้านผู้ให้บริการ
                  <br />
                  1.ลดขั้นตอนการทํางานที่ยุ่งยาก และทําให้เกิดการติดต่องานต่างๆ
                  ที่ได้ง่าย สะดวก รวดเร็วทันใจยิ่งขึ้น
                  <br />
                  2.การโฆษณาที่กระจายข่าวของธุรกิจให้เป็นวงกว้าง
                  และเป็นที่รู้จัก ให้กับผู้คนเข้าใจในจุดการขายของธุรกิจเรา
                  <br />
                  ประโยชน์ด้านผู้บริโภค / ผู้ใช้งาน <br />
                  1.การมี Application จะช่วยในการลดหย่อนเวลาได้เยอะ
                  ทําให้ผู้ใช้งานไม่จําเป็นต้องออกนอกสถานที่ แค่ใช้งาน
                  Application ก็สามารถทําธุรการส่วนตัวได้ง่าย
                  <br />
                  2.เพิ่มความสะดวก สบายให้กับผู้ใช้งาน
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
              data-aos-once="true"
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
                <Typography variant="h6">
                  ทำอะไรได้บ้าง
                  <br />
                  ประโยชน์ด้านผู้ให้บริการ
                  <br />
                  1.ลดขั้นตอนการทํางานที่ยุ่งยาก และทําให้เกิดการติดต่องานต่างๆ
                  ที่ได้ง่าย สะดวก รวดเร็วทันใจยิ่งขึ้น
                  <br />
                  2.การโฆษณาที่กระจายข่าวของธุรกิจให้เป็นวงกว้าง
                  และเป็นที่รู้จัก ให้กับผู้คนเข้าใจในจุดการขายของธุรกิจเรา
                  <br />
                  ประโยชน์ด้านผู้บริโภค / ผู้ใช้งาน <br />
                  1.การมี Application จะช่วยในการลดหย่อนเวลาได้เยอะ
                  ทําให้ผู้ใช้งานไม่จําเป็นต้องออกนอกสถานที่ แค่ใช้งาน
                  Application ก็สามารถทําธุรการส่วนตัวได้ง่าย
                  <br />
                  2.เพิ่มความสะดวก สบายให้กับผู้ใช้งาน
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
