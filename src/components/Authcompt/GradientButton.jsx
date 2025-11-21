import { Button } from "@mui/material";

export default function GradientButton({ text, icon, onClick, ...props }) {
  return (
    <Button
      onClick={onClick}
      startIcon={icon}
      variant="contained"
      {...props}
      sx={{
        width: "100%",
        textTransform: "none",
        fontWeight: 600,

        fontSize: { xs: "18px", sm: "21px", md: "23px", lg: "26px" },

        color: "#fff",
        borderRadius: "10px",

        height: { xs: "48px", sm: "55px", md: "60px", lg: "65px" },

        padding: { xs: "8px 14px", sm: "10px 16px", md: "12px 18px" },

        background:
          "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF, #11DF9e)",
        animation: "gradientMove 3s linear infinite",
        backgroundSize: "200% auto",
        transition: "0.4s ease",

        "@keyframes gradientMove": {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },

        "&:hover": {
          backgroundPosition: "right center",
          boxShadow: "0 4px 15px rgba(0, 114, 255, 0.4)",
        },
      }}
    >
      {text}
    </Button>
  );
}
