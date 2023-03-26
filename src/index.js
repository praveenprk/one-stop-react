import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId="519228254926-lbi8mn0gvgejatf5jqv5eup3rkv2l0jp.apps.googleusercontent.com">
            <App className="container"/>
        </GoogleOAuthProvider>
    </Provider>
);
