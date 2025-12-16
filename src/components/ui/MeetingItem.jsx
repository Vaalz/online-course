import * as React from 'react';
import { Box, Typography } from '@mui/material';

// Mendefinisikan tipe props yang akan diterima komponen
// Catatan: Jika Anda menggunakan TypeScript, ini akan lebih ketat
const MeetingItem = ({ title, content, imageSrc }) => {
  return (
    <Box sx={{ mb: 4 }}>
      {/* Judul Pertemuan */}
      <Typography
        variant="h6"
        fontWeight="700"
        sx={{ mb: 1, color: "#010E0A" }}
      >
        {title} {/* <--- Menggunakan prop title */}
      </Typography>

      {/* Deskripsi/Konten Pertemuan */}
      <Typography
        variant="body2"
        sx={{ mb: 2, color: "#657575", lineHeight: 1.6 }}
      >
        {content} {/* <--- Menggunakan prop content */}
      </Typography>

      {/* Gambar Konten Pertemuan */}
      <Box
        sx={{
          height: "250px",
          width: "100%",
          bgcolor: imageSrc ? 'transparent' : "#E8E8E8", // Jika ada gambar, bgcolor transparan
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: 'hidden' // Penting untuk gambar
        }}
      >
        {/* Jika ada imageSrc, tampilkan gambar; jika tidak, tampilkan placeholder */}
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={`Materi ${title}`} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' // Pastikan gambar mengisi kotak
            }}
          />
        ) : (
          <Typography color="#999">Gambar Konten</Typography>
        )}
      </Box>
    </Box>
  );
};

export default MeetingItem;