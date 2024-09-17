import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Settings from './components/Settings';
import DetailPage from './views/Detail/pages/DetailPage';
import WriteReviewPage from './views/Detail/pages/WriteReviewPage';
import ErrorReportPage from './views/ErrorReport/pages/ErrorReportPage';
import LoginCallBack from './views/Login/components/LoginCallBack';
import SignUpPage from './views/Login/pages/SignUpPage';
import MainPage from './views/Main/pages/MainPage';
import Mypage from './views/Mypage/pages/Mypage';
import SearchPage from './views/Search/pages/SearchPage';
import SearchResultPage from './views/Search/pages/SearchResultPage';

const router = createBrowserRouter([
  {
    element: <Settings />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/auth/callback', element: <LoginCallBack /> },
      { path: '/detail', element: <DetailPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
    ],
  },
  { path: '/detail', element: <DetailPage /> },
  { path: '/detail/review/write', element: <WriteReviewPage /> },
  {
    path: '/search',
    element: <SearchPage />,
    children: [{}],
  },
  {
    path: '/search/:word',
    element: <SearchResultPage />,
  },
  {
    path: '/mypage',
    element: <Mypage />,
  },
  { path: '/error-report', element: <ErrorReportPage /> },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
