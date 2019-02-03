import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

it('it should renders the radio options', () => {
  const wrapper = shallow(
    <Header
      title="title"
      subTitle="subtitle"
    />,
  );
  expect(wrapper.children.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
