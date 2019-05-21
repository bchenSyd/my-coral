import Appointments from "./appointments";
import Tasks from "./tasks";
import AccountsHoldings from "./accountsHoldings";
import BorrowingPower from "./borrwoingPower";
import Upcoming from "./upcoming";
import Needs from "./needs";

export { Appointments, Tasks, AccountsHoldings, BorrowingPower, Upcoming };

export const cardMap = new Map([
  ["today", Appointments],
  ["todo", Tasks],
  ["needs", Needs],
  ["accountsHolding", AccountsHoldings],
  ["borrowingPower", BorrowingPower],
  ["upcoming", Upcoming]
]);
