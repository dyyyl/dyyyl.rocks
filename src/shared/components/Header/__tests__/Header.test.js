import React from 'react';
import { render } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {
  test('Displays the correct title', () => {
    const { getByTestId } = render(<Header title="ディイル。 岩" />);
    // Assertion
    expect(getByTestId('title')).toBeVisible();
  });
});
