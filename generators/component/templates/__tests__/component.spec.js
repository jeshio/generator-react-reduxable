import React from 'react';
import { shallow } from 'enzyme';
import <%= name %> from '../<%= name %>';

test('Render <%= name %>', () => {
  const wrapper = shallow(<<%= name %> />);

  expect(wrapper.exists()).toEqual(true);
});
