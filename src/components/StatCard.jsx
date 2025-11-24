import { Box, Typography } from "@mui/material";

export default function StatCard({ icon, value, label }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "16px", md: "39px" }, // gap mengecil di HP
        overflowX: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { height: 0 },
      }}
    >
      <Box
        sx={{
          px: { xs: 3, md: 4 },
          py: { xs: 2, md: 2 },
          border: "1px solid #B9C2C0",
          borderRadius: 3,
          height: "100%",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
          display: "flex-column",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 1, md: 2 },
        }}
      >
        <Box
          sx={{
            width: { xs: 30, md: 40 },
            height: { xs: 30, md: 40 },
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            fontSize: { xs: 24, md: 32 },
            gap: { xs: 0.5, md: 1 },
          }}
        >
          {icon}
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={{ xs: 16, md: 20 }}
          >
            {value}
          </Typography>
        </Box>

        <Box>
          <Typography
            color="text.secondary"
            fontSize={{ xs: 10, sm: 12, md: 14 }}
            ml={{ xs: "-5px", md: "-10px" }}
            sx={{ mt: "0" }}
          >
            {label}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
