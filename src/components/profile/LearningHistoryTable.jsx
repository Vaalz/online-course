import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const LearningHistoryTable = ({ historyData = [] }) => {
  const data = historyData.length > 0 ? historyData : [...Array(13)].map((_, i) => ({
    id: i + 1,
    className: "Materi UI/UX by bayu",
    startDate: "17-10-2025",
    endDate: "15-12-2025",
    status: i === 0 ? "Belum Selesai" : "Sudah Selesai",
  }));

  return (
    <Box
      sx={{
        border: "1px solid #DCE4E3",
        bgcolor: "#fff",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <Box
        sx={{
          py: 2.5,
          px: 3,
          borderBottom: "1px solid #DCE4E3",
        }}
      >
        <Typography
          textAlign="center"
          fontSize={{ xs: 18, sm: 24 }}
          fontWeight={700}
        >
          Riwayat Belajar Kamu
        </Typography>
      </Box>

      {/* Table Container with Scroll */}
      <Box
        sx={{
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            height: 6,
          },
          "&::-webkit-scrollbar-track": {
            bgcolor: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: "#888",
            borderRadius: 3,
          },
        }}
      >
        <Box sx={{ minWidth: 600 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              bgcolor: "#fff",
              borderBottom: "2px solid #E0E0E0",
              px: 3,
              py: 1.5,
            }}
          >
            <Box sx={{ width: "8%", fontWeight: 700, color: "#466EF1", fontSize: 18 }}>
              No
            </Box>
            <Box sx={{ width: "36%", fontWeight: 700, color: "#466EF1", fontSize: 18 }}>
              Nama Kelas
            </Box>
            <Box sx={{ width: "20%", fontWeight: 700, color: "#466EF1", fontSize: 18 }}>
              Waktu Mulai
            </Box>
            <Box sx={{ width: "20%", fontWeight: 700, color: "#466EF1", fontSize: 18 }}>
              Waktu Selesai
            </Box>
            <Box sx={{ width: "16%", fontWeight: 700, color: "#466EF1", fontSize: 18 }}>
              Status Kursus
            </Box>
          </Box>

          {/* Data Rows */}
          {data.map((item, index) => (
            <Box
              key={item.id || index}
              sx={{
                display: "flex",
                px: 3,
                py: 1.5,
                bgcolor: index % 2 === 0 ? "#11DF9E14" : "#fff",
                borderBottom: index === data.length - 1 ? "none" : "1px solid #F0F0F0",
                transition: "background-color 0.2s",
                "&:hover": {
                  bgcolor: "#F5F5F5",
                },
              }}
            >
              <Box sx={{ width: "8%", fontSize: 14, color: "#666" }}>
                {String(index + 1).padStart(2, "0")}
              </Box>
              <Box sx={{ width: "36%", fontSize: 14, color: "#333" }}>
                {item.className}
              </Box>
              <Box sx={{ width: "20%", fontSize: 14, color: "#666" }}>
                {item.startDate}
              </Box>
              <Box sx={{ width: "20%", fontSize: 14, color: "#666" }}>
                {item.endDate}
              </Box>
              <Box
                sx={{
                  width: "16%",
                  fontSize: 14,
                  color: item.status === "Belum Selesai" ? "#F59E0B" : "#10B981",
                  fontWeight: 500,
                }}
              >
                {item.status}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LearningHistoryTable;