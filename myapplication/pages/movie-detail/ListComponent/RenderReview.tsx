import { Box, Grid, Typography } from "@mui/material";

export interface Review {
  author: string;
  author_details: Author_detail;
  content: string;
  created_at: string;
}
export interface Author_detail {
  name: string;
  username: string;
  avatar_path: string;
  rating: GLfloat;
}
function RenderReview(props: { data: Review[] }) {
  return (
    <>
      {props.data.map((credit) => (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "30% 70%",
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "12px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "44px",
                width: "44px",
                marginBottom: "14px",
                borderRadius: "50%",
              }}
              src={
                credit.author_details.avatar_path
                  ? `https://image.tmdb.org/t/p/w500${credit.author_details.avatar_path}`
                  : "/default.jpg"
              }
              alt=""
            />
            <Typography sx={{ color: "cyan" }}>
              {credit.author_details.rating}
            </Typography>
          </Box>

          <Box
            sx={{
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              {credit.author_details.name
                ? credit.author_details.name
                : "Somebody"}
            </span>
            <Typography
              sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
                marginBottom: "8px",
                marginTop: "5px",
              }}
            >
              {credit.content}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
}
export default RenderReview;
//<RenderReview data={data.reviews.results}></RenderReview>;
