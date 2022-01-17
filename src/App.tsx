import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import "./App.css";
import { Footer, Header } from "./components";
import { fetchProducts } from "./store/actions/productsActions";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  });

  useEffect(() => {
    if (location.pathname === "/") navigate("/products");
  });
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <Grid
        container
        spacing={2}
        paddingX={5}
        marginTop={0}
        style={{
          maxHeight: "calc(100% - 157px)",
          overflow: "auto",
          height: "100%",
          flexGrow: "0",
          display: "flex",
        }}
      >
        <Outlet />
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
