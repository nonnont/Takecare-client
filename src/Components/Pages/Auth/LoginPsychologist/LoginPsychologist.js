import React, { useState } from "react";
import "./LoginPsychologist.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterPsychologist from "../RegisterPsychologist/RegisterPsychologist";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginPsycho } from "../../../Functions/auth";

function LoginPsychologist() {
  const [showRegisterPsychologist, setShowRegisterPsychologist] =
    useState(false);

  const openRegisterPsychologist = () => {
    setShowRegisterPsychologist((prev) => !prev);
  };

  const handleClose = () => setShowRegisterPsychologist(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const roleBaseRedirect = (role) => {
    if (role === "psychologist") {
      history.push("/psychologist/index");
    }
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(value);

    loginPsycho(value)
      .then((res) => {
        console.log(res.data);
        alert(res.data);

        // send to Redux
        dispatch({
          type: "LOGIN_PSYCHO",
          payload: {
            token: res.data.token,
            email: res.data.payload.psychologist.email,
            role: res.data.payload.psychologist.role,
          },
        });

        // send to localstorage
        localStorage.setItem("token", res.data.token);
        roleBaseRedirect(res.data.payload.psychologist.role);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });
  };

  return (
    <>
      <div>
        <Form className="Form-loginPsycho">
          <h1>TAKECARE</h1>
          <h5 className="psycologist">( นักจิตวิทยา )</h5>
          <h6>ยินดีต้อนรับสู่ระบบนักจิตวิทยา</h6>

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

          <Form.Group className="register-button" controlID="formRegister">
            <p>หากยังไม่มีบัญชี </p>
            <Link to="#" onClick={openRegisterPsychologist}>
              ลงทะเบียน
            </Link>
            <RegisterPsychologist
              showRegisterPsychologist={showRegisterPsychologist}
              setShowRegisterPsychologist={setShowRegisterPsychologist}
            />
          </Form.Group>

          <Button
            disabled={value.password.length < 1}
            onClick={handleSubmit}
            variant="primary"
            className="login-button"
          >
            เข้าสู่ระบบ
          </Button>
        </Form>
      </div>
    </>
  );
}

export default LoginPsychologist;
