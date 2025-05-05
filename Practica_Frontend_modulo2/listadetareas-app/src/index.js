import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store'; // Importa el store de Redux
import { Provider } from 'react-redux'; // Importa el Provider de react-redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Envuelve la App con el Provider para que los componentes accedan al store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);