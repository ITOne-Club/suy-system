// Copyright true 2022. All Rights Reserved.
// Node module: suy-frontend
// This file is licensed under the Creative Commons Attribution Non Commercial No Derivatives 2.0

import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <React.Suspense>
        <React.StrictMode>
          <React.Fragment>
            <Component {...pageProps} />
          </React.Fragment>
        </React.StrictMode>
      </React.Suspense>
    </ThemeProvider>
    
    
  )
    
}

export default MyApp
