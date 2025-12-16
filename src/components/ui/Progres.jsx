import { Box, Typography, Avatar, Button } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const students = [
  { name: "USERNAME", img: "https://i.pravatar.cc/150?img=1" },
  { name: "USERNAME", img: "https://i.pravatar.cc/150?img=2" },
  { name: "USERNAME", img: "https://i.pravatar.cc/150?img=3" },
  { name: "USERNAME", img: "https://i.pravatar.cc/150?img=4" },
  { name: "USERNAME", img: "https://i.pravatar.cc/150?img=5" },
  { name: "USERNAME", img: "https://i.pravatar.cc/150?img=6" },
  { name: "USERNAME", img: "https://i.pravatar.cc/150?img=7" },
];

export default function ProgresStudent({progres}) {
  return (
    <Box
      sx={{
        border: "1px solid #E5E5E5",
        borderRadius: 3,
        p: 2,
        mt: 2,
        width: '100%',
        height: 160,
        backgroundColor: "#F8FEFF",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 0.2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PeopleAltIcon sx={{ color: "#466EF1" }} />
          <Typography fontWeight={700} sx={{fontSize: '15px'}}>{progres}</Typography>
        </Box>

        <Typography
          sx={{
            fontSize: 12,
            color: "#466EF1",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          LIHAT SELENGKAPNYA
        </Typography>
      </Box>

      {/* LIST STUDENT */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          py: 1,
        }}
      >
        {students.map((s, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            <Avatar
              src={s.img}
              sx={{ width: 60, height: 60, margin: "0 auto" }}
            />
            <Typography sx={{ fontSize: 12, mt: 1 }}>{s.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
