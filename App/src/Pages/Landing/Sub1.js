import React from "react";
import Question from "./Question";
import { Flex } from "grid-styled";
import TextBox from "./TextBox";

class Sub1 extends React.Component {
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
            <Question title='First Name' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Middle Name' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Last Name' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='How did you hear about us?' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Address' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Social Security #' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Birthday' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Email' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Phone' />
            <TextBox />
          </div>
        </Flex>
      </React.Fragment>
    );
  }
}

export default Sub1;
