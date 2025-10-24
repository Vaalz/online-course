import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function CardKelas({ image }) {
  return (
    <Card
      sx={{
        boxShadow: 3,
        border: '1px solid #E5E7EB',
        borderRadius: 2,
        height: '530px',
        width: '410px',
        mx: 'auto',
        '@media (max-width:600px)': {
          width: '100%',
          height: 'auto',
        },
      }}
    >
      <CardMedia
        component="img"
        height="250px"
        src={image}
        sx={{
          p: 1.5,
          borderRadius: 4,
          '@media (max-width:600px)': {
            height: '200px',
            objectFit: 'cover',
          },
        }}
      />

      <CardContent
        sx={{
          maxWidth: 400,
          '@media (max-width:600px)': {
            maxWidth: '100%',
            p: 2,
          },
        }}
      >
        {/* Rating */}
        <Grid
          container
          spacing={0.5}
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: -2,
            '@media (max-width:600px)': {
              mt: 0,
            },
          }}
        >
          <Grid item>
            <StarIcon sx={{ color: '#FFCC00', fontSize: { xs: 24, sm: 35 } }} />
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: 600, color: '#A78708', fontSize: { xs: 16, sm: 20 } }}>
              4.5
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: { xs: 16, sm: 20 } }}>(2300)</Typography>
          </Grid>
        </Grid>

        {/* Judul */}
        <Typography
          variant="h6"
          sx={{
            color: '#000',
            textAlign: 'start',
            fontSize: { xs: 18, sm: 24 },
            mt: -1,
          }}
        >
          Lorem ipsum dolor sit amet
        </Typography>

        {/* Deskripsi */}
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: 14, sm: 20 },
            color: '#657575',
            maxWidth: 360,
            '@media (max-width:600px)': {
              maxWidth: '100%',
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </Typography>

        {/* Harga */}
        <Grid
          container
          spacing={1}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            mt: 1,
          }}
        >
          <Grid item>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: 24, sm: 36 },
                color: '#657575',
              }}
            >
              Rp0
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                textDecoration: 'line-through',
                fontSize: { xs: 20, sm: 36 },
                color: '#010E0A40',
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
