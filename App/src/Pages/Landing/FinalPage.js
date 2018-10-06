import React from "react";
import { Flex } from "grid-styled";

class FinalPage extends React.Component {
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
        <Flex>
          <p style={{ width: "100vw", textAlign: "center" }}>
          Congratulations!
            <br />
          You have successfully completed this application! You have completed the first step in transforming your future!
            <br />
          We will be reaching out to you soon via email or phone call, so stay alert!
            <br />
          We are excited to begin this journey with you!
            <br />
          </p>
        </Flex>
      </React.Fragment>
    );
  }
}

export default FinalPage;
