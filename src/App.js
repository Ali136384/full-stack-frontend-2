import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Gigs from "./pages/gigs/Gigs.jsx";
import Gig from "./pages/gig/Gig.jsx";
import Add from "./pages/add/Add.jsx";
import Orders from "./pages/orders/Orders.jsx";
import Mygigs from "./pages/myGigs/Mygigs.jsx";
import Message from "./pages/message/Message.jsx";
import Messages from "./pages/messages/Messages.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
function App() {
  const Layout = () => {
    return (
      <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/gigs",
          element: <Gigs></Gigs>,
        },
        {
          path: "/gig/:id",
          element: <Gig></Gig>,
        },
        {
          path: "/orders",
          element: <Orders></Orders>,
        },
        {
          path: "/mygigs",
          element: <Mygigs></Mygigs>,
        },
        {
          path: "/add",
          element: <Add></Add>,
        },
        {
          path: "/messages",
          element: <Messages></Messages>,
        },
        {
          path: "/message/:id",
          element: <Message></Message>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
