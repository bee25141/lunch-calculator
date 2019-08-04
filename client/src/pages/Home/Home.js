import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

export default function Home() {
  return (
    <Card>
      <CardBody>
        <CardTitle>Lunchbox Chi</CardTitle>
        There's nothing worse than paying $15.00 for lunch in Chicago and being hungry two hours later. <br />
        Lunchbox Chi is an ongoing project to find the best bargain on lunch in the city. <br />
      </CardBody>
    </Card>
  );
}