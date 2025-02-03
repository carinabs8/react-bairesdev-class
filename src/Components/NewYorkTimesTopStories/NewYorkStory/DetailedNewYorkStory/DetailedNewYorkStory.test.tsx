import React, {act} from 'react';
import axios from 'axios';

import { render, screen, fireEvent } from '@testing-library/react';
import {within} from '@testing-library/dom'

import { DetailedNewYorkStory } from './DetailedNewYorkStory';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from '../../../../redux/store';

import { requestResponse, topStoryTitle, topStoryAbstract } from '../../../../testDataSetup';
import { topStories} from './utils';

import * as reactRedux from 'react-redux';
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

const useSelectorMock = reactRedux.useSelector;

describe('DetailedNewYorkStory', () => {
  beforeEach(() => {
    useSelectorMock.mockReturnValue(requestResponse.data.results[0])
  });

  afterEach(() => {
    useSelectorMock.mockClear();
  });

  test('renders DetailedNewYorkStory', () => {
    render(
      <DetailedNewYorkStory displayModal={true} setDisplayModal={jest.fn((_) => _)}/>
    );

    expect(screen.getByText(topStoryTitle)).toBeTruthy;
    expect(screen.getByText(topStoryAbstract)).toBeTruthy;
  });

  test('fires the event when one clicks on "Close" button', () => {
    const setDisplayModal = jest.fn((_) => _);

    render(
      <DetailedNewYorkStory displayModal={true} setDisplayModal={setDisplayModal}/>
    );

    //check https://testing-library.com/docs/queries/about for more info
    expect(screen.getByText(topStoryTitle)).toBeTruthy;
    fireEvent.click(
      within(screen.getByRole('presentation')).getByText('Close')
    );

    expect(setDisplayModal).toHaveBeenCalledWith(false);
  })
});
