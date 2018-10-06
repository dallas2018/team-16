import React from "react";
import Question from "./Question";
import Drop from "./Drop";
import { Flex } from "grid-styled";
class Sub3 extends React.Component {
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
            <Question title='Are you in foster care?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Are either of your parents in jail?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Have you ever been to the Juvenile justice system?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Do you live with a single parent?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Do you receive free or reduced lunch?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Are you a high school dropout?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Are you parenting?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Do you have extensive work history?' />
            <Drop options={["Yes", "No"]} />
          </div>
        </Flex>
      </React.Fragment>
    );
  }
}

export default Sub3;
