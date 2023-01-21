import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Demo } from './Demo'
import { LoginPage } from './pages/LoginPage';
import { TripPage } from './pages/TripPage';
import { ExplorePage } from './pages/ExplorePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/route1",
    element: <Demo />
  },
  // Actual paths:
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/trip",
    element: <TripPage />
  },
  {
    path: "/explore",
    element: <ExplorePage />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
