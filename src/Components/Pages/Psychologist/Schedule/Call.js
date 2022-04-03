import React, { useEffect, useContext, useState } from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";
import { FaCommentsDollar } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import { SocketContext } from "../../../../Context";

import { updateIdcall } from "../../../Functions/psychologist";

// redux
import { useSelector } from "react-redux";

import { Form, FloatingLabel } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const Call = () => {
  const [data, setData] = useState("");
  const [id, setId] = useState(null);
  const [item, setItem] = useState(null);
  const location = useLocation();
  const classes = useStyles();

  const [datail, setDatail] = useState("");

  const handleChange = (e) => {
    setDatail(e.target.value);
  };
  console.log(datail);

  const { me, call, answerCall, callAccepted } = useContext(SocketContext);

  const { psychologist } = useSelector((state) => ({ ...state }));
  //   const [data, setData] = useState([psychologist.email]);
  //   console.log("data => ", data);

  useEffect(() => {
    console.log(location.state.item);
    setData(location.state.item);
    if (location.state.item != undefined) {
      setItem(location.state.item);
      updateIdcall(psychologist.token, location.state.item._id, { idcall: me })
        .then((res) => {
          //setSchedule(res.data);
          setId(res.data.idCallUser);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
    return () => {
      if (location.state.item != undefined) {
        updateIdcall(psychologist.token, location.state.item._id, {
          idcall: "",
        })
          .then((res) => {
            //setSchedule(res.data);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h4" align="center">
          วิดีโอ คอล
        </Typography>
      </AppBar>
      {item != null ? <VideoPlayer item={item} data={data} /> : null}
      {/* <VideoPlayer /> */}
      {id != null ? (
        <Sidebar id={id} data={data} datail={datail}>
          {/* <h5>รหัสโค้ด : {id}</h5>
          <Notifications /> */}
        </Sidebar>
      ) : null}

      {call.isReceivingCall && !callAccepted ? answerCall() : null}

      <Form.Group className="mb-3" controlId="formEducation">
        <Form.Label>
          <b>รายละเอียดในการคุย</b>
        </Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label="กรอกรายละเอียด">
          <Form.Control
            onChange={handleChange}
            name="education"
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "200px", width: "600px" }}
          />
        </FloatingLabel>
      </Form.Group>
    </div>
  );
};

export default Call;
