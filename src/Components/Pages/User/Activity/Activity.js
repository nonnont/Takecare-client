import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// style
import "./Activity.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

// redux
import { useSelector } from "react-redux";

// function
import { getScore } from "../../../Functions/users";

// images
import meditate from "./activity-meditate.jpg";
import notebook from "./activity-notebook.jpg";
import eat from "./activity-eat.jpg";
import massage from "./activity-massage.jpg";

const Activity = () => {
  const [test, setTest] = useState([]);
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
  }, []);

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
    </>
  );
};

export default Activity;
