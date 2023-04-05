// Imports
import { fireEvent, render, screen } from '@testing-library/react'

// To Test
import App from '../App'

// Tests
test('Renders main page correctly', async () => {
  // Setup
  render(<App />)
  const buttonCount = await screen.findByRole('button')
  const codeCount = await screen.queryByText(/The count is now:/)

  // Pre Expecations
  expect(buttonCount.innerHTML).toBe('count is 0')
  expect(codeCount).not.toBeInTheDocument()
  expect(await screen.queryByText(/The count is now:/)).not.toBeInTheDocument()

  // Init
  fireEvent.click(buttonCount)
  fireEvent.click(buttonCount)

  // Post Expectations
  expect(buttonCount.innerHTML).toBe('count is 2')
  expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument()
})
