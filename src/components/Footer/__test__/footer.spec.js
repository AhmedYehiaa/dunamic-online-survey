import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../index';

it('it should renders the footer component', () => {
  const handleBackNavigation = jest.fn();
  const submit = jest.fn();

  const wrapper = shallow(
    <Footer
      disableBackButton={false}
      disableNextButton={false}
      onClickBack={handleBackNavigation}
      onClickNext={submit}
    />,
  );
  expect(wrapper.children.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
