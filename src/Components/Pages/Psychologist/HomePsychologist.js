import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Meet from "./Meet/Meet";
import Schedule from "./Schedule/Schedule";
import Call from "./Schedule/Call";

// redux
import { useSelector } from "react-redux";

const HomePsychologist = () => {
  const { psychologist } = useSelector((state) => ({ ...state }));
  console.log("psychologist => ", psychologist);
  const [data, setData] = useState([psychologist]);
  console.log("data => ", data);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/psychologist/index" exact component={Home} />

          <Route path="/psychologist/meet" exact component={Meet} />

          <Route path="/psychologist/schedule" exact component={Schedule} />
          <Route path="/psychologist/call" exact component={Call} />
        </Switch>
      </Router>
    </>
  );
};

export default HomePsychologist;
