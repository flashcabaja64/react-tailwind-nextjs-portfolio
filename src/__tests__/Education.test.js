import React from 'react'
import { render, screen, within, cleanup, getByTestId } from '@testing-library/react';
import Education from '../components/Education';



jest.mock("react", () => {
  const originReact = jest.requireActual("react");
  const mUseRef = jest.fn();
  return {
    ...originReact,
    useRef: mUseRef,
  };
});

jest.mock('framer-motion', () => {
  const FakeTransition = jest
    .fn()
    .mockImplementation(({ children }) => children);

  const FakeAnimatePresence = jest
    .fn()
    .mockImplementation(({ children }) => (
      <FakeTransition>{children}</FakeTransition>
    ));

  const motion = {
    a: jest
      .fn()
      .mockImplementation(({ children, ...rest }) => (
        <a {...rest}>{children}</a>
      )),
    li: jest.fn().mockImplementation(({ children }) => children),
    span: jest.fn().mockImplementation(({ children }) => children),
    circle: jest.fn().mockImplementation(({ children }) => children),
    small: jest
      .fn()
      .mockImplementation(({ children }) => <small>{children}</small>),
    h4: jest.fn().mockImplementation(({ children }) => <h4>{children}</h4>),
    h2: jest.fn().mockImplementation(({ children }) => <h2>{children}</h2>),
    p: jest.fn().mockImplementation(({ children }) => <p>{children}</p>),
    div: require('react').forwardRef(({ children, ...rest }, ref) => {
      const { initial, whileInView, transition, ...divProps } = rest;
      return (
        <div {...divProps} ref={ref}>
          {children}
        </div>
      );
    }),
    button: jest
      .fn()
      .mockImplementation(({ children, ...rest }) => (
        <button {...rest}>{children}</button>
      ))
  };

  return {
    __esModule: true,
    motion: motion,
    AnimatePresence: FakeAnimatePresence,
    default: jest.fn(),
    useScroll: jest.fn().mockReturnValue({})
  };
});

describe('Education Component', () => {
  afterEach(cleanup);
  
  it('renders Education component', () => {
    render(<Education />);
  })

  it('h2 tag has correct text', () => {
    render(<Education />);
    const educationText = screen.getByText(/education/i).textContent
    //within(educationText).getByText("Education")
    expect(educationText).toBe('Education')
  })
})