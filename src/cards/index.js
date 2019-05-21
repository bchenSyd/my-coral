import Appointments from "./appointments";
import Tasks from "./tasks";
import AccountsHoldings from "./accountsHoldings";
import BorrowingPower from "./borrwoingPower";
import Upcoming from "./upcoming";

export { Appointments, Tasks, AccountsHoldings, BorrowingPower, Upcoming };

export const cardMap = new Map([
  ["today", Appointments],
  ["todo", Tasks],
  ["accountsHolding", AccountsHoldings],
  ["borrowingPower", BorrowingPower],
  ["upcoming", Upcoming]
]);
