import React from 'react'
import { Box, Avatar, Typography } from "@mui/material";

function Testi({image, name, message}) {
  return (
    <>
        <Box sx={{
            display: 'flex',
            border: '1px solid #010E0A80',
            width: '900px',
            height: '300px',
            borderRadius: "10px 100px 100px 10px",
            gap: '50px',
            p: '50px',
            my: 5,
            alignItems: 'center', 
        }}>
            <Avatar 
                alt='Andi Pratama'
                src={image}
                sx={{
                    width: '150px',
                    height: '150px',
                    py: '5'
                }}
            />
            <Box  sx={{alignItems: 'center'}}>
                <Typography sx={{fontWeight: 'bold', fontSize: '24px'}}>
                    {name}
                </Typography>
                <Typography sx={{fontSize: '20px', color: '#657575'}}>
                    {message}
                </Typography>
            </Box>
        </Box>
    </>
  )
}

export default Testi