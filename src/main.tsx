import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { store } from './store';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
