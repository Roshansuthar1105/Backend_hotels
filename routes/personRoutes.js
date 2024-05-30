const express = require("express");
const router = express.Router();
const Person = require("./../models/personSchema");

// creating a person
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" });
  }
});
// getting all person

router.get("/", async function (req, res) {
  try {
    const data = await Person.find();
    // res.send(data);
    console.log("data fatched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" });
  }
});
//trying to fetch data of person according to their work
router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    if (worktype == "chef" || worktype == "manager" || worktype == "waiter") {
      const resp = await Person.find({ work: worktype });
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
// put method to update a person's data 

router.put('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedPerson = req.body;
        const response = await Person.findByIdAndUpdate(id,updatedPerson,{
            new:true,
            runValidators:true
        }) 
        if(!response){
            res.status(404).json({err:"person not found"});
        }
        res.status(201).json(response);
        
    } catch (error) {
        console.log(err);
        res.status(500).json({ err: "internal server error" });
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const personId = req.params.id
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            res.status(404).json({err:"person not found"});
        }
        console.log("data deleted");
        res.status(201).json({message : "person deleted Successfully"});

    } catch (error) {
        console.log(error);
        res.status(500).json({ err: "internal server error" });
    }
})
module.exports = router;