import { topStories} from './utils';
import axios from 'axios';

import { requestResponse } from '../../testDataSetup';

jest.mock("axios");

test('calls topStories', async () => {
  const setTopStoriesHome = jest.fn();
  axios.get.mockImplementation(() => Promise.resolve(requestResponse));
  await topStories({setTopStoriesHome});
  expect(setTopStoriesHome).toHaveBeenCalled();
});
