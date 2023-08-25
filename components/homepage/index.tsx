import { Box, Container, Stack, Typography } from "@mui/material";
import Form from "../form_quotation";
import Header from "../header";
import SwiperContent from "../service-ui/swiper";
import { useTranslation } from "react-i18next";

export default function HomeComponents() {
  const { t } = useTranslation();

  const swiper1 = [
    { img: "../img/s2.jpg", title: t("application"), link: "" },
    { img: "../img/s1.jpg", title: t("website"), link: "" },
    { img: "../img/s3.jpg", title: t("server"), link: "" },
  ];
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
                {t("enhance_your")}
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
