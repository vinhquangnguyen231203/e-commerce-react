import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Speed Insight vercel
import { SpeedInsights } from "@vercel/speed-insights/react";

// Toast
import "react-toastify/dist/ReactToastify.css";
import { Flip, ToastContainer } from "react-toastify";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition= {Flip}
      />
      <SpeedInsights />
    </Provider>
  </React.StrictMode>
);
