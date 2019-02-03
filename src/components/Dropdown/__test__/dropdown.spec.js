import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../index';

it('it should renders the dropdown list', () => {
  const handleUpdatingAnswer = jest.fn();
  const options = [{
    name: 'name1',
    value: 'value1',
  }];
  const wrapper = shallow(
    <Dropdown
      options={options}
      value="value1"
      onChange={handleUpdatingAnswer}
    />,
  );
  expect(wrapper.children.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
