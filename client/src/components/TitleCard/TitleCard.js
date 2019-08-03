import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "./style.css"

export default function TitleCard() {
  return (
    <Card>
      <CardBody>
        <CardTitle><h1>Lunchbox Chi</h1></CardTitle>
        <CardSubtitle><h2>Finding the best bang for your $ in Chicago</h2></CardSubtitle>

      </CardBody>
    </Card>
  );
}