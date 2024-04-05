import "./reset.css";
import "@mantine/core/styles.css";
import "./App.scss";

// Fonts
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

// Mantine
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

// Router
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

// Pages
import { Dashboard } from "./features/Dashboard";
import { useAppStoreKey } from "./stores/main";
import { useEffect } from "react";
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";
import { NotFound } from "./NotFound";
import { Landing } from "./features/landing/Landing";

function Root() {
  const token = useAppStoreKey("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/login");
    else navigate("/dashboard");
  }, [token]);

  return undefined;
}

function Logout() {
  const navigate = useNavigate();
  const clearToken = useAppStoreKey("clearToken");

  useEffect(() => {
    clearToken();
    setTimeout(() => navigate("/login"), 0);
  }, []);

  return null;
}

// const Landing = () => "Landing";

export function App() {
  return (
    <MantineProvider defaultColorScheme='light' theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' Component={Scratch} /> */}
          <Route path='/' Component={Landing} />
          <Route path='/app' Component={Root} />
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/logout' Component={Logout} />
          <Route path='/login' Component={Login} />
          <Route path='/signup' Component={SignUp} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
