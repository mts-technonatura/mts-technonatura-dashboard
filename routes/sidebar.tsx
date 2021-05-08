/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */

import * as Icons from 'icons';
import { SiArduino } from 'react-icons/si';
import { IconType } from 'react-icons';

export interface routeI {
  path: string;
  Icon: typeof Icons.HomeIcon | IconType;
  name: string;
  permission?: string | Array<string>;
}
export interface routesI extends routeI {
  routes?: routeI[];
}

const routes: routesI[] = [
  {
    path: '/app', // the url
    Icon: Icons.HomeIcon, // the component being exported from icons/index.js
    name: 'Home', // name that appear in Sidebar
  },
  {
    path: '/app/admin',
    Icon: Icons.FormsIcon,
    name: 'Admin Dashboard',
    permission: ['Developer', 'Owner'],
  },
  {
    path: '/app/arduinoapps',
    Icon: SiArduino,
    name: 'Arduino Apps',
  },
];

export default routes;
