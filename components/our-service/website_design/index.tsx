import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function WebSiteDeSign() {
  const { t } = useTranslation();
  return (
    <Box className="bg_image">
      <Container maxWidth="xl" sx={{ mt: { md: 8, xs: 7 }, pt: 8 }}>
        <Grid container>
          <Grid item xs={12} md={2.5}>
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
                src="../img/web.jpg"
              />

              <Typography variant="h6" fontWeight={900}>
                Website Design & Development
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
              <Typography variant="h5" lineHeight={2.5} fontWeight={900}>
                {t("information")}
              </Typography>

              <Typography variant="h6" lineHeight={2.5}>
                {t("web_delop_1")}
              </Typography>

              <Typography variant="h6" lineHeight={2.5}>
                {t("web_delop_2")}
              </Typography>
              <Typography variant="h6" lineHeight={2.5}>
                {t("web_delop_3")}
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box height={234} />
      </Container>
    </Box>
  );
}
