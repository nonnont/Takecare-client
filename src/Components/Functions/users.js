import axios from "axios";

export const listUsers = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/users", {
    Headers: {
      authtoken,
    },
  });
};

export const readUsers = async (authtoken, id) => {
  return await axios.get(process.env.REACT_APP_API + "/users/" + id, {
    Headers: {
      authtoken,
    },
  });
};

export const updateScore = async (authtoken, email, value) => {
  return await axios.put(process.env.REACT_APP_API + "/users/" + email, value, {
    Headers: {
      authtoken,
    },
  });
};

export const getScore = async (authtoken, email) => {
  return await axios.get(
    process.env.REACT_APP_API + "/users/activity/" + email,
    {
      Headers: {
        authtoken,
      },
    }
  );
};

export const postNotebook = async (authtoken, value) => {
  return await axios.post(
    process.env.REACT_APP_API + "/users/activity/notebook/postnotebook",
    value,
    {
      Headers: {
        authtoken,
      },
    }
  );
};

export const getNotebook = async (authtoken, email) => {
  return await axios.get(
    process.env.REACT_APP_API + "/users/activity/notebook/getnotebook/" + email,
    {
      Headers: {
        authtoken,
      },
    }
  );
};

export const getMarket = async (authtoken, stress, depression, suicide) => {
  return await axios.get(
    process.env.REACT_APP_API +
      "/user/meet/getmarket/" +
      stress +
      "/" +
      depression +
      "/" +
      suicide,
    {
      Headers: {
        authtoken,
      },
    }
  );
};

export const removeMarket = async (id) => {
  console.log(id);
  return await axios.delete(
    process.env.REACT_APP_API + "/user/removemarket/" + id
  );
};

export const addMeet = async (authtoken, value) => {
  console.log("value", value);
  return await axios.post(process.env.REACT_APP_API + "/user/addmeet", value, {
    Headers: {
      authtoken,
    },
  });
};

export const getMeet = async (authtoken, email) => {
  return await axios.get(
    process.env.REACT_APP_API + "/users/getmeet/" + email,
    {
      Headers: {
        authtoken,
      },
    }
  );
};

export const updateIdcall = async (authtoken, id, me) => {
  return await axios.put(
    process.env.REACT_APP_API + "/users/updateidcall/" + id,
    me,
    {
      Headers: {
        authtoken,
      },
    }
  );
};

export const removeMeet = async (id) => {
  console.log(id);
  return await axios.delete(
    process.env.REACT_APP_API + "/user/removemeet/" + id
  );
};

// export const addHistoryCall = async (value) => {
//   console.log("value", value);
//   return await axios.post(
//     process.env.REACT_APP_API + "/user/addhistorycall",
//     value
//   );
// };

export const getHistoryCall = async (authtoken, email) => {
  return await axios.get(
    process.env.REACT_APP_API + "/user/gethistorycall/" + email,
    {
      Headers: {
        authtoken,
      },
    }
  );
};

export const addCancelCall = async (value) => {
  console.log("value", value);
  return await axios.post(
    process.env.REACT_APP_API + "/user/addcancelcall",
    value
  );
};

export const getCancelCall = async (authtoken, email) => {
  return await axios.get(
    process.env.REACT_APP_API + "/user/getcancelcall/" + email,
    {
      Headers: {
        authtoken,
      },
    }
  );
};

export const postAverageScore = async (authtoken, value) => {
  return await axios.post(
    process.env.REACT_APP_API + "/users/activity/averagescore/postAverageScore",
    value,
    {
      Headers: {
        authtoken,
      },
    }
  );
};
