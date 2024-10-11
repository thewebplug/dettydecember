import axios from "axios";

export const bookUpcomingEvents = async (
  category,
  eventName,
  oneOff,
  eventDate,
  numberOfTicketsPerYear,
  ticketType,
  eventsLocation,
  description,
  companyName,
  firstName,
  lastName,
  email,
  phone,
  eventsPerYear,
  ticketPrice,
  venue,
  capacity,
  title,
  website,
  ticketProvider
) => {
  try {
    console.log({
      category,
      eventName,
      oneOff,
      eventDate,
      numberOfTicketsPerYear,
      ticketType,
      eventsLocation,
      description,
      companyName,
      firstName,
      lastName,
      email,
      phone,
      eventsPerYear,
      ticketPrice,
      venue,
      capacity,
      title,
      website,
      ticketProvider,
    });
    const res = await axios.post(
      `http://api-domestic.dettydecember.xyz/events/upcoming`,
      {
        category,
        eventName,
        oneOff,
        eventDate,
        numberOfTicketsPerYear,
        ticketType,
        eventsLocation,
        description,
        companyName,
        firstName,
        lastName,
        email,
        phone,
        eventsPerYear,
        ticketPrice,
        venue,
        capacity,
        title,
        website,
        ticketProvider,
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};


export const bookEventsLearn = async (
  numberOfTicketsPerYear,
  ticketType,
  eventsLocation,
  description,
  companyName,
  firstName,
  lastName,
  email,
  phone
) => {
  try {
    console.log({
      numberOfTicketsPerYear,
      ticketType,
      eventsLocation,
      description,
      companyName,
      firstName,
      lastName,
      email,
      phone,
    });
    const res = await axios.post(
      `http://api-domestic.dettydecember.xyz/events/learn`,
      {
        numberOfTicketsPerYear,
        ticketType,
        eventsLocation,
        description,
        companyName,
        firstName,
        lastName,
        email,
        phone,
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};


export const createEvent = async (
  category,
  title,
  description,
  capacity,
  address,
  town,
  state,
  country,
  mapLink,
  timeZone,
  date,
  time,
  userId,
  performers,
  organizers,
  sponsors,
  token
) => {
  try {
    console.log({
      category,
  title,
  description,
  capacity,
  address,
  town,
  state,
  country,
  mapLink,
  timeZone,
  date,
  time,
  userId,
  performers,
  organizers,
  sponsors
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.post(
      `http://3.238.81.121:5000/events/createEvent`,
      {
        category,
        title,
        description,
        capacity,
        address,
        town,
        state,
        country,
        mapLink,
        timeZone,
        date,
        time,
        userId,
        performers,
        organizers,
        sponsors
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const getUserEvents = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.get(
      `http://3.238.81.121:5000/events/user/events`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const getUserEvent = async (id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.get(
      `http://3.238.81.121:5000/events/${id}`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const editEvent = async (
  id,
  category,
  title,
  description,
  capacity,
  address,
  town,
  state,
  country,
  mapLink,
  timeZone,
  date,
  time,
  userId,
  performers,
  organizers,
  sponsors,
  token
) => {
  try {
    console.log({
      id,
      category,
  title,
  description,
  capacity,
  address,
  town,
  state,
  country,
  mapLink,
  timeZone,
  date,
  time,
  userId,
  performers,
  organizers,
  sponsors
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.patch(
      `http://3.238.81.121:5000/events/${id}`,
      {
        category,
        title,
        description,
        capacity,
        address,
        town,
        state,
        country,
        mapLink,
        timeZone,
        date,
        time,
        userId,
        performers,
        organizers,
        sponsors
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const deleteEvent = async (id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.delete(
      `http://3.238.81.121:5000/events/${id}`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const adminGetEvents = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.get(
      `http://3.238.81.121:5000/events/admin/events`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};