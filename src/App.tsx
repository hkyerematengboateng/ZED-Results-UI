import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import Router from './routes';
const theme = createTheme();
function App() {
  return (
    <div>
    <Router />
    </div>
  );
}

export default App;
