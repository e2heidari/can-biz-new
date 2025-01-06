import { Business } from "./types";
import data from "./businesses-data.json";

export const businesses: Business[] = data.map((business) => ({
  ...business,
  createdAt: new Date(),
  updatedAt: new Date(),
}));
