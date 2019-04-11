/**
 *
 * Asynchronously loads the component for App
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  // @ts-ignore
  loading: () => null,
});
