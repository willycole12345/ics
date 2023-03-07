import { menuItemProps } from "../types";

const menuList: {
  others: menuItemProps[];
  customers: menuItemProps[];
  businesses: menuItemProps[];
  settings: menuItemProps[];
} = {
  others: [{ icon: "", title: "Dashboard", iconAlt: "dashboard", href: "/" }],
  customers: [],
  businesses: [],
  settings: [],
};

export default menuList;
