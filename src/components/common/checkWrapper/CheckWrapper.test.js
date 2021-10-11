import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import CheckWrapper from './CheckWrapper';
describe('test arrow keys entry event', () => {
  test('test arrow key action with div focus', () => {
    render(
      <CheckWrapper>
        <div>1</div>
        <div>2</div>
      </CheckWrapper>
    );

    screen.getByText('1').click();

    fireEvent.keyUp(document.body, { key: 'ArrowDown' });
    expect(document.activeElement).toHaveTextContent('2');

    fireEvent.keyUp(document.body, { key: 'ArrowUp' });
    expect(document.activeElement).toHaveTextContent('1');

    fireEvent.keyUp(document.body, { key: 'ArrowUp' });
    expect(document.activeElement).toHaveTextContent('1');
  });
});
