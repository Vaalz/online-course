import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Chip,
  Divider,
  Stack,
  CircularProgress,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";

export default function QuizCard({
  image,
  title = "Judul Kuis",
  category = "Kategori",
  accuracy = 45,
  completion = 75,
  uploaded = "jam yang lalu",
  questionCount = 15,
}) {
  return (
    <Card
      sx={{
        width: 350,
        borderRadius: 4,
        bgcolor: "white",
        color: "#1A1A1A",
        border: "2px solid #D9D9D9",
        p: 1,
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        height="170"
        image={image}
        alt="Quiz Cover"
        sx={{ objectFit: "cover", borderRadius: 2 }}
      />

      <Box sx={{ mt: 2, p: 1 }}>
        {/* Title */}
        <Typography
          fontWeight={800}
          sx={{ fontSize: 20, mb: 1, textTransform: "uppercase" }}
        >
          {title}
        </Typography>

        {/* Category chip */}
        <Chip
          label={category.toUpperCase()}
          sx={{
            bgcolor: "#B0B0B080",
            color: "#565656",
            fontWeight: 700,
            borderRadius: 3,
            px: 2,
            mb: 2,
          }}
        />

        {/* Progress Section */}
        <Stack
          direction="row"
          justifyContent={"space-between"}
          width={"100%"}
          sx={{ mb: 2 }}
        >
          {/* Accuracy */}
          <Stack
            alignItems={"center"}
            display={"flex"}
            spacing={1}
            direction="row"
          >
            <CircularProgress
              variant="determinate"
              value={accuracy}
              size={45}
              thickness={4}
              sx={{
                color: "#4DA6FF", 
                "& .MuiCircularProgress-circle": {
                  strokeLinecap: "round",
                },
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "4px solid #B0B0B080", 
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#565656",
              }}
            >
              <Typography fontSize={10} fontWeight={700}>
                Akurasi Benar
              </Typography>
              <Typography fontWeight={900} fontSize={14}>
                {accuracy}%
              </Typography>
            </Box>
          </Stack>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#B9C2C0", border: 1, color: "#B9C2C0" }}
          />

          {/* Completion */}
          <Stack
            alignItems={"center"}
            display={"flex"}
            spacing={1}
            direction="row"
          >
            <CircularProgress
              variant="determinate"
              value={completion}
              size={45}
              thickness={4}
              sx={{
                color: "#00C19D",
                "& .MuiCircularProgress-circle": {
                  strokeLinecap: "round",
                },
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "4px solid #B0B0B080", 
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#565656",
              }}
            >
              <Typography fontSize={10} fontWeight={700}>
                Tingkat Penyelesaian
              </Typography>
              <Typography fontWeight={900} fontSize={14}>
                {completion}%
              </Typography>
            </Box>
          </Stack>
        </Stack>

        {/* Bottom info */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          px={1}
          sx={{ color: "#565656" }}
        >
          <Stack direction="row" alignItems="center" spacing={0.8}>
            <Typography fontSize={12} fontWeight={600}>
              {uploaded}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.8}>
            <QuizIcon sx={{ fontSize: 18 }} />
            <Typography fontSize={12} fontWeight={600}>
              {questionCount} Pertanyaan
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}
