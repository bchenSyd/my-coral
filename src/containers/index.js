import Appointments from "./appointments";
import Tasks from "./tasks";

export { Appointments, Tasks };

export const containerMap = new Map([["today", Appointments], ["todo", Tasks]]);
