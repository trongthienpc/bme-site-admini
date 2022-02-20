const express = require("express");
const router = express.Router();
const blogModel = require("../models/blog");

router.get("/", async (req, res) => {
  try {
    const response = await blogModel.find({});
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (id.length === 24) {
    try {
      const entity = await blogModel.findById(id);
      if (!entity) {
        return res.status(401).json({
          success: false,
          message: "blog not found",
        });
      }
      res.send(entity);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(401).json({
      success: false,
      message: "id not match",
    });
  }
});

module.exports = router;
