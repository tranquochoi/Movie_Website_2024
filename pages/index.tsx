import type { ReactElement } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Link,
} from "@mui/material";
import { NextPageWithLayout } from "./_app";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatarUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "タン コック ホイ",
    role: "Developer",
    description: "Code lòi trĩ nhưng vẫn chưa xong dự án :))",
    avatarUrl: "/hoi.jpg",
  },
  {
    name: "タン",
    role: "Developer",
    description: "Code đối với anh là chuyện nhỏ =))",
    avatarUrl: "/thanh.jpg",
  },
  {
    name: "ユイ",
    role: "Developer",
    description: "Kẻ cuồng 'bạn thân', chúa tuể hủy diệt code.",
    avatarUrl: "/duy.jpg",
  },
  {
    name: "グエン トン ティン",
    role: "Developer",
    description: "Khó quá thì đi hỏi anh 'bạn thân'.",
    avatarUrl: "/tin.jpg",
  },
];

const HomeDetail: NextPageWithLayout = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: "white" }}>
          <Link href="/home" underline="none" color="inherit">
            グループ　1
          </Link>
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} md={6} lg={3}>
              <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
                <Avatar
                  alt={member.name}
                  src={member.avatarUrl}
                  sx={{ width: 100, height: 100, margin: "auto" }}
                />
                <Typography variant="h6" mt={2}>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" mt={1}>
                  {member.role}
                </Typography>
                <Typography variant="h6" mt={2}>
                  {member.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ height: "50px" }}></Box>
    </Container>
  );
};

export default HomeDetail;
