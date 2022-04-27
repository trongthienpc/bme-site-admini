const express = require("express");
const router = express.Router();
const drinkModel = require("../models/drink");
// get all drinks
router.get("/", async (req, res) => {
  try {
    const response = await drinkModel.find({});
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
// get drink by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (id.length === 24) {
    const entity = await drinkModel.findById(id);
    if (!entity)
      res.status(404).json({
        success: false,
        message: "The drink id is not found",
      });
    res.send(response);
  } else {
    res.status(401).json({
      success: false,
      message: "The drink id is not match",
    });
  }
  try {
  } catch (error) {}
});

module.exports = router;
