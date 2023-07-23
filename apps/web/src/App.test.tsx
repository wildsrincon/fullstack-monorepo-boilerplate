import { App, WrappedApp } from './App';
import { userReducer } from './redux/store';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

describe('App', () => {
  it('renders without crashing', () => {
    const store = configureStore({ reducer: userReducer });
    render(
      <Provider store={store}>
        <WrappedApp />
      </Provider>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home Page');
  });

  it('Renders not found if invalid path', () => {
    const store = configureStore({ reducer: userReducer });
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404');
  });
});
