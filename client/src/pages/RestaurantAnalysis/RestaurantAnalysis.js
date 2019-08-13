import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import BarGraph from "../../components/BarGraph/BarGraph"
import {Container, Row, Col} from "../../components/Grid/Grid"
import Api from "../../utils/Api";

class RestaurantAnalysis extends Component {
  state = {
    restaurantData: []
  }

  callback = () => {
    console.log(this.state);
  }
   componentDidMount () {
     Api.getAllData()
     .then(res => {
       this.setState({restaurantData: res.data})
     })

   }
	render() {

        return (
              <Container fliuid>
                  <Row>

                      
                      <Col size="md-11">
                         <BarGraph data={this.state.restaurantData} />
                      </Col>
                      
                  </Row>
              </Container>

            );
          };


	}


export default RestaurantAnalysis;