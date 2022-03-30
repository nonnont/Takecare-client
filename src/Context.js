import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

// import { addHistoryCall, removeMeet } from "./Components/Functions/users";
// import {
//   addHistoryCall,
//   removeMeet,
// } from "./Components/Functions/psychologist";

const SocketContext = createContext();

// const socket = io.connect("http://20.24.156.74");
const socket = io.connect(process.env.REACT_APP_SOCKET);
//const socket = io("https://warm-wildwood-81069.herokuapp.com");
// const socket = io("http://takecare-server.herokuapp.com");

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [me, setMe] = useState("");
  const [id, setID] = useState("");

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    socket.on("me", (id) => setMe(id));

    socket.on("callUser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
      console.log("aaa", from, callerName, signal);
    });

    // socket.on("callEnded", () => {
    //   leaveCall();
    // });
  }, []);

  // function รับสาย
  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", {
        signal: data,
        to: call.from,
        name: name,
        me: me,
      });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
      // try {
      // } catch (err) {}
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  // function ผู้ใช้โทร
  const callUser = (id) => {
    //media();
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data) => {
      console.log(id);
      console.log("bbb", me, data);
      setID(id);
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });

    peer.on("stream", (currentStream) => {
      console.log("eee", currentStream);
      userVideo.current.srcObject = currentStream;
      // try {
      // } catch (err) {}
    });

    // function รับสายอัตโนมัติ
    socket.on("callAccepted", ({ signal, name, me }) => {
      console.log(signal, name, signal.type);
      if (signal.type === "answer") {
        setCall({ name: name });
        setCallAccepted(true);
        console.log("ccc", signal, name, me);

        peer.signal(signal);
      }
      // setCall({ name: name });
      // setCallAccepted(true);
      // console.log("ccc", call);

      // peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  // function วางสาย
  const leaveCall = (data) => {
    setCallEnded(true);

    connectionRef.current.destroy();

    // addhistory(data);

    // try {
    //   setCallAccepted(false);
    //   // setCallEnded(false);

    //   //window.location.reload();
    // } catch (err) {}
  };

  const media = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        myVideo.current.srcObject = currentStream;
      });
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        media,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
