import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const PsychologistRoute = ({ Children, ...rest }) => {
  const { psychologist } = useSelector((state) => ({ ...state }));

  return psychologist && psychologist.token ? (
    <Route {...rest} />
  ) : (
    <LoadingToRedirect />
  );
};

export default PsychologistRoute;
