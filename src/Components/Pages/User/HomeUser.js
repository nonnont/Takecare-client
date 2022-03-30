import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./HomeUser.css";

// pages
import Home from "./Home/Home";
import Quiz from "./Quiz/quiz";
import Activity from "./Activity/Activity";
import Meditate from "./Activity/Meditate/Meditate";
import Notebook from "./Activity/Notebook/Notebook";
import Massage from "./Activity/Massage/Massage";
import Meet from "./Meet/Meet";
import Schedule from "./Schedule/Schedule";
import Call from "./Schedule/Call";

// redux
import { useSelector } from "react-redux";

const HomeUser = () => {
  const { user } = useSelector((state) => ({ ...state }));
  console.log("user => ", user);
  const [data, setData] = useState([user.email]);
  console.log("data => ", data);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/user/index" exact component={Home} />

          <Route path="/user/quiz" exact component={Quiz} />

          <Route path="/user/activity" exact component={Activity} />
          <Route path="/user/activity/meditate" exact component={Meditate} />
          <Route path="/user/activity/notebook" exact component={Notebook} />
          <Route path="/user/activity/massage" exact component={Massage} />

          <Route path="/user/meet" exact component={Meet} />

          <Route path="/user/schedule" exact component={Schedule} />
          <Route path="/user/call" exact component={Call} />
        </Switch>
      </Router>
    </>
  );
};

export default HomeUser;
