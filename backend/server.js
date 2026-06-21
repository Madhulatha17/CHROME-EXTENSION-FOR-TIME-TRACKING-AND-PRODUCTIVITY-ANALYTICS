const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const Activity = require("./models/Activity");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.post("/activity", async (req, res) => {

  try {

    const activity =
      new Activity(req.body);

    await activity.save();

    res.json({
      message: "Saved"
    });

  } catch (error) {

    res.status(500).json(error);

  }
});

app.get("/stats", async (req, res) => {

  const data =
    await Activity.find();

  let productive = 0;
  let unproductive = 0;

  data.forEach(item => {

    if (item.category === "Productive") {
      productive += item.timeSpent;
    } else {
      unproductive += item.timeSpent;
    }

  });

  res.json({
    productive,
    unproductive
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
