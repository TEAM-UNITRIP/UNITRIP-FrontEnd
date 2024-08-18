import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './views/Main/pages/MainPage';
import SearchPage from './views/Search/pages/SearchPage';
import SearchResultPage from './views/Search/pages/SearchResultPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
    children: [{}],
  },
  {
    path: '/search/:word',
    element: <SearchResultPage />,
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
