import React from 'react';
import ReactDOM from 'react-dom';
import App, {total} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const add = jest.fn( () => 4);

// automatically unmount and cleanup DOM after the test is finished.
test('Testing the add function', () => {
  expect(add(1,3)).toBe(4);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 3);
});

test('Get total with dollar sign', () => {
  expect(total(5,20)).toBe('$25')
});
