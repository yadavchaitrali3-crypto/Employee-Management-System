import React from "react";
import { BrowserRouter } from "react-router-dom";
import PeopleDirectory from "./pages/PeopleDirectory";

const App = () => {
  return (
    <BrowserRouter>
      <PeopleDirectory />
    </BrowserRouter>
  );
};

export default App;