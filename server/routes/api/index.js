const router = require("express").Router();
const cardsRoutes = require("./cards");

// Cards routes - matches with /api/cards
router.use("/cards", cardsRoutes);

module.exports = router;