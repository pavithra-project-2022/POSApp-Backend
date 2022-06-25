const express = require("express");
const router = express.Router();
const connection = require("../config/config");
var auth = require("../services/authentication");

router.post(
  "/add",
  (req, res, next) => {
    let product = req.body;
    var query1 =
      "insert into review (review) values(?)";
    connection.query(
      query1,
      [product.review],
      (err, results) => {
        if (!err) {
          return res
            .status(200)
            .json({ message: "Review Added Successfully" });
        } else {
          return res.status(500).json(err);
        }
      }
    );
  }
);

router.get("/get", (req, res, next) => {
    var query1 =
      "select * from review";
    connection.query(query1, (err, results) => {
      if (!err) {
        return res.status(200).json(results);
      } else {
        return res.status(500).json(err);
      }
    });
  });


module.exports = router;