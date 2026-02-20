import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import './pages/pageStyles.scss'
import './pages/panelex.scss'
import './primary.scss';
import { Route, Router, RouterProvider, createBrowserRouter, matchPath, useLocation } from 'react-router-dom';
import RouteHandler, { router } from './router/router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScrollTop from './components/ScrollTop';
import './responsive.scss';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  useEffect
    (() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, [location.pathname]);



  return (
    <>
      {loading && <Loader />}
      <ScrollTop />
      <Header />
      <RouteHandler />
      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </>

  );
}

export default App;
