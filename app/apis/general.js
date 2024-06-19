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