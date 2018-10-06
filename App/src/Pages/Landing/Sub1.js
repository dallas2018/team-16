import React from "react";
import { Flex } from "grid-styled";
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap";
import axios from "axios";

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

  handleClick () {
    console.log("here");
    axios.get("https://cnnflaskapi.herokuapp.com/text");
  }

  render () {
    return (
      <React.Fragment>
        <Flex style={{ flexDirection: "column", paddingLeft: "40px", paddingTop: "50px", marginRight: "70vw" }} >
          <Form>
            <FormGroup>
              <Label for='exampleEmail'>Full Name</Label>
              <Input />
              <FormFeedback>You will not be able to see this</FormFeedback>
              <FormText>Ex. Aman V. Gottumukkala</FormText>
            </FormGroup>
            <FormGroup>
              <Label for='exampleEmail'>How did you hear about us?</Label>
              <Input />
              <FormFeedback>You will not be able to see this</FormFeedback>
              <FormText>Ex. Aman V. Gottumukkala</FormText>
            </FormGroup>
            <FormGroup>
              <Label for='exampleEmail'>Social Security #</Label>
              <Input />
              <FormFeedback>You will not be able to see this</FormFeedback>
              <FormText>000-00-0000</FormText>
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'>Birthday</Label>
              <Input />
              <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
              <FormText>01/01/2000</FormText>
            </FormGroup>
            <FormGroup>
              <Label for='exampleEmail'>Email</Label>
              <Input />
              <FormFeedback>You will not be able to see this</FormFeedback>
              <FormText>aman.gottu@gmail.com</FormText>
            </FormGroup>
            <FormGroup>
              <Label for='exampleEmail'>Phone</Label>
              <Input />
              <FormFeedback>You will not be able to see this</FormFeedback>
              <FormText>(###)-###-####</FormText>
            </FormGroup>
          </Form>
        </Flex>
      </React.Fragment>
    );
  }
}

export default Sub1;
