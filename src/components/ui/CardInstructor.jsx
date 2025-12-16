import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

function Kelas({ id, image, title, description, creator, price }) {
  return (
    <Card
      sx={{
        width: 285,
        height: 350,
        border: "1px solid #E5E7EB",
        borderRadius: 2,
        flexShrink: 0,
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt={title}
        sx={{
          p: 1.5, 
          width: "100%",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
          p: 2,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: 18,
              lineHeight: "22px",
              mb: 0.8,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: "#657575",
              lineHeight: "20px",
              mb: 0.8,
            }}
          >
            {description?.substring(0, 100)}...
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              color: "#999",
            }}
          >
            Oleh: {creator}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 20,
            mt: 1.5,
          }}
        >
          Rp {price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Kelas;
