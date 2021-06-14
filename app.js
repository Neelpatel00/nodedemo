var express = require('express')
 
var app = express()

const ar = 
  {
    "sucess": 10,
    "message": "successfully",
    "data": {
      "emp_mobile": "1234567891",
      "business_name": "",
      "is_login": "1",
      "first_login": "0",
      "is_sub": "0",
      "sub_date": "0",
      "fcm": "acbdef",
      "d_id": "1234",
      "c_code": "P2R1O3NMAK",
      "wallet": "0"
    }
  }


app.get('/ar',function(req, res){
  res.json(ar)
})
 
app.get('/notes', function(req, res) {
  res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
})
 
app.listen(3000)