import React, {useContext} from "react";
import { UserConsumer } from "../../UserContext";
import NavUser from "./NavUser";
import NavAdmin from "./NavAdmin";
import NavGuest from "./NavGuest";

export default function NavMain() {

  const user = useContext(UserConsumer)
  console.log("user context", user)

  if (user.admin){
    return (<NavAdmin/>)
  } else if (user.email){
    return (<NavUser/>)
  } else return <NavGuest/> 

  // return <NavGuest/>

};