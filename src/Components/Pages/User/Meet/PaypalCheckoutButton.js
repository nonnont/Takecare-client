import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

import { removeMarket, addMeet } from "../../../Functions/users";

import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

const PaypalCheckoutButton = ({ market }) => {
  const history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));

  const onMeet = (market) => {
    console.log("market 2", market);
    const meet = {
      namePsycho: market.name,
      lassnamePsycho: market.lassname,
      emailPsycho: market.email,
      telephonePsycho: market.telephone,
      date: market.date,
      time: market.time,
      period: market.period,
      price: market.price,
      nameUser: user.name,
      lassnameUser: user.lassname,
      emailUser: user.email,
    };
    addMeet(user.token, meet)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    console.log(market._id);
    removeMarket(market._id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onSuccess = (payment, market) => {
    console.log("The payment was succeeded!", payment);
    onMeet(market);
    history.push("/user/schedule");
  };

  const onCancel = (data) => {
    console.log("The payment was cancelled!", data);
  };

  const onError = (err) => {
    console.log("Error", err);
  };

  let env = "sandbox";
  let currency = "THB";
  let total = market.price;

  console.log("market price", market.price);

  const client = {
    sandbox:
      "AeaHKu63ljD5IWVLcB2c1sEOwHch8KI7IBYrvidxAe0nvelLsVVej_cg6ygHUxHbIXr82-SMnkKCu1PA",
  };
  return (
    <PaypalExpressBtn
      env={env}
      client={client}
      currency={currency}
      total={total}
      onError={onError}
      onSuccess={(payment) => onSuccess(payment, market)}
      onCancel={onCancel}
    />
  );
};

export default PaypalCheckoutButton;
