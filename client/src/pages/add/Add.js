import React, {Component} from "react";
import API from "../../utils/API"
import {Card} from "../../components/card";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import ButtonToolBar from "react-bootstrap/lib/ButtonToolbar";
import Button from "react-bootstrap/lib/Button";

class Add extends Component {
  state = {
    name: "",
    number: "",
    exp: "",
    cvv: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state)
  };

  addCard = () => {
    console.log('button clicked')
    console.log(this.state)
    const cardInfo = {
      name: this.state.name,
      number: this.state.number,
      exp: this.state.exp,
      cvv: this.state.cvv   
    }
    API.saveCard(cardInfo).then(res => {
        console.log(res, "This is the response from card info");
    });
  }

  render() {
    return (
      <div>
        <h1>Add a New Card</h1>
        <Grid>
          <Row>
            <Col md={2}>
            </Col>
            <Col md={8}>
              <Card>
                <form>
                  <label htmlFor="name">Full Name: </label>
                  <input
                  type="text"
                  name="name"
                  onChange={this.handleInputChange}
                  placeholder= "eg. John Matthew Smith"
                  />
                  <br/>
                  <label htmlFor="number">Card Number: </label>
                  <input
                  type="text"
                  name="number"
                  onChange={this.handleInputChange}
                  placeholder= "eg. 123456789"
                  />
                  <br/>
                  <label htmlFor="exp">Expiration Date: </label>
                  <input
                  type="text"
                  name="exp"
                  onChange={this.handleInputChange}
                  placeholder= "eg. 01/01"
                  />
                  <br/>
                  <label htmlFor="cvv">CVV: </label>
                  <input
                  type="text"
                  name="cvv"
                  onChange={this.handleInputChange}
                  placeholder= "eg. 123"
                  />
                  <br/>
                  <ButtonToolBar>
                    <Button bsStyle="danger" onClick={() => this.addCard()}>Submit</Button>
                  </ButtonToolBar>
                </form>
              </Card>
            </Col>
            <Col md={2}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Add;