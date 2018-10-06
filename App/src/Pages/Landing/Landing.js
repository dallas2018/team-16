import React from "react";
import Question from "./Question";
import Drop from "./Drop";
import TopBar from "./TopBar";

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
        <Question title='Test!' />
        <Drop options={["Test", "Test1", "Test2"]} />
        <TopBar />
      </React.Fragment>
    );
  }
}

export default Landing;
