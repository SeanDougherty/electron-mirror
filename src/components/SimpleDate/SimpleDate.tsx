import { createUseStyles } from 'react-jss';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import FitText from '../util/FitText';

interface GridVals {
  readonly rc: number;
  readonly cc: number;
  readonly rs: number;
  readonly re: number;
  readonly cs: number;
  readonly ce: number;
  readonly gapPx: number;
}

interface ContainerVals {
  readonly w: number;
  readonly h: number;
}

interface CssVals {
  readonly g: GridVals;
  readonly c: ContainerVals;
}

const SimpleDate = (props: { gVals: GridVals }) => {
  const { gVals } = props;
  const { width, height } = useWindowDimensions();
  // Calculates the size of the grid space reserved for this component
  const containerVals = {
    w:
      (Math.abs(gVals.cs - gVals.ce) / gVals.cc) * (width - 11 * gVals.gapPx) +
      gVals.gapPx * (Math.abs(gVals.cs - gVals.ce) - 1),
    h:
      (Math.abs(gVals.rs - gVals.re) / gVals.rc) * (height - 11 * gVals.gapPx) +
      gVals.gapPx * (Math.abs(gVals.rs - gVals.re) - 1),
  };
  const classes = useStyles({ g: gVals, c: containerVals });
  const now = new Date().toDateString();
  const dayString = now.substring(0, now.indexOf(' '));
  const dateString = now.substring(now.indexOf(' '));
  return (
    <div className={classes.datebox}>
      <FitText
        data-testid="day"
        className={classes.day}
        width={containerVals.w}
        height={containerVals.h * 0.6}
      >
        {dayString}
      </FitText>
      <FitText
        data-testid="date"
        className={classes.date}
        width={containerVals.w}
        height={containerVals.h * 0.4}
      >
        {dateString}
      </FitText>
    </div>
  );
};

const useStyles = createUseStyles(() => ({
  datebox: {
    color: 'rgba(255,255,255,0.7)',
    padding: '3px',
    gridRow: (v: CssVals) => `${v.g.rs}/${v.g.re}`,
    gridColumn: (v: CssVals) => `${v.g.cs}/${v.g.ce}`,
    alignSelf: 'start',
    justifySelf: 'start',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  day: {
    width: '100%',
  },
  date: {},
}));

export default SimpleDate;
