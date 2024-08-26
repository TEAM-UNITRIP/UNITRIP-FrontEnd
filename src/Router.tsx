import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Settings from './components/Settings';
import DetailPage from './views/Detail/pages/DetailPage';
import MainPage from './views/Main/pages/MainPage';

const router = createBrowserRouter([
  {
    element: <Settings />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      { path: '/detail', element: <DetailPage /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
