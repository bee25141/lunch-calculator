import React, { useState } from "react";
import { Card, CardBody} from "shards-react";
import MealInputForm from "../MealInputForm/MealInputForm"
import "./style.css"

export default function MealInputCard (props) {

    return (
            <Card>
                <CardBody className="mealInputCard">

                <MealInputForm {...props} />

                </CardBody>
            </Card>
    )

}

