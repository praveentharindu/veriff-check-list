import { useKeys } from './Utility';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

describe('test utility functions', () => {
  test('test trigger handler function with key object', () => {
    const mockFn = jest.fn();

    const Component = () => {
      useKeys({
        Enter: () => mockFn()
      });

      return null;
    };

    render(<Component />);

    fireEvent.keyUp(document.body, { key: 'Enter' });
    fireEvent.keyDown(document.body, { key: 'Enter' });
    fireEvent.keyUp(document.body, { key: '1' });
    fireEvent.keyUp(document.body, { key: '2' });

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('test handler no longer trigger when component unmounts', () => {
    const mockFn = jest.fn();

    const Component = () => {
      useKeys({
        2: () => mockFn()
      });

      return null;
    };

    const renderedComponent = render(<Component />);

    fireEvent.keyUp(document.body, { key: '2' });
    fireEvent.keyUp(document.body, { key: '2' });

    renderedComponent.unmount();

    fireEvent.keyUp(document.body, { key: '2' });

    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
