import React, { useState } from "react";

import {
  Box,
  Grid,
  Typography,
  Avatar,
  TextField,
  MenuItem,
  Button,
  Drawer,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import NavbarDashboard from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/UserSidebar";
import { InstructorMenu } from "../../components/Menu/SidebarMenu/InstructorMenu";
import CardProfile from "../../components/CardProfile";
import { useProfile } from "../../components/profile/useProfile";

function EditProfileInstructor( onEdit) {
  const { profile, loading, updateProfile, fetchProfile } = useProfile();

  const sidebarWidth = 270;

  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <NavbarDashboard />
      </Box>

      <Box
        sx={{
          flexShrink: 0,
          position: "fixed",
          top: "80px",
          left: 0,
          height: "calc(100vh - 80px)",
          overflowY: "auto",
          bgcolor: "#F1FCFA",
          borderRight: "1px solid #E0E0E0",
          display: { xs: "none", md: "block" },
        }}
      >
        <Sidebar menus={InstructorMenu} />
      </Box>

      <Box
        sx={{
          ml: { md: `${sidebarWidth + 20}px`, xs: 0 },
          pt: "110px",
          px: 1,
          pb: 3,
        }}
      >
        <CardProfile profile={profile} />

        <Grid
          sx={{
            border: "1px solid #B9C2C0",
            borderRadius: "25px",
            display: "flex",
          }}
        >
          <Box>
            <Box sx={{ my: 2, mx: 2 }}>
              <Typography sx={{ fontSize: "17px", fontWeight: 700 }}>
                PERSONAL INFO
              </Typography>
              <Typography
                sx={{ fontSize: "13px", fontWeight: 400, color: "#00000059" }}
              >
                Tambahkan informasi pribadi anda untuk memudahkan pengguna
                menghubungi anda
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Box sx={{ py: 3 }}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 700,
                        py: 0.5,
                        px: 1.5,
                      }}
                    >
                      Nama Depan
                    </Typography>
                    <TextField
                      sx={{ borderRadius: "6px", width: "270px" }}
                      InputLabelProps={{
                        sx: { fontSize: "8px", height: "10px" },
                      }}
                      placeholder="Masukkan nama depan anda"
                      variant="outlined"
                      value={profile.name}
                      disabled
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 700,
                        py: 0.5,
                        px: 1.5,
                      }}
                    >
                      Contact
                    </Typography>
                    <TextField
                      sx={{ borderRadius: "6px", width: "270px" }}
                      InputLabelProps={{
                        sx: { fontSize: "13px", height: "14px" },
                      }}
                      placeholder="Masukkan nomor handpone anda"
                      variant="outlined"
                      value={profile.contact}
                      disabled
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 700,
                        py: 0.5,
                        px: 1.5,
                      }}
                    >
                      Bergabung Pada
                    </Typography>
                    <TextField
                      sx={{ borderRadius: "6px", width: "270px" }}
                      InputLabelProps={{
                        sx: { fontSize: "13px", height: "14px" },
                      }}
                      placeholder="12-5-2025"
                      variant="outlined"
                      value={profile.created_at}
                      disabled
                    />
                  </Box>
                </Box>

                <Box sx={{ py: 3 }}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 700,
                        py: 0.5,
                        px: 1.5,
                      }}
                    >
                      Nama Belakang
                    </Typography>
                    <TextField
                      sx={{ borderRadius: "6px", width: "270px" }}
                      InputLabelProps={{
                        sx: { fontSize: "13px", height: "14px" },
                      }}
                      placeholder="Masukkan nama depan anda"
                      variant="outlined"
                      value={profile.lastName}
                      disabled
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 700,
                        py: 0.5,
                        px: 1.5,
                      }}
                    >
                      Email
                    </Typography>
                    <TextField
                      sx={{ borderRadius: "6px", width: "270px" }}
                      InputLabelProps={{
                        sx: { fontSize: "13px", height: "14px" },
                      }}
                      placeholder="BayuRmdhn@gmail.com"
                      variant="outlined"
                      value={profile.email}
                      disabled
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ my: 2, mx: 2 }}>
              <Box sx={{ py: "11px" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                  PROFESSIONAL INFO
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#00000059",
                  }}
                >
                  Tambahkan professional info yang berhubungan dengan bidang
                  yang anda jalani
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2, maxWidth: "60%" }}>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
                    Portofolio
                  </Typography>
                  <TextField
                    placeholder="Masukan portofolio yang anda miliki sesuai bidang anda"
                    multiline
                    variant="outlined"
                    InputProps={{
                      sx: {
                        bgcolor: "#F8FFFE",
                        borderRadius: "12px",
                        height: "140px",
                        width: "270px",
                        alignItems: "flex-start",
                        "& textarea::placeholder": {
                          fontSize: "12px",
                          color: "#9BA6A5",
                        },
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root fieldset": {
                        borderColor: "#C9D3D1",
                      },
                      "& .MuiOutlinedInput-root:hover fieldset": {
                        borderColor: "#AEB9B8",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                        borderColor: "#8AA3A0",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
                    Bidang
                  </Typography>
                  <TextField
                    placeholder="Masukan bidang keahlian yang anda miliki"
                    multiline
                    variant="outlined"
                    InputProps={{
                      sx: {
                        bgcolor: "#F8FFFE",
                        borderRadius: "6px",
                        height: "35px",
                        width: "270px",
                        display: "flex",
                        alignItems: "center",

                        "& textarea": {
                          padding: 0,
                          marginTop: "4px",
                          textAlign: "center",
                        },

                        "& textarea::placeholder": {
                          fontSize: "12px",
                          color: "#9BA6A5",
                        },
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root fieldset": {
                        borderColor: "#C9D3D1",
                      },
                      "& .MuiOutlinedInput-root:hover fieldset": {
                        borderColor: "#AEB9B8",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                        borderColor: "#8AA3A0",
                      },
                    }}
                  />

                  <Box
                    sx={{
                      p: "2px",
                      borderRadius: "12px",
                      background: "linear-gradient(90deg, #466EF1, #11DF9E)",
                      display: "inline-block",
                      mt: 12,
                      mr: 9,
                    }}
                  >
                    <Box
                      sx={{
                        p: "2px",
                        borderRadius: "50px",
                        background: "linear-gradient(90deg, #466EF1, #11DF9E)",
                        display: "inline-block",
                      }}
                    >
                      <Button
                        variant="contained"
                        onClick={() => setOpenEdit(true)}
                        sx={{
                          px: 3,
                          py: 1,
                          borderRadius: "48px",
                          bgcolor: "white",
                          color: "#000",
                          fontWeight: 700,
                          fontSize: "14px",
                          textTransform: "uppercase",
                          boxShadow: "none",
                          "&:hover": {
                            bgcolor: "#f0f0f0",
                            boxShadow: "none",
                          },
                        }}
                      >
                        EDIT INFO
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "400px",
              height: "350px",
              border: "1px solid #D9D9D9",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              bgcolor: "white",
              m: 2,
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  textAlign: "center",
                  mb: 1,
                  color: "#333",
                }}
              >
                SERTIFIKAT
              </Typography>

              <Typography
                variant="body2"
                sx={{ textAlign: "center", color: "#808080", mb: 2 }}
              >
                Tambahkan sertifikat yang anda miliki sesuai dengan bidang anda
              </Typography>

              <Box sx={{ flexGrow: 1 }} />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Box
                sx={{
                  p: "2px",
                  borderRadius: "10px",
                  background: "linear-gradient(90deg, #466EF1, #11DF9E)",
                  display: "inline-block",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: "8px",
                    bgcolor: "white",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor: "#f0f0f0",
                      boxShadow: "none",
                    },
                  }}
                >
                  TAMBAH SERTIFIKAT
                </Button>
                <Dialog
                  open={openEdit}
                  onClose={() => setOpenEdit(false)}
                  maxWidth="md"
                  fullWidth
                  PaperProps={{
                    sx: {
                      borderRadius: "20px",
                      p: 2,
                      bgcolor: "#F8FFFE",
                    },
                  }}
                >
                  <DialogTitle
                    sx={{ fontWeight: 700, fontSize: "18px", pb: 1 }}
                  >
                    MASUKAN INFORMASI TENTANG DIRI ANDA
                  </DialogTitle>

                  <DialogContent>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ display: "flex", gap: 3 }}>
                        {/* LEFT FORM */}
                        <Box sx={{ flex: 1 }}>
                          <Box>
                            <Typography>Nama Depan</Typography>
                            <TextField
                              fullWidth
                              label="Nama Depan"
                              sx={{ mb: 2 }}
                            />
                          </Box>
                          <Box>
                            <Typography>Username</Typography>
                            <TextField
                              fullWidth
                              label="Username"
                              sx={{ mb: 2 }}
                            />
                          </Box>
                          <Box>
                            <Typography>Email</Typography>
                            <TextField fullWidth label="Email" sx={{ mb: 2 }} />
                          </Box>
                          <Box>
                            <Typography>Portofolio</Typography>
                            <TextField
                              fullWidth
                              multiline
                              rows={4}
                              label="Portofolio"
                              sx={{ mb: 2 }}
                            />
                          </Box>
                        </Box>

                        {/* RIGHT FORM */}
                        <Box sx={{ flex: 1 }}>
                          <Box>
                            <Typography>Nama Belakang</Typography>
                            <TextField
                              fullWidth
                              label="Nama Belakang"
                              sx={{ mb: 2 }}
                            />
                          </Box>
                          <Box>
                            <Typography>Contact</Typography>
                            <TextField
                              fullWidth
                              label="Contact"
                              sx={{ mb: 2 }}
                            />
                          </Box>
                          <Box>
                            <Typography>Bergabung Pada</Typography>
                            <TextField
                              fullWidth
                              label="Bergabung Pada"
                              sx={{ mb: 2 }}
                            />
                          </Box>
                          <Box>
                            <Typography>Deskripsi</Typography>
                            <TextField
                              fullWidth
                              multiline
                              rows={4}
                              label="Deskripsi"
                              sx={{ mb: 2 }}
                            />
                          </Box>
                        </Box>
                      </Box>

                      <Box sx={{ mx: 2 }}>
                        <Box sc={{ display: "flex", justifyContent: "center" }}>
                          <Avatar
                            src="https://i.pravatar.cc/197"
                            sx={{
                              width: "180px",
                              height: "180px",
                              mx: "20px",
                              my: "30px",
                            }}
                          />
                        </Box>
                        <Typography>Photo Profile</Typography>
                        <Box>
                          <Box
                            sx={{
                              width: "300px",
                              height: "40px",
                              border: "1px solid #D9D9D9",
                              borderRadius: "10px",
                            }}
                          >
                            <Typography
                              sx={{
                                background:
                                  "linear-gradient(90deg, #466EF1, #11DF9E)",
                                color: "#fff",
                                textAlign: "center",
                                borderRadius: "10px",
                                height: "100%",
                                width: "100px",
                                py: 1,
                                fontWeight: 600,
                              }}
                            >
                              Chose File
                            </Typography>
                          </Box>
                          <Typography sx={{ pt: 1 }}>Bidang</Typography>
                          <TextField
                            select
                            placeholder="Masukan bidang keahlian yang sesuai dengan anda"
                            fullWidth
                          >
                            <MenuItem value="frontend">Frontend</MenuItem>
                            <MenuItem value="backend">Backend</MenuItem>
                            <MenuItem value="uiux">UI / UX</MenuItem>
                          </TextField>
                        </Box>
                      </Box>
                    </Box>

                    {/* ACTION BUTTON */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 2,
                        mt: 3,
                      }}
                    >
                      <Button
                        variant="outlined"
                        onClick={() => setOpenEdit(false)}
                      >
                        BATAL
                      </Button>
                      <Button variant="contained">SIMPAN</Button>
                    </Box>
                  </DialogContent>
                </Dialog>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default EditProfileInstructor;
