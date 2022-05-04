import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

interface TextColor {
  color: string;
}

const Vocality = () => {
  const [c, setC] = useState({ color: '#070' });
  const classes = useStyles(c);

  const launchVocalityHandler = () => {
    setC({ color: '#f00' });
    // calling IPC exposed from preload script
    window.electron.ipcRenderer.once('ipc-example', (arg) => {
      // eslint-disable-next-line no-console
      console.log(arg);
    });
    window.electron.ipcRenderer.once('vocality', (arg) => {
      // eslint-disable-next-line no-console
      console.log(arg);
    });
    window.electron.ipcRenderer.sendMessage('vocality', ['this is a test!']);
    window.electron.ipcRenderer.sendMessage('ipc-example', ['ping!']);
  };

  return (
    <div>
      <button
        className={classes.text}
        onClick={launchVocalityHandler}
        type="button"
      >
        test
      </button>
    </div>
  );
};

const useStyles = createUseStyles(() => ({
  text: {
    '-webkit-app-region': 'none',
    color: (c: TextColor) => `${c.color}`,
  },
}));

export default Vocality;
