import React, {useContext} from "react";
import { UserConsumer } from "../../UserContext";
import NavUser from "./NavUser";
import NavAdmin from "./NavAdmin";
import NavGuest from "./NavGuest";
import { Nav, NavItem, NavLink } from "shards-react";

export default function NavMain() {

  const user = useContext(UserConsumer)
  console.log("user", user)
  return (
    <Nav pills>
      <NavItem>
        <NavLink active href="/">
          Lunchbox Chi
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/RestaurantAnalysis">Restaurant Analysis</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/MealInput">Meal Input</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Create">Create User</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/LogIn">Log In</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Logout">Log Out</NavLink>
      </NavItem>
    </Nav>
  );
}