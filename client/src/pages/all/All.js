import React, {Component} from "react";
import API from "../../utils/API"
import {Card} from "../../components/card";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import ButtonToolBar from "react-bootstrap/lib/ButtonToolbar";
import Button from "react-bootstrap/lib/Button";

class All extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.loadCards();
  }

  loadCards = () => {
    API.getCards()
      .then(res =>
        this.setState({ cards: res.data, name: "", number: "", exp: "", cvv: "" }),
        console.log(this.state.cards)
        )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>My Cards</h1>
        <Grid>
          <Row>
            {/* Each Credit Card */}
            <Col md={4}>
              <Card>
                <Row>
                  <Col md={12} className="name">
                    Aly Capps
                  </Col>
                  <Col md={12} className="number">
                    1234567890
                  </Col>
                  <Col md={6} className="cvv">
                    233
                  </Col>
                  <Col md={6} className="exp">
                    12/21
                  </Col>
                  <ButtonToolBar>
                    <Button bsStyle="danger">Delete</Button>
                  </ButtonToolBar>
                </Row>
              </Card>
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

export default All;