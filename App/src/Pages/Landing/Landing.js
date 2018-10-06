import React from "react";
import Question from "./Question";
import Drop from "./Drop";
import TopBar from "./TopBar";
import { Flex } from "grid-styled";

class Landing extends React.Component {
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
        <TopBar name='Basic Info' />
        <Flex style={{ flexDirection: "column", paddingLeft: "40px", paddingTop: "50px" }} >
          <div style={{ padding: "25px" }}>
            <Question title='First Name' />
            <Drop options={["Test", "Test1", "Test2"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Middle Name' />
            <Drop options={["Test", "Test1", "Test2"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Last Name' />
            <Drop options={["Test", "Test1", "Test2"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='How did you hear about us?' />
            <Drop options={["Test", "Test1", "Test2"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Address' />
            <Drop options={["Test", "Test1", "Test2"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Social' />
            <Drop options={["Test", "Test1", "Test2"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Birthday' />
            <Drop options={["Test", "Test1", "Test2"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Email' />
            <Drop options={["Test", "Test1", "Test2"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Phone' />
            <Drop options={["Test", "Test1", "Test2"]} />
          </div>
        </Flex>
      </React.Fragment>
    );
  }
}

export default Landing;
