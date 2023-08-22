import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function WebSiteDeSign() {
  return (
    <Box className="bg_image">
      <Container maxWidth="xl" sx={{ mt: { md: 8, xs: 7 }, pt: 8 }}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Stack
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "center", lg: "flex-start" },
              }}
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <img
                style={{
                  width: "250px",
                  height: "320px",
                  borderRadius: "1rem",
                }}
                src="../img/web.jpg"
              />

              <Typography variant="h6" fontWeight={900}>
                Website Design & Development
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={9}>
            <Stack
              sx={{
                background: "rgba(11, 7, 22, 0.6)",
                p: 2,
                borderRadius: "1rem",
                height: "100%",
              }}
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <Typography variant="h5" lineHeight={2.5} fontWeight={900}>
                ข้อมูล
              </Typography>

              <Typography variant="h6" lineHeight={2.5}>
                Web Development คือ ขั้นตอนกระบวนการพัฒนาเว็บไซต์
                การเขียนโค้ดภาษาโปรแกรม และ
                เครื่องมือสำหรับการสร้างเว็บไซต์ขึ้นมา
                เพื่อสร้างการทำงานที่ต้องการ โดยใช้ภาษาคอมพิวเตอร์ต่าง ๆ เช่น
                CSS, HTML, JavaScript, Python, Ruby on Rails และอื่น ๆ
              </Typography>

              <Typography variant="h6" lineHeight={2.5}>
                ซึ่งส่วนมากผู้ที่ทำธุรกิจตลาดออนไลน์ มักจะทำ Web Development
                เพื่อสร้างความน่าเชื่อถือให้กับธุรกิจของตนมากขึ้น
              </Typography>
              <Typography variant="h6" lineHeight={2.5}>
                Web Development แบ่งออกเป็น Front-end Development, Back-end
                Development และ Full-stack Development
                หน้าที่การทำงานเกี่ยวกับการดูแลเว็บไซต์ก็จะแตกต่างกันออกไป
                แต่มีจุดหมายเดียวกัน คือ เป็นการพัฒนาเว็บไซต์ให้สมบูรณ์มากที่สุด
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Grid container mt={3} spacing={3}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                background: "rgba(11, 7, 22, 0.6)",
                p: 2,
                mt: 5,
                borderRadius: "1rem",
              }}
            >
              <Typography>Templete</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
