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
    return error?.response;
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
    return error?.response;
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
      sponsors,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/createEvent`,
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
        sponsors,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
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
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/user/events`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
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
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/${id}`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
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
      sponsors,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/${id}`,
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
        sponsors,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
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
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/${id}`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
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
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/admin/events`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const createTicket = async (
  ticketType,
  ticketPrice,
  availableTickets,
  ticketAdmits,
  eventId,
  token
) => {
  try {
    console.log({
      ticketType,
      ticketPrice,
      availableTickets,
      ticketAdmits,
      eventId,
      token,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/createTicket`,
      {
        ticketType,
        ticketPrice,
        availableTickets,
        ticketAdmits,
        eventId,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
export const addEventImage = async (image, eventId, token) => {
  try {
    console.log({
      image,
      eventId,
      token,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/addImage`,
      {
        image,
        eventId,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const toggleEventDay = async (
  isEventDay,
  id,
  token
) => {
  try {
    console.log({
      isEventDay,
      id,
      token,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/${id}/toggle-event-day`,
      {
        isEventDay
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
export const otherEventDetails = async (
  entryPoints,
  venueEntryPoint,
  scanner,
  staffScanning,
  validationRule,
  ticketTypeRule,
  specialCondition,
  id,
  token
) => {
  try {
    console.log({
      entryPoints,
      venueEntryPoint,
      scanner,
      staffScanning,
      validationRule,
      ticketTypeRule,
      specialCondition,
      id,
      token,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/${id}/event-day`,
      {
        entryPoints,
        venueEntryPoint: entryPoints,
        scanner,
        staffScanning,
        validationRule,
        ticketTypeRule,
        specialCondition,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
export const toggleBoost = async (boost, id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/${id}/toggle-boost`,
      { boost },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const toggleBoostDetails = async (
  boostType,
  boostDetails,
  id,
  token
) => {
  try {
    console.log({
      boostType,
      boostDetails,
      id,
      token,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/${id}/boost-details`,
      {
        boostType,
        boostDetails,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const earlyBirdPricing = async (enabled, type, details, id, token) => {
  try {
    console.log({
      enabled,
      type,
      details,
      id,
      token,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/${id}/early-bird`,
      {
        enabled,
        type,
        details,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const discountPricing = async (enabled, type, details, id, token) => {
  try {
    console.log({
      enabled,
      type,
      details,
      id,
      token,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/${id}/discount`,
      {
        enabled,
        type,
        details,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const eventFaq = async (title, description, id, token) => {
  try {
    console.log({
      title, description,
      id,
      token,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_DEV_URL}/events/${id}/faqs`,
      {
        title, description
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
