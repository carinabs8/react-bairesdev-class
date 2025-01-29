import {act} from 'react';
import ReactDOMClient from 'react-dom/client';
import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';

import { requestResponse, topStoryTitle } from './testDataSetup';

jest.mock("axios");

test('renders learn react link', async () => {
  const setTopStoriesHome = jest.fn();
  axios.get.mockImplementation(() => Promise.resolve(requestResponse));
  const container = document.createElement('div');
  await act(async () => {
    await render(<App />);
  });
  const linkElement = await screen.getByText(topStoryTitle);
});
