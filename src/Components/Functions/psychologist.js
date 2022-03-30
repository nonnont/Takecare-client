import axios from "axios";

export const getDataPsychologist = async (authtoken, email) => {
  return await axios.get(process.env.REACT_APP_API + "/psychologist/" + email, {
    Headers: {
      authtoken,
    },
  });
};

export const postMarket = async (authtoken, value) => {
  return await axios.post(
    process.env.REACT_APP_API + "/psychologist/market",
    value,
    {
      Headers: {
        authtoken,
      },
    }
  );
};

export const getMarket = async (authtoken, email) => {
  return await axios.get(
    process.env.REACT_APP_API + "/psychologist/getmarket/" + email,
    {
      Headers: {
        authtoken,
      },
    }
  );
};

export const removeMarket = async (authtoken, id) => {
  return await axios.delete(
    process.env.REACT_APP_API + "/psychologist/removemarket/" + id,
    {
      Headers: {
        authtoken,
      },
    }
  );
};

export const getMeet = async (authtoken, email) => {
  return await axios.get(
    process.env.REACT_APP_API + "/psychologist/getmeet/" + email,
    {
      Headers: {
        authtoken,
      },
    }
  );
};

export const updateIdcall = async (authtoken, id, me) => {
  return await axios.put(
    process.env.REACT_APP_API + "/psychologist/updateidcall/" + id,
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
    process.env.REACT_APP_API + "/psychologist/removemeet/" + id
  );
};

export const addHistoryCall = async (value) => {
  console.log("value", value);
  return await axios.post(
    process.env.REACT_APP_API + "/psychologist/addhistorycall",
    value
  );
};

export const getHistoryCall = async (authtoken, email) => {
  return await axios.get(
    process.env.REACT_APP_API + "/psychologist/gethistorycall/" + email,
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
    process.env.REACT_APP_API + "/psychologist/addcancelcall",
    value
  );
};

export const getCancelCall = async (authtoken, email) => {
  return await axios.get(
    process.env.REACT_APP_API + "/psychologist/getcancelcall/" + email,
    {
      Headers: {
        authtoken,
      },
    }
  );
};
