import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('@/views/home'));
const Detail = React.lazy(() => import('@/views/detail'));
const Entire = React.lazy(() => import('@/views/entire'));
const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/entire',
    element: <Entire />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
];
export default routes;
