import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';

function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      id: 'panel1',
      question: 'Can I use FlowBite in open-source projects?',
      answer: 'Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself. \n With that being said, feel free to use this design kit for your open-source projects. \nFind out more information by reading the license.',
    },
    {
      id: 'panel2',
      question: 'Where can I access my download files?',
      answer: 'Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself. \n With that being said, feel free to use this design kit for your open-source projects. \nFind out more information by reading the license.',
    },
    {
      id: 'panel3',
      question: 'Can I use FlowBite for commercial purposes?',
      answer: 'Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself. \n With that being said, feel free to use this design kit for your open-source projects. \nFind out more information by reading the license.',
    },
    {
      id: 'panel4',
      question: 'What about browser support?',
      answer: 'Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself. \n With that being said, feel free to use this design kit for your open-source projects. \nFind out more information by reading the license.',
    },
  ];

  return (
    <Box sx={{ textAlign: 'center', py: 4, }}>
      <Typography sx={{ fontWeight: 800, fontSize: '36px', pb: 2 }}>
        Frequently asked questions
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={faq.id}
            expanded={expanded === faq.id}
            onChange={handleChange(faq.id)}
            sx={{
              width: '695px',
              boxShadow: 'none',
              border: 'none',
              borderBottom:
                index !== faqs.length - 1 ? '1px solid #E5E7EB' : 'none', // ❗ hanya tampil kalau bukan terakhir
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                component="span"
                variant="inherit"
                sx={{
                  fontSize: '18px',
                  fontWeight: 500,
                  color: expanded === faq.id ? '#000' : '#6B7280',
                  transition: 'color 0.3s ease',
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                fontSize: '16px',
                fontWeight: 400,
                color: '#6B7280',
                textAlign: 'left',
                whiteSpace: 'pre-line',
              }}
            >
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default FAQ;
