import React, {useContext} from "react";
import { UserConsumer } from "../../UserContext";
import NavUser from "./NavUser";
import NavAdmin from "./NavAdmin";
import NavGuest from "./NavGuest";
import { Nav, NavItem, NavLink } from "shards-react";

export default function NavMain() {

  const user = useContext(UserConsumer)
  console.log("user context", user)

  if (user.admin){
    return (<NavAdmin/>)
  } else if (user){
    return (<NavUser/>)
  } else return <NavGuest/> 

};