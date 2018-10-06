import React from "react";
import { Card, CardBody,
  CardTitle, CardSubtitle, Tooltip, Row, Col, Media } from "reactstrap";

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
      <div style={{ marginLeft: "2vw", marginTop: "20vh" }}>
        <p style={{ position: "absolute", bottom: "60vh", left: "4vh" }}>
        Purpose of Question:
        Answers here will be used to customize and shorten your applications. <br />
        Please answer honestly. Answers will be kept private and will only be used to personalize your application.
        </p>
        <Row>
          <Col sm='4'>
            <Card>
              <CardBody id='YDTool'>
                <Tooltip style={{ width: "300px" }} placement='right' isOpen={this.state.YDtooltipOpen} target='YDTool' toggle={this.toggleYD}>
                  <Media>
                    <Media left href='#'>
                      <img width='64px' src='http://serhouston.org/wp-content/uploads/2018/09/Jasson-Portocarrero.png' />
                    </Media>
                    <Media body>
                      <Media heading>
                       Jasson's Story
                      </Media>
                      “It’s been a great experience. I learned so much, and now since I’ve started my job I’m learning even more.
                    </Media>
                  </Media>
                </Tooltip>
                <CardTitle>Young Adults</CardTitle>
                <CardSubtitle>Age: 18-24</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <CardBody id='ATool'>
                <Tooltip placement='left' isOpen={this.state.AtooltipOpen} target='ATool' toggle={this.toggleA}>
                  <Media>
                    <Media left href='#'>
                      <img width='64px' src='http://serhouston.org/wp-content/uploads/2018/09/Yemi6-547x537.png' />
                    </Media>
                    <Media body>
                      <Media heading>
                       Yemi's
                      </Media>
                      “Everything I learned at SER continues to help in other aspects of my life,” said Yemi, “I am completely thriving now, and I am very grateful.” -Yemi Brown, Single Mother of Three                    </Media>
                  </Media>
                </Tooltip>
                <CardTitle>Adults</CardTitle>
                <CardSubtitle>Age: 18 and Higher </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm='4'>
            <Card>
              <CardBody id='VTool'>
                <Tooltip placement='right' isOpen={this.state.VtooltipOpen} target='VTool' toggle={this.toggleV}>
                  <Media>
                    <Media left href='#'>
                      <img width='64px' src='http://serhouston.org/wp-content/uploads/2018/07/Roland-Jackson-photo-for-blog-reel-on-website4.jpg' />
                    </Media>
                    <Media body>
                      <Media heading>
                       Roland's Story
                      </Media>
                      “SER gave me the confidence to overcome my barriers and to get a great job. That is where I am today.” -Roland Jackson, Army – 82nd Airborne
                    </Media>
                  </Media>
                </Tooltip>
                <CardTitle>Veterans</CardTitle>
                <CardSubtitle>Former Armed Services Members</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <CardBody id='PTool'>
                <Tooltip placement='left' isOpen={this.state.PtooltipOpen} target='PTool' toggle={this.toggleP}>
                  <Media>
                    <Media left href='#'>
                      <img width='64px' src='http://serhouston.org/wp-content/uploads/2018/08/Rusty-Roberts.png' />
                    </Media>
                    <Media body>
                      <Media heading>
                       Rusty's Story
                      </Media>
                      “Go to SER; they have awesome programs that will open doors,” said Rusty, “they have people there who will really help you.” -Rusty Roberts, Inmate for almost 18 years
                    </Media>
                  </Media>
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
