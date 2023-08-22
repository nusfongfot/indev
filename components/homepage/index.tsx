import { Box, Container, Stack, Typography } from "@mui/material";
import Form from "../form_quotation";
import Header from "../header";
import SwiperContent from "../service-ui/swiper";
import { swiper1 } from "@/data/swiper";

export default function HomeComponents() {
  return (
    <>
      <Box className="bg">
        <Header />
      </Box>

      <Box
        sx={{
          background: "black",
          p: 5,
        }}
      >
        <Stack flexDirection={"row"} justifyContent={"center"}>
          <button
            className="glow-on-hover"
            type="button"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <a href="/ourservice">
              <Typography variant="h4">เริ่มฝันให้เป็นจริงไปด้วยกัน</Typography>
            </a>
          </button>
        </Stack>
      </Box>

      <Box className="bg_image">
        <div className="bg_text">
          <Container maxWidth="xl">
            <Box mt={1} data-aos="zoom-in" data-aos-once="true">
              <SwiperContent data={swiper1} isImg1={true} />
            </Box>
            <Box
              sx={{
                background: "rgba(11,7,22,0.6)",
                p: 2,
                borderRadius: "1rem",
              }}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <Typography className="title4" textAlign={"left"}>
                ต่อยอดธุรกิจของคุณให้โดดเด่นโดยบริษัทพัฒนาโปรแกรมด้วยทีมงานที่มีประสบการณ์และคุณภาพจาก
                Dev In Dream ที่พร้อมร่วมผ่านอุปสรรคไปกับคุณ
                ไม่ว่าจะเป็นการสร้าง Website
                ที่ใช้โปรแกรมให้เข้ากับธุรกิจคุณไปสู่ความสำเร็จหรือ Application
                ที่รองรับทั้ง IOS และ Androidเพื่อ
                สร้างฝันของคุณให้เป็นจริงได้ด้วย Dev In Dream
              </Typography>
            </Box>
            <Box data-aos="zoom-in" data-aos-once="true">
              <Form />
            </Box>
          </Container>
        </div>
      </Box>
    </>
  );
}
