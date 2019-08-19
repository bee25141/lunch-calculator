import React from "react";
import {Card, CardTitle, CardBody, CardHeader,} from "shards-react"
import "./style.css"

export default function AddressCard(props) {

    return (
        <Card>

            <CardHeader> {props.restaurant} </CardHeader>

            <CardTitle className="content">{props.address}</CardTitle>

            <CardBody>Average $/ lb: ${props.average}</CardBody>

        </Card>
    )
}