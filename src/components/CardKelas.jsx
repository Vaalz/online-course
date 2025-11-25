import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

function CardKelas({ image, title, description, price, lessons, creator }) {
  return (
    <Card
      sx={{
        boxShadow: 3,
        border: "1px solid #E5E7EB",
        borderRadius: 2,
        width: "420px",
        "@media (max-width:600px)": {
          width: "100%",
        },
      }}
    >
      {/* THUMBNAIL */}
      <CardMedia
        component="img"
        height="200"
        src={image}
        sx={{ p: 1.5, borderRadius: 4, objectFit: "cover" }}
      />

      <CardContent sx={{ p: 2 }}>
        {/* JUDUL */}
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20 }}>
          {title}
        </Typography>

        {/* DESKRIPSI */}
        <Typography sx={{ fontSize: 14, color: "#657575", mt: 1 }}>
          {description?.substring(0, 100)}...
        </Typography>

        {/* CREATOR */}
        <Typography sx={{ fontSize: 12, mt: 1, color: "#999" }}>
          Oleh: {creator}
        </Typography>

        {/* HARGA */}
        <Typography sx={{ fontWeight: 700, fontSize: 24, mt: 2 }}>
          {/* Rp{price.toLocaleString("id-ID")} */}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardKelas;
