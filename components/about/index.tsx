import { Box, Container, Stack, Typography } from "@mui/material";
import CustomizedTimeline from "../timeline";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <Box className="bg_image">
      <Container maxWidth="xl" sx={{ mt: { md: 8, xs: 7 }, pt: 8 }}>
        <Typography
          align="center"
          className="title2"
          fontWeight={900}
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-once="true"
          sx={{
            textShadow: `2px 2px 8px #9b06b9`,
          }}
        >
          {`${t("about_us")} DEV IN DREAM`}
        </Typography>

        <Box sx={{ ml: 8 }}>
          <Typography
            variant="h5"
            fontWeight={900}
            data-aos="zoom-in"
            data-aos-duration="1700"
            data-aos-once="true"
          >
            Why D.I.D serve your dreams?
          </Typography>
          <Typography
            variant="h5"
            data-aos="zoom-in"
            data-aos-duration="1700"
            data-aos-once="true"
          >
            Dreams, everyone can dream but how many people can make it real!
            <br />
            We are one of that people who can make the dream even big or small
            become to reality.
          </Typography>

          <Typography
            variant="h5"
            mt={3}
            data-aos="zoom-in"
            data-aos-duration="1700"
            data-aos-once="true"
          >
            Dev In Dream ธุรกิจที่คุณมีความฝัน สามารถเป็นจริงได้
            ร่วมลงมือไปกับเรา ให้ความเชื่อ และฝันของคุณเป็นจริง <br /> ต่อยอด
            ธุรกิจของคุณให้ประสบความสำเร็จไปด้วยกัน
          </Typography>
        </Box>

        <Box mt={10} />

        <Typography
          variant="h3"
          fontWeight={900}
          align="center"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-once="true"
        >
          Process
        </Typography>

        <Box data-aos="zoom-in" data-aos-duration="1700" data-aos-once="true">
          <CustomizedTimeline />
        </Box>

        <Stack
          sx={{
            background: "rgba(11, 7, 22, 0.6)",
            width: "100%",
            height: "auto",
            p: 2,
            borderRadius: "1rem",
          }}
          flexDirection={"column"}
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
          className={styles.demo_1}
        >
          <Box
            // className="bg_gm"
            className={styles.demo_2}
            // data-aos="zoom-in"
            // data-aos-duration="1500"
            // data-aos-once="true"
          >
            <img src="../img/gm.jpg" className="img_gm" />
          </Box>
          <Typography
            sx={{
              fontSize: { lg: 20, xs: 16, sm: 20, md: 20 },
              textIndent: 50,
              textAlign: { xs: "left", md: "center" },
            }}
          >
            ในประเทศไทยปัจจุบัน
            มีบุคลากรและผู้มีความฝันที่ทะเยอะทะยานจะสร้างเทคโนโลยีและประดิษฐ์สิ่งต่างๆรวมถึงนวัตกรรมใหม่จำนวนมาก
          </Typography>

          <Typography
            align="center"
            sx={{
              textAlign: { xs: "left", md: "center" },
              fontSize: { lg: 20, xs: 16, sm: 20, md: 20 },
            }}
          >
            แต่ก็มีเหตุปัจจัยที่ไม่สามารถทำให้ไปถึงฝั่งฝันได้
            ด้วยคอนเนคชั่นที่มีไม่พอ ความรู้ที่มีขอบเขตจำกัด
            ไม่มีผู้เชี่ยวชาญเฉพาะทางที่ให้คำปรึกษา
          </Typography>

          <Typography
            align="center"
            sx={{
              textAlign: { xs: "left", md: "center" },
              fontSize: { lg: 20, xs: 16, sm: 20, md: 20 },
            }}
          >
            และไม่เคยพบเจอพาร์ทเนอร์ที่พาผู้คนเหล่านั้นเดินไปในทางที่ถูกต้องเหมาะสม
          </Typography>

          <Typography
            align="center"
            sx={{
              fontSize: { lg: 20, xs: 16, sm: 20, md: 20 },
            }}
          >
            D.I.D ถูกย่อมาจาก “DEV IN DREAM” ซึ่งมีความหมายในตัววลีอยู่แล้ว
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: { lg: 20, xs: 16, sm: 20, md: 20 },
            }}
          >
            DEV มาจาก Development คือ “การพัฒนาโปรแกรม” และ
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: { lg: 20, xs: 16, sm: 20, md: 20 },
            }}
          >
            IN DREAM นั้น แปลตรงตัวในภาษาไทยว่า “ในฝัน”
          </Typography>

          <Typography
            sx={{
              textIndent: 50,
              textAlign: { xs: "left", md: "center" },
              fontSize: { lg: 20, xs: 16, sm: 20, md: 20 },
            }}
            align="center"
          >
            โปรเจ็คนี้
            มิได้ถูกสร้างขึ้นเพื่อสนับสนุนวงการการเขียนหรือพัฒนาโปรแกรมเท่านั้น
            แต่หากสร้างขึ้นมา เพื่อเป็นที่รับฟัง รองรับ
            สานต่อและร่วมสร้างความฝันของผู้คน
          </Typography>
          <Typography
            sx={{
              textIndent: 50,
              textAlign: { xs: "left", md: "center" },
              fontSize: { lg: 20, xs: 16, sm: 20, md: 20 },
            }}
            align="center"
          >
            บริษัทของเรา
            อยู่ภายใต้การดูแลกำกับของบริษัทพัฒนาโปรแกรมที่สามารถสร้างเว็ปไซต์
            โปรแกรม แอพพลิเคชั่น และอื่นๆ
            <br /> ให้กับลูกค้าและพาร์ทเนอร์ ทั้งในและต่างประเทศ
          </Typography>
          <Typography
            align="center"
            sx={{
              textAlign: { xs: "left", md: "center" },
              fontSize: { lg: 20, xs: 16, sm: 20, md: 20 },
            }}
          >
            ที่มีประสบการณ์กว่า 200 โปรเจ็ค อย่างบริษัท Indevadvisory
            โดยเรามีวิสัยทัศน์ในการช่วยผลักดันการพัฒนาไอเดียของ Startups , SME ,
            ผู้ประกอบการ และที่สำคัญ
            <br />
            โดยเฉพาะ “ผู้ที่มีความฝัน”
          </Typography>

          <Typography
            sx={{
              textIndent: 50,
              textAlign: { xs: "left", md: "center" },
              fontSize: { lg: 20, xs: 16, sm: 20, md: 20 },
            }}
            align="center"
          >
            ไม่ว่าวันนี้ คุณจะเป็นใครก็ตาม หากคุณต้องการเปลี่ยนโลกของคุณ
            เปลี่ยนโลกใบนี้และพร้อมทะยานไปยังความฝันของคุณ ..
            เราพร้อมเป็นทุกอย่างเพื่อคุณ
          </Typography>
        </Stack>
      </Container>
      <Box pb={5} />
    </Box>
  );
}
