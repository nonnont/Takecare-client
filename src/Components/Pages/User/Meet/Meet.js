import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pay from "./Pay";

import { Container, Row, Col, Button } from "react-bootstrap";

// mui style
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// import "./Meet.css";

// redux
import { useSelector } from "react-redux";

// function
import { getMarket, getScore } from "../../../Functions/users";

const Market = () => {
  const [score, setScore] = useState([]);
  console.log("score", score);

  const [market, setMarket] = useState([]);
  console.log("market", market);

  const [chooseMarket, setchooseMarket] = useState("");

  const [meet, setMeet] = useState({
    date: "",
    time: "",
  });
  console.log("meet", meet);

  // const addMeet = (e) => {
  //   setMeet({
  //     ...meet,
  //     date: dates,
  //     time: time,
  //     // period: period,
  //     // price: price,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const [date, setDate] = React.useState(null);
  // const [time, setTime] = React.useState("");

  // var dates = new Date(date);
  // dates = dates.toLocaleDateString("en-GB");

  const { user } = useSelector((state) => ({ ...state }));

  const [data, setData] = useState([user.email]);
  console.log("data => ", data);

  useEffect(() => {
    loadScore();

    // loadMarket();
  }, []);

  const loadScore = (email) => {
    getScore(user.token, data[0])
      .then((res) => {
        setScore(res.data);
        console.log(
          "score to reccom",
          res.data.id,
          res.data.score_stress,
          res.data.score_depression,
          res.data.score_suicide
        );
        getMarket(
          user.token,
          res.data.score_stress,
          res.data.score_depression,
          res.data.score_suicide
        )
          .then((res) => {
            setMarket(res.data);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  // const loadMarket = () => {
  //   console.log("lf;rlf'wlf'pw", user.score_stress);
  //   getMarket(user.token, user.score_stress)
  //     .then((res) => {
  //       setMarket(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // };

  const [showRegisterUser, setShowRegisterUser] = useState(false);
  const openRegisterUser = () => {
    setShowRegisterUser((prev) => !prev);
  };

  const onclickPayment = (item) => {
    console.log("item", item);
    setchooseMarket(item);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div>
        <br />
        <Container>
          <Row>
            <h4>เลือกนักจิตวิทยา</h4>
            <br />
            <br />
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Col>
                <FormControl fullWidth>
                  <DatePicker
                    inputFormat="dd/MM/yyyy"
                    label="เลือกวันที่"
                    value={date}
                    name="date"
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </Col>

              <Col>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">เวลานัด</InputLabel>
                  <Select
                    value={time}
                    label="time"
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                  >
                    <MenuItem value={"01:00"}>01:00 นาฬิกา</MenuItem>
                    <MenuItem value={"02:00"}>02:00 นาฬิกา</MenuItem>
                    <MenuItem value={"03:00"}>03:00 นาฬิกา</MenuItem>
                    <MenuItem value={"04:00"}>04:00 นาฬิกา</MenuItem>
                    <MenuItem value={"05:00"}>05:00 นาฬิกา</MenuItem>
                    <MenuItem value={"06:00"}>06:00 นาฬิกา</MenuItem>
                    <MenuItem value={"07:00"}>07:00 นาฬิกา</MenuItem>
                    <MenuItem value={"08:00"}>08:00 นาฬิกา</MenuItem>
                    <MenuItem value={"09:00"}>09:00 นาฬิกา</MenuItem>
                    <MenuItem value={"10:00"}>10:00 นาฬิกา</MenuItem>
                    <MenuItem value={"11:00"}>11:00 นาฬิกา</MenuItem>
                    <MenuItem value={"12:00"}>12:00 นาฬิกา</MenuItem>
                    <MenuItem value={"13:00"}>13:00 นาฬิกา</MenuItem>
                    <MenuItem value={"14:00"}>14:00 นาฬิกา</MenuItem>
                    <MenuItem value={"15:00"}>15:00 นาฬิกา</MenuItem>
                    <MenuItem value={"16:00"}>16:00 นาฬิกา</MenuItem>
                    <MenuItem value={"17:00"}>17:00 นาฬิกา</MenuItem>
                    <MenuItem value={"18:00"}>18:00 นาฬิกา</MenuItem>
                    <MenuItem value={"19:00"}>19:00 นาฬิกา</MenuItem>
                    <MenuItem value={"20:00"}>20:00 นาฬิกา</MenuItem>
                    <MenuItem value={"21:00"}>21:00 นาฬิกา</MenuItem>
                    <MenuItem value={"22:00"}>22:00 นาฬิกา</MenuItem>
                    <MenuItem value={"23:00"}>23:00 นาฬิกา</MenuItem>
                    <MenuItem value={"24:00"}>24:00 นาฬิกา</MenuItem>
                  </Select>
                </FormControl>
              </Col>
            </LocalizationProvider> */}
          </Row>
        </Container>

        <br />
        <br />
        <br />
        <Container>
          <Row>
            {market.map((item, index) => (
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
                        {item.name} {item.lassname}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <div>
                          <p>
                            วันที่นัด : {item.date} <br />
                            เวลา : {item.time} นาฬิกา
                            <br />
                            ระยะเวลาในการคุย : {item.period} นาที
                            <br />
                            อัตราค่าบริการ : {item.price} บาท
                          </p>
                          <hr />
                          <b>ความชำนาญเฉพาะด้าน</b>
                          <p>
                            {item.expert[0]} <br /> {item.expert[1]} <br />{" "}
                            {item.expert[2]}
                          </p>
                          <b>ประวัติการศึกษา</b>
                          <p>{item.education}</p>
                          <b>อีเมล</b>
                          <p>{item.email}</p>
                          <b>เบอร์โทรศัพท์</b>
                          <p>{item.telephone}</p>
                        </div>
                      </Typography>
                      <Link to="#" onClick={openRegisterUser}>
                        <Button
                          style={{ width: "100%" }}
                          onClick={() => onclickPayment(item)}
                        >
                          เลือก
                        </Button>
                      </Link>
                      <Pay
                        showRegisterUser={showRegisterUser}
                        setShowRegisterUser={setShowRegisterUser}
                        market={chooseMarket}
                      />
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

export default Market;
