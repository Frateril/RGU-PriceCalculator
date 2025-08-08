const { MongoClient } = require("mongodb")
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Sert les fichiers statiques (HTML, CSS, JS, etc.) depuis le dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', function(req, res){
  res.send("Yes we have an API")
});

app.get('/api/getPrice', function(req, res){
  var s = req.query.salary;
  var d = req.query.days;
  var n = req.query.quoteName;
  console.log("Calculating price")
  console.log(s)
  console.log(d)
  console.log(n)
  let finalPrice = 0;
  dailyRate = s/365;
  Price = dailyRate * d;
  finalPrice = Math.round(Price /50) * 50;
  
  console.log("Storing quote : "+n+", "+s+", "+d)
  console.log("Mongo URI is "+uri)
  
  async function run() {
    try{
      var dbo = client.db("mydb");
      var myobj = { quoteName: n, salary: s, days: d};
      await dbo.collection("quotes").insertOne(myobj, function(err, res) {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log("1 quote inserted")
      });
      
    }
    finally{
      res.send(`Final price: ${finalPrice}, stored in ${n}`);
    // await client.close();
  }
    }
  run().catch(console.dir);
  
  // res.send("stored in "+n)
});

app.get('/api/storeQuote', function(req, res){
  var s = req.query.salary;
  var d = req.query.days;
  var n = req.query.quoteName;
});

// Middleware 404 : doit être après toutes les autres routes
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});


app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});