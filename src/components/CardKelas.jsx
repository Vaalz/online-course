import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CardKelas({ id, image, title, price,description, creator }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/course/${id}`)}
      sx={{
        boxShadow: 3,
        border: "1px solid #E5E7EB",
        borderRadius: 2,
        width: "100%",
        maxWidth: "420px",
        "@media (max-width:600px)": {
          width: "100%",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ p: 1.5, borderRadius: 4, objectFit: "cover" }}
      />

      <CardContent sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20 }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14, color: "#657575", mt: 1 }}>
          {description?.substring(0, 100)}...
        </Typography>
        <Typography sx={{ fontSize: 12, mt: 1, color: "#999" }}>
          Oleh: {creator}
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Rp{price}</Typography>{" "}
      </CardContent>
    </Card>
  );
}

export default CardKelas;
