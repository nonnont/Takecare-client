// React
import React, { useState, useRef } from "react";

// Style
import { Form, Button, Modal } from "react-bootstrap";

// Router
import { registerPsychologist } from "../../../Functions/auth";

import { singleFileUpload } from "../../../../data/api";

const RegisterPsychologist = ({
  showRegisterPsychologist,
  setShowRegisterPsychologist,
}) => {
  const handleClose = () => window.location.reload(false);
  const [singleFile, setSingleFile] = useState("");

  // set State ข้อมูล
  const [value, setValue] = useState({
    name: "",
    lassname: "",
    email: "",
    password: "",
    verify: "",
  });

  // เก็บค่าจาก input frome
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  // const SingleFileChange = (e) => {
  //   setSingleFile({
  //     ...value,
  //     [e.target.name]: e.target.files[0],
  //   });
  // };

  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  };
  console.table(singleFile);

  // const uploadSingleFile = async () => {
  //   const formData = new FormData();
  //   formData.append("verify", singleFile);
  //   console.log("test 1");
  //   singleFileUpload(formData);
  //   console.log(formData);
  //   console.log("test 2");
  // };

  // ส่งค่าไป Function/auth/register
  const handleSubmit = (e) => {
    e.preventDefault();

    // uploadSingleFile();
    const formData = new FormData();
    formData.append("verify", singleFile);
    console.log("test 1");
    singleFileUpload(formData);
    console.log(formData);
    console.log("test 2");

    // console.log(value);

    // registerPsychologist(formData);
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
  };

  return (
    <div>
      <Modal
        show={showRegisterPsychologist}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <h4 className="title">Register Psychologist</h4>
        </Modal.Header>

        <Modal.Body>
          <div className="name-lastname">
            <Form.Group className="form-name mb-3" controlId="formName">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group className="form-lastname mb-3" controlId="formLastname">
              {/* <Form.Label>Lastname</Form.Label> */}
              <Form.Control
                type="text"
                name="lassname"
                onChange={handleChange}
                placeholder="Lastname"
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formEmail">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>Documents confirming being a psychologist</Form.Label>
            <Form.Control
              type="file"
              name="verify"
              onChange={(e) => SingleFileChange(e)}
              // onChange={(e) => handleChange(e)}
              // onChange={handleChange}
              placeholder="File"
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterPsychologist;
