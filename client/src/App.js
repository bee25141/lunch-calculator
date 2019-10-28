import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavMain from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import RestaurantAnalysis from "./pages/RestaurantAnalysis/RestaurantAnalysis";
import MealInput from "./pages/MealInput/MealInput";
import LogIn from "./pages/LogIn/LogIn";
import Logout from "./pages/Logout/Logout"
import Create from "./pages/Create/Create"
import Join from "./pages/Join/Join"
import MapContainer from "./pages/Map/Map"
import TitleCard from './components/TitleCard/TitleCard';
import { UserProvider } from './UserContext'
import Api from "./utils/Api"
import './App.css';

class App extends Component {

  state = {
    user: {}
  }

  componentDidMount() {

    let user_session = document.cookie.replace(/(?:(?:^|.*;\s*)x_session_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (user_session) {
      Api.getAuthenticatedUser(user_session)
        .then(userObject => {
          this.setState({ user: userObject.data })
        });
    } else {
      console.log('user not logged in');
    }
  }


  render() {

        return (
            <Router>
              <UserProvider value={this.state.user}>
                <div>
                  <NavMain />
                  <TitleCard />

                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/RestaurantAnalysis" component={RestaurantAnalysis} />
                      <Route exact path="/MealInput" component={MealInput} />
                      <Route exact path="/LogIn" component={LogIn} />
                      <Route exact path="/Logout" component={Logout} />
                      <Route exact path="/Create" component={Create} />
                      <Route exact path="/Join" component={Join} />
                    </Switch>
                  <Route exact path="/Map/:id" component={MapContainer} />
                </div>
            </UserProvider>
          </Router>
          );

}
}

export default App;
