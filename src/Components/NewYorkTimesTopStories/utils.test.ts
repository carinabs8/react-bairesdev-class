import { topStories} from './utils';
import axios from 'axios';

import { requestResponse } from '../../testDataSetup';

jest.mock("axios");

test('calls topStories', async () => {
  const setTopStoriesHome = jest.fn();
  const mockAddListener = jest.spyOn(axios, 'get')
  mockAddListener.mockImplementation(() => Promise.resolve(requestResponse));
  await topStories({setTopStoriesHome});
  expect(setTopStoriesHome).toHaveBeenCalled();
  expect(setTopStoriesHome).toHaveBeenLastCalledWith(requestResponse.data.results)
});
