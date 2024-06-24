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
