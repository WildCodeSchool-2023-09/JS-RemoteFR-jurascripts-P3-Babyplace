import moment from "moment";
import { iconsNavbar } from "../assets";

export const navLinks = [
  {
    id: 1,
    title: "Liste des demandes",
    img: iconsNavbar.reservation,
    url: "/pro/dashboard/reservationdashboard",
  },
  {
    id: 2,
    title: "Agenda",
    img: iconsNavbar.agenda,
    url: "/pro/dashboard/agenda",
  },
  {
    id: 3,
    title: "Email",
    img: iconsNavbar.email,
    url: "/pro/dashboard/reservationdashboard",
  },
  {
    id: 4,
    title: "Compte",
    img: iconsNavbar.gears,
    url: "/pro/dashboard/agenda",
  },
];

export const tutorial = [
  {
    id: 1,
    text: "Trouver un.e professionnel.le de la garde d’enfant",
  },
  {
    id: 2,
    text: "Réservez une place en moins de 60 secondes et obtenez une solution de garde, même pour le lendemain !",
  },
];

export const createEventId = (() => {
  let eventGuid = 0;
  return () => {
    const newEventId = String(eventGuid);
    eventGuid += 1;
    return newEventId;
  };
})();

const todayStr = moment().format("YYYY-MM-DD");
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Repas",
    start: `${todayStr}T09:00:00`,
  },
  {
    id: createEventId(),
    title: "dodo",
    start: `${moment(todayStr).add(1, "days").format("YYYY-MM-DD")}T16:00:00`,
  },
  {
    id: createEventId(),
    title: "Mcdo pour Charles",
    start: `${moment(todayStr).add(4, "days").format("YYYY-MM-DD")}T19:00:00`,
  },
  {
    id: createEventId(),
    title: "WCS",
    start: `${moment(todayStr).add(5, "days").format("YYYY-MM-DD")}T09:00:00`,
  },
  {
    id: createEventId(),
    title: "Hackathon",
    start: `${moment(todayStr).add(6, "days").format("YYYY-MM-DD")}T10:00:00`,
  },
  {
    id: createEventId(),
    title: "Hackathon",
    start: `${moment(todayStr).add(7, "days").format("YYYY-MM-DD")}T14:00:00`,
  },
];
