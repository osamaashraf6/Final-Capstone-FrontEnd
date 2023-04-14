import React from 'react';
import { render } from '@testing-library/react';
import Authentication from '../components/signup/authentication';

describe('Authentication', () => {
  it('renders correctly', () => {
    const { container } = render(<Authentication />);
    expect(container).toMatchSnapshot();
  });
});
