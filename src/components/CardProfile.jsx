import React from "react";
import { Grid, Avatar, Box, Typography } from "@mui/material";

function CardProfile({ profile }) {
  const role = localStorage.getItem("role");

  if (!profile) return null;

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          border: "1px solid #B9C2C0",
          borderRadius: "25px",
          my: 1,
          alignItems: "center",
        }}
      >
        <Avatar
          src={profile.profile_picture}
          sx={{
            width: "197px",
            height: "197px",
            mx: "20px",
            my: "30px",
          }}
        />

        <Box>
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: "24px" }}>
              {profile.name}
            </Typography>

            <Box sx={{ py: 1 }}>
              <Typography sx={{ fontWeight: 800, fontSize: "20px" }}>
                TENTANG SAYA
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: "15px" }}>
                {profile.description}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                background: "linear-gradient(90deg, #466EF1, #11DF9E)",
                color: "#fff",
                textAlign: "center",
                borderRadius: "25px",
                width: "132px",
                py: 1,
                fontWeight: 600,
              }}
            >
              {role}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default CardProfile;
