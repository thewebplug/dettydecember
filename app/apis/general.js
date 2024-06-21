import axios from "axios";

export const joinWaitList = async (email) => {
  try {
    const res = await axios.post(
      ` http://api-domestic.dettydecember.xyz/waitlist/waitlist-email`,
      {
        email,
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const getEvenCategories = async () => {
  try {
    const res = await axios.get(
      ` http://api-domestic.dettydecember.xyz/events/user/categories`,
    
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};