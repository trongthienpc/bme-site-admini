const express = require("express");
const router = express.Router();

const roomModel = require("../models/room");

router.get("/", async (req, res) => {
  try {
    let response = await roomModel.find({});
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const entity = await roomModel.findById(id);
    if (!entity) {
      return res.status(401).json({
        success: false,
        message: "room not found",
      });
    }
    res.send(entity);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
