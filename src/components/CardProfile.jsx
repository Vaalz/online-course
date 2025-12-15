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
            width: {
              xs: 96,
              sm: 128,
              md: 160,
              lg: 197,
            },
            height: {
              xs: 96,
              sm: 128,
              md: 160,
              lg: 197,
            },
            mx: {
              xs: "20px",
            },
            my: {
              xs: 2,
              md: "30px",
            },
          }}
        />

        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: {
                  xs: "18px",
                  sm: "20px",
                  md: "22px",
                  lg: "24px",
                },
              }}
            >
              {profile.name}
            </Typography>

            <Box sx={{ py: { xs: 0.5, md: 1 } }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "18px",
                    lg: "20px",
                  },
                  
                }}
              >
                TENTANG SAYA
              </Typography>

              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: {
                    xs: "13px",
                    sm: "14px",
                    md: "15px",
                  },
                  lineHeight: 1.6,
                  color: "#555",
                }}
              >
                {profile.description}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: { xs: 1.5, md: 2 },
            }}
          >
            <Typography
              sx={{
                background: "linear-gradient(90deg, #466EF1, #11DF9E)",
                color: "#fff",
                textAlign: "center",
                borderRadius: "25px",
                px: { xs: 2, md: 3 },
                py: { xs: 0.5, md: 1 },
                fontWeight: 600,
                fontSize: {
                  xs: "12px",
                  sm: "13px",
                  md: "14px",
                },
                minWidth: { xs: "100px", md: "132px" },
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
