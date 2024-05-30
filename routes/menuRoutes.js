const express = require("express");
const router = express.Router();
const Menu = require("./../models/MenuSchema");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new Menu(data);
    const resp = await newMenu.save();
    console.log("menu data saved");
    res.status(201).json(resp);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    // res.send(data);
    console.log("menu data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" });
  }
});
router.get("/:tasteType", async (req, res) => {
    try {
      const tasteType = req.params.tasteType;
      if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour") {
        const resp = await Menu.find({ taste: tasteType });
        // res.send(resp);
        console.log("data fetched");
        res.status(200).json(resp);
      } else {
        res.status(404).json({ err: "invalid work type" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "internal server error" });
    }
  });
  
  
module.exports = router;
