import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import ButtonGroupWrapper from './ButtonGroupWrapper';
import { Helper } from '../../../helper/Helper';

describe('test key board number entry with button actions', () => {
  test('test handler with key board number entry', () => {
    const mockFn = jest.fn();

    render(
      <div aria-label="BUTTON_GROUP_WRAPPER" tabIndex={0}>
        <ButtonGroupWrapper options={Helper.ANSWER_OPTIONS} onChange={mockFn} />
      </div>
    );

    screen.getByLabelText('BUTTON_GROUP_WRAPPER').focus();

    fireEvent.keyUp(document.body, { key: '1' });
    expect(mockFn).toHaveBeenCalledWith(true);

    fireEvent.keyUp(document.body, { key: '2' });
    expect(mockFn).toHaveBeenCalledWith(false);
  });
});
