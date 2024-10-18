import React from 'react';
import { routes } from './routes/Router';
import { RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App