import "./App.css";
import { useEffect, useState } from "react";
import routes from "./routes/routes";
import { Routes } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <NextUIProvider>
          <Nav />
          <Routes>{routes.map((value) => value)}</Routes>
          <Footer />
        </NextUIProvider>
      </Provider>
    </>
  );
}

export default App;
