import React from 'react'
// Perbaikan #1: Tambahkan Typography ke impor Material-UI
import { Box, Typography } from '@mui/material' 
// Hapus impor StatCard lokal yang konflik
// import StatCard from '../StatCard' 
// Impor ikon Material-UI yang diperlukan
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'

/**
 * Komponen StatCard (Dipindahkan ke sini untuk simplifikasi)
 * Harus didefinisikan sebelum digunakan atau diimpor dari file terpisah
 */
function StatCard({ icon, number, title }) {
  return (
    <Box
      sx={{
        flex: 1, 
        border: "1px solid #D9E2E1",
        borderRadius: "12px",
        bgcolor: "white",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        {/* Perbaikan #2: Render ikon langsung, bukan sebagai src */}
        <Box sx={{ mr: 1, lineHeight: 0 }}> 
            {icon} 
        </Box>
        <Typography sx={{ fontSize: "28px", fontWeight: "900" }}>{number}</Typography>
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: "14px", textTransform: "uppercase" }}>
        {title}
      </Typography>
    </Box>
  );
}

function StatistikInstructor() {
  // Definisikan ikon dengan styling yang Anda inginkan
  const iconStyle = { fontSize: 32, color: "#466EF1" };
  const KursusIcon = <MenuBookRoundedIcon sx={iconStyle} />;
  const ZoomIcon = <VideocamRoundedIcon sx={iconStyle} />;
  const SiswaIcon = <PeopleAltRoundedIcon sx={iconStyle} />;

  return (
    <>
      {/* A. Baris Kartu Statistik */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}> 
        <StatCard icon={KursusIcon} number="23" title="Kursus Anda" />
        <StatCard icon={ZoomIcon} number="23" title="Sesi Zoom" />
        <StatCard icon={SiswaIcon} number="23" title="Siswa Anda" />
      </Box>
    </>
  )
}

export default StatistikInstructor