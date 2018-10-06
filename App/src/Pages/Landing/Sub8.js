import React from "react";
import Question from "./Question";
import Drop from "./Drop";
import { Flex } from "grid-styled";
import TextBox from "./TextBox";

class Sub8 extends React.Component {
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
            <Question title='What is your current employment status?' />
            <Drop options={["Employed (including self-employed)", "Recently received notice of termination", "Unemployed (Receiving unemployment benefits)", "Unemployed (NOT receiving unemployment benefits)"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Job Title' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Employer Name' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Job Type' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Full Time or Part Time?' />
            <Drop options={["Full Time", "Part Time"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Job Commitment?' />
            <Drop options={["Temporary/Seasonal", "Permanent", "Internship"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Job Start Date' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Job End Date' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Reason for Leaving' />
            <TextBox />
          </div>
        </Flex>

      </React.Fragment>
    );
  }
}

export default Sub8;
