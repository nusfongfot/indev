import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
export default function Digital() {
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
                src="../img/digital.jpg"
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
                  height: "100%",
                  p: 2,
                  borderRadius: "1rem",
                }}
              >
                <Typography variant="h5" fontWeight={900} lineHeight={2}>
                  คืออะไร
                </Typography>
                <Typography variant="h6" lineHeight={2}>
                  เป็นรูปแบบหนึ่งของการตลาดสินค้าหรือบริการที่ใช้เทคโนโลยีด้านดิจทัลทางอินเทอร์เน็ตท้ัง
                  แอปพลิเคชันโทรศัพท์มือถือ การโฆษณาด้วยการแสดงข้อความจอภาพ
                  และสื่อดิจิทัลอื่น ๆ การตลาดดิจิทัลเข้ามามีบทบาทมากขึ้น
                  ทําให้ผู้คนหันมาสนใจทางด้าน การตลาดออนไลน์
                  เพราะช่วยในเรื่องความสะดวกและยังมี digital platform หลากหลาย
                  เรียกว่า การตลาด 5.0 (Omni Chanel) ทําให้การตลาดดิจิทัล
                  เติบโตอย่างรวดเร็ว
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
                  height: "100%",
                  p: 2,
                  borderRadius: "1rem",
                }}
              >
                <Typography variant="h5" fontWeight={900} lineHeight={2}>
                  ทำอะไรได้บ้าง
                </Typography>
                <Typography variant="h6" lineHeight={2}>
                  การทําโฆษณาออนไลน์ โดยสามารถทําได้ทั้งผ่านแพลตฟอร์มต่างๆ อย่าง
                  Google Ads, Meta Ads, Linkedin Ads และอื่นๆ การทํา SEO
                  ซึ่งจะช่วยให้เว็บไซต์ของคุณติดหน้าแรกของ Search Engine โดย
                  Search Engine ที่ คนส่วนมากนิยมใช้คือ Google การทํา SEO
                  ต้องมีทั้งการวิเคราะห์ข้อมูล Local SEO หรือ
                  เป็นการทําให้หน้าร้านค้าออฟไลน์ของคุณ
                  แสดงผลมากขึ้นเมื่อทําการค้นหาบนหน้า Search Engine
                  หรือด้วยวิธีออนไลน์
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
                  height: "100%",
                  p: 2,
                  borderRadius: "1rem",
                }}
              >
                <Typography variant="h5" fontWeight={900} lineHeight={2}>
                  ทำอะไรได้บ้าง
                </Typography>
                <Typography variant="h6" lineHeight={2}>
                  การทําโฆษณาออนไลน์ โดยสามารถทําได้ทั้งผ่านแพลตฟอร์มต่างๆ อย่าง
                  Google Ads, Meta Ads, Linkedin Ads และอื่นๆ การทํา SEO
                  ซึ่งจะช่วยให้เว็บไซต์ของคุณติดหน้าแรกของ Search Engine โดย
                  Search Engine ที่ คนส่วนมากนิยมใช้คือ Google การทํา SEO
                  ต้องมีทั้งการวิเคราะห์ข้อมูล Local SEO หรือ
                  เป็นการทําให้หน้าร้านค้าออฟไลน์ของคุณ
                  แสดงผลมากขึ้นเมื่อทําการค้นหาบนหน้า Search Engine
                  หรือด้วยวิธีออนไลน์
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
