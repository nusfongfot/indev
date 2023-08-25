import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Server() {
  const { t } = useTranslation();
  return (
    <Box className="bg_image">
      <Container maxWidth="xl" sx={{ mt: { md: 8, xs: 7 }, pt: 8 }}>
        <Grid container mt={3} id="server">
          <Grid item xs={12} md={2.5} id="mobile">
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
          <Grid item xs={12} md={9.5}>
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
                {t("information")}
              </Typography>

              <Typography variant="h5" lineHeight={2} fontWeight={900}>
                {t("server_1")}
              </Typography>
              <Typography variant="h5" lineHeight={2}>
                {t("server_2")}
              </Typography>

              <Typography variant="h5" lineHeight={3} fontWeight={900}>
                {/* server มีกี่ประเภท */}
                {t("server_3")}
              </Typography>
              <Typography variant="h5" lineHeight={2}>
                {t("server_4")}
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
          {t("application_Tool")}
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
              <Typography variant="h6">{t("sql")}</Typography>
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
              <Typography variant="h6">{t("mail")}</Typography>
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
              <Typography variant="h6">{t("dns")}</Typography>
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

              <Typography variant="h6">{t("internet")}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
