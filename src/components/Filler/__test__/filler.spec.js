import React from 'react';
import { shallow } from 'enzyme';
import Filler from '../index';

it('it should renders the filler component', () => {
  const wrapper = shallow(
    <Filler
      percentage={100}
    />,
  );
  expect(wrapper.children.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
