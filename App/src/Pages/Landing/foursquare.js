import React from "react";
import { Card, CardBody,
  CardTitle, CardSubtitle, Tooltip, Row, Col } from "reactstrap";

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
        <Row>
          <Col sm='3'>
            <Card>
              <CardBody id='YDTool'>
                <Tooltip placement='left' isOpen={this.state.YDtooltipOpen} target='YDTool' toggle={this.toggleYD}>
                Hello world!
                </Tooltip>
                <CardTitle>Young Adults</CardTitle>
                <CardSubtitle>Age: 18-24</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col sm='3'>
            <Card>
              <CardBody id='ATool'>
                <Tooltip placement='left' isOpen={this.state.AtooltipOpen} target='ATool' toggle={this.toggleA}>
                  Hello world!
                </Tooltip>
                <CardTitle>Adults</CardTitle>
                <CardSubtitle>Age: 18 and Higher </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm='3'>
            <Card>
              <CardBody id='VTool'>
                <Tooltip placement='left' isOpen={this.state.VtooltipOpen} target='VTool' toggle={this.toggleV}>
                Hello world!
                </Tooltip>
                <CardTitle>Veterans</CardTitle>
                <CardSubtitle>Former Armed Services Members</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col sm='3'>
            <Card>
              <CardBody id='PTool'>
                <Tooltip placement='left' isOpen={this.state.PtooltipOpen} target='PTool' toggle={this.toggleP}>
                  Hello world!
                </Tooltip>
                <CardTitle>Reentry</CardTitle>
                <CardSubtitle>Everyone deserves a second chance </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
