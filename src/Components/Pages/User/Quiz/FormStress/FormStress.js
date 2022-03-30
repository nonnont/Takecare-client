import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./FormStress.css";
import Result from "../Result/Result";
import ResultStress from "./ResultStress/ResultStress";

// function
import { listUsers, readUsers, updateLevel } from "../../../../Functions/users";

// redux
import { useSelector } from "react-redux";

function FormStress() {
  const { user } = useSelector((state) => ({ ...state }));
  console.log("user => ", user);
  const [data, setData] = useState([user]);
  // console.log("data => ", data);

  // useEffect(() => {
  //   //code
  //   loadData(user.token);
  // }, []);

  // const loadData = (authtoken) => {
  //   //code
  //   listUsers(authtoken)
  //     .then((res) => {
  //       // setData(res.data);

  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // };

  const [showResult, setShowResult] = useState(false);

  // โรคความเครียด 5 คำถาม
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);

  // โรคซึมเศร้า 9 คำถาม
  // const [count6, setCount6] = useState(0);
  // const [count7, setCount7] = useState(0);
  // const [count8, setCount8] = useState(0);
  // const [count9, setCount9] = useState(0);
  // const [count10, setCount10] = useState(0);
  // const [count11, setCount11] = useState(0);
  // const [count12, setCount12] = useState(0);
  // const [count13, setCount13] = useState(0);
  // const [count14, setCount14] = useState(0);

  // ความเสี่ยงต่อการฆ่าตัวตาย 8 คำถาม
  // const [count15, setCount15] = useState(0);
  // const [count16, setCount16] = useState(0);
  // const [count17, setCount17] = useState(0);
  // const [count18, setCount18] = useState(0);
  // const [count19, setCount19] = useState(0);
  // const [count20, setCount20] = useState(0);
  // const [count21, setCount21] = useState(0);
  // const [count22, setCount22] = useState(0);

  // ผลรวม
  const [sum1, setSum1] = useState(0);
  const [sum2, setSum2] = useState(0);

  const [value, setValue] = useState({
    email: "",
    score_stress: "",
    // score_depression: "",
  });

  const score1 = count1 + count2 + count3 + count4 + count5;
  // const score2 =
  //   count6 +
  //   count7 +
  //   count8 +
  //   count9 +
  //   count10 +
  //   count11 +
  //   count12 +
  //   count13 +
  //   count14;

  console.log("score 1 = ", score1);
  // console.log("score 2 = ", score2);

  // const level = Math.ceil(s1);
  // console.log("level => ", level);

  const openResult = (email) => {
    setShowResult((prev) => !prev);
    setSum1(score1);
    // setSum2(score2);
    setValue({
      ...value,
      email: email,
      score_stress: score1,
      // score_depression: score2,
    });
    // updateLevel(user.token, value.email, value)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  };
  console.log("sum 1 =", sum1);
  console.log("sum 2 =", sum2);
  console.log(value);

  return (
    <>
      <Form>
        {/* โรคความเครียด 5 คำถาม */}
        {/* 1 */}
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio">
            <h5 className="verse">มีปัญหาการนอน นอนไม่หลับหรือนอนมาก ?</h5>
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
        <hr />
        <br />

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
        <hr />
        <br />

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
        <hr />
        <br />

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
        <hr />
        <br />

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
        <hr />
        <br />

        {/* โรคซึมเศร้า 9 คำถาม */}
        {/* 6 */}
        {/* {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio">
            <h5 className="verse">เบื่อ ไม่สนใจอยากทำอะไร ?</h5>
            <Form.Check
              inline
              label="1"
              name="group6"
              type={type}
              value="1"
              onChange={(e) => setCount6(0)}
            />
            <Form.Check
              inline
              label="2"
              name="group6"
              type={type}
              value="2"
              onChange={(e) => setCount6(1)}
            />
            <Form.Check
              inline
              label="3"
              name="group6"
              type={type}
              value="3"
              onChange={(e) => setCount6(2)}
            />
            <Form.Check
              inline
              label="4"
              name="group6"
              type={type}
              value="4"
              onChange={(e) => setCount6(3)}
            />
          </div>
        ))}
        <hr />
        <br /> */}

        {/* 7 */}
        {/* {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio">
            <h5 className="verse">ไม่สบายใจ ซึมเศร้า ท้อแท้ ?</h5>
            <Form.Check
              inline
              label="1"
              name="group7"
              type={type}
              value="1"
              onChange={(e) => setCount7(0)}
            />
            <Form.Check
              inline
              label="2"
              name="group7"
              type={type}
              value="2"
              onChange={(e) => setCount7(1)}
            />
            <Form.Check
              inline
              label="3"
              name="group7"
              type={type}
              value="3"
              onChange={(e) => setCount7(2)}
            />
            <Form.Check
              inline
              label="4"
              name="group7"
              type={type}
              value="4"
              onChange={(e) => setCount7(3)}
            />
          </div>
        ))}
        <hr />
        <br /> */}

        {/* 8 */}
        {/* {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio">
            <h5 className="verse">หลับยาก หรือหลับๆ ตื่นๆ หรือ หลับมากไป ?</h5>
            <Form.Check
              inline
              label="1"
              name="group8"
              type={type}
              value="1"
              onChange={(e) => setCount8(0)}
            />
            <Form.Check
              inline
              label="2"
              name="group8"
              type={type}
              value="2"
              onChange={(e) => setCount8(1)}
            />
            <Form.Check
              inline
              label="3"
              name="group8"
              type={type}
              value="3"
              onChange={(e) => setCount8(2)}
            />
            <Form.Check
              inline
              label="4"
              name="group8"
              type={type}
              value="4"
              onChange={(e) => setCount8(3)}
            />
          </div>
        ))}
        <hr />
        <br /> */}

        {/* 9 */}
        {/* {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio">
            <h5 className="verse">เหนื่อยง่ายหรือไม่ค่อยมีแรง ?</h5>
            <Form.Check
              inline
              label="1"
              name="group9"
              type={type}
              value="1"
              onChange={(e) => setCount9(0)}
            />
            <Form.Check
              inline
              label="2"
              name="group9"
              type={type}
              value="2"
              onChange={(e) => setCount9(1)}
            />
            <Form.Check
              inline
              label="3"
              name="group9"
              type={type}
              value="3"
              onChange={(e) => setCount9(2)}
            />
            <Form.Check
              inline
              label="4"
              name="group9"
              type={type}
              value="4"
              onChange={(e) => setCount9(3)}
            />
          </div>
        ))}
        <hr />
        <br /> */}

        {/* 10 */}
        {/* {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio">
            <h5 className="verse">เบื่ออาหารหรือกินมากเกินไป ?</h5>
            <Form.Check
              inline
              label="1"
              name="group10"
              type={type}
              value="1"
              onChange={(e) => setCount10(0)}
            />
            <Form.Check
              inline
              label="2"
              name="group10"
              type={type}
              value="2"
              onChange={(e) => setCount10(1)}
            />
            <Form.Check
              inline
              label="3"
              name="group10"
              type={type}
              value="3"
              onChange={(e) => setCount10(2)}
            />
            <Form.Check
              inline
              label="4"
              name="group10"
              type={type}
              value="4"
              onChange={(e) => setCount10(3)}
            />
          </div>
        ))}
        <hr />
        <br /> */}

        {/* 11 */}
        {/* {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio">
            <h5 className="verse">
              รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลวหรือครอบครัวผิดหวัง ?
            </h5>
            <Form.Check
              inline
              label="1"
              name="group11"
              type={type}
              value="1"
              onChange={(e) => setCount11(0)}
            />
            <Form.Check
              inline
              label="2"
              name="group11"
              type={type}
              value="2"
              onChange={(e) => setCount11(1)}
            />
            <Form.Check
              inline
              label="3"
              name="group11"
              type={type}
              value="3"
              onChange={(e) => setCount11(2)}
            />
            <Form.Check
              inline
              label="4"
              name="group11"
              type={type}
              value="4"
              onChange={(e) => setCount11(3)}
            />
          </div>
        ))}
        <hr />
        <br /> */}

        {/* 12 */}
        {/* {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio">
            <h5 className="verse">
              สมาธิไม่ดี เวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ
              หรือทำงานที่ต้องใช้ความตั้งใจ ?
            </h5>
            <Form.Check
              inline
              label="1"
              name="group12"
              type={type}
              value="1"
              onChange={(e) => setCount12(0)}
            />
            <Form.Check
              inline
              label="2"
              name="group12"
              type={type}
              value="2"
              onChange={(e) => setCount12(1)}
            />
            <Form.Check
              inline
              label="3"
              name="group12"
              type={type}
              value="3"
              onChange={(e) => setCount12(2)}
            />
            <Form.Check
              inline
              label="4"
              name="group12"
              type={type}
              value="4"
              onChange={(e) => setCount12(3)}
            />
          </div>
        ))}
        <hr />
        <br /> */}

        {/* 13 */}
        {/* {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio">
            <h5 className="verse">
              พูดช้า ทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้ <br />
              หรือกระสับกระส่ายไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น ?
            </h5>
            <Form.Check
              inline
              label="1"
              name="group13"
              type={type}
              value="1"
              onChange={(e) => setCount13(0)}
            />
            <Form.Check
              inline
              label="2"
              name="group13"
              type={type}
              value="2"
              onChange={(e) => setCount13(1)}
            />
            <Form.Check
              inline
              label="3"
              name="group13"
              type={type}
              value="3"
              onChange={(e) => setCount13(2)}
            />
            <Form.Check
              inline
              label="4"
              name="group13"
              type={type}
              value="4"
              onChange={(e) => setCount13(3)}
            />
          </div>
        ))}
        <hr />
        <br /> */}

        {/* 14 */}
        {/* {["radio"].map((type) => (
          <div key={`inline-${type}`} className="redio">
            <h5 className="verse">คิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี ?</h5>
            <Form.Check
              inline
              label="1"
              name="group14"
              type={type}
              value="1"
              onChange={(e) => setCount14(0)}
            />
            <Form.Check
              inline
              label="2"
              name="group14"
              type={type}
              value="2"
              onChange={(e) => setCount14(1)}
            />
            <Form.Check
              inline
              label="3"
              name="group14"
              type={type}
              value="3"
              onChange={(e) => setCount14(2)}
            />
            <Form.Check
              inline
              label="4"
              name="group14"
              type={type}
              value="4"
              onChange={(e) => setCount14(3)}
            />
          </div>
        ))}
        <hr /> */}

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

        <ResultStress
          showResult={showResult}
          setShowResult={setShowResult}
          sum1={sum1}
          sum2={sum2}
          user={user}
          value={value}
        />

        <br />
        <br />
        <br />
        <p>แหล่งอ้างอิง: กรมสุขภาพจิต กระทรวงสาธารณสุข</p>
      </Form>
    </>
  );
}

export default FormStress;
