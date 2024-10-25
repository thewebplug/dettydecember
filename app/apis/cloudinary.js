import axios from "axios";

export const uploadImageToCloudinary = async (
  message,
  data,
  optimizedUrl,
  token
) => {
  try {
    console.log({
      message,
      data,
      optimizedUrl,
      token,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_DEV_URL}/cloudinary/upload`,
      {
        message,
        data,
        optimizedUrl,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
