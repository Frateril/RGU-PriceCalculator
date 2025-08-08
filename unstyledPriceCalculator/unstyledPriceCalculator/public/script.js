function calculatePrice() {
    var s = document.getElementById("salary").value;
    var d = document.getElementById("days").value;
    var n = document.getElementById("quoteName").value;
    console.log("Calculating price")
    console.log(s)
    console.log(d)
    console.log(n)
    let finalPrice = 0;
    dailyRate = s/365;
    Price = dailyRate * d;
    finalPrice = Math.round(Price /50) * 50;
    document.getElementById("finalPrice").innerHTML = finalPrice;
  }