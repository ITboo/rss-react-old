import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import HomePage from "../pages/HomePage/HomePage";

import ErrorBoundary from "./providers/ErrorBoundary";

import "./styles/App.css";

function App() {
  return (
    <ErrorBoundary>
      <Header />
      <HomePage />
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
