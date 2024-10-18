import React from 'react';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme();

function Landing() {
  return (
    <div className="App">
        Landing Page
        <div>
        <Link to="detection_results">Detection Results page</Link>
        </div>
    </div>
  );
}

export default Landing;
