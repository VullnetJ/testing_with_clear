

import React from 'react';
import Todolist from './components/Todolist'
import App from './App';
import { render, fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect'

it('Testing the Clear todos ', () => {
  const handleReset = jest.fn();
  const { getByText } = render(<Todolist onClick={handleReset} />);
  fireEvent.click(getByText(/Clear TodoList/i));

});
it('Checking that there is no todo', () => {
  const { container} = render(<Todolist />);
  expect(container).toHaveTextContent([]);
});

it('Third test ', () => {
  const { container, getByText, getByPlaceholderText } = render(<Todolist />);
  const button = getByText('Clear TodoList');
  fireEvent.click(button);
});