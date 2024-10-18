import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DetectionResultsPage from './components/object_detections';
import Landing from './components/landing';
const router = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/"  element={<Landing/>} />
        <Route path="/detection_results"  element={<DetectionResultsPage/>} />
        </Routes>

    </BrowserRouter>
  );
};

export default router;