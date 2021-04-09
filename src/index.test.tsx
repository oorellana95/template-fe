import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

test('renders with App and root div', () => {
  // Create and append to document body
  // an HTML element with id = root
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  // Requires index.js so that react-dom render method is called
  require('./index.tsx');

  // Asserts render was called with <App />
  // and HTML element with id = root
  expect(ReactDOM.render).toHaveBeenCalledWith(<App />, root);
});
