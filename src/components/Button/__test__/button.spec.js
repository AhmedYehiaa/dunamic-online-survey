import React from 'react';
import { shallow } from 'enzyme';
import Button, { TYPES, SIZES } from '../index';

it('it should renders the button', () => {
  const onClickNext = jest.fn();
  const disableNextButton = false;

  const wrapper = shallow(<Button
    type="button"
    onClick={onClickNext}
    text="Next"
    disabled={disableNextButton}
    buttonType={TYPES.PRIMARY}
    buttonSize={SIZES.MEDIUM}
  />);
  expect(wrapper).toMatchSnapshot();
});
