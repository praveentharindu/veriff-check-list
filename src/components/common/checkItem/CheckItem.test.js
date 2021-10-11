import React from 'react';
import { mount } from 'enzyme';
import { render, screen } from '@testing-library/react';

import CheckItem from './CheckItem';
import { findByTestAttr } from '../../../utility/TestUtility';

const defaultProps = { options: [], description: 'abc' };

const setup = (props = {}, values = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(<CheckItem {...setupProps} />);
};

describe('test checkItem component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('test render component with description', () => {
    const component = findByTestAttr(wrapper, 'verification-item-description');
    expect(component.exists()).toBe(true);
  });

  test('test render component with description match', () => {
    render(<CheckItem options={[]} description="abc" />);
    expect(screen.getByText('abc')).toBeInTheDocument();
  });
});
