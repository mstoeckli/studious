import React, { Suspense } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './Provider';
import { AuthProvider } from './context/AuthProvider';

import { GlobalStyle } from './styles/Global.styles';

import './i18n';

import App from './App';

ReactDOMClient.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <Suspense fallback="loading">
                <Provider store={store}>
                    <GlobalStyle />
                    <App />
                </Provider>
            </Suspense>
        </AuthProvider>
    </BrowserRouter>
);