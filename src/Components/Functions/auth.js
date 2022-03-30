import axios from "axios";

export const register = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/register", value);

export const registerPsychologist = async (value) => {
  await axios.post(process.env.REACT_APP_API + "/register-psychologist", value);
};
// upload.single("verify"),

export const login = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/login", value);

export const loginPsycho = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/login-psychologist", value);

// function user ปัจจุบัน ดึง token จาก localStorage มาเก็บไว้ที่ backend
export const currentUser = async (authtoken) => {
  return await axios.post(
    process.env.REACT_APP_API + "/current-user",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

// function เช็ค email ไปเช็ค backend ตลอดว่าใช่ admin หรือเปล่า
export const currentAdmin = async (authtoken) => {
  return await axios.post(
    process.env.REACT_APP_API + "/current-admin",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

// function psychologist ปัจจุบัน ดึง token จาก localStorage มาเก็บไว้ที่ backend
export const currentPsychologist = async (authtoken) => {
  return await axios.post(
    process.env.REACT_APP_API + "/current-psychologist",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
