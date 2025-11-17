import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function CardKelas({ image }) {
  return (
    <Card
      sx={{
        boxShadow: 3,
        border: "1px solid #E5E7EB",
        borderRadius: 2,
        height: "100%",
        width: "420px",
        
        "@media (max-width:600px)": {
          minWidth: "100%",
          width: "100%",
          maxWidth: "100%",
          height: "auto",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200px" // Lebih realistis untuk lebar 320px
        src={image}
        sx={{
          p: 1.5,
          borderRadius: 4,
          objectFit: "cover",
          // Sesuaikan tinggi media saat layar kecil
          "@media (max-width:600px)": {
            height: "200px",
          },
        }}
      />

      <CardContent
        sx={{
          // Hapus maxWidth 400
          p: 2, // Menggunakan p:2 standar
          "@media (max-width:600px)": {
            p: 2,
          },
        }}
      >
        {/* Rating */}
        <Grid
          container
          spacing={0.5}
          sx={{
            display: "flex",
            alignItems: "center",
            mt: -1, // Sedikit geser ke atas
          }}
        >
          <Grid item>
            <StarIcon sx={{ color: "#FFCC00", fontSize: 20 }} />
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontWeight: 600,
                color: "#A78708",
                fontSize: 16, // Ukuran tetap
              }}
            >
              4.5
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: 16 }}>
              (2300)
            </Typography>
          </Grid>
        </Grid>

        {/* Judul */}
        <Typography
          variant="h6"
          sx={{
            color: "#000",
            textAlign: "start",
            fontSize: 20, // Ukuran tetap
            mt: 0.5,
          }}
        >
          Lorem ipsum dolor sit amet
        </Typography>

        {/* Deskripsi */}
        <Typography
          variant="body2"
          sx={{
            fontSize: 14, // Ukuran tetap
            color: "#657575",
            maxWidth: "100%", // Mengambil lebar penuh CardContent
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </Typography>

        {/* Harga */}
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Grid item>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 24, // Harga baru lebih besar
                color: "#657575",
              }}
            >
              Rp0
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                textDecoration: "line-through",
                fontSize: 16, // Harga coret lebih kecil
                color: "#010E0A40",
              }}
            >
              Rp150.000
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CardKelas;