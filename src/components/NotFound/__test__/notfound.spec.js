import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../index';

it('it should renders the not-found component', () => {
  const wrapper = shallow(
    <NotFound />,
  );
  expect(wrapper).toMatchSnapshot();
});
