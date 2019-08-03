import React from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";


export default function MealInputForm(props) {

  return (
    <Form className="form">`

      <FormGroup>
        <label htmlFor="#restaurant">Restaurant</label>
        <FormInput id="#restaurant" name="restaurant" placeholder="Restaurant" 
        value={props.restaurant}
        onChange={props.handleInputChange} />
      </FormGroup>

      <FormGroup>
        <label htmlFor="#location">Location</label>
        <FormInput id="#location" name="location" 
        value={props.location} placeholder="Location" 
        onChange={props.handleInputChange} />
      </FormGroup>

      <FormGroup>
        <label htmlFor="#meal_description">Meal Description</label>
        <FormInput id="#meal_description" name="description"
        value={props.description} placeholder="Meal Description" 
        onChange={props.handleInputChange} />
      </FormGroup>

      <FormGroup>
        <label htmlFor="#weight">Weight</label>
        <FormInput type="number" id="#weight" name="weight"
        value={props.weight} placeholder="Weight to Nearest oz." 
        onChange={props.handleInputChange} />
      </FormGroup>

      <FormGroup>
        <label htmlFor="#cost">Cost (to the nearest dollar)</label>
        <FormInput type="number" id="#cost" name="cost"
        value={props.cost} placeholder="Dolla Dolla Bills Ya'll"
        onChange={props.handleInputChange} />
      </FormGroup>

      <Button theme="primary" onClick={props.handleFormSubmit} >Submit</Button>

    </Form>
    
  );
}