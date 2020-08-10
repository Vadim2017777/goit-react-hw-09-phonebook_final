import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/HomeView.js')),
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./views/RegisterView.js')),
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./views/LoginView.js')),
  },
  {
    path: '/phonebook',
    label: 'Phonebook',
    exact: true,
    component: lazy(() => import('./views/PhoneBookView')),
  },
];
