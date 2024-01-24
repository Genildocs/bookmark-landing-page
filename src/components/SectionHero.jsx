import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Hero from '../assets/illustration-hero.svg';
import Rectangle from '../assets/Rectangle.png';

export default function SectionHero() {
  return (
    <Grid container sx={{ paddingTop: '5rem' }}>
      <Grid item xs={12} md={6}>
        <Box sx={{}}>
          <img src={Rectangle} alt="Rectangle" />
        </Box>
        <img src={Hero} alt="Hero" style={{ width: '100%' }} />
      </Grid>
    </Grid>
  );
}
