import React from "react";
import Question from "./Question";
import Drop from "./Drop";
import { Flex } from "grid-styled";
import TextBox from "./TextBox";
import { FormGroup, Label, Input } from "reactstrap";

class Sub9 extends React.Component {
  constructor (props) {
    super(props);
    this.state = { width: 0, showFaqPage: true };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount () {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions () {
    this.setState({ width: window.innerWidth });
  }

  render () {
    return (
      <React.Fragment>
        <Flex style={{ flexDirection: "column", paddingLeft: "40px", paddingTop: "50px" }} >
          <div style={{ padding: "25px" }}>
            Please rate the three services that you are most interested in below:
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Highest Priority' />
            <Drop options={["Job Placement", "Career Development", "Training", "Education", "Income Support", "Financial Education"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Medium Priority' />
            <Drop options={["Job Placement", "Career Development", "Training", "Education", "Income Support", "Financial Education"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Lowest Priority' />
            <Drop options={["Job Placement", "Career Development", "Training", "Education", "Income Support", "Financial Education"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='What is your availability for these activities?' />
            <FormGroup check>
              <Label check>
                <Input type='checkbox' />{" "}
                Full Time (30+ hours per week)
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                Part Time (20 hours or less per week)
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                Days (8 am to 5 pm)
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                  Evenings (6 pm to 10 pm)
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                Weekdays (Monday - Friday)
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                Weekends (Saturday & Sunday)
              </Label><br />
            </FormGroup>
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='How much time are you able or willing to invest in our program?' />
            <Drop options={["2 weeks", "6-10 weeks", "Up to 1 year"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='What is your expected wage?' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Could you pass a drug test within 24 hours?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Are you willing to share your SER story after receiving SER services?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='What else do you think we should know?' />
            <TextBox />
          </div>
        </Flex>

      </React.Fragment>
    );
  }
}

export default Sub9;
