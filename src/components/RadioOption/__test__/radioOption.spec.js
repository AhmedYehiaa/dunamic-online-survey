import React from 'react';
import { shallow } from 'enzyme';
import RadioOption from '../index';

it('it should renders each radio option', () => {
  const onClick = jest.fn();
  const name = 'value1';
  const selectedValue = 'value1';
  const option = {
    name: 'name1',
    value: 'value1',
  };
  const wrapper = shallow(
    <RadioOption
      key={option.value}
      name={name}
      label={option.name}
      value={option.value}
      onClick={onClick}
      defaultChecked={selectedValue === option.value}
    />,
  );
  expect(wrapper.children.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
