import React from "react";
import Question from "./Question";
import Drop from "./Drop";
import { Flex } from "grid-styled";
import TextBox from "./TextBox";

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
            <Question title='What is your military status?' />
            <Drop options={["Active Reserve", "Inactive Reserve", "Veteran", "Retired Military", "No Military Service"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Date of Event' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Which branch were you in?' />
            <Drop options={["Army", "Navy", "Marine Corps", "Air Force", "Coast Guard"]} />
          </div>
        </Flex>

      </React.Fragment>
    );
  }
}

export default Sub2;
