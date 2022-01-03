import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SimpleDate from '../../../components/SimpleDate/SimpleDate';

const defaultGridVals = {
  rc: 12,
  cc: 12,
  rs: 1,
  re: 2,
  cs: 6,
  ce: 8,
  gapPx: 4,
};

const weekDayVals = {
  0: ['Sun', 'Sunday', '0'],
  1: ['Mon', 'Monday', '1'],
  2: ['Tues', 'Tuesday', '2'],
  3: ['Wed', 'Wednesday', '3'],
  4: ['Thur', 'Thursday', '4'],
  5: ['Fri', 'Friday', '5'],
  6: ['Sat', 'Saturday', '6'],
};

describe('SimpleDate', () => {
  it('should render', () => {
    expect(render(<SimpleDate gVals={defaultGridVals} />)).toBeTruthy();
  });
  it('should display current day', () => {
    const clock = render(<SimpleDate gVals={defaultGridVals} />);
    const now = new Date();
    const dayString = clock.getByTestId('day').innerHTML;
    expect(
      weekDayVals[now.getDay() as keyof typeof weekDayVals].includes(dayString)
    ).toBeTruthy();
  });
});
