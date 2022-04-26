const express = require("express");
const router = express.Router();
const commentModel = require("../models/comment");

// get all comments
router.get("/", async (req, res) => {
  try {
    const response = await commentModel.find({});
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

// get comment by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (id.length === 24) {
    const entity = commentModel.findById(id);
    if (!entity)
      res.status(404).json({
        success: false,
        message: "Comment not found",
      });

    res.send(entity);
  } else {
    res.status(401).json({
      success: false,
      message: "Comment id not match",
    });
  }
});

module.exports = router;
