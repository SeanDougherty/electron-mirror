import { createUseStyles } from 'react-jss';
import DigitalClock from '../DigitalClock/DigitalClock';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <DigitalClock />
    </div>
  );
};

const useStyles = createUseStyles(() => ({
  home: {
    width: '100%',
    height: '100vh',
  },
}));

export default Home;
