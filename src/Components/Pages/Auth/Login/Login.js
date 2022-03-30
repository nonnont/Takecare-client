// React
import React, { useState } from "react";

// Style
import "./Login.css";
import img from "./index.png";
import { Form, Button } from "react-bootstrap";

// Router
import { Link } from "react-router-dom";
import RegisterUser from "../RegisterUser/RegisterUser";

// Function
import { login } from "../../../Functions/auth";

// Redux
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// import io from "socket.io-client";

// const socket = io.connect("http://localhost:5000");

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [showRegisterUser, setShowRegisterUser] = useState(false);
  const openRegisterUser = () => {
    setShowRegisterUser((prev) => !prev);
  };

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const roleBaseRedirect = (role) => {
    if (role === "admin") {
      history.push("/admin/index");
    } else {
      history.push("/user/index");
    }
    window.location.reload(false);
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

    login(value)
      .then((res) => {
        console.log(res.data);
        alert(res.data);

        // send to Redux
        dispatch({
          type: "LOGIN",
          payload: {
            token: res.data.token,
            email: res.data.payload.user.email,
            role: res.data.payload.user.role,
          },
        });

        // send to localstorage
        localStorage.setItem("token", res.data.token);
        roleBaseRedirect(res.data.payload.user.role);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });
  };

  return (
    <>
      <div className="left">
        <img className="img" src={img} alt="" />
      </div>

      <div className="right">
        <Form>
          <h1>TAKECARE</h1>
          <h6>ยินดีต้อนรับสู่ระบบดูแล</h6>

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

          <Form.Group className="registers-button" controlID="formRegister">
            <p>หากยังไม่มีบัญชี</p>
            <Link to="/" onClick={openRegisterUser}>
              <p2> ลงทะเบียน</p2>
            </Link>

            <RegisterUser
              showRegisterUser={showRegisterUser}
              setShowRegisterUser={setShowRegisterUser}
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

          <Button
            className="lg-psycho"
            variant="link"
            onClick={() => {
              window.location.reload(false);
            }}
          >
            <div className="login-psychologist">
              <Link to="/psychologist/login">
                <p3>เข้าใช้งานระบบนักจิตวิทยา</p3>
              </Link>
            </div>
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
