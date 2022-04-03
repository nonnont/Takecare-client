import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { postAverageScore } from "../../../Functions/users";

// style
import "./Activity.css";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
} from "react-bootstrap";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// redux
import { useSelector } from "react-redux";

// function
import { getScore } from "../../../Functions/users";

// images
import meditate from "./activity-meditate.jpg";
import notebook from "./activity-notebook.jpg";
import eat from "./activity-eat.jpg";
import massage from "./activity-massage.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const submit = {
  width: "100%",
};

const Activity = () => {
  const [percen, setPercen] = useState("");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);

  // (คะแนนที่ได้ * 100 / คะแนนเต็ม) = %
  // const sum = ((count1 + count2 + count3) * 100) / 9;
  // console.log("sum", sum);

  const score2 = count1 + count2 + count3 + count4 + count5;
  console.log("score 2 = ", score2);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState([]);
  const [result1, setResult1] = useState([]);
  const [result2, setResult2] = useState([]);
  const [result3, setResult3] = useState([]);

  const [recommend1, setRecommend1] = useState([]);
  const [recommend2, setRecommend2] = useState([]);
  const [recommend3, setRecommend3] = useState([]);

  const checkStress = (res) => {
    if (res.score_stress <= 4) {
      setResult1("เครียดน้อย หรือไม่เครียดเลย");
    } else if (res.score_stress <= 7) {
      setResult1("เครียดปานกลาง");
    } else if (res.score_stress <= 9) {
      setResult1("เครียดมาก");
    } else if (res.score_stress <= 15) {
      setResult1("เครียดมากที่สุด");
    }
  };

  const checkDepression = (res) => {
    if (res.score_depression <= 6) {
      setResult2("ไม่มีอาการ หรือมีอาการน้อยมาก");
    } else if (res.score_depression <= 12) {
      setResult2("น้อย");
    } else if (res.score_depression <= 18) {
      setResult2("ปานกลาง");
    } else if (res.score_depression <= 27) {
      setResult2("รุนแรง");
    }
  };

  const checkSuicide = (res) => {
    if (res.score_suicide == 0) {
      setResult3("ไม่มีแนวโน้มจะฆ่าตัวตายในปัจจุบัน ");
    } else if (res.score_suicide <= 8) {
      setResult3("น้อย");
    } else if (res.score_suicide <= 16) {
      setResult3("ปานกลาง");
    } else if (res.score_suicide <= 52) {
      setResult3("รุนแรง");
    }
  };

  const { user } = useSelector((state) => ({ ...state }));

  const [data, setData] = useState([user.email]);
  console.log("data => ", data);

  useEffect(() => {
    loadData();
    // set();
  }, []);

  // const set = () => {
  //   setPercen(sum);
  // };

  const loadData = async (email) => {
    await getScore(user.token, data[0])
      .then((res) => {
        console.log("data na", res.data);
        setValue([res.data]);

        checkStress(res.data);
        checkDepression(res.data);
        checkSuicide(res.data);

        setRecommend1([res.data.score_stress]);
        setRecommend2([res.data.score_depression]);
        setRecommend3([res.data.score_suicide]);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  console.log(value);

  const addAverageScore = (score_stress) => {
    postAverageScore(user.token, data[0], score_stress, score2)
      .then((res) => {
        // setValue([res.data]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  function recomActivity1() {
    console.log("recommend1 =", recommend1);
    if (recommend1 >= 7) {
      return (
        <div>
          <Card>
            <Link to="/user/activity/meditate">
              <Card.Img variant="top" src={meditate} />
            </Link>
            <Card.Body>
              <Card.Title>ทำสมาธิ</Card.Title>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }

  function recomActivity2() {
    console.log("recommend2 =", recommend2);
    if (recommend2 >= 12) {
      return (
        <div className="card">
          <Card>
            <Link to="/user/activity/notebook">
              <Card.Img variant="top" src={notebook} />
            </Link>
            <Card.Body>
              <Card.Title>สมุดบันทึก</Card.Title>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }

  function recomActivity3() {
    console.log("recommend3 =", recommend3);
    if (recommend3 >= 16) {
      return (
        <div className="card">
          <Card>
            <Link to="/user/activity/massage">
              <Card.Img variant="top" src={massage} />
            </Link>
            <Card.Body>
              <Card.Title>การนวดคลายเครียด</Card.Title>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }

  const activity1 = recomActivity1();
  const activity2 = recomActivity2();
  const activity3 = recomActivity3();

  return (
    <>
      <div className="score">
        {value.map((item, index) => (
          <div>
            <h2>ประเมินผลการทำแบบทดสอบของคุณ {item.name}</h2>
            <h5>
              คะแนน ความเครียด ของคุณอยู่ที่ {item.score_stress} คะแนน
              คุณมีความเครียดระดับ {result1}
            </h5>
            <h5>
              คะแนน โรคซึมเศร้า ของคุณอยู่ที่ {item.score_depression} คะแนน
              คุณมีภาวะซึมเศร้า {result2}
            </h5>
            <h5>
              คะแนน การฆ่าตัวตาย ของคุณอยู่ที่ {item.score_suicide} คะแนน
              คุณมีเกณฑ์การฆ่าตัวตายระดับ {result3}
            </h5>
          </div>
        ))}
      </div>
      <br />

      <div className="allcard">
        <Container>
          <Row>
            <h4>แบบประเมินหลังการทำกิจกรรมทั้ง 3 กิจกรรม</h4>
            <Col>
              <Link to="#">
                <Button onClick={handleOpen}>บันทึกผล</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <b>แบบประเมินความเครียดหลังการทำกิจกรรม</b>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div>
                {/* โรคความเครียด 5 คำถาม */}
                {/* 1 */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="redio">
                    <h5 className="verse">
                      มีปัญหาการนอน นอนไม่หลับหรือนอนมาก ?
                    </h5>
                    <Form.Check
                      inline
                      label="1"
                      type={type}
                      name="group1"
                      value="1"
                      onChange={(e) => setCount1(0)}
                      // onClick={result}
                    />
                    <Form.Check
                      inline
                      label="2"
                      name="group1"
                      type={type}
                      value="2"
                      onChange={(e) => setCount1(1)}
                      // onClick={result}
                    />
                    <Form.Check
                      inline
                      label="3"
                      name="group1"
                      type={type}
                      value="3"
                      onChange={(e) => setCount1(2)}
                      // onClick={result}
                    />
                    <Form.Check
                      inline
                      label="4"
                      name="group1"
                      type={type}
                      value="4"
                      onChange={(e) => setCount1(3)}
                      // onClick={result}
                    />
                  </div>
                ))}

                {/* 2 */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="redio">
                    <h5 className="verse">มีสมาธิน้อยลง ?</h5>
                    <Form.Check
                      inline
                      label="1"
                      name="group2"
                      type={type}
                      value="1"
                      onChange={(e) => setCount2(0)}
                      // onClick={result}
                    />
                    <Form.Check
                      inline
                      label="2"
                      name="group2"
                      type={type}
                      value="2"
                      onChange={(e) => setCount2(1)}
                      // onClick={result}
                    />
                    <Form.Check
                      inline
                      label="3"
                      name="group2"
                      type={type}
                      value="3"
                      onChange={(e) => setCount2(2)}
                    />
                    <Form.Check
                      inline
                      label="4"
                      name="group2"
                      type={type}
                      value="4"
                      onChange={(e) => setCount2(3)}
                    />
                  </div>
                ))}

                {/* 3 */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="redio">
                    <h5 className="verse">หงุดหงิด กระวนกระวาย ว้าวุ่นใจ ?</h5>
                    <Form.Check
                      inline
                      label="1"
                      name="group3"
                      type={type}
                      value="1"
                      onChange={(e) => setCount3(0)}
                    />
                    <Form.Check
                      inline
                      label="2"
                      name="group3"
                      type={type}
                      value="2"
                      onChange={(e) => setCount3(1)}
                    />
                    <Form.Check
                      inline
                      label="3"
                      name="group3"
                      type={type}
                      value="3"
                      onChange={(e) => setCount3(2)}
                    />
                    <Form.Check
                      inline
                      label="4"
                      name="group3"
                      type={type}
                      value="4"
                      onChange={(e) => setCount3(3)}
                    />
                  </div>
                ))}

                {/* 4 */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="redio">
                    <h5 className="verse">รู้สึกเบื่อ เซ็ง ?</h5>
                    <Form.Check
                      inline
                      label="1"
                      name="group4"
                      type={type}
                      value="1"
                      onChange={(e) => setCount4(0)}
                    />
                    <Form.Check
                      inline
                      label="2"
                      name="group4"
                      type={type}
                      value="2"
                      onChange={(e) => setCount4(1)}
                    />
                    <Form.Check
                      inline
                      label="3"
                      name="group4"
                      type={type}
                      value="3"
                      onChange={(e) => setCount4(2)}
                    />
                    <Form.Check
                      inline
                      label="4"
                      name="group4"
                      type={type}
                      value="4"
                      onChange={(e) => setCount4(3)}
                    />
                  </div>
                ))}

                {/* 5 */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="redio">
                    <h5 className="verse">ไม่อยากพบปะผู้คน ?</h5>
                    <Form.Check
                      inline
                      label="1"
                      name="group5"
                      type={type}
                      value="1"
                      onChange={(e) => setCount5(0)}
                    />
                    <Form.Check
                      inline
                      label="2"
                      name="group5"
                      type={type}
                      value="2"
                      onChange={(e) => setCount5(1)}
                    />
                    <Form.Check
                      inline
                      label="3"
                      name="group5"
                      type={type}
                      value="3"
                      onChange={(e) => setCount5(2)}
                    />
                    <Form.Check
                      inline
                      label="4"
                      name="group5"
                      type={type}
                      value="4"
                      onChange={(e) => setCount5(3)}
                    />
                  </div>
                ))}

                {/* กิจกรรมทำสมาธิ */}
                {/* {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="redio">
                    <h5 className="verse">กิจกรรมทำสมาธิ</h5>
                    <Form.Check
                      inline
                      label="ไม่เครียดเลย"
                      name="group1"
                      type={type}
                      value="0"
                      onChange={(e) => setCount1(0)}
                    />
                    <Form.Check
                      inline
                      label="น้อย"
                      name="group1"
                      type={type}
                      value="1"
                      onChange={(e) => setCount1(1)}
                    />
                    <Form.Check
                      inline
                      label="ปานกลาง"
                      name="group1"
                      type={type}
                      value="2"
                      onChange={(e) => setCount1(2)}
                    />
                    <Form.Check
                      inline
                      label="มาก"
                      name="group1"
                      type={type}
                      value="3"
                      onChange={(e) => setCount1(3)}
                    />
                  </div>
                ))}
                <hr /> */}

                {/* กิจกรรมสมุดบันทึก */}
                {/* {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="redio">
                    <h5 className="verse">กิจกรรมสมุดบันทึก</h5>
                    <Form.Check
                      inline
                      label="ไม่เครียดเลย"
                      name="group2"
                      type={type}
                      value="0"
                      onChange={(e) => setCount2(0)}
                    />
                    <Form.Check
                      inline
                      label="น้อย"
                      name="group2"
                      type={type}
                      value="1"
                      onChange={(e) => setCount2(1)}
                    />
                    <Form.Check
                      inline
                      label="ปานกลาง"
                      name="group2"
                      type={type}
                      value="2"
                      onChange={(e) => setCount2(2)}
                    />
                    <Form.Check
                      inline
                      label="มาก"
                      name="group2"
                      type={type}
                      value="3"
                      onChange={(e) => setCount2(3)}
                    />
                  </div>
                ))}
                <hr /> */}

                {/* กิจกรรมการนวดคลายเครียด */}
                {/* {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="redio">
                    <h5 className="verse">กิจกรรมการนวดคลายเครียด</h5>
                    <Form.Check
                      inline
                      label="ไม่เครียดเลย"
                      name="group3"
                      type={type}
                      value="0"
                      onChange={(e) => setCount3(0)}
                    />
                    <Form.Check
                      inline
                      label="น้อย"
                      name="group3"
                      type={type}
                      value="1"
                      onChange={(e) => setCount3(1)}
                    />
                    <Form.Check
                      inline
                      label="ปานกลาง"
                      name="group3"
                      type={type}
                      value="2"
                      onChange={(e) => setCount3(2)}
                    />
                    <Form.Check
                      inline
                      label="มาก"
                      name="group3"
                      type={type}
                      value="3"
                      onChange={(e) => setCount3(3)}
                    />
                  </div>
                ))} */}
                <hr />
                <br />
              </div>
              {value.map((item, index) => (
                <Link to="/user/index">
                  <Button onClick={() => addAverageScore(item.score_stress)}>
                    บันทึกผล
                  </Button>
                </Link>
              ))}
            </Typography>
          </Box>
        </Modal>
      </div>

      <br />

      <div className="allcard">
        <Container>
          <Row>
            <h4>กิจกรรมที่แนะนำ</h4>
            <Col>{activity1}</Col>

            <Col>
              {/* <div className="card">
                <Card>
                  <Link to="/user/activity/notebook">
                    <Card.Img variant="top" src={notebook} />
                  </Link>
                  <Card.Body>
                    <Card.Title>สมุดบันทึก</Card.Title>
                  </Card.Body>
                </Card>
              </div> */}
              {activity2}
            </Col>

            <Col>{activity3}</Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
    </>
  );
};

export default Activity;
