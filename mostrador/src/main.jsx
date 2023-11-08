import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';

const config = {
   // test about config
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <FirebaseAppProvider firebaseConfig={config}>
                <App />
            </FirebaseAppProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
