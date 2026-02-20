import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import './pages/pageStyles.scss'
import './primary.scss';
import { Route, Router, RouterProvider, createBrowserRouter, matchPath, useLocation } from 'react-router-dom';
import RouteHandler, { router } from './router/router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import ScrollTop from './components/ScrollTop';
import './responsive.scss';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import PHeader from './components/header/PHeader';
import PFooter from './components/footer/PFooter';
function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  useEffect
    (() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, [location.pathname]);

  const panelexRoutes = ['/panelex', '/panelex/about', '/panelex/mission', '/panelex/products', '/panelex/contact', '/panelex/product-details/:id']
  const isPanelexRoute = panelexRoutes.some(route =>
    matchPath({ path: route, end: true }, location.pathname)
  );

  return (
    <>
      {loading && <Loader />}
      <ScrollTop />
      {isPanelexRoute ? (<PHeader />) : location.pathname !== '/' ? (<Header />) : null}
      <RouteHandler />
      {isPanelexRoute ? (<PFooter />) : location.pathname !== '/' ? (<Footer />) : null}

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
