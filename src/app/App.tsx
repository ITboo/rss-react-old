import { HashRouter, Route, Routes } from "react-router-dom";

import ErrorBoundary from "./providers/ErrorBoundary";
import { ROUTE } from "./constants/constants";

import MainPage from "../pages/MainPage/MainPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import "./styles/App.css";

function App() {
  return (
    <HashRouter>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path={ROUTE.MAIN} element={<MainPage />} />
          {<Route path={ROUTE.DEFAULT} element={<MainPage />} />}
          <Route path={ROUTE.PAGE} element={<MainPage />} />
          {<Route path={ROUTE.SEARCH} element={<MainPage />} />}
          <Route path={ROUTE.CHARACTER} element={<MainPage />} />
          <Route path={ROUTE.NOTFOUND} element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </HashRouter>
  );
}

export default App;
