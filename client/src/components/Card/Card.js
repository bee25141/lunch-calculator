import React from "react";
import {Card, CardTitle, CardBody, CardHeader,} from "shards-react"

export default function AddressCard(props) {

    return (
        <Card>

            <CardHeader> {props.restaurant} </CardHeader>

            <CardTitle>{props.address}</CardTitle>

            <CardBody>Average $/ lb: {props.average}</CardBody>

        </Card>
    )
}