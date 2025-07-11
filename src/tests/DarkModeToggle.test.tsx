import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import DarkModeToggle from '../components/DarkModeToggle';

describe('DarkModeToggle', () => {
  test('renders the toggle button', () => {
    render(
      <Provider store={store}>
        <DarkModeToggle />
      </Provider>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('toggles dark mode text on click', () => {
    render(
      <Provider store={store}>
        <DarkModeToggle />
      </Provider>
    );
    const button = screen.getByRole('button');

    // Initial state (light or dark)
    const initialText = button.textContent;

    // Click to toggle
    fireEvent.click(button);

    // Expect button text to change
    expect(button.textContent).not.toBe(initialText);
    expect(button).toHaveTextContent(/dark|light/i);
  });
});
