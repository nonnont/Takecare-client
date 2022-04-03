import React, { useState, useEffect } from "react";
import "./Home.css";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

import { getHistoryCall, getCancelCall } from "../../../Functions/users";

// redux
import { useSelector } from "react-redux";

import Chart from "./Chart";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Home() {
  const [history, setHistory] = useState([]);
  const [cancelcall, setCancelcall] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));
  console.log("user => ", user);
  const [data, setData] = useState([user.email]);

  useEffect(() => {
    loadHistory();
    loadCancelcall();
  }, []);

  const loadHistory = () => {
    getHistoryCall(user.token, data)
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const loadCancelcall = () => {
    getCancelCall(user.token, data)
      .then((res) => {
        setCancelcall(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <br />
            <h4>กราฟแสดงคะแนนความเครียด</h4>
            <p>หมายเหตุ: แกน X แทนวันเวลา | แกน Y แทนระดับคะแนนความเครียด</p>
            <p>
              <u>เกณฑ์การกำหนดคะแนนความเครียด</u>
            </p>

            <ul>
              <li>คะแนน 0-4 เครียดน้อย หรือไม่เครียดเลย</li>
              <li>คะแนน 5-7 เครียดปานกลาง</li>
              <li>คะแนน 8-9 เครียดมาก</li>
              <li>คะแนน 10-15 เครียดมากที่สุด</li>
            </ul>
            <br />
            <p>แหล่งอ้างอิง: กรมสุขภาพจิต กระทรวงสาธารณสุข</p>
            <Chart />
            <br />
            <br />
            <h4>ประวัติการนัด</h4>
            <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>วันที่</th>
                  <th>เวลานัด (นาฬิกา)</th>
                  <th>ระยะเวลาในการคุย (นาที)</th>
                  <th>อัตราค่าบริการ (บาท)</th>
                  <th>ชื่อ-นามสกุล</th>
                  <th>อีเมล์</th>
                  <th>เบอร์โทร</th>

                  <th>รายละเอียดในการคุย</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, index) => (
                  <tr>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.period}</td>
                    <td>{item.price}</td>
                    <td>
                      {item.namePsycho} {item.lassnamePsycho}
                    </td>
                    <td>{item.emailPsycho}</td>
                    <td>{item.telephonePsycho}</td>

                    <td>{item.datail}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <div>
              <br />
              <br />
              <br />
              <h4>ประวัติการยกเลิกนัด</h4>
              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>วันที่</th>
                    <th>เวลานัด (นาฬิกา)</th>
                    <th>ระยะเวลาในการคุย (นาที)</th>
                    <th>อัตราค่าบริการ (บาท)</th>
                    <th>ชื่อ-นามสกุล</th>
                    <th>อีเมล์</th>
                    <th>เบอร์โทร</th>
                  </tr>
                </thead>
                <tbody>
                  {cancelcall.map((item, index) => (
                    <tr>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>{item.period}</td>
                      <td>{item.price}</td>
                      <td>
                        {item.namePsycho} {item.lassnamePsycho}
                      </td>
                      <td>{item.emailPsycho}</td>
                      <td>{item.telephonePsycho}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
