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

export default function QuizCard({ quiz }) {
  let image, title, category, accuracy, completion, uploaded, questionCount;

  if (quiz) {
    const {
      name,
      thumbnail,
      course_type,
      total_questions,
      total_points,
      my_best_score,
      status,
      latest_attempt_date,
      created_at,
    } = quiz;

    // Mapping API data ke props UI
    // Gunakan thumbnail dari API, jika tidak ada pakai placeholder
    image =
      thumbnail ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name || "Quiz"
      )}&size=400&background=random&bold=true`;
    title = name || "Judul Kuis";
    category = course_type?.name || "Kategori";

    // Hitung accuracy dari best score
    // my_best_score bisa berupa raw score atau persentase dari backend
    if (
      my_best_score !== null &&
      my_best_score !== undefined &&
      total_points > 0
    ) {
      // Hitung persentase
      let calculatedAccuracy = (my_best_score / total_points) * 100;

      // Cap maksimal 100% (jika ada data anomali)
      accuracy = Math.min(Math.round(calculatedAccuracy), 100);
    } else {
      accuracy = 0;
    }

    // Hitung completion berdasarkan status
    completion =
      status === "completed" ? 100 : status === "in_progress" ? 50 : 0;

    // Format tanggal
    const formatDate = (dateString) => {
      if (!dateString) return "Belum pernah dikerjakan";
      try {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffHours < 1) return "Baru saja";
        if (diffHours < 24) return `${diffHours} jam lalu`;
        if (diffDays < 7) return `${diffDays} hari lalu`;

        return date.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
      } catch {
        return "Tanggal tidak valid";
      }
    };

    uploaded = latest_attempt_date
      ? formatDate(latest_attempt_date)
      : formatDate(created_at);

    questionCount = total_questions || 0;
  } else {
    // Fallback ke props langsung (jika dipanggil tanpa quiz object)
    image = arguments[0]?.image || "https://via.placeholder.com/350x170";
    title = arguments[0]?.title || "Judul Kuis";
    category = arguments[0]?.category || "Kategori";
    accuracy = arguments[0]?.accuracy || 45;
    completion = arguments[0]?.completion || 75;
    uploaded = arguments[0]?.uploaded || "jam yang lalu";
    questionCount = arguments[0]?.questionCount || 15;
  }

  return (
    <Card
      sx={{
        width: {
          xs: 280,
          sm: 320,
          md: 350,
          lg: 380,
        },
        height: {
          xs: 430,
          sm: 460,
          md: 480,
          lg: 500,
        },
        borderRadius: 4,
        bgcolor: "white",
        color: "#1A1A1A",
        border: "2px solid #D9D9D9",
        p: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={image}
        alt="Quiz Cover"
        sx={{
          height: {
            xs: 140,
            sm: 150,
            md: 170,
            lg: 180,
          },
          objectFit: "cover",
          borderRadius: 2,
          flexShrink: 0,
        }}
      />

      <Box
        sx={{
          mt: 2,
          p: 1,
          display: "flex",
          flexDirection: "column",
          flex: 1, // ⬅️ WAJIB
          justifyContent: "space-between",
        }}
      >
        {/* Title */}
        <Typography
          fontWeight={800}
          sx={{
            fontSize: {
              xs: 16,
              sm: 18,
              md: 20,
            },
            mb: 1,
            textTransform: "uppercase",
            lineHeight: 1.2,
            height: 48,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
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
            alignSelf: "flex-start", // ⬅️ KUNCI UTAMA
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
