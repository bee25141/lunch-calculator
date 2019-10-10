import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

export default function NavPills() {
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
        <NavLink href="/LogIn">Log In</NavLink>
      </NavItem>
    </Nav>
  );
}