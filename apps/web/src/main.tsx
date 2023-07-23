import { WrappedApp } from './App';
import './index.css';
import { store } from './redux/store';
import { ErrorBoundary } from '@/utils/ErrorBoundary';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </ErrorBoundary>
);
