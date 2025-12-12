import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import Gambar from "../assets/image/Gambar1.png";

function Kelas() {
  return (
    <Card
      sx={{
        width: 285,
        height: 350,
        border: "1px solid #E5E7EB",
        borderRadius: 2,     // 8px
        flexShrink: 0,
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Thumbnail */}
      <CardMedia
        component="img"
        src={Gambar}
        sx={{
          height: 190,
          width: "100%",
          objectFit: "fit",
          backgroundColor: "#fff", 
          p: 1
        }}
      />

      {/* Content */}
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
            Judul Kelas
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: "#657575",
              lineHeight: "20px",
              mb: 0.8,
            }}
          >
            Deskripsi singkat kelas
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              color: "#999",
            }}
          >
            Oleh: Creator
          </Typography>
        </Box>

        {/* Harga */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 20,
            mt: 1.5,
          }}
        >
          Rp0
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Kelas;
