import axios from "axios";

export function createEvent(event) {
  return axios.post("/api/events", event);
}
