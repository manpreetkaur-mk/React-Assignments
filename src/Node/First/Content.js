var http = require('http');

http.createServer(function (req, res) {
  var user=[{
    "id": 1,
    "name": "Manpreet Kaur",
    "username": "manpreet",
    "email": "manpreet@gmail.com",
    "address": {
      "street": "vikas nagar",
      "suite": "43",
      "city": "gwalior",
      "zipcode": "474001",
    }
  },
  {
    "id": 2,
    "name": "Aayushmaan verma",
    "username": "aayushmaan",
    "email": "aayushmaan@gmail.com",
    "address": {
      "street": "78 ",
      "suite": "shinde ki chwani ",
      "city": "gwalior",
      "zipcode": "474001",
    }
  },
  {
    "id": 2,
    "name": "Aayushmaan verma",
    "username": "aayushmaan",
    "email": "aayushmaan@gmail.com",
    "address": {
      "street": "78 ",
      "suite": "shinde ki chwani ",
      "city": "gwalior",
      "zipcode": "474001",
    }
  },
  {
    "id": 2,
    "name": "Aayushmaan verma",
    "username": "aayushmaan",
    "email": "aayushmaan@gmail.com",
    "address": {
      "street": "78 ",
      "suite": "shinde ki chwani ",
      "city": "gwalior",
      "zipcode": "474001",
    }
  },
  {
    "id": 2,
    "name": "Aayushmaan verma",
    "username": "aayushmaan",
    "email": "aayushmaan@gmail.com",
    "address": {
      "street": "78 ",
      "suite": "shinde ki chwani ",
      "city": "gwalior",
      "zipcode": "474001",
    }
  }

];
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(user));
  res.end();
  
}).listen(6969);