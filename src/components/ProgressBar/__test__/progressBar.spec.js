import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../index';

it('it should renders the progressBar component', () => {
  const wrapper = shallow(
    <ProgressBar
      percentage={100}
    />,
  );
  expect(wrapper.children.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
