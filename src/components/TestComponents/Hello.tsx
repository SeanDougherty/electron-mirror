import { createUseStyles } from 'react-jss';
import icon from '../../../assets/icon.svg';

const Hello = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.hello}>
        <img alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className={classes.hello}>
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

const useStyles = createUseStyles(() => ({
  hello: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
    '& > img': {
      width: '200px',
    },
    '& a': {
      textDecoration: 'none',
      height: 'fit-content',
      width: 'fit-content',
      margin: '10px',
      '&:hover': {
        opacity: '1',
        textDecoration: 'none',
      },
    },
    '& button': {
      backgroundColor: 'white',
      padding: '10px 20px',
      borderRadius: '10px',
      border: 'none',
      appearance: 'none',
      fontSize: '1.3rem',
      boxShadow: `0px 8px 28px -6px rgba(24, 39, 75, 0.12),
                  0px 18px 88px -4px rgba(24, 39, 75, 0.14)`,
      transition: 'all ease-in 0.1s',
      cursor: 'pointer',
      opacity: '0.9',
      '-webkit-app-region': 'no-drag',
      '-webkit-user-select': 'text',
      '&:hover': {
        transform: 'scale(1.05)',
        opacity: '1',
      },
    },
  },
  draggable: {
    '-webkit-app-region': 'no-drag',
    '-webkit-user-select': 'text',
  },
}));

export default Hello;
