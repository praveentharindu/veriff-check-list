import React from 'react';
import { render, screen } from '@testing-library/react';

import ButtonGroup from './ButtonGroup';
import { Helper } from '../../../helper/Helper';

describe('test verification check options', () => {
  test('test render all button options', () => {
    render(<ButtonGroup options={Helper.ANSWER_OPTIONS} />);
    expect(
      screen.getByText(Helper.ANSWER_OPTIONS[0].label)
    ).toBeInTheDocument();
    expect(
      screen.getByText(Helper.ANSWER_OPTIONS[1].label)
    ).toBeInTheDocument();
  });

  test('test click option', () => {
    const mockFn = jest.fn();

    render(<ButtonGroup options={Helper.ANSWER_OPTIONS} onChange={mockFn} />);

    screen.getByText(Helper.ANSWER_OPTIONS[1].label).click();

    expect(mockFn).toHaveBeenCalledWith(false);
  });

  test('test click option when disabled', () => {
    const mockFn = jest.fn();

    render(
      <ButtonGroup options={Helper.ANSWER_OPTIONS} disabled onChange={mockFn} />
    );

    screen.getByText(Helper.ANSWER_OPTIONS[1].label).click();

    expect(mockFn).toHaveBeenCalledTimes(0);
  });
});
