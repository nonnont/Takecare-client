import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Style
import { Form, Button, Modal } from "react-bootstrap";

// function
import { updateScore } from "../../../../../Functions/users";

function ResultDepression({ showResult, setShowResult, sum3, user, value }) {
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");

  // useEffect(() => {
  //   if (sum1 <= 4) {
  //     setResult1("เครียดน้อย หรือไม่เครียดเลย");
  //   } else if (sum1 <= 7) {
  //     setResult1("เครียดปานกลาง");
  //   } else if (sum1 <= 9) {
  //     setResult1("เครียดมาก");
  //   } else if (sum1 <= 15) {
  //     setResult1("เครียดมากที่สุด");
  //   }
  // });

  // useEffect(() => {
  //   if (sum2 <= 6) {
  //     setResult2("ไม่มีอาการ หรือมีอาการน้อยมาก");
  //   } else if (sum2 <= 12) {
  //     setResult2("ระดับน้อย");
  //   } else if (sum2 <= 18) {
  //     setResult2("ระดับปลานกลาง");
  //   } else if (sum2 <= 27) {
  //     setResult2("ระดับรุนแรง");
  //   }
  // });

  useEffect(() => {
    if (sum3 == 0) {
      setResult3("ไม่มีแนวโน้มจะฆ่าตัวตายในปัจจุบัน ");
    } else if (sum3 <= 8) {
      setResult3("ระดับน้อย");
    } else if (sum3 <= 16) {
      setResult3("ระดับปานกลาง");
    } else if (sum3 <= 52) {
      setResult3("ระดับรุนแรง");
    }
  });

  const openActivity = async (email) => {
    await updateScore(user.token, value.email, value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleClose = () => setShowResult(false);

  return (
    <div>
      <Modal
        show={showResult}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <h4 className="titl">ผลการตอบแบบประเมิน</h4>
        </Modal.Header>

        {/* <Modal.Body>
          <div>
            <strong>
              <h5>- คุณมีคะแนน ความเครียด {sum1} คะแนน</h5>
            </strong>

            <h5>ผลการประเมิน {result1}</h5>

            <p>
              <u>เกณฑ์การกำหนดคะแนนความเครียด</u>
            </p>

            <ul>
              <li>คะแนน 0-4 เครียดน้อย หรือไม่เครียดเลย</li>
              <li>คะแนน 5-7 เครียดปานกลาง</li>
              <li>คะแนน 8-9 เครียดมาก</li>
              <li>คะแนน 10-15 เครียดมากที่สุด</li>
            </ul>
          </div>
          <p>แหล่งอ้างอิง: กรมสุขภาพจิต กระทรวงสาธารณสุข</p>
        </Modal.Body> */}

        {/* <hr /> */}
        <Modal.Body>
          <div>
            <strong>
              <h5>- คุณมีคะแนน การฆ่าตัวตาย {sum3} คะแนน</h5>
            </strong>

            <h5>ผลการประเมินการฆ่าตัวตาย {result3}</h5>
            <p>
              <u>เกณฑ์การกำหนดคะแนนการฆ่าตัวตาย</u>
            </p>

            <ul>
              <li>คะแนน 0 ไม่มีแนวโน้มจะฆ่าตัวตายในปัจจุบัน </li>
              <li>คะแนน 1-8 มีแนวโน้มจะฆ่าตัวตายในปัจจุบันในระดับน้อย</li>
              <li>คะแนน 9-16 มีแนวโน้มจะฆ่าตัวตายในปัจจุบันในระดับปานกลาง</li>
              <li>คะแนน ≥17 มีแนวโน้มจะฆ่าตัวตายในปัจจุบันในระดับรุนแรง</li>
            </ul>
          </div>
          <p>แหล่งอ้างอิง: กรมสุขภาพจิต กระทรวงสาธารณสุข</p>
        </Modal.Body>

        <Modal.Footer>
          <Link to="/user/activity">
            <Button variant="success" onClick={openActivity}>
              ไปหน้ากิจกรรม
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ResultDepression;
