import { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';
import { Bounce, ToastContainer } from 'react-toastify';
import HomePage from './components/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path='/' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/homePage' element={<HomePage />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
