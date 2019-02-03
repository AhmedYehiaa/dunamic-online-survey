import React from 'react';
import { shallow } from 'enzyme';
import Answer from '../index';

it('it should renders the answer component', () => {
  const updateAnswer = jest.fn();
  const answer = 'testAnswer';
  const placeholder = 'value1';
  const options = [];
  const wrapper = shallow(
    <Answer
      type="textArea"
      value={answer}
      options={options}
      placeholder={placeholder}
      handleUpdatingAnswer={updateAnswer}
    />,
  );
  expect(wrapper.children.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
