import React from "react";
import {Card, CardTitle, CardBody, CardHeader,} from "shards-react"
import "./style.css"

export default function AddressCard(props) {

    return (
        <Card>

            <CardHeader className="content"> {props.restaurant} </CardHeader>

            <CardTitle className="content">{props.address}</CardTitle>

            <CardBody className="content">Average $/ lb: ${props.average}</CardBody>

        </Card>
    )
}