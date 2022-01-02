import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import DigitalClock from '../../../components/DigitalClock/DigitalClock';

describe('DigitalClock', () => {
  it('should render', () => {
    expect(render(<DigitalClock />)).toBeTruthy();
  });
  it('should display current local time', () => {
    const clock = render(<DigitalClock />);
    const now = new Date();
    // Adjustment for 12-hour clock
    const hourString = ((now.getHours() % 13) + Math.floor(now.getHours() / 12))
      .toString()
      .padStart(2, '0');
    const minuteString = now.getMinutes().toString().padStart(2, '0');
    expect(clock.getByTestId('hour').innerHTML).toEqual(hourString);
    expect(clock.getByTestId('minute').innerHTML).toEqual(minuteString);
  });
});
