import {
  Box,
  Button,
  Grid,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.scss";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();
  const [values, setValues] = useState({
    firstName: "",
    lasName: "",
    phone: "",
    email: "",
    detail: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const fullname = `${values.firstName} ${values.lasName}`;
    const fullDetail = `ชื่อ:${values.firstName} ${values.lasName}
    เบอร์โทร: ${values.phone} \n ข้อความ: ${values.detail}`;
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
    <Box
      sx={{
        background: "rgba(11,7,22,0.6)",
        p: 2,
        mt: 5,
        borderRadius: "1rem",
      }}
      component={"form"}
      onSubmit={(e: FormEvent<InnerHTML>) => handleSubmit(e)}
    >
      <Typography align="center" className="title2" mb={3}>
        ขอใบเสนอราคาหรือสอบถามเพิ่มเติม
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={10}>
          <Stack
            sx={{ width: "100%", flexDirection: { xs: "column", md: "row" } }}
            alignItems={"center"}
            gap={2}
          >
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              sx={{ width: "100%", flexDirection: { xs: "column", md: "row" } }}
            >
              <InputLabel
                sx={{ width: { xs: "none", md: "36.5%" }, color: "white" }}
              >
                ชื่อ
              </InputLabel>
              <TextField
                size="small"
                fullWidth
                sx={{
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "0.5rem",
                  input: {
                    color: "white",
                  },
                }}
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
              sx={{ width: "100%", flexDirection: { xs: "column", md: "row" } }}
            >
              <InputLabel
                sx={{ width: { xs: "none", md: "36.5%" }, color: "white" }}
              >
                นามสกุล
              </InputLabel>
              <TextField
                size="small"
                fullWidth
                sx={{
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "0.5rem",
                  input: {
                    color: "white",
                  },
                }}
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
              sx={{ width: { xs: "none", md: "15%" }, color: "white" }}
            >
              เบอร์โทรติดต่อ
            </InputLabel>
            <TextField
              size="small"
              fullWidth
              sx={{
                background: "rgba(255,255,255,0.2)",
                borderRadius: "0.5rem",
                input: {
                  color: "white",
                },
              }}
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
            sx={{ flexDirection: { xs: "column", md: "row" } }}
            alignItems={"center"}
            mt={1}
          >
            <InputLabel
              sx={{ width: { xs: "none", md: "15%" }, color: "white" }}
            >
              E-mail
            </InputLabel>
            <TextField
              size="small"
              fullWidth
              sx={{
                background: "rgba(255,255,255,0.2)",
                borderRadius: "0.5rem",
                input: {
                  color: "white",
                },
              }}
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
            sx={{ flexDirection: { xs: "column", md: "row" } }}
            alignItems={"center"}
            mt={1}
          >
            <InputLabel
              sx={{ width: { xs: "none", md: "15%" }, color: "white" }}
            >
              รายละเอียด
            </InputLabel>
            <TextField
              size="small"
              fullWidth
              sx={{
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "0.5rem",
              }}
              inputProps={{ style: { color: "white" } }}
              required
              multiline
              maxRows={3}
              value={values.detail}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleOnChangeValues(e)
              }
              name="detail"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={2}>
          <Stack
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"flex-end"}
          >
            <img
              style={{ width: "auto", height: "140px", background: "white" }}
              src="../img/line.jpg"
            />
            <Button
              className={styles.glow_on_hover}
              endIcon={<SendIcon />}
              type="submit"
              sx={{ mt: 1, color: "white" }}
            >
              <Typography variant="h5">ส่งข้อความถึงเรา</Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
