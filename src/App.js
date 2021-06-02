import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { QueryClient, QueryClientProvider } from "react-query";
import { actionTypes, useStateValue } from "./store";
import { useCookies } from "react-cookie";

const queryClient = new QueryClient();
const App = () => {
  const [cookie] = useCookies(["jwt"]);
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const setToken = () => {
      const { jwt } = cookie;
      if (jwt) {
        dispatch({ type: actionTypes.SET_TOKEN, value: jwt });
      }
    };
    if (token === null) {
      setToken();
    }
  }, [dispatch, token, cookie]);

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route path="/" exact={true}>
              {token ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {!token ? <Login /> : <Redirect to="/" />}
            </Route>
            <Route path="/signup">
              {!token ? <Signup /> : <Redirect to="/" />}
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
