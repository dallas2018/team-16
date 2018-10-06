import React from "react";
import Question from "./Question";
import Drop from "./Drop";
import TextBox from "./TextBox";
import { Flex } from "grid-styled";
class Sub5 extends React.Component {
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
            <Question title='What is the highest level of education you have received?' />
            <Drop options={["Less than Highschool", "Some Highschool", "Highschool Degree", "Some College", "Associates", "Bachelors", "Master", "PhD"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Are you currently in school?' />
            <Drop options={["Yes", "No"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='If Yes, where are you studying?' />
            <TextBox />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='Rate your computer skills:' />
            <Drop options={["None", "Poor", "Fair", "Good", "Excellent"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='What is your English Literacy level?' />
            <Drop options={["Low", "Medium", "High"]} />
          </div>
          <div style={{ padding: "25px" }}>
            <Question title='List any certificates or relevant training experiences:' />
            <TextBox />
          </div>
        </Flex>
      </React.Fragment>
    );
  }
}

export default Sub5;
