import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import { Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import SectionHero from './components/SectionHero';

export default function App() {
  const mobile = useMediaQuery('(min-width: 600px)');

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header mobile={mobile} />
        <SectionHero />
      </Container>
    </>
  );
}
