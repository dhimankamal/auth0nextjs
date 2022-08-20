import React from 'react';
import { render, screen } from '@testing-library/react';

import Highlight from '../../components/Highlight';

describe('Highlight', () => {
  it('should render without crashing', async () => {
    render(<Highlight testid="json">{}</Highlight>);

    expect(screen.getByTestId('json')).toBeInTheDocument();
  });
});
