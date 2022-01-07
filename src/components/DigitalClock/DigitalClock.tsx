import { useState, useEffect } from 'react';
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

const DigitalClock = (props: { gVals: GridVals }) => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setNow(new Date());
    }, 1000);
  }, [now]);
  const timeString = now.toLocaleTimeString().split(' ');
  const timeValues = timeString[0].padStart(8, '0').split(':');
  const hourString = timeValues[0];
  const minString = timeValues[1];
  const period = timeString[1];
  const { gVals } = props;
  const { width, height } = useWindowDimensions();
  const hourWidthRatio = 0.7;
  const minuteHeightRatio = 0.75;
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
  return (
    <div className={classes.clock}>
      <div className={classes.left}>
        <FitText
          data-testid="hour"
          className={classes.hour}
          width={containerVals.w * hourWidthRatio}
          height={containerVals.h}
        >
          {hourString}
        </FitText>
      </div>
      <div className={classes.middle}>
        <FitText
          data-testid="minute"
          className={classes.minute}
          width={containerVals.w * (1 - hourWidthRatio)}
          height={containerVals.h * minuteHeightRatio}
        >
          {minString}
        </FitText>
        <FitText
          data-testid="period"
          className={classes.period}
          width={containerVals.w * (1 - hourWidthRatio)}
          height={containerVals.h * (1 - minuteHeightRatio)}
        >
          {period}
        </FitText>
      </div>
    </div>
  );
};

const useStyles = createUseStyles(() => ({
  clock: {
    gridRow: (v: CssVals) => `${v.g.rs}/${v.g.re}`,
    gridColumn: (v: CssVals) => `${v.g.cs}/${v.g.ce}`,
    position: 'relative',
    display: 'flex',
    alignSelf: 'start',
    justifySelf: 'center',
    color: 'rgba(255,255,255,0.75)',
    borderBottom: (v: CssVals) =>
      `solid white ${Math.min(v.c.w, v.c.h) * 0.01}px`,
    // right side of the border outline
    '&:after': {
      content: "''",
      position: 'absolute',
      bottom: '0px',
      right: '0px',
      padding: '2px', // fixes graphical glitch between this border and bottom border
      height: '25%',
      borderRight: (v: CssVals) =>
        `solid white ${Math.min(v.c.w, v.c.h) * 0.01}px`,
    },
  },
  left: {
    paddingRight: (v: CssVals) => `${v.c.w * 0.02}px`, // Inside
    paddingLeft: (v: CssVals) => `${v.c.w * 0.01}px`, // Outside
  },
  middle: {
    paddingLeft: (v: CssVals) => `${v.c.w * 0.02}px`, // Inside
    paddingRight: (v: CssVals) => `${v.c.w * 0.03}px`, // Outside
    flexDirection: 'column',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  right: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-between',
  },
  // Adjusts fontSize to fit clock to Grid Container
  hour: {},
  minute: {},
  second: {
    textAlign: 'center',
    fontSize: 'min(16px,5vw)',
  },
  period: {
    alignSelf: 'end',
  },
}));

export default DigitalClock;
