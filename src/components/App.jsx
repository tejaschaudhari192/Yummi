import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
// import About from "./About/About";
import Error from "./Error/Error";
import RestaurantMenu from "./RestaurantMenu/RestaurantMenu";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./About/About"))

function AppLayout() {
  return (
    <div >
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children:
        [
          {
            path: '/',
            element: <Body />
          },
          {
            path: '/about',
            element: <Suspense fallback={<h1>Loading...</h1>}>
              <About />
            </Suspense >
          },
          {
            path: '/contact',
            element: <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense > 
          },
          {
            path: '/restaurants/:resId',
            element: <RestaurantMenu />
          }
        ],
      errorElement: <Error />
    }
  ]

);

export default AppLayout;
