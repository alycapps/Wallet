import React, {Component} from "react";
import API from "../../utils/API"
import {Card} from "../../components/card";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import ButtonToolBar from "react-bootstrap/lib/ButtonToolbar";
import Button from "react-bootstrap/lib/Button";

let style = {
  color: 'red',
};

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

  validateBlank = () => {
    console.log('button clicked')
    if(this.state.name && this.state.cvv && this.state.exp && this.state.number) {
      this.validateLetters();
    }
    else {
      document.getElementById("messageLoc").innerHTML = "Please fill out all fields";
    }
  };

  validateLetters = () => {
    let nameval = document.getElementById('name').value;
    if(!nameval.match(/^[a-zA-Z\s]*$/)) {
      document.getElementById("messageLoc").innerHTML = "Full Name must only contain characters A-Z";
    }
    else {
      this.validateNumbers();
    }
  };

  validateNumbers = () => {
    let numval = document.getElementById('number').value;
    let cvvval = document.getElementById('cvv').value;
    if(!numval.match(/^[0-9]+$/)) {
      document.getElementById("messageLoc").innerHTML = "Card Number must only contain numbers 0-9.";
    }
    else {
      if(!cvvval.match(/^[0-9]+$/)) {
        document.getElementById("messageLoc").innerHTML = "CVV must only contain numbers 0-9.";
      }
      else {
        this.validateLength();
      }    }
  };

  validateLength = () => {
    let cvvval = document.getElementById('cvv').value;
    let numval = document.getElementById('number').value;
      if(cvvval.length > 3 || cvvval.length < 3) {
        document.getElementById("messageLoc").innerHTML = "CVV should contain exactly 3 digits";
      }
      else {
        if(!(numval.length > 15 && numval.length < 20)) {
          document.getElementById("messageLoc").innerHTML = "Card should be between 16 and 19 digits";
        }
        else {
          this.validateFormat();
        }      
      }
  };

  validateFormat = () => {
    let expval = document.getElementById('exp').value;
    if(!expval.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      document.getElementById("messageLoc").innerHTML = "Expiration date must be in mm/yy format";
    }
    else {
      this.addCard();
    }
  }

  addCard = () => {
    console.log(this.state)
    const cardInfo = {
      name: this.state.name,
      number: this.state.number,
      exp: this.state.exp,
      cvv: this.state.cvv   
    }
    API.saveCard(cardInfo).then(res => {
        console.log(res, "This is the response from card info");
        if (res.status === 200) {
          document.getElementById("messageLoc").innerHTML = "Card succesfully added";
          this.clearForm();
        }
        else {
          document.getElementById("messageLoc").innerHTML = "There was a problem saving your card";
        }
    });
  };

  clearForm = () => {
    this.setState({
      name: "",
      number: "",
      exp: "",
      cvv: ""
		});
    console.log(this.state);
  };

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
                <p id="messageLoc" style={style}></p>
                <form id="inputLoc">
                  <label htmlFor="name">Full Name: </label>
                  <input
                  id="name"
                  type="text"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleInputChange}
                  placeholder= "eg. John Matthew Smith"
                  />
                  <br/>
                  <label htmlFor="number">Card Number: </label>
                  <input
                  id="number"
                  type="text"
                  value={this.state.number}
                  name="number"
                  onChange={this.handleInputChange}
                  placeholder= "eg. 123456789"
                  />
                  <br/>
                  <label htmlFor="exp">Expiration Date: </label>
                  <input
                  id="exp"
                  type="text"
                  value={this.state.exp}
                  name="exp"
                  onChange={this.handleInputChange}
                  placeholder= "eg. 01/01"
                  />
                  <br/>
                  <label htmlFor="cvv">CVV: </label>
                  <input
                  id="cvv"
                  type="text"
                  value={this.state.cvv}
                  name="cvv"
                  onChange={this.handleInputChange}
                  placeholder= "eg. 123"
                  />
                  <br/>
                  <ButtonToolBar>
                    <Button bsStyle="danger" onClick={() => this.validateBlank()}>Submit</Button>
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