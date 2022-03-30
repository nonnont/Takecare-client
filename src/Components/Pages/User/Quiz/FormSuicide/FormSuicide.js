import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
// import "./FormDepression.css";
import ResultDepression from "./ResultSuicide/ResultSuicide";

// redux
import { useSelector } from "react-redux";

const FormSuicide = () => {
  const { user } = useSelector((state) => ({ ...state }));
  console.log("user => ", user);
  const [data, setData] = useState([user]);

  const [showResult, setShowResult] = useState(false);

  // โรคซึมเศร้า 9 คำถาม
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  const [count8, setCount8] = useState(0);

  // ผลรวม
  const [sum3, setSum3] = useState(0);

  const [value, setValue] = useState({
    email: "",
    score_suicide: "",
  });

  const score3 =
    count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8;

  console.log("score 3 = ", score3);

  const openResult = (email) => {
    setShowResult((prev) => !prev);

    setSum3(score3);
    setValue({
      ...value,
      email: email,
      score_suicide: score3,
    });
    // updateLevel(user.token, value.email, value)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  };

  console.log("sum 2 =", sum3);
  console.log(value);

  return (
    <>
      <div className="depression">
        {/* ความเสี่ยงต่อการฆ่าตัวตาย 8 คำถาม */}
        {/* 1 */}
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio2">
            <h5 className="verse">คิดอยากตาย หรือคิดว่าตายไปจะดีกว่า</h5>
            <Form.Check
              inline
              label="ไม่มี"
              name="group1"
              type={type}
              value="1"
              onChange={(e) => setCount1(0)}
            />
            <Form.Check
              inline
              label="มี"
              name="group1"
              type={type}
              value="2"
              onChange={(e) => setCount1(1)}
            />
          </div>
        ))}
        <hr />
        <br />

        {/* 2 */}
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio2">
            <h5 className="verse">อยากทำร้ายตัวเอง หรือทำให้ตัวเองบาดเจ็บ</h5>
            <Form.Check
              inline
              label="ไม่มี"
              name="group2"
              type={type}
              value="1"
              onChange={(e) => setCount2(0)}
            />
            <Form.Check
              inline
              label="มี"
              name="group2"
              type={type}
              value="2"
              onChange={(e) => setCount2(2)}
            />
          </div>
        ))}
        <hr />
        <br />

        {/* 3 */}
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio2">
            <h5 className="verse">คิดเกี่ยวกับการฆ่าตัวตาย</h5>
            <Form.Check
              inline
              label="ไม่มี"
              name="group3"
              type={type}
              value="1"
              onChange={(e) => setCount3(0)}
            />
            <Form.Check
              inline
              label="มี"
              name="group3"
              type={type}
              value="2"
              onChange={(e) => setCount3(6)}
            />
          </div>
        ))}
        <hr />
        <br />

        {/* 4 */}
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio2">
            <h5 className="verse">มีแผนการที่จะฆ่าตัวตาย</h5>
            <Form.Check
              inline
              label="ไม่มี"
              name="group4"
              type={type}
              value="1"
              onChange={(e) => setCount4(0)}
            />
            <Form.Check
              inline
              label="มี"
              name="group4"
              type={type}
              value="2"
              onChange={(e) => setCount4(8)}
            />
          </div>
        ))}
        <hr />
        <br />

        {/* 5 */}
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio2">
            <h5 className="verse">
              ได้เตรียมการที่จะท าร้ายตนเอง หรือเตรียมการจะฆ่าตัวตาย โดยตั
              งใจว่าจะให้ตายจริงๆ
            </h5>
            <Form.Check
              inline
              label="ไม่มี"
              name="group5"
              type={type}
              value="1"
              onChange={(e) => setCount5(0)}
            />
            <Form.Check
              inline
              label="มี"
              name="group5"
              type={type}
              value="2"
              onChange={(e) => setCount5(9)}
            />
          </div>
        ))}
        <hr />
        <br />

        {/* 6 */}
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio2">
            <h5 className="verse">
              ได้ทำให้ตนเองบาดเจ็บ แต่ไม่ตั้งใจที่จะทำให้เสียชีวิต
            </h5>
            <Form.Check
              inline
              label="ไม่มี"
              name="group6"
              type={type}
              value="1"
              onChange={(e) => setCount6(0)}
            />
            <Form.Check
              inline
              label="มี"
              name="group6"
              type={type}
              value="2"
              onChange={(e) => setCount6(4)}
            />
          </div>
        ))}
        <hr />
        <br />

        {/* 7 */}
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio2">
            <h5 className="verse">
              ได้พยายามฆ่าตัวตาย โดยคาดหวัง / ตั้งใจที่จะให้ตาย
            </h5>
            <Form.Check
              inline
              label="ไม่มี"
              name="group7"
              type={type}
              value="1"
              onChange={(e) => setCount7(0)}
            />
            <Form.Check
              inline
              label="มี"
              name="group7"
              type={type}
              value="2"
              onChange={(e) => setCount7(10)}
            />
          </div>
        ))}
        <hr />
        <br />

        {/* 8 */}
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio2">
            <h5 className="verse">ท่านเคยพยายามฆ่าตัวตาย</h5>
            <Form.Check
              inline
              label="ไม่มี"
              name="group8"
              type={type}
              value="1"
              onChange={(e) => setCount8(0)}
            />
            <Form.Check
              inline
              label="มี"
              name="group8"
              type={type}
              value="2"
              onChange={(e) => setCount8(4)}
            />
          </div>
        ))}
        <hr />
        <br />

        <br />
        {data.map((item, index) => (
          <Button
            variant="success"
            className="result"
            onClick={() => openResult(item.email)}
            // onChange={() => openResult(item._id)}
          >
            ประเมินผล
          </Button>
        ))}

        <ResultDepression
          showResult={showResult}
          setShowResult={setShowResult}
          sum3={sum3}
          user={user}
          value={value}
        />

        <br />
        <br />
        <br />
        <p>แหล่งอ้างอิง: กรมสุขภาพจิต กระทรวงสาธารณสุข</p>
      </div>
    </>
  );
};

export default FormSuicide;
