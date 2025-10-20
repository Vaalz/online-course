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
          fontWeight: 900,
          fontSize: { xs: "20px", sm: "21px", md: "22px" },
          color: "#fff",
        borderRadius: "10px",
        padding: "10px 16px",
        background: "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF, #11DF9e)",
        animation: "gradientMove 3s linear infinite",
        backgroundSize: "200% auto",
        transition: "0.4s",
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
