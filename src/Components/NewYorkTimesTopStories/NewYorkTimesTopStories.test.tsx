import React, {act} from 'react';
import axios from 'axios';

import { render, screen, fireEvent } from '@testing-library/react';
import {within} from '@testing-library/dom'

import { NewYorkTimesTopStories } from './NewYorkTimesTopStories';

import * as reactRedux from 'react-redux'
import store from '../../redux/store';

import { requestResponse, topStoryTitle, topStoryAbstract } from '../../testDataSetup';
import { topStories} from './utils';

jest.mock("axios");

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

const useSelectorMock = reactRedux.useSelector;

describe('DetailedNewYorkStory', () => {
  beforeEach(() => {
    useSelectorMock.mockReturnValue(requestResponse.data.results[0])
  });

  afterEach(() => {
    useSelectorMock.mockClear();
  });

  test('renders NewYorkTimesTopStories', async () => {
    const setTopStoriesHome = jest.fn();
    const mockAddListener = jest.spyOn(axios, 'get')
    mockAddListener.mockImplementation(() => Promise.resolve(requestResponse));
    await topStories({setTopStoriesHome});

    await act(async () => {
      render(
        <NewYorkTimesTopStories />
      );
    });

    //check https://testing-library.com/docs/queries/about for more info
    expect(screen.getByText(topStoryTitle)).toBeTruthy;
    fireEvent.click(screen.getByText('Check it out'));
    expect(screen.getByText(topStoryAbstract)).toBeTruthy;
    fireEvent.click(
      within(screen.getByRole('presentation')).getByText('Close')
    );
    expect(await screen.queryByText(topStoryAbstract)).toBeNull();
  });
});
