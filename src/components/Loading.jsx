import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading({ text = "Loading...", fullscreen = true }) {
  return (
    <Box
      sx={{
        position: fullscreen ? "fixed" : "relative",
        top: 0,
        left: 0,
        width: fullscreen ? "100vw" : "100%",
        height: fullscreen ? "100vh" : "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        // Glassmorphism
        backdropFilter: "blur(10px)",
        background:
          fullscreen
            ? "rgba(255, 255, 255, 0.2)"
            : "transparent",

        zIndex: 9999,
        animation: "fadeIn 0.4s ease",

        "@keyframes fadeIn": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }}
    >
      {/* Gradient Circular Loader */}
      <CircularProgress
        thickness={5}
        size={70}
        sx={{
          color: "transparent",
          "& .MuiCircularProgress-svg": {
            background:
              "conic-gradient(#11DF9E, #7AC2F5, #0072FF, #11DF9E)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 8px), black 0)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 8px), black 0)",
            borderRadius: "50%",
            animation: "spin 1.3s linear infinite",
          },

          "@keyframes spin": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      />

      {/* Loading Text */}
      <Typography
        sx={{
          mt: 2,
          fontSize: 18,
          fontWeight: 600,
          background:
            "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
