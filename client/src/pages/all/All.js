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

class All extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.loadCards();
  };

  // function to load all cards
  loadCards = () => {
    API.getCards()
      .then(res =>
        this.setState({ cards: res.data, name: "", number: "", exp: "", cvv: "" }),
        console.log(this.state.cards)
        )
      .catch(err => console.log(err));
  };

  // function to delete specified card from Mongo
  deleteCard = id => {
    API.deleteCard(id)
      .then(res => this.loadCards())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>My Cards</h1>
        <Grid>
        {this.state.cards.length ? (
          <Row>
            {/* Details for each Credit Card added to card */}
              { this.state.cards.map( card => (
                <Col md={4}>
                  <Card>
                    <Row>
                      <Col md={12} className="name">
                        {card.name}
                      </Col>
                      <Col md={12} className="number">
                        {card.number}
                      </Col>
                      <Col md={6} className="cvv">
                        {card.cvv}
                      </Col>
                      <Col md={6} className="exp">
                        {card.exp}
                      </Col>
                      <ButtonToolBar>
                        <Button bsStyle="danger" onClick={() => this.deleteCard(card._id)} >Delete</Button>
                      </ButtonToolBar>
                    </Row>
                  </Card>
                </Col>
              ))}
              </Row>

            ) : (
              <h3 style={style}> No Cards Saved - please go to the add page to save your cards. </h3>
          )}
        </Grid>
      </div>
    );
  }
}

export default All;