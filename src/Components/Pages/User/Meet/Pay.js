import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import PaypalBtn from "react-paypal-checkout";
import { Link } from "react-router-dom";

// paypal
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

// function
import { removeMarket, addMeet } from "../../../Functions/users";

// redux
import { useSelector } from "react-redux";

const Pay = ({ showRegisterUser, setShowRegisterUser, market }) => {
  const [total, setTotal] = useState([]);
  console.log("total", total);
  const handleClose = () => setShowRegisterUser(false);

  const { user } = useSelector((state) => ({ ...state }));
  const [data, setData] = useState([user.email]);
  console.log("data => ", data);

  console.log("user 333", user);

  console.log("market =>", market);

  // const [meet, setMeet] = useState({
  //   namePsycho: market.name,
  //   lassnamePsycho: market.lassname,
  //   emailPsycho: market.email,
  //   telephonePsycho: market.telephone,
  //   date: market.date,
  //   time: market.time,
  //   period: market.period,
  //   price: market.price,
  // });

  //setTotal(market);

  // console.log("meet", meet);

  // const client = {
  //   sandbox: "YOUR-SANDBOX-APP-ID",
  //   production: "YOUR-PRODUCTION-APP-ID",
  // };

  // const product = {
  //   description: "Design+Code React Hooks Course",
  //   price: 20,
  // };

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

  return (
    <>
      {/* <PayPalScriptProvider
        options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
      > */}
      <div>
        <Modal
          show={showRegisterUser}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
        >
          <Modal.Header closeButton>
            <h5 className="title">ตรวจสอบรายละเอียด</h5>
          </Modal.Header>

          <Modal.Body>
            <p>
              ชื่อนักจิตวิทยา : {market.name} {market.lassname}
            </p>
            <p>วันที่นัด : {market.date}</p>
            <p>เวลา : {market.time}</p>
            <p>ระยะเวลาในการคุย : {market.period}</p>
            <p>ราคา : {market.price}</p>
            <hr />
            {/* <b>ชำระเงิน</b> */}
            <br />
            <br />
            {/* <PaypalBtn client={client} currency={"USD"} total={1.0} /> */}

            <div className="paypal-button-container">
              <Link to="/user/schedule">
                {/* <PaypalCheckoutButton total={market.price} market={market} /> */}
                <br />
                <Button onClick={() => onMeet(market)}>นัดนักจิตวิทยา</Button>
              </Link>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      {/* </PayPalScriptProvider> */}
    </>
  );
};

export default Pay;
