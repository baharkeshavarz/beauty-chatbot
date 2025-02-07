import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'simplebar/src/simplebar.css';

import { persister, store } from 'src/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </ReduxProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
