import React, { useState, useEffect } from "react";
import "./Home.css";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

import { getHistoryCall, getCancelCall } from "../../../Functions/psychologist";

// redux
import { useSelector } from "react-redux";

function Home() {
  const [history, setHistory] = useState([]);
  const [cancelcall, setCancelcall] = useState([]);

  const { psychologist } = useSelector((state) => ({ ...state }));
  console.log("psychologist => ", psychologist);
  const [data, setData] = useState([psychologist.email]);

  useEffect(() => {
    loadHistory();
    loadCancelcall();
  }, []);

  const loadHistory = () => {
    getHistoryCall(psychologist.token, data)
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const loadCancelcall = () => {
    getCancelCall(psychologist.token, data)
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
                      {item.nameUser} {item.lassnameUser}
                    </td>
                    <td>{item.emailUser}</td>
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
                        {item.nameUser} {item.lassnameUser}
                      </td>
                      <td>{item.emailUser}</td>
                      <td>{item.telephoneUser}</td>
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
