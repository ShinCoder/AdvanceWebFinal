import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        index: true,
        element: <Navigate to="/login" />,
      },
    ],
  },
]);

export function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
