import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { LoginPage } from './pages/LoginPage';
import { TripPage } from './pages/TripPage';
import { ExplorePage } from './pages/ExplorePage';
import { Login } from './Login';
import { TravelPlan } from './TravelPlan';
import { CountryPage } from './pages/CountryPage/Country';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to='/login' replace />
  },
  {
    path: "/login",
    element: <Login /> 
  },
  {
    path: "/travelplan",
    element: <TravelPlan />
  },
  {
    path: "/explore/:country",
    element: <ExplorePage />
  },
  {
    path: "/chooseCountry",
    element: <CountryPage />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
