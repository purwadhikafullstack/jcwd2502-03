import "./App.css";
import routes from "./routes/routes";
import { Routes } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Provider store={store}>
        <Nav />
        <Routes>{routes.map((value) => value)}</Routes>
        <Footer />
        <Toaster position="top-center" />
      </Provider>
    </>
  );
}

export default App;
