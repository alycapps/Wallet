import axios from "axios";

export default {
  // Gets all cards
  getCards: function() {
    return axios.get("/api/cards");
  },
  // Gets the card with the given id
  getCard: function(id) {
    return axios.get("/api/cards/" + id);
  },
  // Update card info with given id
  updateCard: function(id, data) {
    return axios.put("/api/cards/" + id, data);
  },
  // Deletes the card with the given id
  deleteCard: function(id) {
    return axios.delete("/api/cards/" + id);
  },
  // Saves a card to the database
  saveCard: function(cardInfo) {
    return axios.post("/api/cards", cardInfo);
  }
};
