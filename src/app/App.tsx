import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

import ErrorBoundary from "./providers/ErrorBoundary";

import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="404" element={<NotFoundPage />} />
        </Routes>
        <Outlet />
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
