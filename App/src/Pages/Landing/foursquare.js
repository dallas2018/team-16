import React from "react";
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from "reactstrap";

export default class FourSquare extends React.Component {
  render () {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Young Adults</CardTitle>
            <CardSubtitle>Age: 18-24</CardSubtitle>
            <CardText>Hover over for successful stories!</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
