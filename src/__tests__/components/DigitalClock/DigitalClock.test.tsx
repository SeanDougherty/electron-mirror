import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import DigitalClock from '../../../components/DigitalClock/DigitalClock';

const defaultGridVals = {
  rc: 12,
  cc: 12,
  rs: 1,
  re: 2,
  cs: 6,
  ce: 8,
  gapPx: 4,
};

describe('DigitalClock', () => {
  it('should render', () => {
    expect(render(<DigitalClock gVals={defaultGridVals} />)).toBeTruthy();
  });
  it('should display current local time', () => {
    const clock = render(<DigitalClock gVals={defaultGridVals} />);
    const now = new Date();
    // Adjustment for 12-hour clock
    const hourString = (
      ((now.getHours() - 1) % 12) +
      Math.floor(now.getHours() / 12)
    )
      .toString()
      .padStart(2, '0');
    const minuteString = now.getMinutes().toString().padStart(2, '0');
    expect(clock.getByTestId('hour').innerHTML).toEqual(hourString);
    expect(clock.getByTestId('minute').innerHTML).toEqual(minuteString);
  });
});
