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
        width: '410px'
      }}
    >
      <CardMedia
        component="img"
        height="250px"
        width="380px"
        src={image} // <-- pakai props image
        sx={{ p: 1.5, borderRadius: 4 }}
      />

      <CardContent sx={{ maxWidth: 400 }}>
        <Grid container spacing={0.5} sx={{ display: 'flex', alignItems: 'center', mt: -2 }}>
          <Grid item>
            <StarIcon sx={{ color: '#FFCC00', fontSize: '35px' }} />
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: 600, color: '#A78708', fontSize: '20px' }}>4.5</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: '20px' }}>(2300)</Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ color: '#000', textAlign: 'start', fontSize: '24px', mt: -1 }}>
          Lorem ipsum dolor sit amet
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: '20px',
            color: '#657575',
            maxWidth: 360,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </Typography>

        <Grid container spacing={1} sx={{ display: 'flex' }}>
          <Grid item>
            <Typography sx={{ fontWeight: 600, fontSize: '36px', color: '#657575' }}>Rp0</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ textDecoration: 'line-through', fontSize: '36px', color: '#010E0A40' }}>
              Rp150.000
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CardKelas;
