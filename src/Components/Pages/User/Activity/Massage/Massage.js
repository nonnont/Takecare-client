import React from "react";
import "./Massage.css";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

// image-massage
import massage1 from "./image-massage/activity-massage1.JPG";
import massage2 from "./image-massage/activity-massage2.JPG";
import massage3 from "./image-massage/activity-massage3.JPG";
import massage4 from "./image-massage/activity-massage4.JPG";
import massage5 from "./image-massage/activity-massage5.JPG";
import massage6 from "./image-massage/activity-massage6.JPG";
import massage7 from "./image-massage/activity-massage7.JPG";

const Massage = () => {
  return (
    <>
      <div className="back3">
        <Link to="/user/activity">
          <Button variant="secondary">ย้อนกลับ</Button>
        </Link>
      </div>
      <br />

      <Container>
        <Row>
          <Col>
            <h3>การนวดคลายเครียด</h3>
            <h5>
              ความเครียดเป็นสาเหตุทำให้กล้ามเนื้อหดเกร็ง เลือดไหลเวียนไม่สะดวก
              ปวดต้นคอ และปวดหลัง เป็นต้น อย่างไรก็ตาม
              การนวดจะช่วยผ่อนคลายกล้ามเนื้อให้เราได้
              เพราะได้ไปกระตุ้นการไหลเวียนเลือด ทำให้รู้สึกปลอดโปร่ง สบายตัว
              หายเครียด และลดอาการเจ็บปวดต่างๆ ลง
            </h5>
            <br />
            <h4>สำหรับการนวดที่ถูกวิธีคือ</h4>
            <h5>
              1. กดโดยใช้ปลายนิ่วที่ถนัด ได้แก่ นิ้วหัวแม่มือ
              นิ้วชี้หรือนิ้วกลาง
              <br />
              2. ใช้การกดและการปล่อยเป็นส่วนใหญ่ โดยใช้เวลากดแต่ละครั้งประมาณ 10
              วินาที และใช้เวลาปล่อยนานกว่าเวลากด
              <br />
              3. การกดให้ค่อยๆ เพิ่มแรงทีละน้อย และเวลาปล่อยให้ค่อยๆ ปล่อย
              <br />
              4. แต่ละจุดควรรนวดซ้ำประมาณ 3-5 ครั้ง
            </h5>
            <br />

            <h4>
              โดยท่าที่เราจะนำมาสอนมีอยู่ด้วยกัน 7 ท่า ถ้าพร้อมแล้ว
              มาเริ่มกันเลยครับ
            </h4>
            <br />

            <h5>
              1. ใช้นิ้วชี้หรือนิ้วกลาง ของมือทั้งสองข้าง
              นวดเบาๆบริเวณหัวคิ้วทั้งสองข้างพร้อมๆกัน
            </h5>
            <img width={1000} src={massage1} alt="" srcset="" />
            <br />
            <br />
            <br />

            <h5>2. เลื่อนจุดนวด มาที่สันจมูก</h5>
            <img width={1000} src={massage2} alt="" srcset="" />
            <br />
            <br />
            <br />

            <h5>3. เลื่อนจุดนวด มาที่ขมับทั้งสองข้าง</h5>
            <img width={1000} src={massage3} alt="" srcset="" />
            <br />
            <br />
            <br />

            <h5>
              4. ประสานมือที่ท้ายทอย แล้วใช้นิ้วหัวแม่มือทั้งสองข้าง
              กดบริเวณขอบกระโหลกศรีษะ
            </h5>
            <img width={1000} src={massage4} alt="" srcset="" />
            <br />
            <br />
            <br />

            <h5>
              5. ใช้นิ้วหัวแม่มือทั้งสองข้าง กดบริเวณสองข้างของกระดูกต้นคอ
              ไล่จากกะโหลกศีรษะไปยังต้นคอ
            </h5>
            <img width={1000} src={massage5} alt="" srcset="" />
            <br />
            <br />
            <br />

            <h5>6. ใช้นิ้วชี้ นิ้วกลาง และนิ้วนางของมือขวา กดนวดบ่าซ้าย</h5>
            <img width={1000} src={massage6} alt="" srcset="" />
            <br />
            <br />
            <br />

            <h5>7. ใช้นิ้วชี้ นิ้วกลาง และนิ้วนางของมือซ้าย กดนวดบ่าขวา</h5>
            <img width={1000} src={massage7} alt="" srcset="" />
            <br />
            <br />
            <br />

            <p>แหล่งอ้างอิง: สุขภาพใจ.com</p>

            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Massage;
