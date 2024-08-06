import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Service from './components/Service';
import Layout from './components/Layout';
import Bookingtable from './components/Bookingtable';
import Body from './components/Body';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, 
      children: [
        { index: true, element: <Body /> }, 
        { path: "service", element: <Service /> },
        { path: "bookingtable", element: <Bookingtable /> }, 
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
