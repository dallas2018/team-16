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
            <Question title='What is the highest felony you have received?' />
            <Drop options={["Felony", "Misdemeanor", "Sex Offender"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Are you currently on probation or parole?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='If Yes, when?' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Have you ever been incarcerated?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='If Yes, when?' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Are you currently residing in a halfway house?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='If Yes, what is the location?' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Are you wearing an ankle monitor?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='If Yes, enter the date of removal' />
            <TextBox />
          </div>
        </Flex>

      </React.Fragment>
    );
  }
}

export default Sub2;
