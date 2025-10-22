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
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
          textAlign: 'center',
          p: '32px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>
            {Pack}
          </Typography>
          <Typography sx={{ fontSize: '18px', fontWeight: 400, color: '#657575', mb: 2 }}>
            {Description}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 2 }}>
          <Typography sx={{ fontSize: '48px', fontWeight: 800 }}>{Price}</Typography>
          <Typography sx={{ fontSize: '18px', fontWeight: 500, color: '#657575' }}>
            /month
          </Typography>
        </Box>

        {/* ✅ Map benefit dari props */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', mb: 8 }}>
          {Benefit.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CentangIcon />
              <Typography>{item}</Typography>
            </Box>
          ))}
        </Box>

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
          }}
        >
          Get started
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardPay;
