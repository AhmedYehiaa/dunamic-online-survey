import React from 'react';
import renderer from 'react-test-renderer';
import TextArea from '../index';

test('it should render textArea component with the provided props', () => {
  const onChange = jest.fn();
  const component = renderer.create(
    <TextArea
      className="text-area"
      value="my answer"
      placeholder="please enter your feedback"
      onChange={e => onChange(e.target.value)}
    />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
