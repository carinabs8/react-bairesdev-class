import { render, screen, fireEvent } from '@testing-library/react';
import {within, queryAllByText} from '@testing-library/dom'

import { NewYorkStory } from './NewYorkStory';

import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('NewYorkStory', () => {
  const storyParams = {
    section: 'Story section',
    title: 'Story title',
    abstract: 'Story abstract',
    des_facet: ['Story des_facet'],
    multimedia: [
      {
        caption: 'caption', url: 'url', copyright: 'copyright',
        format: 'format', height: 12, subtype: 'subtype',
        type: 'type', width: 12
      }
    ],
  }

  test('renders NewYorkStory', () => {
    render(
      <Provider store={store}>
        <NewYorkStory story={storyParams} />
      </Provider>
    );

    expect(screen.getByText('Story section')).toBeTruthy;
    expect(screen.getByText('Story title')).toBeTruthy;
  });

  describe(("When 'Check it out' button gets pressed"), () => {
    test('it opens the modal', () => {
      render(
        <Provider store={store}>
          <NewYorkStory story={storyParams} />
        </Provider>
      );

      fireEvent.click(
        within(screen.getByRole('button')).getByText('Check it out')
      );

      expect(
        within(screen.getByRole('presentation'))
          .getByText('Story abstract')
      ).toBeTruthy;

      fireEvent.click(
        within(screen.getByRole('presentation')).getByText('Close')
      );

      expect(screen.queryAllByText('Story abstract')).toStrictEqual([]);
    })

  })

});
