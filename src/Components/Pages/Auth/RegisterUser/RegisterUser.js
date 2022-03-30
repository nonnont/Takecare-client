// React
import React, { useState } from "react";

// Style
import { Form, Button, Modal } from "react-bootstrap";
import "./RegisterUser.css";

// Router
import { Link } from "react-router-dom";
import RegisterPsychologist from "../RegisterPsychologist/RegisterPsychologist";
import { register } from "../../../Functions/auth";

const RegisterUser = ({ showRegisterUser, setShowRegisterUser }) => {
  const [showRegisterPsychologist, setShowRegisterPsychologist] =
    useState(false);

  const openRegisterPsychologist = () => {
    setShowRegisterPsychologist((prev) => !prev);
  };

  const handleClose = () => setShowRegisterUser(false);

  // set State ข้อมูล
  const [value, setValue] = useState({
    name: "",
    lassname: "",
    email: "",
    password: "",
  });

  // เก็บค่าจาก input frome
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  // ส่งค่าไป Function/auth/register
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(value);
    register(value)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });
  };

  return (
    <>
      <div>
        <Modal
          show={showRegisterUser}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
        >
          <Modal.Header closeButton>
            <h4 className="title">ลงทะเบียน</h4>
          </Modal.Header>

          <Modal.Body>
            <div className="name-lastname">
              <Form.Group className="form-name mb-3" controlId="formName">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="ชื่อ"
                />
              </Form.Group>

              <Form.Group
                className="form-lastname mb-3"
                controlId="formLastname"
              >
                <Form.Control
                  type="text"
                  name="lassname"
                  onChange={handleChange}
                  placeholder="นามสกุล"
                />
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="อีเมล"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="รหัสผ่าน"
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            {/* <Link
              to="/"
              className="register-psychologist"
              onClick={openRegisterPsychologist}
            >
              ลงทะเบียนนักจิตวิทยา
            </Link>
            <RegisterPsychologist
              showRegisterPsychologist={showRegisterPsychologist}
              setShowRegisterPsychologist={setShowRegisterPsychologist}
            /> */}

            <Button variant="secondary" onClick={handleClose}>
              ปิด
            </Button>

            <Button
              disabled={value.password.length < 1}
              onClick={handleSubmit}
              variant="success"
            >
              ลงทะเบียน
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default RegisterUser;
