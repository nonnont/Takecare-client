// React
import React, { useState } from "react";

// Style
import { Form, Button, Modal, FloatingLabel } from "react-bootstrap";

// Router
import { registerPsychologist } from "../../../Functions/auth";
import { singleFileUpload } from "../../../../data/api";

const RegisterPsychologist = ({
  showRegisterPsychologist,
  setShowRegisterPsychologist,
}) => {
  const handleClose = () => setShowRegisterPsychologist(false);
  const [singleFile, setSingleFile] = useState("");

  const [expert, setExpert] = useState([]);
  const Expert = (e) => {
    setExpert([...expert, e.target.value]);
  };
  console.log(expert);

  // set State ข้อมูล
  const [value, setValue] = useState({
    name: "",
    lassname: "",
    expert: [""],
    education: "",
    telephone: "",
    email: "",
    password: "",
  });

  // เก็บค่าจาก input frome
  const handleChange = async (e) => {
    await setValue({
      ...value,
      [e.target.name]: e.target.value,
      expert: expert,
    });
  };

  // ส่งค่าไป Function/auth/register
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(value);

    registerPsychologist(value)
      .then((res) => {
        console.log(res.data);
        alert(res.data);

        // window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });
    // window.location.reload(false);
    handleClose();
  };

  return (
    <div>
      <Modal
        show={showRegisterPsychologist}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <h4 className="title">ลงทะเบียนนักจิตวิทยา</h4>
        </Modal.Header>

        <Modal.Body>
          <div className="name-lastname">
            <Form.Group className="form-name mb-3" controlId="formName">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="ชื่อ"
              />
            </Form.Group>

            <Form.Group className="form-lastname mb-3" controlId="formLastname">
              {/* <Form.Label>Lastname</Form.Label> */}
              <Form.Control
                type="text"
                name="lassname"
                onChange={handleChange}
                placeholder="นามสกุล"
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formExpert">
            <Form.Label>
              <b>ความชำนาญเฉพาะด้าน</b>
            </Form.Label>
            <br />
            <Form.Check
              inline
              label="โรคความเครียด"
              type="checkbox"
              value="โรคความเครียด"
              onChange={Expert}
            />
            <Form.Check
              inline
              label="โรคซึมเศร้า"
              type="checkbox"
              value="โรคซึมเศร้า"
              onChange={Expert}
            />
            <Form.Check
              inline
              label="ความเสี่ยงในการฆ่าตัวตาย"
              type="checkbox"
              value="ความเสี่ยงในการฆ่าตัวตาย"
              onChange={Expert}
            />
            {/* <Form.Check
              inline
              label="จิตวิทยาทั่วไป"
              name="expert1"
              type="checkbox"
              value="จิตวิทยาทั่วไป"
              onChange={Expert}
            />
            <Form.Check
              inline
              label="จิตวิทยาการศึกษา"
              name="expert2"
              type="checkbox"
              value="จิตวิทยาการศึกษา"
              // onChange={(e) => setExpert2("จิตวิทยาการศึกษา")}
              onChange={Expert}
            />
            <Form.Check
              inline
              label="จิตวิทยาคลินิก"
              name="expert3"
              type="checkbox"
              value="จิตวิทยาคลินิก"
              onChange={Expert}
            />
            <Form.Check
              inline
              label="จิตวิทยาอุตสาหกรรมและองค์การ"
              name="expert4"
              type="checkbox"
              value="จิตวิทยาอุตสาหกรรมและองค์การ"
              onChange={Expert}
            />
            <Form.Check
              inline
              label="จิตวิทยาพัฒนาการ"
              name="expert5"
              type="checkbox"
              value="จิตวิทยาพัฒนาการ"
              onChange={Expert}
            />
            <Form.Check
              inline
              label="จิตวิทยาสังคม"
              name="expert6"
              type="checkbox"
              value="จิตวิทยาสังคม"
              onChange={Expert}
            />
            <Form.Check
              inline
              label="จิตวิทยาการทดลอง"
              name="expert7"
              type="checkbox"
              value="จิตวิทยาการทดลอง"
              onChange={Expert}
            />
            <Form.Check
              inline
              label="จิตวิทยาชุมชน"
              name="expert8"
              type="checkbox"
              value="จิตวิทยาชุมชน"
              onChange={Expert}
            />
            <Form.Check
              inline
              label="จิตวิทยาการปรึกษา"
              name="expert9"
              type="checkbox"
              value="จิตวิทยาการปรึกษา"
              onChange={Expert}
            />
            <Form.Check
              inline
              label="จิตวิทยาการแนะแนว"
              name="expert10"
              type="checkbox"
              value="จิตวิทยาการแนะแนว"
              onChange={Expert}
            /> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEducation">
            <Form.Label>
              <b>ประวัติการศึกษา</b>
            </Form.Label>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="จบการศึกษาจาก มหาวิทยาลัย คณะ สาขา"
            >
              <Form.Control
                name="education"
                onChange={handleChange}
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTelephone">
            {/* <Form.Label>Telephone</Form.Label> */}
            <Form.Control
              type="telephone"
              name="telephone"
              onChange={handleChange}
              placeholder="เบอร์โทรศัพท์ติดต่อ"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="อีเมล"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="รหัสผ่าน"
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>Documents confirming being a psychologist</Form.Label>
            <Form.Control
              type="file"
              name="verify"
              onChange={handleChange}
              placeholder="File"
            />
          </Form.Group> */}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ปิด
          </Button>

          <Button
            variant="success"
            disabled={value.password.length < 1}
            onClick={handleSubmit}
          >
            ลงทะเบียน
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterPsychologist;
