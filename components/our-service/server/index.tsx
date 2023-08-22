import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function Server() {
  return (
    <Box className="bg_image">
      <Container maxWidth="xl" sx={{ mt: { md: 8, xs: 7 }, pt: 8 }}>
        <Grid container mt={3} id="server">
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
                src="../img/server.jpg"
              />
              <Typography variant="h6" fontWeight={900}>
                Server Development <br /> & Management
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
              <Typography variant="h5" lineHeight={2} fontWeight={900}>
                ข้อมูล
              </Typography>

              <Typography variant="h5" lineHeight={2} fontWeight={900}>
                Server ทําหน้าที่อะไร
              </Typography>
              <Typography variant="h5" lineHeight={2}>
                Server ทําหน้าที่เป็นเหมือนผู้ให้บริการต่าง ๆ
                ในโครงข่ายอินเตอร์เน็ต หรือโครงข่ายที่มีลูก ข่าย
                เมื่อมีผู้ใช้งานมาขอใช้บริการ Server เครื่อง Server
                จะจัดสรรทรัพยากรที่มีอยู่ในเครื่องเพื่อ ให้บริการในทันที
              </Typography>

              <Typography variant="h5" lineHeight={3} fontWeight={900}>
                server มีกี่ประเภท
              </Typography>
              <Typography variant="h5" lineHeight={2}>
                ประเภทของเซิร์ฟเวอร์ โดยปกติจะแบ่งได้เป็น 4 ประเภท คือ File
                Server, Print Server, Database Server, Application
                Serverการแบ่งออกเป็น 4 ประเภทนั้น แบ่งตามลักษณะการใช้ งาน คือ
                เก็บ - บริการไฟล์ บริการ/บริหาร งานพิมพ์ เก็บและบริการฐานข้อมูล
                และบริการ/บริหาร ซอฟต์แวร์ประยุกต์
              </Typography>
              <Typography variant="h5" lineHeight={2}>
                ส่วน Mail Server, Internet Server
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          align="center"
          lineHeight={2}
          fontWeight={900}
          mt={3}
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          เครื่องมือการใช้งาน
        </Typography>

        <Grid container spacing={3} pb={5}>
          <Grid item xs={12} md={4} lg={4} xl={3}>
            <Box
              sx={{
                background: "rgba(11, 7, 22, 0.6)",
                p: 2,
                mt: 5,
                borderRadius: "1rem",
              }}
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <Typography variant="h5" fontWeight={900} lineHeight={2}>
                SQL Server Developer
              </Typography>
              <Typography variant="h6">
                SQL Server
                เวอร์ชันที่มีประสิทธิภาพซึ่งได้รับการออกแบบมาโดยเฉพาะสําหรับเดฟ
                Testerและบุคคลทั่วไปที่ต้องการฟีเจอร์ที่ครอบคลุมสําหรับการสร้างและทดสอบแอปพลิเคชัน
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} lg={4} xl={3}>
            <Box
              sx={{
                background: "rgba(11, 7, 22, 0.6)",
                p: 2,
                mt: 5,
                borderRadius: "1rem",
                height: 240,
              }}
              data-aos="zoom-in"
              data-aos-duration="1400"
              data-aos-once="true"
            >
              <Typography variant="h5" fontWeight={900} lineHeight={2}>
                Mail Server
              </Typography>
              <Typography variant="h6">
                ให้บริการการรับส่งอีเมล์ ตัวอย่างเช่น Exim, Sendmail, Zimbra และ
                Microsoft Exchange เป็นต้น
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} lg={4} xl={3}>
            <Box
              sx={{
                background: "rgba(11, 7, 22, 0.6)",
                p: 2,
                mt: 5,
                borderRadius: "1rem",
                height: 240,
              }}
              data-aos="zoom-in"
              data-aos-duration="1600"
              data-aos-once="true"
            >
              <Typography variant="h5" fontWeight={900} lineHeight={2}>
                DNS Server
              </Typography>
              <Typography variant="h6">
                ให้บริการการจัดเก็บข้อมูลชื่อโดเมนเมน ช่วยแปลงหมายเลข IP Address
                เป็นชื่อ Domain Name ตัวอย่างเช่น Bind, PowerDNS และ MyDNS
                เป็นต้น
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} lg={4} xl={3}>
            <Box
              sx={{
                background: "rgba(11, 7, 22, 0.6)",
                p: 2,
                mt: 5,
                borderRadius: "1rem",
                height: 240,
              }}
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <Typography variant="h5" fontWeight={900} lineHeight={2}>
                Internet Server
              </Typography>

              <Typography variant="h6">
                คือเครื่องที่ทาหน้าที่ในการเชื่อมต่อระบบอินเทอร์เน็ตและ
                ควบคุมการใช้บริการอินเทอร์เน็ตให้กับ เครื่องคอมพิวเตอร์ลูกข่าย
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
