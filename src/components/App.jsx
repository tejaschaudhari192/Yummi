import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
// import About from "./About/About";
import Error from "./Error/Error";
import RestaurantMenu from "./RestaurantMenu/RestaurantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
import Cart from "./Cart";

const About = lazy(() => import("./About"))

function AppLayout() {
  const [user, setUser] = useState("Default User");

  useEffect(() => {
    const user = {
      name: "Tejas Chaudhari"
    }
    setUser(user.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: user, setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
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
          },
          {
            path: '/cart',
            element: <Cart />
          }
        ],
      errorElement: <Error />
    }
  ]

);

export default AppLayout;
