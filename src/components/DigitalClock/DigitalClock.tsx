import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const DigitalClock = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setNow(new Date());
    }, 1000);
  }, [now]);
  const timeString = now.toLocaleTimeString().split(' ');
  const timeValues = timeString[0].padStart(8, '0').split(':');
  const period = timeString[1];
  const classes = useStyles();
  return (
    <div className={classes.clock}>
      <div className={classes.left}>
        <span data-testid="hour" className={classes.hour}>
          {timeValues[0]}
        </span>
      </div>
      <div className={classes.middle}>
        <span data-testid="minute" className={classes.minute}>
          {timeValues[1]}
        </span>
        <span className={classes.period}>{period}</span>
      </div>
    </div>
  );
};

const useStyles = createUseStyles(() => ({
  clock: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    color: 'rgba(255,255,255,0.75)',
    borderBottom: 'solid white 1px',
    '& > *': {
      padding: '0 1vw',
    },
    // right side of the border outline
    '&:after': {
      content: "''",
      position: 'absolute',
      bottom: '0px',
      right: '0px',
      padding: '2px', // fixes graphical glitch between this border and bottom border
      height: '25%',
      borderRight: 'solid white 1px',
    },
  },
  left: {},
  middle: {
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
  hour: {
    fontSize: 'max(32px,10vw)',
    lineHeight: 'max(32px,10vw)',
  },
  minute: {
    fontSize: 'max(16px,5vw)',
  },
  second: {
    textAlign: 'center',
    fontSize: 'min(16px,5vw)',
  },
  period: {
    alignSelf: 'end',
    fontSize: 'min(24px, 4vw)',
  },
}));

export default DigitalClock;
