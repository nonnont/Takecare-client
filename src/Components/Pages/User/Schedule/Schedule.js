import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { getMeet, addCancelCall, removeMeet } from "../../../Functions/users";

// redux
import { useSelector } from "react-redux";
import Call from "./Call";

// video call
import { SocketContext } from "../../../../Context";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  console.log("schedule", schedule);

  const { user } = useSelector((state) => ({ ...state }));
  const [data, setData] = useState([user.email]);
  console.log("data => ", data);

  const { callUser, setName } = useContext(SocketContext);

  useEffect(() => {
    loadMeet();
    setName(user.name + " " + user.lassname);
  }, []);

  const loadMeet = async (email) => {
    await getMeet(user.token, data[0])
      .then((res) => {
        setSchedule(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const cancelCall = (item) => {
    console.log("item", item);
    const cancelcallData = {
      namePsycho: item.namePsycho,
      lassnamePsycho: item.lassnamePsycho,
      emailPsycho: item.emailPsycho,
      telephonePsycho: item.telephonePsycho,
      date: item.date,
      time: item.time,
      period: item.period,
      price: item.price,
      nameUser: item.nameUser,
      lassnameUser: item.lassnameUser,
      emailUser: item.emailUser,
    };

    addCancelCall(cancelcallData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    // console.log(market._id);
    removeMeet(item._id)
      .then((res) => {
        console.log(res.data);
        loadMeet();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Container>
          <Row>
            <h4>ตารางนัด</h4>
            <br />
            <br />
            <br />
            {schedule.map((item, index) => (
              <Col sm={4}>
                <Card sx={{ maxWidth: 400, maxHeight: 500 }}>
                  <CardActionArea>
                    {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  /> */}
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.namePsycho} {item.lassnamePsycho}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <div>
                          <p>
                            อีเมล : {item.emailPsycho}
                            <br />
                            เบอร์โทร : {item.telephonePsycho}
                            <br />
                            วันที่นัด : {item.date}
                            <br />
                            เวลา : {item.time} นาฬิกา
                            <br />
                            ระยะเวลาในการคุย : {item.period} นาที
                            <br />
                            อัตราค่าบริการ : {item.price} บาท
                          </p>
                          <hr />
                        </div>
                      </Typography>
                      <Link
                        to={{ pathname: "/user/call", state: { item: item } }}
                      >
                        <Button
                          // onClick={() => callUser(item.idCallPsycho)}
                          style={{ width: "50%", marginRight: "1%" }}
                        >
                          โทร
                        </Button>
                      </Link>

                      <Button
                        onClick={() => cancelCall(item)}
                        variant="secondary"
                        // onClick={() => callUser(item.idCallUser)}
                        style={{ width: "49%" }}
                      >
                        ยกเลิกนัด
                      </Button>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <br />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Schedule;
