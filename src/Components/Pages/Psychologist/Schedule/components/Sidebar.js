import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
  Box,
  Modal,
} from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Details, Phone, PhoneDisabled } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { Form, FloatingLabel } from "react-bootstrap";

import { SocketContext } from "../../../../../Context";

import { addHistoryCall, removeMeet } from "../../../../Functions/psychologist";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const submit = {
  width: "100%",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  container: {
    width: "600px",
    margin: "35px 0",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: "10px 20px",
    border: "2px solid black",
  },
}));

const Sidebar = ({ children, id, data, datail }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState(id);
  const [i, setI] = useState(true);
  const classes = useStyles();

  // const [datail, setDatail] = useState("");

  // const handleChange = (e) => {
  //   setDatail(e.target.value);
  // };
  console.log(datail);

  const leaveCalls = (data) => {
    // handleOpen();
    addhistory(data);

    leaveCall(data);
  };

  const addhistory = (data) => {
    console.log("data call", data);
    const history = {
      namePsycho: data.namePsycho,
      lassnamePsycho: data.lassnamePsycho,
      emailPsycho: data.emailPsycho,
      telephonePsycho: data.telephonePsycho,
      date: data.date,
      time: data.time,
      period: data.period,
      price: data.price,
      nameUser: data.nameUser,
      lassnameUser: data.lassnameUser,
      emailUser: data.emailUser,
      datail: datail,
    };

    addHistoryCall(history)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    // console.log(market._id);
    removeMeet(data._id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <Container className={classes.container}>
        <Paper elevation={10} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container className={classes.gridContainer}>
              {/* <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <CopyToClipboard text={me} className={classes.margin}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Assignment fontSize="large" />}
                >
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid> */}
              {/* <Grid item xs={12} md={6} className={classes.padding}> */}
              {/* <Typography gutterBottom variant="h6">
              Make a call
            </Typography> */}
              {/* <TextField
              label="ID to call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
              fullWidth
            /> */}
              {callAccepted && !callEnded ? (
                <Link to="/psychologist/index">
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<PhoneDisabled fontSize="large" />}
                    fullWidth
                    onClick={() => leaveCalls(data)}
                    className={classes.margin}
                  >
                    วางสาย
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Phone fontSize="large" />}
                  fullWidth
                  disabled={idToCall == ""}
                  onClick={() => callUser(idToCall)}
                  className={classes.margin}
                >
                  โทร
                </Button>
              )}
              {/* </Grid> */}
            </Grid>
          </form>
          {children}
        </Paper>
      </Container>
      {/* <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              รายละเอียดในการคุยครั้งนี้
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  name="datail"
                  onChange={handleChange}
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "200px" }}
                />
              </FloatingLabel>
              <br />
              <br />
              <Link to="/psychologist/index">
                <Button
                  onClick={() => addhistory(data)}
                  style={submit}
                  variant="contained"
                  color="primary"
                >
                  บันทึก
                </Button>
              </Link>
            </Typography>
          </Box>
        </Modal>
      </div> */}
    </>
  );
};

export default Sidebar;
