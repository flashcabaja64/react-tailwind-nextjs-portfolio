import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';

jest.mock('next/router', () => require('next-router-mock'));

describe('NavBar Component', () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  })

  it("NavBar component renders", () => {
    render(<NavBar />)
  })

  it('navbar link contain 3 links', async () => {
    render(<NavBar />);
    const nav1 = await screen.getByTestId("navbar-nav1");
    expect(nav1.children.length).toEqual(3)
  })

  it('navbar social media links greater than 3', async () => {
    render(<NavBar />);
    const nav2 = await screen.getByTestId("navbar-nav2");
    expect(nav2.children.length).toBeGreaterThanOrEqual(3)
  })
})