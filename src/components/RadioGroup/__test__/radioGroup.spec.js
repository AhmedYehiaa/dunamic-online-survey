import React from 'react';
import { shallow } from 'enzyme';
import RadioGroup from '../index';

it('it should renders the radio options', () => {
  const handleUpdatingAnswer = jest.fn();
  const value = 'value1';
  const options = [{
    name: 'name1',
    value: 'value1',
  }];
  const wrapper = shallow(
    <RadioGroup
      name="productSurvey"
      selectedValue={value}
      value={value}
      options={options}
      onClick={handleUpdatingAnswer}
    />,
  );
  expect(wrapper.children.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
