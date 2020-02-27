import React from 'react';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved
} from '@testing-library/react';
import axios from 'axios';
import data from '../__fixtures__/volumes/q=react&startIndex=0&maxResults=12.json';
import App from '../App';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

it('should load 12 books when searched', async () => {
  const _ = render(<App />);

  mockedAxios.get.mockResolvedValue({ data });

  fireEvent.change(_.getByPlaceholderText(/search/i), {
    target: { value: 'react' }
  });

  fireEvent.click(_.getByLabelText(/search/i));

  await waitForElementToBeRemoved(() => _.getByTestId('book-loading'));

  expect(_.queryAllByTestId('book-item')).toHaveLength(12);

  expect(mockedAxios.get).toHaveBeenLastCalledWith(
    'https://www.googleapis.com/books/v1/volumes',
    {
      params: { q: 'react', startIndex: 0, maxResults: 12 }
    }
  );

  expect(_.queryByTestId('book-loading')).not.toBeInTheDocument();
});
