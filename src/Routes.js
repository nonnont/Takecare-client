// React
import React from "react";

// Route
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages Index
import App from "./App";
import LoginPsychologist from "./Components/Pages/Auth/LoginPsychologist/LoginPsychologist";

// Pages Admin
import HomeAdmin from "./Components/Pages/Admin/HomeAdmin";

// Pages User
import HomeUser from "./Components/Pages/User/HomeUser";

// Function
import { currentUser } from "./Components/Functions/auth";
import { currentPsychologist } from "./Components/Functions/auth";

// Redux
import { useDispatch } from "react-redux";

// Routes
import UserRoute from "./Components/Route/UserRoute";
import AdminRoute from "./Components/Route/AdminRoute";

import PsychologistRoute from "./Components/Route/PsychologistRoute";
import HomePsychologist from "./Components/Pages/Psychologist/HomePsychologist";
import Activity from "./Components/Pages/User/Activity/Activity";

const Routes = () => {
  const dispatch = useDispatch();

  // ดึง token จาก localStorage มาเก็บไว้ที่ server
  const idtoken = localStorage.token;
  if (idtoken) {
    currentUser(idtoken)
      .then((res) => {
        // code
        console.log(res);
        // send to Redux
        dispatch({
          type: "LOGIN",
          payload: {
            token: idtoken,
            _id: res.data._id,
            email: res.data.email,
            role: res.data.role,
            name: res.data.name,
            lassname: res.data.lassname,
            score_stress: res.data.score_stress,
            score_depression: res.data.score_depression,
            score_suicide: res.data.score_suicide,
          },
        });
      })
      .catch((err) => {
        //err
        console.log(err);
      });

    currentPsychologist(idtoken)
      .then((res) => {
        // code
        console.log(res);
        // send to Redux
        dispatch({
          type: "LOGIN_PSYCHO",
          payload: {
            _id: res.data._id,
            token: idtoken,
            email: res.data.email,
            role: res.data.role,
            name: res.data.name,
            lassname: res.data.lassname,
          },
        });
      })
      .catch((err) => {
        //err
        console.log(err);
      });
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/psychologist/login" component={LoginPsychologist} />

        <AdminRoute exact path="/admin/index" component={HomeAdmin} />

        <UserRoute exact path="/user/index" component={HomeUser} />
        {/* <UserRoute exact path="/user/activity" component={Activity} /> */}

        <PsychologistRoute
          exact
          path="/psychologist/index"
          component={HomePsychologist}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
