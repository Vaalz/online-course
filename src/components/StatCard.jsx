import { Box, Typography } from "@mui/material";

export default function StatCard({ icon, value, label }) {
  return (
    <Box
      sx={{
        minWidth: { xs: 140, sm: 180, md: 240, lg: 316 },
        height: { xs: "80px", md: "103px" },
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          py: { xs: 1.5, md: 2 },
          border: "1px solid #B9C2C0",
          borderRadius: 3,
          height: "100%",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: { xs: 1, md: 2 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, md: 1.5 },
          }}
        >
          <Box
            sx={{
              width: { xs: 30, md: 40 },
              height: { xs: 30, md: 40 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>

          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={{ xs: 16, md: 20 }}
          >
            {value}
          </Typography>
        </Box>

        <Typography
          color="text.secondary"
          fontSize={{ xs: 10, sm: 12, md: 14 }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
}
