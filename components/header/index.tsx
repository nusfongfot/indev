import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <Box sx={{ pt: { lg: 10, xl: 16, sm: 16, md: 16, xs: 16 } }}>
      <Typography
        align="center"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
        sx={{
          textShadow: `2px 2px 8px #da05ff`,
        }}
        variant="h2"
        className="title1"
      >
        {"สร้างแอปพลิเคชั่นและเว็บไซต์ของคุณ"}
      </Typography>

      <Typography
        align="center"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
        sx={{
          // typography: { lg: "h3", xl: "h2" },

          textShadow: `2px 2px 8px #da05ff`,
        }}
        className="title1"
      >
        {"ให้ตรงตามฝันที่คุณต้องการ"}
      </Typography>
      <Typography
        align="center"
        // className="title2"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-once="true"
        sx={{
          // typography: { lg: "h3", xl: "h2" },

          textShadow: `2px 2px 8px #da05ff`,
        }}
        className="title1"
      >
        ทั้งใน IOS และ Android บนสมาร์ทโฟนไปกับ
      </Typography>
      <Typography
        align="center"
        // className="title2"
        data-aos="zoom-in"
        data-aos-duration="1300"
        data-aos-once="true"
        sx={{
          // typography: { lg: "h3", xl: "h2" },

          textShadow: `2px 2px 8px #da05ff`,
        }}
        // variant="h2"
        className="title1"
      >
        DEV IN DREAM
      </Typography>
      <Stack flexDirection={"row"} justifyContent={"center"}>
        {/* <img
          src="../img/logo1.png"
          style={{ width: 150, height: 150, objectFit: "cover" }}
          data-aos="zoom-in"
          data-aos-once="true"
        /> */}

        <Image
          src="/img/logo1.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "150px", height: "150px" }}
          // objectFit="cover"
          alt="image"
          data-aos="zoom-in"
          data-aos-once="true"
        />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Typography
          className="title4 sub_logo"
          sx={{
            color: "#1b1145",
            fontWeight: 900,
            // mt: { xs: 8, sm: 26, xl: 19, lg: 12 },
            textShadow: `2px 2px 8px #f560bc`,
          }}
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          Just D.I.D with Dev In Dream
        </Typography>
      </Box>
    </Box>
  );
}
