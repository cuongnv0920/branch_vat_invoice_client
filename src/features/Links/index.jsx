import React from "react";
import { Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
Link.propTypes = {};

function Link(props) {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default Link;
