import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './views/Main/pages/MainPage';
import SearchPage from './views/Search/pages/SearchPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
