import React from 'react'
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import CentangIcon from './CentangIcon.jsx';

function CardPay({ Pack, Description, Price, Benefit = [] }) {
  return (
    <Card
      sx={{
        height: '559px',
        width: '400px',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px -2px #0000000D, 0px 4px 6px -1px #0000001A',
        mx: 'auto',
        transition: 'all 0.3s ease',

        '@media (max-width:600px)': {
          width: '100%',
          height: 'auto',
          p: 2,
        },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          p: '32px',
          height: '100%',   // flexbox + flexGrow akan mengatur posisi
          
          '@media (max-width:600px)': {
            p: '20px',
            height: 'auto',
          },
        }}
      >
        {/* 🧱 Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '20px', sm: '24px' },
            }}
          >
            {Pack}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px' },
              fontWeight: 400,
              color: '#657575',
              mb: 2,
            }}
          >
            {Description}
          </Typography>
        </Box>

        {/* 💸 Harga */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 1,
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '36px', sm: '48px' },
              fontWeight: 800,
            }}
          >
            {Price}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px' },
              fontWeight: 500,
              color: '#657575',
            }}
          >
            /month
          </Typography>
        </Box>

        {/* ✅ Benefit list */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
            flexGrow: 1,                   // 🔥 membuat tombol turun ke bawah
            justifyContent: 'flex-start',
            
            '@media (max-width:600px)': {
              mb: 4,
              gap: '12px',
              alignItems: 'center',
            },
          }}
        >
          {Benefit.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                justifyContent: { xs: 'center', sm: 'flex-start' },
                flexWrap: 'wrap',
              }}
            >
              <CentangIcon />
              <Typography sx={{ fontSize: { xs: '15px', sm: '16px' } }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* 🔘 Tombol */}
        <Button
          variant="contained"
          sx={{
            textTransform: 'none',
            background: "linear-gradient(90deg, #11DF9E, #466EF1)",
            fontWeight: 500,
            color: "white",
            animation: "gradientMove 3s linear infinite",
            "@keyframes gradientMove": {
              "0%": { backgroundPosition: "0% center" },
              "100%": { backgroundPosition: "200% center" },
            },
            width: '100%',
            fontSize: { xs: '14px', sm: '16px' },
            py: { xs: 1, sm: 1.5 },
            mt: 3,            // 🔥 margin bawah jelas terlihat
          }}
        >
          Get started
        </Button>
      </CardContent>
    </Card>
  );
}

export default CardPay;
