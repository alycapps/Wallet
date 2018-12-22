import React, {Component} from "react";
import {Card} from "../../components/card";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import ButtonToolBar from "react-bootstrap/lib/ButtonToolbar";
import Button from "react-bootstrap/lib/Button";

class Add extends Component {
  state = {
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
                <form>
                  <label htmlFor="name">Full Name: </label>
                  <input
                  type="text"
                  name="name"
                  placeholder= "eg. John Matthew Smith"
                  />
                  <br/>
                  <label htmlFor="number">Card Number: </label>
                  <input
                  type="text"
                  name="number"
                  placeholder= "eg. 123456789"
                  />
                  <br/>
                  <label htmlFor="exp">Expiration Date: </label>
                  <input
                  type="text"
                  name="exp"
                  placeholder= "eg. 01/01"
                  />
                  <br/>
                  <label htmlFor="cvv">CVV: </label>
                  <input
                  type="text"
                  name="cvv"
                  placeholder= "eg. 123"
                  />
                  <br/>
                  <ButtonToolBar>
                    <Button bsStyle="danger">Submit</Button>
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