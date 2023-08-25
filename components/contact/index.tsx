import {
  Box,
  Button,
  Grid,
  InputLabel,
  Stack,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import Map from "../map";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.scss";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const data = [
  { title: "บริษัท อินเดฟ แอดไวเซอรี่ จำกัด(สำนักงานใหญ่)" },
  { title: "IN DEV ADVISORY CO.,LTD. (HEAD OFFICE)" },
  { title: "127 ถนนวิภาวดีรังสิต แขวงสามเสนใน เขตพญาไท" },
  { title: "กรุงเทพมหานคร 10400" },
  { title: "065-454-2888" },
  { title: "marketing@indevadvisory.com" },
];

export default function ContacUs() {
  const { t } = useTranslation();

  const [values, setValues] = useState({
    firstName: "",
    lasName: "",
    email: "",
    phone: "",
    line: "",
    detail: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const fullDetail = `ชื่อ:${values.firstName} ${values.lasName}
    เบอร์โทร: ${values.phone} \n Line_ID: ${values.line} \n ข้อความ: ${values.detail}`;
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_EMAILJS as string,
        process.env.NEXT_PUBLIC_TEMPLETE_EMAILJS as string,
        {
          to_name: "marketing@indevadvisory.com",
          user_email: values.email,
          message: fullDetail,
          from_name: values.email,
          reply_to: values.email,
        },
        process.env.NEXT_PUBLIC_KEY_EMAILJS
      )
      .then(
        (result) => {
          if (result.status == 200 && result.text == "OK") {
            Swal.fire(t("thk"), "", "success");
          }
        },
        (error) => {
          alert(error);
        }
      );
  };

  const handleOnChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box className="bg_image">
      <Container maxWidth="xl" sx={{ mt: { md: 8, xs: 7 }, pt: 8 }}>
        <Typography
          className="title2"
          align="center"
          data-aos="zoom-in"
          data-aos-once="true"
          sx={{
            textShadow: `2px 2px 8px #9b06b9`,
          }}
          fontWeight={900}
        >
          {t("contact")}
        </Typography>

        <Grid container>
          <Grid item xs={12} md={3}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                },
              }}
            >
              <img
                src="../img/logo1.png"
                style={{ width: "300px", height: "300px" }}
                data-aos="zoom-in"
                data-aos-once="true"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={9} mb={5}>
            <Stack
              sx={{
                background: "rgba(11, 7, 22, 0.6)",
                width: "100%",
                height: "auto",
                p: 2,
                borderRadius: "1rem",
              }}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <Typography variant="h5" fontWeight={900}>
                Why you have to choose D.I.D?
              </Typography>
              <Typography variant="h6" mt={2}>
                The dream of yours is one thing but growing together is other
                important things which the successful of <br /> yours is our
                achievement.
              </Typography>
              <Typography variant="h5" fontWeight={900} mt={2}>
                What D.I.D different from others?
              </Typography>
              <Typography variant="h6" mt={2}>
                Marketing is our specialty and not only that the technique and
                experience of staffs are beyond more <br />
                than you can expectation.
              </Typography>

              <Typography variant="h5" fontWeight={900} mt={2}>
                Just D.I.D with Dev In Dream
              </Typography>
              {/* <Typography variant="h6" mt={2}>
                ทำกับเรา ให้ Dev in Dream ได้เป็นส่วนนึง พัฒนาระบบ หรือ
                เซิร์ฟเวอร์ ผลักดันการพัฒนาไอเดียของ <br />
                Startups , SME , ผู้ประกอบการ ให้กับธุรกิจในฝันของคุณให้เป็นจริง
              </Typography> */}

              <Typography variant="h6" mt={2}>
                If you are Startups, SME, Entrepreneur, let D.I.D make your
                dreams come true. <br />
                We are ready to be apart of you as a Developer, System
                Administrator and also Marketing.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box
          component={"form"}
          onSubmit={(e: FormEvent<InnerHTML>) => handleSubmit(e)}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} data-aos="fade-up" data-aos-once="true">
              <Stack
                sx={{
                  background: "rgba(11, 7, 22, 0.6)",
                  width: "100%",
                  height: "336.5px",
                  p: 2,
                  borderRadius: "1rem",
                }}
                flexDirection={"column"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                {data.map((item, i) => (
                  <Typography key={i}>{item.title}</Typography>
                ))}

                <img
                  src="https://www.qrcode-monkey.com/img/default-preview-qr.svg"
                  style={{ width: "100%", height: "100px" }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up" data-aos-once="true">
              <Stack
                sx={{
                  background: "rgba(11, 7, 22, 0.6)",
                  width: "100%",
                  height: "auto",
                  p: 2,
                  borderRadius: "1rem",
                }}
              >
                <Typography className="title4" align="center">
                  ติดต่อกลับ | ใบเสนอราคา
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack
                      sx={{
                        width: "100%",
                        flexDirection: { xs: "column", md: "row" },
                      }}
                      alignItems={"center"}
                      gap={2}
                    >
                      <Stack
                        flexDirection={"row"}
                        alignItems={"center"}
                        sx={{
                          width: "100%",
                          flexDirection: { xs: "column", md: "row" },
                        }}
                      >
                        <InputLabel
                          sx={{
                            width: { xs: "none", md: "36.5%" },
                            color: "white",
                          }}
                        >
                          ชื่อ
                        </InputLabel>
                        <TextField
                          size="small"
                          fullWidth
                          sx={{
                            background: "rgba(255,255,255,0.2)",
                            borderRadius: "0.5rem",
                          }}
                          inputProps={{ style: { color: "white" } }}
                          required
                          value={values.firstName}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleOnChangeValues(e)
                          }
                          name="firstName"
                        />
                      </Stack>
                      <Stack
                        flexDirection={"row"}
                        alignItems={"center"}
                        sx={{
                          width: "100%",
                          flexDirection: { xs: "column", md: "row" },
                        }}
                      >
                        <InputLabel
                          sx={{
                            width: { xs: "none", md: "36.5%" },
                            color: "white",
                          }}
                        >
                          นามสกุล
                        </InputLabel>
                        <TextField
                          size="small"
                          fullWidth
                          sx={{
                            background: "rgba(255,255,255,0.2)",
                            borderRadius: "0.5rem",
                          }}
                          inputProps={{ style: { color: "white" } }}
                          required
                          value={values.lasName}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleOnChangeValues(e)
                          }
                          name="lasName"
                        />
                      </Stack>
                    </Stack>

                    <Stack
                      sx={{ flexDirection: { xs: "column", md: "row" } }}
                      alignItems={"center"}
                      mt={1}
                    >
                      <InputLabel
                        sx={{
                          width: { xs: "none", md: "15%" },
                          color: "white",
                        }}
                      >
                        E-mail
                      </InputLabel>
                      <TextField
                        size="small"
                        fullWidth
                        sx={{
                          background: "rgba(255,255,255,0.2)",
                          borderRadius: "0.5rem",
                        }}
                        inputProps={{ style: { color: "white" } }}
                        required
                        type="email"
                        value={values.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleOnChangeValues(e)
                        }
                        name="email"
                      />
                    </Stack>

                    <Stack
                      sx={{
                        width: "100%",
                        flexDirection: { xs: "column", md: "row" },
                      }}
                      alignItems={"center"}
                      gap={2}
                    >
                      <Stack
                        flexDirection={"row"}
                        alignItems={"center"}
                        sx={{
                          width: "100%",
                          flexDirection: { xs: "column", md: "row" },
                        }}
                      >
                        <InputLabel
                          sx={{
                            width: { xs: "none", md: "36.5%" },
                            color: "white",
                          }}
                        >
                          เบอร์ติดต่อ
                        </InputLabel>
                        <TextField
                          size="small"
                          fullWidth
                          sx={{
                            background: "rgba(255,255,255,0.2)",
                            borderRadius: "0.5rem",
                          }}
                          inputProps={{ style: { color: "white" } }}
                          required
                          type="number"
                          value={values.phone}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleOnChangeValues(e)
                          }
                          name="phone"
                        />
                      </Stack>
                      <Stack
                        flexDirection={"row"}
                        alignItems={"center"}
                        sx={{
                          width: "100%",
                          flexDirection: { xs: "column", md: "row" },
                          mt: 2,
                        }}
                      >
                        <InputLabel
                          sx={{
                            width: { xs: "none", md: "36.5%" },
                            color: "white",
                          }}
                        >
                          Line ID
                        </InputLabel>
                        <TextField
                          size="small"
                          fullWidth
                          sx={{
                            background: "rgba(255,255,255,0.2)",
                            borderRadius: "0.5rem",
                          }}
                          inputProps={{ style: { color: "white" } }}
                          value={values.line}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleOnChangeValues(e)
                          }
                          name="line"
                        />
                      </Stack>
                    </Stack>

                    <Stack
                      sx={{ flexDirection: { xs: "column", md: "row" } }}
                      alignItems={"center"}
                      mt={1}
                    >
                      <InputLabel
                        sx={{
                          width: { xs: "none", md: "15%" },
                          color: "white",
                        }}
                      >
                        ข้อความ
                      </InputLabel>
                      <TextField
                        size="small"
                        fullWidth
                        sx={{
                          background: "rgba(255, 255, 255, 0.2)",
                          borderRadius: "0.5rem",
                        }}
                        inputProps={{ style: { color: "white" } }}
                        multiline
                        maxRows={3}
                        required
                        value={values.detail}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleOnChangeValues(e)
                        }
                        name="detail"
                      />
                    </Stack>

                    <Stack flexDirection={"row"} justifyContent={"center"}>
                      <Button
                        className={styles.glow_on_hover}
                        sx={{ mt: 2, color: "white" }}
                        type="submit"
                      >
                        <Typography variant="h5">ส่งข้อมูล</Typography>
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Stack
          sx={{
            background: "rgba(11, 7, 22, 0.6)",
            width: "100%",
            height: "450px",
            p: 2,
            mt: 3,
            borderRadius: "1rem",
          }}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          data-aos="zoom-in"
          data-aos-once="true"
        >
          <Map />
        </Stack>
      </Container>
      <Box pb={5} />
    </Box>
  );
}
