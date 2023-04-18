import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { WrappedApp } from './App';
import { ErrorBoundary } from '@/utils/ErrorBoundary';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </ErrorBoundary>
);
