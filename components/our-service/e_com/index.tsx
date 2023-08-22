import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
export default function ECommerce() {
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
                src="../img/ecom.jpg"
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
                  height: "fit-content",
                  p: 2,
                  borderRadius: "1rem",
                }}
              >
                <Typography variant="h5" fontWeight={900} lineHeight={2}>
                  คืออะไร
                </Typography>
                <Typography variant="h6" lineHeight={2.5}>
                  การทําธุรกรรมผ่านสื่ออิเล็กทรอนิกส์ในทุกช่องทางที่เป็นอิเล็กทรอนิกส์
                  ได้แก่ อินเทอร์เน็ต และระบบเครือข่ายคอมพิวเตอร์
                  การพาณิชย์อิเล็กทรอนิกส์สามารถกระทําผ่านโทรศัพท์เคลื่อนที่
                  การโอนเงินอิเล็กทรอนิกส์ การจัดการห่วงโซ่อุปทาน
                  การโฆษณาในอินเทอร์เน็ต แม้กระทั่งซื้อขาย ออนไลน์
                  โดยมีวัตถุประสงค์เพื่อลดค่าใช้จ่ายและเพิ่มประสิทธิภาพขององค์กร
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
                sx={{
                  display: { xs: "block", md: "block", lg: "none" },
                }}
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
                <Typography variant="h5" fontWeight={900} lineHeight={2}>
                  ทำอะไรได้บ้าง
                </Typography>
                <Typography variant="h6" lineHeight={2.5}>
                  เทคโนโลยีสารสนเทศที่รุดหน้า ทั้งระบบโทรคมนาคม ระบบคอมพิวเตอร์
                  และอินเทอร์เน็ต ทําให้การสื่อสารกันเป็นไปได้โดยง่าย
                  และสามารถเข้าถึงผู้ใช้บริการได้หลายระดับ อีกทั้งยังสามารถ
                  โต้ตอบกันได้ทันที ทําให้สามารถเสนอธุรกรรมที่หลากหลาย เช่น
                  <br />
                  การชื้อขาย การบริการหลังการขาย การโอนเงินชําระค่าบริการสินค้า
                  การขนส่ง เป็นต้น
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
                  height: { xs: "480px", sm: "510px", lg: "480px" },
                  p: 2,
                  borderRadius: "1rem",
                }}
              >
                <Typography variant="h5" fontWeight={900} lineHeight={2}>
                  ทำอะไรได้บ้าง
                </Typography>
                <Typography variant="h6" lineHeight={2.5}>
                  เทคโนโลยีสารสนเทศที่รุดหน้า ทั้งระบบโทรคมนาคม ระบบคอมพิวเตอร์
                  และอินเทอร์เน็ต ทําให้การสื่อสารกันเป็นไปได้โดยง่าย
                  และสามารถเข้าถึงผู้ใช้บริการได้หลายระดับ อีกทั้งยังสามารถ
                  โต้ตอบกันได้ทันที ทําให้สามารถเสนอธุรกรรมที่หลากหลาย เช่น
                  <br />
                  การชื้อขาย การบริการหลังการขาย การโอนเงินชําระค่าบริการสินค้า
                  การขนส่ง เป็นต้น
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
