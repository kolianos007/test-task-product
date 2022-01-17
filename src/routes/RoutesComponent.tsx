import React from "react";
import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import { routes } from "./routes";

const RoutesComponent: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {routes.map(({ name, Component, path }) => {
            return <Route path={path} element={<Component />} key={name} />;
          })}
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
