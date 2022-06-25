const express = require("express");
const router = express.Router();
const connection = require("../config/config");
var auth = require("../services/authentication");

router.post(
  "/add",
  auth.authenticateToken,
  (req, res, next) => {
    let product = req.body;
    var query1 =
      "insert into product (name,categoryId,description,price,img) values(?,?,?,?,?)";
    connection.query(
      query1,
      [product.name, product.categoryId, product.description, product.price,product.img],
      (err, results) => {
        if (!err) {
          return res
            .status(200)
            .json({ message: "Product Added Successfully" });
        } else {
          return res.status(500).json(err);
        }
      }
    );
  }
);

router.get("/get", (req, res, next) => {
  var query1 =
    "select p.id, p.name,p.description,p.price,p.img,c.id as caregoryId,c.name as categoryName from product as p  INNER JOIN category as c where p.categoryId=c.id";
  connection.query(query1, (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(500).json(err);
    }
  });
});

router.get("/getByCategory/:id", auth.authenticateToken, (req, res, next) => {
  const id = req.params.id;
  var query1 =
    "select id,name from product where categoryId=?";
  connection.query(query1, [id], (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(500).json(err);
    }
  });
});


router.get('/getById/:id',auth.authenticateToken,(req,res,next)=>{
  const id = req.params.id;
  var query1 = "select id,name,description,price from product where id =?";
  connection.query(query1,[id],(err,results)=>{
      if(!err){
          return res.status(200).json(results[0])
      }
      else{
          return res.status(500).json(err)
      }
  })
})




module.exports = router;
