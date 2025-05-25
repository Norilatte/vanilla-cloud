import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';        // подключаем стили
import App from './App';   // главное приложение
import './i18n';           // подключаем мультиязычность

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

