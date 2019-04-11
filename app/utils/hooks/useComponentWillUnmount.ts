import { useEffect } from 'react';

export default (func: () => Function) => {
  useEffect(() => {
    return func;
  }, []);
};
