import "./App.css";
import { useEffect, useState } from "react";
import routes from "./routes/routes";
import { Routes } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="max-w-[1920px] container">
      <Provider store={store}>
        <Nav />
        <Routes>{routes.map((value) => value)}</Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
