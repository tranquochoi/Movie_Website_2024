import { Box, Grid, Typography } from "@mui/material";
import { Cast } from "../Models/Credits";
function RenderActress(props: { data: Cast[] }) {
  return (
    <Grid container spacing={4}>
      {props.data.map((credit) => (
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingX: 2,
              marginBottom: "24px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100px",
                width: "100px",
                marginBottom: "8px",
                borderRadius: "50%", // Đặt border-radius thành 50% để tạo hình tròn
              }}
              src={
                credit.profile_path
                  ? `https://image.tmdb.org/t/p/w500${credit.profile_path}`
                  : "/default.jpg"
              }
              alt=""
            />
            <Typography>{credit.original_name}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
export default RenderActress;
//<RenderActress data={data.credits.cast}></RenderActress>
