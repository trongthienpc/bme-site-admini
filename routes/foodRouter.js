const express = require("express");
const router = express.Router();
const foodModel = require("../models/food");

// get all foods
router.get("/", async (req, res) => {
  try {
    const response = await foodModel.find({});
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// get food by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (id.length === 24) {
    try {
      const entity = await foodModel.findById(id);
      if (!entity)
        res.status(404).json({
          success: false,
          message: "The food id not found",
        });
      res.send(entity);
    } catch (error) {}
  } else {
    res.status(401).json({
      success: false,
      message: "the food id not match",
    });
  }
});

module.exports = router;
