import { createRoot } from 'react-dom/client'
import './globals.css';
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PrimeReactProvider>
            <App />
        </PrimeReactProvider>
    </StrictMode>
);
