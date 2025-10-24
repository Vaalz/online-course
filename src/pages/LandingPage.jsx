import React from 'react'
import Navbar from '../components/Navbar'
import {
  Box,
  Typography,
  Button,
  Grid,
  Avatar,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'

import google from '../assets/image/Google.png'
import microsoft from '../assets/image/Microsoft.png'
import spotify from '../assets/image/Spotify.png'
import mailchimp from '../assets/image/Mailchimp.png'
import airbnb from '../assets/image/Airbnb.png'
import uber from '../assets/image/Uber.png'
import StarIcon from '@mui/icons-material/Star'
import CardKelas from '../components/CardKelas.jsx'
import Gambar1 from '../assets/image/Gambar1.png'
import Gambar2 from '../assets/image/Gambar2.png'
import Gambar3 from '../assets/image/Gambar3.png'
import Testi from '../components/Testi.jsx'
import Andi from '../assets/image/Andi.png'
import Siti from '../assets/image/Siti.png'
import Budi from '../assets/image/Budi.png'
import Testi2 from '../components/Testi2.jsx'
import CardPay from '../components/CardPay.jsx'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FAQ from '../components/Faq.jsx'
import Github from '../assets/image/github.png'
import Twitter from '../assets/image/twitter.png'
import Dribbble from '../assets/image/dribbble.png'
import Facebook from '../assets/image/facebook.png'


const icons = [
  { src: Github, width: 17, height: 17 },
  { src: Twitter, width: 17, height: 14 },
  { src: Dribbble, width: 17, height: 17 },
  { src: Facebook, width: 10, height: 18 },
];

function LandingPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Box sx={{ py: 3 }}>
        <Box sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 10 },
          textAlign: { xs: 'center', md: 'left' },
        }}>
          <Typography sx={{
            fontWeight: 600,
            fontSize: { xs: '28px', md: '40px' },
          }}>
            Tingkatkan Skill<br />Di Industri Digital
          </Typography>

          <Typography sx={{ py: 2, color: '#657575' }}>
            Akses lebih dari 100+ kelas online dengan tutor <br /> profesional. Belajar kapan saja dan dimana saja,<br /> ikuti kelas online dengan Live Q&A dan dapatkan <br /> sertifikat resmi untuk portofolio anda.
          </Typography>

          <Grid
          container
          spacing={2}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
        >
          <Grid item>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(90deg, #11DF9E, #466EF1)',
                fontWeight: 500,
                color: 'white',
                textTransform: 'none',
                px: 4,
                py: 1.5,
              }}
            >
              Cari kelas
            </Button>
          </Grid>

          <Grid item>
            <Button
              sx={{
                textTransform: 'none',
                color: '#000',
                border: '1px solid #E5E7EB',
                px: 4,
                py: 1.5,
              }}
            >
              Pricing & FAQ
            </Button>
          </Grid>
        </Grid>
        </Box>
      </Box>

      {/* Partner Logos */}
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          px: { xs: 2, md: 8 },
          py: 4,
        }}
      >
        {[google, microsoft, spotify, mailchimp, airbnb, uber].map(
          (logo, index) => (
            <Grid item xs={4} sm={2} key={index}>
              <Box
                component="img"
                src={logo}
                alt={`Logo ${index}`}
                sx={{
                  width: '100%',
                  maxWidth: 120,
                  mx: 'auto',
                  display: 'block',
                }}
              />
            </Grid>
          )
        )}
      </Grid>

      {/* Section: Mengapa Memilih Learning Center */}
      <Box
        sx={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          background: "linear-gradient(90deg, #11DF9E, #466EF1, #11DF9E)",
          backgroundSize: "200% auto",
          animation: "gradientMove 3s linear infinite",
          "@keyframes gradientMove": {
            "0%": { backgroundPosition: "0% center" },
            "100%": { backgroundPosition: "200% center" },
          },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "3rem",
            textAlign: "center",
            py: 3,
          }}
        >
          Mengapa Memilih Learning Center?
        </Typography>

        <Grid container spacing={7} justifyContent="center" sx={{ pb: 5 }}>
          {[
            { color: '#a000dfff', letter: 'A' },
            { color: '#919191ff', letter: 'B' },
            { color: '#00ff4cff', letter: 'C' }
          ].map((item, index) => (
            <Grid item key={index}>
              <Box
                sx={{
                  background: '#fff',
                  maxWidth: 300,
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 2,
                  p: 2,
                }}
              >
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    bgcolor: item.color,
                    my: 1,
                  }}
                >
                  {item.letter}
                </Avatar>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontSize: '1.875rem' }}
                >
                  Lorem Ipsum
                </Typography>

                <Typography sx={{ fontSize: '1.5rem', pb: 4 }}>
                  <Box
                    component="span"
                    sx={{
                      background:
                        "linear-gradient(90deg, #11DF9E, #466EF1, #11DF9E)",
                      backgroundSize: "200% auto",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      WebkitTextFillColor: "transparent",
                      "@keyframes gradientMove": {
                        "0%": { backgroundPosition: "0% center" },
                        "100%": { backgroundPosition: "200% center" },
                      },
                      fontWeight: 'bold',
                    }}
                  >
                    Lorem ipsum
                  </Box>{' '}
                  dolor sit amet consectetur adipisicing elit. Doloremque eaque ipsum unde! Facere rem necessitatibus distinctio laborum molestias enim impedit.
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Coba Kelas */}
      <Box sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 5 } }}>
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            textAlign: { xs: 'center', md: 'left' },
            mb: { xs: 3, md: 4 },
          }}
        >
          Coba Kelas
        </Typography>

        {/* Tombol kategori */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            mb: 4,
          }}
        >
          {['Programing', 'UI/UX', 'Infrastruktur', 'Backend', 'Cyber Security'].map((label, i) => (
            <Grid item xs={12} sm={6} md="auto" key={i}>
              <Button
                fullWidth
                sx={{
                  textTransform: 'none',
                  border: '1px solid #E5E7EB',
                  color: '#000',
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                  borderRadius: 5,
                  fontWeight: 500,
                  py: { xs: 1, sm: 1.5 },
                  width: { md: 240 },
                }}
              >
                {label}
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Card kelas */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {[Gambar1, Gambar2, Gambar3].map((img, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardKelas image={img} />
            </Grid>
          ))}
        </Grid>
      </Box>


       {/* Testimoni */}
        <Box sx={{pb: '96px'}}>
          <Box sx={{p: 8}}>
            <Typography sx={{
              fontWeight: 'bold',
              fontSize: '48px',
              textAlign: 'center',
              pb: 8
            }}>
              Testimoni Pengguna
            </Typography>
          <Testi
           image={Andi}
           name= 'Andi Pratama'
           message= '"Saya sangat puas dengan kursus online ini! Materinya sangat mudah dipahami dan instruktur yang berpengalaman membuat saya bisa menguasai topik dengan cepat. Saya sudah bisa menerapkan apa yang saya pelajari dalam pekerjaan saya."'
           />

          <Testi2 
            image={Siti}
            name='Siti Rahayu'
            message='"Kursus online ini benar-benar membantu saya meningkatkan keterampilan saya di bidang keamanan siber. Saya suka fleksibilitasnya yang memungkinkan saya belajar kapan saja dan di mana saja. Hasilnya sangat memuaskan!"'
          />

            <Testi 
              image={Budi}
              name='Budi Santoso'
              message='"Saya tidak pernah berpikir bisa belajar topik yang kompleks seperti ini dengan mudah, tapi kursus online ini membuktikan bahwa itu mungkin. Instruktur yang ramah dan materi yang terstruktur membuat pengalaman belajar saya sangat menyenangkan."'
            />
          </Box>
        </Box>

       {/* pay as u grow */}
          <Box sx={{ pb: '96px' }}>
            {/* Bagian judul */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontSize: '36px', fontWeight: '800', pb: 2 }}>
                Pay as you grow
              </Typography>
              <Typography sx={{ fontSize: '20px', color: '#657575' }}>
                Here at flowbite we focus on markets where technology, innovation, and capital<br />
                can unlock long-term value and drive economic growth.
              </Typography>
            </Box>

            {/* Bagian card */}
            <Box
              sx={{
                py: 5,
                px: 5,
                display: 'flex',
                gap: '40px',
                justifyContent: 'center',
                flexWrap: 'wrap', // biar otomatis turun saat sempit
                flexDirection: { xs: 'column', sm: 'column', md: 'row' }, // responsive
                alignItems: 'center',
              }}
            >
              <CardPay
                Pack="Starter"
                Description="Great for personal use and for your side projects."
                Price="$49"
                Benefit={[
                  "Individual configuration",
                  "No setup, monthly, or hidden fees",
                  "Team size: 1 developer",
                  "Premium support: 6 months",
                  "Free updates: 6 months",
                ]}
              />
              <CardPay
                Pack="Company"
                Description="Best for large scale uses and extended redistribution rights."
                Price="$99"
                Benefit={[
                  "Individual configuration",
                  "No setup, monthly, or hidden fees",
                  "Team size: 10 developer",
                  "Premium support: 24 months",
                  "Free updates: 24 months",
                ]}
              />
              <CardPay
                Pack="Enterprise"
                Description="Best for large scale uses and extended redistribution rights."
                Price="$499"
                Benefit={[
                  "Individual configuration",
                  "No setup, monthly, or hidden fees",
                  "Team size: 100+ developer",
                  "Premium support: 36 months",
                  "Free updates: 36 months",
                ]}
              />
            </Box>
          </Box>


       {/* question */}
       <Box>
          <Box sx={{p: '32px'}}>
            <FAQ />
          </Box>
       </Box>

       {/* Trial */}
        <Box sx={{pb: 16}}>
          <Box
            sx={{
              p: '32px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '36px',
                fontWeight: '800',
              }}
            >
              Start your free trial today
            </Typography>

            <Typography
              sx={{
                fontSize: '20px',
                color: '#6B7280',
                fontWeight: '400',
              }}
            >
              Try Flowbite Platform for 30 days. No credit card required.
            </Typography>

            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                background: 'linear-gradient(90deg, #11DF9E, #466EF1)',
                fontWeight: 500,
                color: 'white',
                animation: 'gradientMove 3s linear infinite',
                '@keyframes gradientMove': {
                  '0%': { backgroundPosition: '0% center' },
                  '100%': { backgroundPosition: '200% center' },
                },
                borderRadius: '8px',
                py: '12px',
                px: '20px',
              }}
            >
              Free trial for 30 days
            </Button>
          </Box>
        </Box>

       {/* Footer */}
       <Box
        sx={{
          background: 'linear-gradient(180deg, #1A3FB9 0%, #0C1C53 100%)',
          color: 'white',
          p: { xs: 3, md: 4 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: { xs: 'center', md: 'left' },
          gap: { xs: 2, md: 0 },
        }}
      >
        {/* Logo */}
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: '28px', md: '40px' },
          }}
        >
          LOGO
        </Typography>

        {/* Hak Cipta */}
        <Typography
          sx={{
            fontSize: { xs: '0.875rem', md: '1rem' },
            maxWidth: { xs: '90%', md: '100%' },
          }}
        >
          © 2025 Oemah Solution Indonesia, Inc. All rights reserved.
        </Typography>

        {/* Icon Sosial */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icons.map((icon, i) => (
            <Box
              key={i}
              component="img"
              src={icon.src}
              alt={`Icon-${i}`}
              sx={{
                width: `${icon.width}px`,
                height: `${icon.height}px`,
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.1)' },
              }}
            />
          ))}
        </Box>
      </Box>

    </>
  )
}

export default LandingPage

