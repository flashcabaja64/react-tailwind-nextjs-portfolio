import React from 'react'
import { render, screen, within, cleanup, getByTestId } from '@testing-library/react';
import Skills from '../components/SkillsComponent';

jest.mock("react", () => {
  const originReact = jest.requireActual("react");
  const mUseRef = jest.fn();
  return {
    ...originReact,
    useRef: mUseRef,
  };
});

jest.mock('framer-motion', () => {
  const motion = {
    div: require('react').forwardRef(({ children, ...rest }, ref) => {
      const { initial, whileInView, whileHover, viewport, ...divProps } = rest;
      return (
        <div {...divProps} ref={ref}>
          {children}
        </div>
      );
    }),
  };

  return {
    __esModule: true,
    motion: motion,
    default: jest.fn(),
    useScroll: jest.fn().mockReturnValue({})
  };
});

describe('Skills Component', () => {
  afterEach(cleanup);
  
  it('renders Skills component', () => {
    render(<Skills />);
  })

  it('motion div tag has correct text', () => {
    render(<Skills />);
    const webText = screen.getByTestId('skills-motion-div').textContent
    expect(webText).toBe('Web')
  })

  it('contains more than 10+ Skills', () => {
    render(<Skills />);
    const numberOfSkills = screen.getByTestId('skills-section').querySelector('div')
    expect(numberOfSkills).toBeInTheDocument()
  })
})