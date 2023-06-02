import { render, screen, within, cleanup } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  afterEach(cleanup);

  it('Footer Component renders', () => {
    render(<Footer />);
  })

  it('footer tag exists', async () => {
    render(<Footer />);
    const footerTag = await screen.queryByTestId("footer-footer");
    expect(footerTag).toBeInTheDocument();
  })

  it('"All Rights Reserved" text is present', async () => {
    render(<Footer />);
    const {getByText} = await within(screen.getByText(/reserved/i));
    expect(getByText(/all rights reserved/i)).toBeInTheDocument()
  })
})