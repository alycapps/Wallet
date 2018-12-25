const router = require("express").Router();
const Controller = require("../../controllers/controller.js");

// Matches with "/api/cards"
router.route("/")
  .get(Controller.findAll)
  .post(Controller.create);

// Matches with "/api/cards/:id"
router
  .route("/:id")
  .put(Controller.update)
  .delete(Controller.remove);

module.exports = router;
