/* eslint-disable import/no-extraneous-dependencies */
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;
global.shallow = shallow;
