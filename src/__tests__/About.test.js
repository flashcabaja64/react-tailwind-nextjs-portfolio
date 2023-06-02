import React from 'react'
import { render } from '@testing-library/react';
import About from '../pages/about';
import TransitionEffect from '../components/Transition';

jest.mock("react", () => {
  const originReact = jest.requireActual("react");
  const mUseRef = jest.fn();
  return {
    ...originReact,
    useRef: mUseRef,
  };
});

jest.mock('framer-motion');

describe('About component', () => {
  it.skip('renders About component', () => {
    render(<About />)
  })
})