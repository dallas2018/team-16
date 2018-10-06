import React from "react";
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Tooltip } from "reactstrap";

export default class FourSquare extends React.Component {
  constructor (props) {
    super(props);
    this.toggleYD = this.toggleYD.bind(this);
    this.toggleA = this.toggleA.bind(this);
    this.toggleV = this.toggleV.bind(this);
    this.toggleP = this.toggleP.bind(this);
    this.state = {
      YDtooltipOpen: false
    };
  }

  toggleYD () {
    this.setState({
      YDtooltipOpen: !this.state.YDtooltipOpen
    });
  }

  toggleA () {
    this.setState({
      AtooltipOpen: !this.state.AtooltipOpen
    });
  }

  toggleV () {
    this.setState({
      VtooltipOpen: !this.state.VtooltipOpen
    });
  }

  toggleP () {
    this.setState({
      PtooltipOpen: !this.state.PtooltipOpen
    });
  }

  render () {
    return (
      <div>
        <Card>
          <CardBody id='YDTool'>
            <Tooltip placement='left' isOpen={this.state.YDtooltipOpen} target='YDTool' toggle={this.toggleYD}>
              Hello world!
            </Tooltip>
            <CardTitle>Young Adults</CardTitle>
            <CardSubtitle>Age: 18-24</CardSubtitle>
            <CardText>Hover over for successful stories!</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody id='ATool'>
            <Tooltip placement='left' isOpen={this.state.AtooltipOpen} target='ATool' toggle={this.toggleA}>
              Hello world!
            </Tooltip>
            <CardTitle>Adults</CardTitle>
            <CardSubtitle>Age: 18 and Higher </CardSubtitle>
            <CardText>Hover over for successful stories!</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody id='VTool'>
            <Tooltip placement='left' isOpen={this.state.VtooltipOpen} target='VTool' toggle={this.toggleV}>
              Hello world!
            </Tooltip>
            <CardTitle>Veteran</CardTitle>
            <CardSubtitle>Former Member of the Armed Services</CardSubtitle>
            <CardText>Hover over for successful stories!</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody id='PTool'>
            <Tooltip placement='left' isOpen={this.state.PtooltipOpen} target='PTool' toggle={this.toggleP}>
              Hello world!
            </Tooltip>
            <CardTitle>Rehabilitated</CardTitle>
            <CardSubtitle>A Second Chance</CardSubtitle>
            <CardText>Hover over for successful stories!</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
