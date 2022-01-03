import { createUseStyles } from 'react-jss';
import SimpleDate from '../SimpleDate/SimpleDate';
import DigitalClock from '../DigitalClock/DigitalClock';

interface GridSettings {
  rc: number;
  cc: number;
  gapPx: number;
}

const Home = () => {
  const g = { rc: 12, cc: 12, gapPx: 4 };
  const classes = useStyles(g);
  return (
    <div className={classes.home}>
      <DigitalClock
        gVals={{
          rc: g.rc,
          cc: g.cc,
          rs: 1,
          re: 3,
          cs: 1,
          ce: 5,
          gapPx: g.gapPx,
        }}
      />
      <SimpleDate
        gVals={{
          rc: g.rc,
          cc: g.cc,
          rs: 1,
          re: 2,
          cs: 11,
          ce: 13,
          gapPx: g.gapPx,
        }}
      />
    </div>
  );
};

const useStyles = createUseStyles(() => ({
  home: {
    width: '100vw',
    height: '100vh',
    display: 'grid',
    gridTemplate: (g: GridSettings) =>
      `repeat(${g.rc}, minmax(0,1fr)) / repeat(${g.cc}, minmax(0,1fr))`,
    gap: (g: GridSettings) => `${g.gapPx}px`,
  },
}));

export default Home;
