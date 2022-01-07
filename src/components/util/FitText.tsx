import { createUseStyles } from 'react-jss';
import { useEffect, useState, useRef } from 'react';

const defaultUpperFontSize = 200;
const defaultLowerFontSize = 0;

interface PropTypes {
  'data-testid': string;
  className: string;
  width: number;
  height: number;
  children: string;
}

const FitText = (props: PropTypes) => {
  const { 'data-testid': testid, className, width, height, children } = props;
  const [hi, setHigh] = useState(defaultUpperFontSize);
  const [lo, setLow] = useState(defaultLowerFontSize);
  const classes = useStyles((hi + lo) / 2);
  const text = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    setHigh(defaultUpperFontSize);
    setLow(defaultLowerFontSize);
  }, [width, height]);
  useEffect(() => {
    findFontSize(text, width, height, hi, lo, setHigh, setLow);
  }, [width, height, hi, lo, text]);
  return (
    <span
      ref={text}
      data-testid={testid}
      className={`${className} ${classes.fittext}`}
    >
      {children}
    </span>
  );
};

const findFontSize = (
  text: React.RefObject<HTMLSpanElement>,
  width: number,
  height: number,
  hi: number,
  lo: number,
  setHigh: (n: number) => any,
  setLow: (n: number) => any
) => {
  if (text.current && hi >= lo) {
    const mid = (hi + lo) / 2;
    if (
      text.current.offsetWidth > width ||
      text.current.offsetHeight > height
    ) {
      setHigh(mid - 1);
    } else {
      setLow(mid + 1);
    }
  }
};

const useStyles = createUseStyles(() => ({
  fittext: {
    fontSize: (n: number) => `${n}px`,
    lineHeight: (n: number) => `${n}px`,
  },
}));

export default FitText;
