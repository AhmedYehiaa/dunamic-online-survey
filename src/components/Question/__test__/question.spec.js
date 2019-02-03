import React from 'react';
import renderer from 'react-test-renderer';
import Question from '../index';

test('it should render question component with the provided text', () => {
  const component = renderer.create(
    <Question text="What is your feedback ?" />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
