/**
 * Use of jest and enzyme for reactjs
 */

 /**
  * Jest library
  */
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Test the html that is being generated from the react component
 */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Vaibhav/);
  expect(linkElement).toBeInTheDocument();
});
