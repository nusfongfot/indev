import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export default function CustomizedTimeline() {
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Timeline position={matches ? "alternate" : "right"}>
      <TimelineItem>
        <TimelineSeparator sx={{ height: 300 }}>
          <Box mb={10} />
          <img
            src="../img/glo13.png"
            style={{ width: 120, height: 120, borderRadius: "50%" }}
            className="spin"
          />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent
          sx={{
            py: "12px",
            px: 2,
            mt: 9,
          }}
        >
          <Typography
            className={styles.content}
            variant={"h4"}
            component="span"
            fontWeight={900}
            sx={{ width: 10 }}
          >
            Design
          </Typography>
          <Typography variant="h6" className={styles.hide}>
            {t("respond_to_1")}
            <br />
            {t("respond_to_2")}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <img
            src="../img/glo13.png"
            style={{ width: 120, height: 120, borderRadius: "50%" }}
            className="spin"
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            className={styles.content}
            variant="h4"
            component="span"
            fontWeight={900}
          >
            Development
          </Typography>
          <Typography variant="h6" className={styles.hide}>
            {/* ออกแบบงาน ให้ตอบโจทย์ผู้ใช้งาน <br />
            ให้งานออกมามีคุณภาพโดยทีมผู้พัฒนาจาก Dev In Dream */}
            {t("develop_to_1")}
            <br />
            {t("develop_to_2")}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator sx={{ height: 300 }}>
          <TimelineConnector />

          <img
            src="../img/glo13.png"
            style={{ width: 120, height: 120, borderRadius: "50%" }}
            className="spin"
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            py: "12px",
            px: 2,
            mt: 9,
          }}
        >
          <Typography
            className={styles.content}
            variant={"h4"}
            component="span"
            fontWeight={900}
          >
            Server Creation
          </Typography>
          <Typography variant="h6" className={styles.hide}>
            {/* สร้างงานผ่านเซิร์ฟเวอร์ของโปรแกรมด้วย <br />
            ภาษา HTML หรือ เครื่องมือที่ พัฒนาระบบ ให้มีประสิทธิภาพ */}
            {t("create_task_1")}
            <br />
            {t("create_task_2")}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <img
            src="../img/glo13.png"
            style={{ width: 120, height: 120, borderRadius: "50%" }}
            className="spin"
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            py: "12px",
            px: 2,
          }}
        >
          <Typography
            className={styles.content}
            variant="h4"
            component="span"
            fontWeight={900}
          >
            Improve and Test
          </Typography>
          <Typography className={styles.hide} variant="h6">
            {/* ทดสอบผลงาน ปรับปรุงและฟังความคิดเห็น <br />
            นํามาแก้ไขให้ตอบโจทย์กับที่ลูกค้า ต้องการ */}
            {t("welove_1")}
            <br />
            {t("welove_2")}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator sx={{ height: 300 }}>
          <TimelineConnector />
          <img
            src="../img/glo13.png"
            style={{ width: 120, height: 120, borderRadius: "50%" }}
            className="spin"
          />
          <Box mt={10} />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            py: "12px",
            px: 2,
            mt: 10,
          }}
        >
          <Typography
            className={styles.content}
            variant="h4"
            component="span"
            fontWeight={900}
          >
            Continuous Development
          </Typography>
          <Typography className={styles.hide} variant="h6">
            {/* พัฒนาเซิร์ฟเวอร์อย่างต่อเนื่อง คอยแก้ไข <br />
            อัพเดทระบบเซิร์ฟเวอร์ให้มี ประสิทธิภาพตามที่ลูกค้าต้องการและพึงพอใจ */}
            {t("dev_in_1")}
            <br />
            {t("dev_in_2")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
