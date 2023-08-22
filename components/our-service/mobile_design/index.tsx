import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function MobileDesign() {
  return (
    <Box className="bg_image">
      <Container maxWidth="xl" sx={{ mt: { md: 8, xs: 7 }, pt: 8 }}>
        <Grid container>
          <Grid item xs={12} md={3} id="mobile">
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
                src="../img/mobile.jpg"
              />
              <Typography variant="h6" fontWeight={900}>
                Mobile Application Design <br />& Development
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
                Mobile Application คืออะไร
                คือซอฟต์แวร์ที่ถูกพัฒนาเพื่อตอบสนองทุกความ ต้องการการใช้
                งานในอุปกรณ์เคลื่อนที่ ดังนั้น Mobile Application
                จึงสามารถประยุกต์ให้เข้ากับทุกธุรกิจได้อย่างดี และมีประสิทธิภาพ
                เพื่อรองรับการใช้งานบนสมาร์ตโฟนหรือ Tablet
              </Typography>
              <Typography variant="h6" lineHeight={2.5}>
                ได้อย่างดีที่สุด
              </Typography>
              <Typography variant="h6" lineHeight={2.5}>
                เราพร้อมผนึกความเชี่ยวชาญระหว่างงานพัฒนา Application และกลยุทธ์
                ทางธุรกิจที่เราเข้าใจเป็นอย่างดี เพื่อให้ Mobile Application
                ของคุณมีมูลค่า มากกว่าเป็นเพียงพื้นที่ใช้งานของเหล่าผู้ใช้งาน
                เท่านั้น ซึ่งไม่ว่าธุรกิจประเภทไหน ก็สามารถประยุกต์ Mobile
                Application ให้ใช้งานได้ตรงกับทุกรูปแบบอุตสาหกรรม
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
              <h1></h1>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
