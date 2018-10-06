import React from "react";

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.state = { width: 0, showFaqPage: true, title: props.title };
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
        { this.state.title }
      </React.Fragment>
    );
  }
}

export default Question;
