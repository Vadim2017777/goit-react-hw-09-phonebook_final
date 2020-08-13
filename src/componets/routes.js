import { lazy } from 'react';

export default [
  {
    path: '/goit-react-hw-09-phonebook_final/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/HomeView.js')),
    private: false,
    restricted: false,
  },
  {
    path: '/goit-react-hw-09-phonebook_final/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./views/RegisterView.js')),
    private: false,
    restricted: true,
  },
  {
    path: '/goit-react-hw-09-phonebook_final/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./views/LoginView.js')),
    private: false,
    restricted: false,
  },
  {
    path: '/goit-react-hw-09-phonebook_final/phonebook',
    label: 'Phonebook',
    exact: true,
    component: lazy(() => import('./views/PhoneBookView')),
    private: true,
    restricted: false,
  },
];
