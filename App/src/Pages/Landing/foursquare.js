import React from "react";
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, ToolTip } from "reactstrap";

export default class FourSquare extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

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
        <Card>
          <CardBody>
            <CardTitle>Adults</CardTitle>
            <CardSubtitle>Age: 18 and Higher </CardSubtitle>
            <CardText>Hover over for successful stories!</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Veteran</CardTitle>
            <CardSubtitle>Former Member of the Armed Services</CardSubtitle>
            <CardText>Hover over for successful stories!</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Rehabilitated</CardTitle>
            <CardSubtitle>A Second Chance</CardSubtitle>
            <CardText>Hover over for successful stories!</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
