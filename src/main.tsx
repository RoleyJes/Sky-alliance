import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
//Animation on scroll
// gihub for reference
// https://github.com/michalsnik/aos
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
