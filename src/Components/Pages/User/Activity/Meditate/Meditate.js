import React from "react";
import { Link } from "react-router-dom";

// audio
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import audio from "../Meditate/audio.mp3";

import img from "../activity-meditate.jpg";

// style
import "./Meditate.css";
import { Button, Container, Row, Col } from "react-bootstrap";

const Meditate = () => {
  return (
    <>
      <div className="back">
        <Link to="/user/activity">
          <Button variant="secondary">ย้อนกลับ</Button>
        </Link>
      </div>
      <img className="image" src={img} alt="" srcset="" />
      <div className="description">
        <h4>คำแนะนำในการนั่งสมาธิ</h4>
        <h5>
          การนั่งสมาธิ นอกจากช่วยให้เรามีสมาธิ และสติในการปฏิบัติงานต่างๆ
          ในชีวิตประจำวันมากขึ้นแล้ว ยังเป็นการลดความเครียด คลายความวิตก
          ฝึกความอดทนอดกลั้น ขจัดความคิดลบที่รบกวนจิตใจ
          และช่วยให้นอนหลับง่ายขึ้น
        </h5>
        <br />
        <h5>ถ้าพร้อมแล้ว นั่งหลังตรง หายใจเข้า-ออกช้าๆ และค่อยๆหลับตาลง</h5>
        <h5>นั่งหลับตาทำสมาธิ จนกว่าเพลงนี้จะดับลง</h5>
      </div>
      <div className="list-music">
        <AudioPlayer
          autoPlay
          volume="0.5"
          src={audio}
          onPlay={(e) => console.log("onPlay")}
        />
      </div>
    </>
  );
};

export default Meditate;
