import ticketIcon from "/public/assets/DD/tickets.svg";
import settingIcon from "/public/assets/DD/settings.svg";
import singoutIcon from "/public/assets/DD/signouts.svg";
import wishlistIcon from "/public/assets/DD/wishlist.svg";
import picksIcon from "/public/assets/DD/picks.svg";
import listingIcon from "/public/assets/DD/listings.svg";
import supportIcon from "/public/assets/DD/supports.svg";

export const navItems = [
  {
    label: "My Tickets",
    link: "/users/dashboard/tickets",
    icon: ticketIcon,
    paths: "",
    children: [
      {
        label: "All Tickets",
        link: "",
      },
      {
        label: "Upcomming Events",
        link: "",
      },

      {
        label: "Past Events",
        link: "",
      },
    ],
  },
  {
    label: "My Wishlists",
    link: "/users/dashboard/wishlist",
    icon: wishlistIcon,
    path: "",
  },
  {
    label: "Picks For Me",
    link: "/users/dashboard/picks",
    icon: picksIcon,
    path: "",
  },
  {
    label: "My Listings",
    link: "/users/dashboard/listings",
    icon: listingIcon,
    children: [
      {
        label: "All Listings",
        path: "",
        link: "",
      },
      {
        label: "Active",
        path: "",
        link: "",
      },
      {
        label: "Sold",
        path: "",
        link: "",
      },
      {
        label: "Unsold",
        path: "",
        link: "",
      },
    ],
  },
  {
    label: "Settings",
    link: "/users/dashboard/settings",
    icon: settingIcon,
    children: [
      {
        label: "Account",
        path: "",
        link: "",
      },
      {
        label: "Billing Information",
        path: "",
        link: "",
      },
      {
        label: "Credit Balance",
        path: "",
        link: "",
      },
      {
        label: "Gift Vouchers",
        path: "",
        link: "",
      },
      {
        label: "Notifications",
        path: "",
        link: "",
      },
      {
        label: "Preferences",
        path: "",
        link: "",
      },
    ],
  },
  {
    label: "Supports",
    link: "/users/dashboard/supports",
    icon: supportIcon,
    path: "",
  },
  {
    label: "Sign out",
    link: "/signout",
    icon: singoutIcon,
    path: "",
  },
];
