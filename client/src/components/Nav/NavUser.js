import React from "react";
import { UserConsumer } from "../../UserContext";
import { Nav, NavItem, NavLink } from "shards-react";

export default function NavUser() {
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
        <NavLink href="/Logout">Log Out</NavLink>
      </NavItem>
    </Nav>
  );
}