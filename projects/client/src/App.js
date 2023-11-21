import "./App.css";
import routes from "./routes/routes";
import { Routes } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Toaster } from "react-hot-toast";
//socket
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import io from "socket.io-client";
import audioNotif from "./assets/audionotif.mp3";
import { useEffect } from "react";
const userToken = Cookies.get("user_token");
let socket;
if (userToken) {
  socket = io("http://localhost:8000", {
    query: { userToken },
  });
}
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
