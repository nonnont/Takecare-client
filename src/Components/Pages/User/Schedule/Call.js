import React, { useEffect, useContext, useState } from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";
import { FaCommentsDollar } from "react-icons/fa";

import { useLocation } from "react-router-dom";

import { SocketContext } from "../../../../Context";

import { updateIdcall } from "../../../Functions/users";

// redux
import { useSelector } from "react-redux";

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

  const { me, call, answerCall, callAccepted } = useContext(SocketContext);

  const { user } = useSelector((state) => ({ ...state }));
  //   const [data, setData] = useState([user.email]);
  //   console.log("data => ", data);

  useEffect(() => {
    setData(location.state.item);
    if (location.state.item != undefined) {
      setItem(location.state.item);
      updateIdcall(user.token, location.state.item._id, { idcall: me })
        .then((res) => {
          //setSchedule(res.data);
          setId(res.data.idCallPsycho);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
    return () => {
      if (location.state.item != undefined) {
        updateIdcall(user.token, location.state.item._id, { idcall: "" })
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
      <br />
      <br />

      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h4" align="center">
          วิดีโอ คอล
        </Typography>
      </AppBar>
      {item != null ? <VideoPlayer item={item} /> : null}
      {/* <VideoPlayer /> */}
      {id != null ? (
        <Sidebar id={id} data={data}>
          {/* <h5>รหัสโค้ด : {id}</h5>
          <Notifications /> */}
        </Sidebar>
      ) : null}

      {call.isReceivingCall && !callAccepted ? answerCall() : null}
    </div>
  );
};

export default Call;
