import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ArticleList from './articles';

// Mock the fetch function
beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          articles: [
            {
              url: 'https://example.com/article1',
              urlToImage: 'https://example.com/image1.jpg',
              title: 'Article 1',
              description: 'Description 1',
            },
            {
              url: 'https://example.com/article2',
              urlToImage: 'https://example.com/image2.jpg',
              title: 'Article 2',
              description: 'Description 2',
            },
          ],
        }),
    })
  );
});

afterEach(() => {
  global.fetch.mockRestore();
});

test('renders articles correctly', async () => {
  render(<ArticleList />);

  // Wait for the articles to be fetched and rendered
  await waitFor(() => expect(screen.getByText('Article 1')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Article 2')).toBeInTheDocument());

  // Check that the article titles and descriptions are rendered correctly
  expect(screen.getByText('Article 1')).toBeInTheDocument();
  expect(screen.getByText('Description 1')).toBeInTheDocument();
  expect(screen.getByText('Article 2')).toBeInTheDocument();
  expect(screen.getByText('Description 2')).toBeInTheDocument();

  // Check that the images are rendered correctly
  expect(screen.getByAltText('Photo of Description 1')).toBeInTheDocument();
  expect(screen.getByAltText('Photo of Description 2')).toBeInTheDocument();
});
