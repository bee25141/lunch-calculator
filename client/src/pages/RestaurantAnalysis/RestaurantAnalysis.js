import React, { Component } from "react";
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
       if (res.status === 200) {
         console.log(res.data)
         this.setState({restaurantData: res.data})
       }
       else {
         console.log("no data returned")
       }
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