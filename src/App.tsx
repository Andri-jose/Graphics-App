import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './layout';
import Dashboard from './dashboard';
import Articles from './articles';
import Contact from './contact';
import ErrorPage from './error-page';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00a6f4',
    },
    secondary: {
      main: '#f48c00',
    }
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="articles" element={<Articles />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}