import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {
    /* createBrowserRouter,
     RouterProvider,*/
    BrowserRouter
} from "react-router-dom";

import Layout from './Layout.jsx';
import QrCodeGenerator from './components/Generator/QrCodeGenerator.jsx';
import QrCodeScanner from './components/Scanner/QrCodeScanner.jsx';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    </StrictMode>
);
