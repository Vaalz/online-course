import React from 'react';
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Gambar from "../assets/image/Gambar1.png";

function Kelas({ id, image, title, description, creator }) {
  return (
    <Card
      sx={{
        width: 285,           // Fixed width
        height: 350,          // Hug content height sekitar 350px
        border: "1px solid #E5E7EB",
        borderRadius: 2,      // 8px
        flexShrink: 0,        // agar tidak mengecil saat scroll
        boxShadow: 1,
        p: "10px 0",          // padding top & bottom 10px
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="150"           // Thumbnail tinggi
        image={image}
        alt={title}
        sx={{ borderRadius: 2, objectFit: "cover", mb: 1 }}
      />

      <CardContent sx={{ flex: 1, p: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 18, mb: 0.5 }}>
          {title}
        </Typography>

        <Typography sx={{ fontSize: 14, color: "#657575", mb: 0.5 }}>
          {description?.substring(0, 100)}...
        </Typography>

        <Typography sx={{ fontSize: 12, color: "#999", mb: 1 }}>
          Oleh: {creator}
        </Typography>

        <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
          Rp0
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Kelas;
