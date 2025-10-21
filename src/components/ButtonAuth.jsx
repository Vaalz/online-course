import { Box, Button } from "@mui/material";

export default function AuthButton({ text, icon }) {
  return (
    <Box
      sx={{
        width: "100%", // Tombol responsif mengikuti pembungkusnya
        border: "1px solid transparent",
        borderRadius: "10px",
        background:
          "linear-gradient(white, white) padding-box, linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF, #7AC2F5, #11DF9E) border-box",
        backgroundSize: "200% auto",
        animation: "gradientMove 3s linear infinite",
        "@keyframes gradientMove": {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      }}
    >
      <Button
        variant="outlined"
        startIcon={icon}
        sx={{
          width: "100%",
          height: "70px",
          maxHeight: "70px",
          textTransform: "none",
          fontWeight: 600,
          fontSize: { xs: "18px", sm: "19px", md: "20px" },
          py: 1.3,
          border: "1px solid transparent",
          borderRadius: "8px",
          overflow: "hidden",
          background:
            "linear-gradient(#fff, #fff) padding-box,linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF, #11DF9E)",
          backgroundSize: "200% auto",
          animation: "gradientMove 3s linear infinite",
          color: "#11DF9E",
          backgroundImage:
            "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF, #11DF9E)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "all 0.3s ease",

          "& .MuiButton-startIcon": {
            backgroundImage:
              "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF, #11DF9E)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },

          "&:hover": {
            boxShadow: "0 4px 15px rgba(0, 114, 255, 0.4)",
            // border: "transparent",
            // background:
            //   "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF, #7AC2F5, #11DF9E)",
            // backgroundSize: "200% auto",
            // color: "#fff",
            // WebkitTextFillColor: "#fff",
          },
        }}
      >
        {text}
      </Button>
    </Box>
  );
}
