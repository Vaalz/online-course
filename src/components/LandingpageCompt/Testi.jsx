import React from 'react'
import { Box, Avatar, Typography } from "@mui/material";

function Testi({ image, name, message }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px solid #010E0A80',
        width: '900px',
        height: '300px',
        borderRadius: '10px 100px 100px 10px',
        gap: '50px',
        p: '50px',
        my: 5,
        mx: 'auto',
        transition: 'all 0.3s ease',

        // Responsif untuk layar kecil
        '@media (max-width:600px)': {
          flexDirection: 'column',
          width: '100%',
          height: 'auto',
          borderRadius: '20px',
          gap: '20px',
          p: '30px',
          textAlign: 'center',
        },
      }}
    >
      <Avatar
        alt={name}
        src={image}
        sx={{
          width: '150px',
          height: '150px',
          py: '5',
          '@media (max-width:600px)': {
            width: '100px',
            height: '100px',
          },
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'flex-start' },
          textAlign: { xs: 'center', sm: 'start' },
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '20px', sm: '24px' },
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '16px', sm: '20px' },
            color: '#657575',
            maxWidth: { xs: '90%', sm: '700px' },
          }}
        >
          {message}
        </Typography>
      </Box>
    </Box>
  );
}

export default Testi;
