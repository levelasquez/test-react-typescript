import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Hello from './Hello';

Enzyme.configure({ adapter: new Adapter() })

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = Enzyme.shallow(<Hello name="Leonardo" />);

  expect(hello.find(".gretting").text()).toEqual('Hello Leonardo!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = Enzyme.shallow(<Hello name="Leonardo" enthusiasmLevel={1} />);

  expect(hello.find(".gretting").text()).toEqual('Hello Leonardo!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = Enzyme.shallow(<Hello name="Leonardo" enthusiasmLevel={5} />);

  expect(hello.find(".gretting").text()).toEqual('Hello Leonardo!!!!!')
});

it('throws when the enthusiasm leve is 0', () => {
  expect(() => {
    Enzyme.shallow(<Hello name="Leonardo" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm leve is negative', () => {
  expect(() => {
    Enzyme.shallow(<Hello name="Leonardo" enthusiasmLevel={-1} />);
  }).toThrow();
});
