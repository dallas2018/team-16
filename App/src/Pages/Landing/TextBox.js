import React from "react";
import { FormGroup, Input } from "reactstrap";

class TextBox extends React.Component {
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
        <FormGroup style={{ width: "50vw", marginTop: "25px" }}>
          <Input type='textarea' name='text' id='exampleText' />
        </FormGroup>
      </React.Fragment>
    );
  }
}

export default TextBox;
