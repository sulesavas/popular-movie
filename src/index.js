
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PopularMovies from "./pages/PopularMovies";
import MovieDetail from "pages/MovieDetail";
import Home from "pages/Home"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar";
import NewMovies from "pages/NewMovies";
import { Preview } from "@mui/icons-material";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      {/* react-router-dom indirerek uygulamaya sayfa ekleme özelliği getirdik. */}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* routes sayesinde sayfaların yolu belirtilir.*/}
        <Route path="/popularmovies" element={<PopularMovies preview={false} />} />{" "}
        <Route path="detail/:id" element={<MovieDetail />} />
        <Route path="/newmovies" element={<NewMovies preview={false} />} /> {" "}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
