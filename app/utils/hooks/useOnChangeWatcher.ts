import { useEffect, useState } from 'react';

export default (value: any, callback: Function) => {
  const [prevValue, setPrevValue] = useState(null);
  useEffect(
    () => {
      if (value && prevValue && value !== prevValue) {
        callback();
      }
      setPrevValue(value);
    },
    [value],
  );
};
