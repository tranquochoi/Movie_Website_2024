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
                  marginBottom: "8px",
                  borderRadius: "50%",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src={
                  credit.profile_path
                    ? `https://image.tmdb.org/t/p/w500${credit.profile_path}`
                    : "/default.jpg"
                }
                alt=""
              />
            

            <Box sx={{ textAlign: 'center', }}>
              <Typography sx={{ fontWeight: 'bold' }}>{credit.original_name}</Typography>
              as
              <Typography sx={{ color: '#888', fontWeight: 'bold', fontFamily: 'cursive' }}>{credit.character}</Typography>
            </Box>

          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
export default RenderActress;
//<RenderActress data={data.credits.cast}></RenderActress>
