import React, { useEffect, useState } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { Container, Row, Col } from "react-bootstrap";
// import DatePicker from "react-date-picker";

// mui style
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Table } from "react-bootstrap";
import "./Meet.css";
import { FaTrash } from "react-icons/fa";

// redux
import { useSelector } from "react-redux";

// function
import {
  getDataPsychologist,
  postMarket,
  getMarket,
  removeMarket,
} from "../../../Functions/psychologist";

import Swal from "sweetalert2";

const Meet = () => {
  const [record, setRecord] = useState("");
  const [market, setMarket] = useState([]);
  console.log("market", market);

  const [meet, setMeet] = useState({
    name: "",
    lassname: "",
    expert: "",
    education: "",
    email: "",
    telephone: "",
    date: "",
    time: "",
    period: "",
    price: "",
  });
  console.log("meet", meet);

  const addMeet = (e) => {
    setMeet({
      ...meet,
      name: record.name,
      lassname: record.lassname,
      expert: record.expert,
      education: record.education,
      email: record.email,
      telephone: record.telephone,

      date: dates,
      time: time,
      // period: period,
      // price: price,
      [e.target.name]: e.target.value,
    });
  };

  const [date, setDate] = React.useState(null);
  const [time, setTime] = React.useState("");
  const [period, setPeriod] = React.useState("");
  const [price, setPrice] = React.useState("");

  var dates = new Date(date);
  dates = dates.toLocaleDateString("en-GB");

  console.log(dates);
  console.log(time);
  console.log(period);
  console.log(price);

  const { psychologist } = useSelector((state) => ({ ...state }));
  console.log("psychologist => ", psychologist);
  const [data, setData] = useState([psychologist.email]);
  // console.log("data => ", data);

  useEffect(() => {
    loadData();
    loadMarket();
  }, []);

  const loadData = () => {
    getDataPsychologist(psychologist.token, data)
      .then((res) => {
        setRecord(res.data[0]);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const loadMarket = () => {
    getMarket(psychologist.token, data)
      .then((res) => {
        setMarket(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const addMeetMarket = () => {
    postMarket(psychologist.token, meet)
      .then((res) => {
        console.log(res.data);
        loadMarket();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleRemove = (id) => {
    Swal.fire({
      title: "คุณแน่ใจหรือไม่ ?",
      text: "ที่จะลบการนัดหมายนี้",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ลบ",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "ลบเรียบร้อย!",
          showConfirmButton: false,
          timer: 1500,
        });
        removeMarket(psychologist.token, id)
          .then((res) => {
            console.log(res.data);
            loadMarket();
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    });
  };

  return (
    <>
      <div>
        <br />
        <Container>
          <Row>
            <Col>
              {/* <CalendarState>
              <Header />
              <Calendar />
              <TaskForm />
            </CalendarState> */}
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <h4>สร้างการนัด</h4>
                <br />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
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

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      เวลานัด
                    </InputLabel>
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

                  {/* <TimePicker
                    label="เลือกเวลา"
                    value={time}
                    onChange={(newValue) => {
                      setTime(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  /> */}
                </LocalizationProvider>

                <TextField
                  id="timeCall"
                  label="ระยะเวลาในการคุย (นาที)"
                  variant="outlined"
                  name="period"
                  onChange={addMeet}
                  // onChange={(e) => {
                  //   setPeriod(e.target.value);
                  // }}
                />

                <TextField
                  id="price"
                  label="อัตราค่าบริการ"
                  variant="outlined"
                  name="price"
                  onChange={addMeet}
                />

                <Button
                  onClick={addMeetMarket}
                  variant="contained"
                  color="success"
                >
                  เพิ่มการนัด
                </Button>
              </Box>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col>
              <h4>ตารางนัดในตลาด</h4>
              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ลบการนัด</th>
                    <th>วันที่</th>
                    <th>เวลานัด (นาฬิกา)</th>
                    <th>ระยะเวลาในการคุย (นาที)</th>
                    <th>อัตราค่าบริการ (บาท)</th>
                  </tr>
                </thead>
                <tbody>
                  {market.map((item, index) => (
                    <tr>
                      <td>
                        <FaTrash
                          className="fatrash"
                          onClick={() => handleRemove(item._id)}
                        />
                      </td>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>{item.period}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Meet;
