import React, { useState } from "react";
import "./quiz.css";
import { Button, Accordion } from "react-bootstrap";
import FormStress from "./FormStress/FormStress";
import FormDepression from "./FormDepression/FormDepression";
import FormSuicide from "./FormSuicide/FormSuicide";

function Home() {
  const [showForm1, setShowForm1] = React.useState(false);
  const [showForm2, setShowForm2] = React.useState(false);
  const [showForm3, setShowForm3] = React.useState(false);

  const onClick1 = () => setShowForm1(true);
  const onClick2 = () => setShowForm2(true);
  const onClick3 = () => setShowForm3(true);

  return (
    <>
      {/* แบบใหม่ */}
      <div className="accordion">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>แบบประเมินและวิเคราะห์ความเครียด</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                คำถามต่อไปนี้จะถามถึงประสบการณ์ของท่านในช่วง ระยะ 2-4
                สัปดาห์ที่ผ่านมา ให้ท่านสำรวจตัว ท่านเองและประเมินเหตุการณ์
                อาการหรือความคิดเห็นและความรู้สึกของท่านว่าอยู่ในระดับใด
                โปรดตอบตามความเป็นจริงและตอบทุกข้อ
                เพื่อท่านจะได้รู้จักตนเองและวางแผนพัฒนาตนต่อไป
                <br />
                <br />
                มีคำตอบ 4 คำตอบ สำหรับข้อความแต่ละประโยค คือ 1, 2, 3, และ 4
                เรียงตามลำดับ
                โปรดคลิกเลือกในช่องที่ท่านคิดว่าตรงกับตัวท่านมากที่สุด
              </p>

              <Button onClick={onClick1}>เริ่มทำแบบทดสอบ</Button>
              <div>{showForm1 ? <FormStress /> : null}</div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h4>แบบประเมินและวิเคราะห์โรคซึมเศร้า</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                คำถามต่อไปนี้จะถามถึงประสบการณ์ของท่านในช่วง ระยะ 2
                สัปดาห์ที่ผ่านมา ให้ท่านสำรวจตัว ท่านเองและประเมินเหตุการณ์
                อาการหรือความคิดเห็นและความรู้สึกของท่านว่าอยู่ในระดับใด
                โปรดตอบตามความเป็นจริงและตอบทุกข้อ
                เพื่อท่านจะได้รู้จักตนเองและวางแผนพัฒนาตนต่อไป
                <br />
                <br />
                มีคำตอบ 4 คำตอบ สำหรับข้อความแต่ละประโยค คือ 1, 2, 3, และ 4
                เรียงตามลำดับ
                โปรดคลิกเลือกในช่องที่ท่านคิดว่าตรงกับตัวท่านมากที่สุด
              </p>
              <Button onClick={onClick2}>เริ่มทำแบบทดสอบ</Button>
              <div>{showForm2 ? <FormDepression /> : null}</div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h4>แบบประเมินความเสี่ยงต่อการฆ่าตัวตาย</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                คำถามต่อไปนี้จะถามถึงประสบการณ์ของท่านในช่วง ระยะ ช่วง 1
                เดือนที่ผ่านมา ให้ท่านสำรวจตัว ท่านเองและประเมินเหตุการณ์
                อาการหรือความคิดเห็นและความรู้สึกของท่านว่าอยู่ในระดับใด
                โปรดตอบตามความเป็นจริงและตอบทุกข้อ
                เพื่อท่านจะได้รู้จักตนเองและวางแผนพัฒนาตนต่อไป
                <br />
                <br />
                มีคำตอบ 2 คำตอบ สำหรับข้อความแต่ละประโยค คือ มี และ ไม่มี
                โปรดคลิกเลือกในช่องที่ท่านคิดว่าตรงกับตัวท่านมากที่สุด
              </p>

              <Button onClick={onClick3}>เริ่มทำแบบทดสอบ</Button>
              <div>{showForm3 ? <FormSuicide /> : null}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      {/* แบบเก่า */}
      {/* <div>
        <h3 className="head-quiz">แบบประเมินและวิเคราะห์ความเครียด</h3>
        <h5 className="description-quiz">
          คำถามต่อไปนี้จะถามถึงประสบการณ์ของท่านในช่วง ระยะ 2-4 สัปดาห์ที่ผ่านมา
          ให้ท่านสำรวจตัว ท่านเองและประเมินเหตุการณ์
          อาการหรือความคิดเห็นและความรู้สึกของท่านว่าอยู่ในระดับใด
          โปรดตอบตามความเป็นจริงและตอบทุกข้อ
          เพื่อท่านจะได้รู้จักตนเองและวางแผนพัฒนาตนต่อไป
          <br />
          <br />
        </h5>

        <p className="description-quiz-p">
          มีคำตอบ 4 คำตอบ สำหรับข้อความแต่ละประโยค คือ 1, 2, 3, และ 4
          เรียงตามลำดับ โปรดคลิกเลือกในช่องที่ท่านคิดว่าตรงกับตัวท่านมากที่สุด
        </p>
        <div>
          <Button className="start-quiz" onClick={onClick}>
            เริ่มทำแบบทดสอบ
          </Button>
          <div className="form">{showForm ? <FormStress /> : null}</div>
        </div>
      </div> */}

      {/* <div className="depression">
        <h3 className="head-depression">แบบประเมินและวิเคราะห์โรคซึมเศร้า</h3>
      </div> */}
    </>
  );
}

export default Home;
