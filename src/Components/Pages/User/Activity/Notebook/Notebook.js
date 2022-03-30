import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { postNotebook, getNotebook } from "../../../../Functions/users";

// style
import "./Notebook.css";
import {
  Button,
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Table,
} from "react-bootstrap";

const Notebook = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [data, setData] = useState([user.email]);
  console.log("data => ", data);

  const [notebook, setNotebook] = useState([]);
  console.log("notebook =>", notebook);

  useEffect(() => {
    loadNotebook();
  }, []);

  const loadNotebook = async (email) => {
    await getNotebook(user.token, data[0])
      .then((res) => {
        setNotebook(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const [value, setValue] = useState({
    email: "",
    message: "",
  });

  const onSubmit = async (email) => {
    await postNotebook(user.token, value)
      .then((res) => {
        console.log("data na", res.data);
        loadNotebook();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      email: user.email,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="back2">
        <Link to="/user/activity">
          <Button variant="secondary">ย้อนกลับ</Button>
        </Link>
        <Link to="#">
          <Button onClick={onSubmit} variant="success">
            บันทึก
          </Button>
        </Link>
      </div>
      <br />
      <Container>
        <Row>
          <Col md="12">
            <FloatingLabel
              controlId="floatingTextarea2"
              label="วันนี้คุณรู้สึกอย่างไรบ้าง บอกเราได้นะ..."
            >
              <Form.Control
                name="message"
                onChange={handleChange}
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Col>

          <Col md="12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>วันที่</th>
                  <th>ข้อความที่คุณรู้สึกในวันนั้น</th>
                </tr>
              </thead>
              <tbody>
                {notebook.map((item, index) => (
                  <tr>
                    <td>{item.createdAt}</td>
                    <td>{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Notebook;
