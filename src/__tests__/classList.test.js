import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ClassList from '../components/swimClass/classList';
import store from '../redux/store';

describe('classList', () => {
  const list = (
    <Provider store={store}>
      <BrowserRouter>
        <ClassList />
      </BrowserRouter>
    </Provider>
  );

  test('it should display class lists', async () => {
    render(list);
    expect(screen.queryByText('Welcome to Swimming Class')).toBeInTheDocument();
  });
});
