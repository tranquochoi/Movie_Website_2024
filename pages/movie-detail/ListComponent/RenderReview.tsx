import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

interface ReviewProps {
  author: string;
  author_details: Author_detail;
  content: string;
  created_at: string;
}

interface Author_detail {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

function RenderReview(props: { data?: ReviewProps[] }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  const sanitizeContent = (content: string): string => {
    return content.replace(/<em>/g, "").replace(/<\/em>/g, "");
  };

  return (
    <>
      {props.data?.map((credit, index) => (
        <Box
          key={credit.created_at}
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
            <Box sx={{ color: "cyan" }}>
              {credit.author_details.rating} Score
            </Box>
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
            <Box
              sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: expanded === index ? "unset" : 4,
                marginBottom: "8px",
                marginTop: "5px",
              }}
            >
              {sanitizeContent(credit.content)}
            </Box>
            {credit.content.length > 100 && (
              <Button
                style={{
                  fontSize: "small",
                  textTransform: "none",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 600,
                }}
                onClick={() => toggleExpand(index)}
              >
                {expanded === index ? "Read Less" : "Read More"}
              </Button>
            )}
          </Box>
        </Box>
      ))}
    </>
  );
}

export default RenderReview;

//<RenderReview data={data.reviews.results}></RenderReview>;
