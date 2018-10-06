import React from "react";
import Question from "./Question";
import Drop from "./Drop";
import { Flex } from "grid-styled";
import { FormGroup, Label, Input } from "reactstrap";

class Sub2 extends React.Component {
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
            <Question title='Gender' />
            <Drop options={["Male", "Female", "Other"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Do you consider yourself Hispanic or Latino?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Select the race that best describes you:' />
            <Drop options={["Black or African American", "American Indian or Alaskan Native", "Asian (Not Pacific Islander)", "Hawaiian Native or Pacific Islander", "White or Caucasian", "Two or more"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='What is your preferred language of communication? We will try to match you with a mentor fluent in that language if possible.' />
            <Drop options={["English", "Spanish", "Japanese", "Russian"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Do you have any physical disabilities that we should be aware of?' />
            <FormGroup check>
              <Label check>
                <Input type='checkbox' />{" "}
                Visual
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                Speech
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                Hearing
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                Limited Mobility
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                Not Applicable
              </Label><br />
            </FormGroup>
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Are you authorized to work in the United States?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Are you a United States citizen or a Permanent Resident?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Do you have a valid form of identification?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='What type of ID?' />
            <Drop options={["Texas Issued Driver's License", "Other State Issued Driver's License", "Texas Issued Identification Card", "Other State Issued Identification Card", "Passport"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title="What type of Driver's License?" />
            <Drop options={["Class A", "Class B", "Class C", "Class M"]} />
          </div>
        </Flex>

      </React.Fragment>
    );
  }
}

export default Sub2;
