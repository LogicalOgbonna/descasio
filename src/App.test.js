import { render } from '@testing-library/react';

import App from './App';
import brain from './helpers/brain';

describe('<App />', () => {
  const { queryByTestId } = render(<App />);
  it('renders <App /> component without crashing', () => {
    const app = queryByTestId("calculator");
    expect(app).toBeTruthy();
  })
});
describe('brain', () => {
  it('should return zero(0) if nothing is passed', () => {
    expect(brain("")).toBe(0)
  })
  it('performs addition correctly', () => {
    expect(brain("2 + 2")).toBe(4)
  })
  it('performs subtraction correctly', () => {
    expect(brain("2 - 2")).toBe(0)
  })
  it('performs division correctly', () => {
    expect(brain("10 / 2")).toBe(5)
  })
  it('returns zero(0) when dividing by zero', () => {
    expect(brain("2 / 0")).toBe(0)
  })
  it('performs multiplication correctly', () => {
    expect(brain("2 * 4")).toBe(8)
  })
  // note: BODMAS wasn't considered for these calculation
  it('performs complex calculation correctly', () => {
    expect(brain("2 * 2 - 1 + 5 - 12")).toBe(-4)
  })
});
