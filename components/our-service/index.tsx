import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import SwiperContent from "../service-ui/swiper";
import { swiper2 } from "@/data/swiper";
import Link from "next/link";
import styles from './styles.module.scss'

const data = [
  {
    title: "Website Design Development",
    img: "../img/s4.png",
    link: "/ourservice?subpath=website_design",
  },
  {
    title: "Mobile Application Design Development",
    img: "../img/s6.jpg",
    link: "/ourservice?subpath=mobile_design",
  },
  {
    title: "Server Development Management",
    img: "../img/s5.png",
    link: "/ourservice?subpath=server",
  },
];

export default function OurSerVice() {
  return (
    <Box className="bg_image">
      <Container maxWidth="xl" sx={{ mt: { md: 8, xs: 7 }, pt: 8 }}>
        <Typography
          align="center"
          className="title2"
          data-aos="zoom-in"
          data-aos-once="true"
          sx={{
            textShadow: `2px 2px 8px #9b06b9`,
          }}
        >
          บริการของเรา
        </Typography>
        <Grid container data-aos="zoom-in" data-aos-once="true">
          {data.map((item, i) => (
            <Grid item xs={12} md={4} lg={4} key={i}>
              <Stack key={i} sx={{ cursor: "pointer" }} className={styles.box}>
                <Link href={item.link} style={{ scrollBehavior: "smooth" }}>
                  <img
                    src={item.img}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                  <Typography align="center" variant="h6">
                    {item.title}
                  </Typography>
                </Link>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box mt={10} data-aos="zoom-in" data-aos-once="true">
          {/* <SwiperContent data={swiper2} isImg1={false} /> */}

          <Grid container spacing={2}>
            {swiper2.map((item, i) => (
              <Grid
                key={i}
                item
                xs={12}
                md={6}
                lg={6}
                xl={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box className="box_content">
                  <Link href={item.link}>
                    <img
                      src={item.img}
                      style={{
                        width: "300px",
                        height: "470px",
                      }}
                    />

                    <Typography className="content" align="center">
                      {item.title}
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Box pb={5} />
    </Box>
  );
}
