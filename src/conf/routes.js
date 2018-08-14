import { Urls } from 'conf/urls.js';

import SignIn from 'components/views/SignIn';
import Dashboard from 'components/views/Dashboard';

const routes = [{
  path: Urls.DASHBOARD,
  component: Dashboard,
  exact: true,
}, {
  path: Urls.SIGNIN,
  component: SignIn,
}];

export default routes;