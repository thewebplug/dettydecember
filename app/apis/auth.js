import axios from "axios";

export const signUp = async (email, phoneNumber, password, firstName, lastName, country, userType) => {
  try {
    console.log({
      email,
      phoneNumber,
      password,
      firstName,
      lastName,
      country,
      phoneNumber,
      userType
    });
    const res = await axios.post(`http://3.238.81.121:5000/auth/signup`, {
      email,
      password,
      firstName,
      lastName,
      country,
      phoneNumber,
      userType
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios.post(`http://3.238.81.121:5000/auth/login`, {
      email,
      password,
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const forgotPassword = async (email) => {
  try {
    const res = await axios.post(`http://3.238.81.121:5000/forgot-password`, {
      email
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
