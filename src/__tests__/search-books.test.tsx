import React from 'react';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved
} from '@testing-library/react';
import axios from 'axios';
import App from '../App';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

beforeEach(() => {
  mockedAxios.get.mockClear();
});

it('should not fetch when search empty term', async () => {
  const _ = setup();

  fireEvent.change(_.getByPlaceholderText(/search/i), {
    target: { value: '    ' }
  });

  fireEvent.click(_.getByLabelText(/search/i));

  expect(mockedAxios.get).not.toHaveBeenCalled();
});

it('should not show load more when no more results', async () => {
  const _ = setup();
  const data = require('../__fixtures__/volumes/q=react&startIndex=0&maxResults=12.json');

  mockedAxios.get.mockResolvedValueOnce({
    data: { ...data, totalItems: 12 }
  });

  await _.searchFor('react');

  expect(_.queryByText(/more/i)).not.toBeInTheDocument();
});

it('should fetch books when submit search and click on load more', async () => {
  const _ = setup();

  /* Search for `react` */

  mockedAxios.get.mockResolvedValueOnce({
    data: require('../__fixtures__/volumes/q=react&startIndex=0&maxResults=12.json')
  });

  await _.searchFor('react');

  expect(_.getBookItems()).toHaveLength(12);

  expect(mockedAxios.get).toHaveBeenLastCalledWith(API_URL, {
    params: { q: 'react', startIndex: 0, maxResults: 12 }
  });

  /* Load more `react` results */

  mockedAxios.get.mockResolvedValueOnce({
    data: require('../__fixtures__/volumes/q=react&startIndex=12&maxResults=12.json')
  });

  await _.loadMore();

  expect(mockedAxios.get).toHaveBeenLastCalledWith(API_URL, {
    params: { q: 'react', startIndex: 12, maxResults: 12 }
  });

  expect(_.getBookItems()).toHaveLength(24);

  mockedAxios.get.mockResolvedValueOnce({
    data: require('../__fixtures__/volumes/q=react&startIndex=24&maxResults=12.json')
  });

  await _.loadMore();

  expect(mockedAxios.get).toHaveBeenLastCalledWith(API_URL, {
    params: { q: 'react', startIndex: 24, maxResults: 12 }
  });

  /* Search for `angular` */

  mockedAxios.get.mockResolvedValueOnce({
    data: require('../__fixtures__/volumes/q=angular&startIndex=0&maxResults=12.json')
  });

  await _.searchFor('angular');

  expect(_.getBookItems()).toHaveLength(12);
});

function setup() {
  const _ = render(<App />);

  return {
    ..._,
    async searchFor(value: string) {
      fireEvent.change(_.getByPlaceholderText(/search/i), {
        target: { value }
      });

      fireEvent.click(_.getByLabelText(/search/i));

      await waitForElementToBeRemoved(() => _.getByTestId('book-loading'));
    },
    async loadMore() {
      fireEvent.click(_.getByText(/more/i));

      await waitForElementToBeRemoved(() => _.getByTestId('book-loading'));
    },
    getBookItems() {
      return _.queryAllByTestId('book-item');
    }
  };
}
