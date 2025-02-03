import {act} from 'react';
import { Provider } from 'react-redux';
import ReactDOMClient from 'react-dom/client';
import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';

import store from './redux/store';
import { requestResponse, topStoryTitle } from './testDataSetup';

jest.mock("axios");

test('renders learn react link', async () => {
  const setTopStoriesHome = jest.fn();
  axios.get.mockImplementation(() => Promise.resolve(requestResponse));
  const container = document.createElement('div');
  await act(async () => {
    await render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  const linkElement = await screen.getByText(topStoryTitle);
});
