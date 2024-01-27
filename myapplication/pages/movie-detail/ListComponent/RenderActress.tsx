import { Box, Grid, Link, Typography, Paper } from "@mui/material";
import { Cast } from "../Models/Credits";

function RenderActress(props: { data: Cast[] }) {
  return (
    <Grid container spacing={2}>
      {props.data.map((credit) => (
        <Grid item xs={12} key={credit.id}>
          <Paper
            elevation={2}
            sx={{
              padding: 2,
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: "16px",

            }}
          >
            <Link href={`/people-detail/${credit.id}`} underline="none">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: "100px",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "16px",
                    marginRight: 4,
                  }}
                  src={
                    credit.profile_path
                      ? `https://image.tmdb.org/t/p/w500${credit.profile_path}`
                      : "/default.jpg"
                  }
                  alt=""
                />

                <Box sx={{ textAlign: "left" }}>
                  <Box sx={{ fontWeight: "bold", marginBottom: 1, fontSize: "18px", color: "white" }}>
                    {credit.original_name}
                  </Box>
                  < Box sx={{ color: "#888" }}>
                    as {credit.character}
                  </Box>
                </Box>
              </Box>
            </Link>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default RenderActress;
