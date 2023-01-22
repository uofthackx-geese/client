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
import { Login } from './Login';
import { TravelPlan } from './TravelPlan';
import { CountryPage } from './pages/CountryPage/Country';

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
    element: <Login />  // LoginPage
  },
  // {
  //   path: "/trip",
  //   element: <TripPage />
  // },
  {
    path: "/travelplan",
    element: <TravelPlan />
  },
  {
    path: "/explore",
    element: <ExplorePage />
  },
  {
    path: "/chooseCountry",
    element: <CountryPage />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
