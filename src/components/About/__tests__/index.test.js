// __tests__/About.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// imports the component being tested. which is the ABOUT
import About from '..';

afterEach(cleanup);

// declare the component being tested
describe('About component', () => {
  // verify the component is rendering
  // baseline test
  it('renders', () => {
    render(<About />);
  });
  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<About />);

    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
})
