import React from "react";
import Question from "./Question";
import Drop from "./Drop";
import { Flex } from "grid-styled";
import TextBox from "./TextBox";
import { FormGroup, Label, Input } from "reactstrap";

class Sub4 extends React.Component {
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
            <Question title='What is your housing status' />
            <Drop options={["House", "Apartment", "Renter", "Living with a friend"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Are you at risk of being homeless?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='What is your marital status?' />
            <Drop options={["Married", "Single"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='What is your household income?' />
            <Drop options={["$0-$10,000", "$10,000-50,000", "$50,000 - $100,000"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='How many children under 17 live in your household?' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='How many young adults (18-24) live in your household?' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='How many elders live in your household?' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Check all that apply:' />
            <FormGroup check>
              <Label check>
                <Input type='checkbox' />{" "}
                Savings Account
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                Checking Account
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                None of the Above
              </Label><br />
            </FormGroup>
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Check all that apply:' />
            <FormGroup check>
              <Label check>
                <Input type='checkbox' />{" "}
                Payday
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                Car
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                Personal
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                Student
              </Label><br />
              <Label check>
                <Input type='checkbox' />{" "}
                None of the above
              </Label><br />
            </FormGroup>
          </div>
        </Flex>

      </React.Fragment>
    );
  }
}

export default Sub4;
