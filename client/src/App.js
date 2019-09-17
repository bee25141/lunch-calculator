import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavPills from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import RestaurantAnalysis from "./pages/RestaurantAnalysis/RestaurantAnalysis";
import MealInput from "./pages/MealInput/MealInput";
import LogIn from "./pages/LogIn/LogIn";
import Create from "./pages/Create/Create"
import MapContainer from "./pages/Map/Map"
import TitleCard from './components/TitleCard/TitleCard';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <NavPills />
      <TitleCard />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/RestaurantAnalysis" component={RestaurantAnalysis} />
        <Route exact path="/MealInput" component={MealInput} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/Create" component={Create} />
      </Switch>
      <Route exact path="/Map/:id" component={MapContainer} />
    </div>
  </Router>
  );
}

export default App;
