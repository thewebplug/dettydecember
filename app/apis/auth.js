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
    const res = await axios.post(`${process.env.NEXT_PUBLIC_DEV_URL}/auth/signup`, {
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
    const res = await axios.post(`${process.env.NEXT_PUBLIC_DEV_URL}/auth/login`, {
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
    const res = await axios.post(`${process.env.NEXT_PUBLIC_DEV_URL}/forgot-password`, {
      email
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
