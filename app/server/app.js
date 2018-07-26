const express = require('express');
const app = express();

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const data = {
  "car": [{
    id: 'mazda-rx-8',
    title: 'Mazda RX-8',
    brand: 'Mazda',
    model: 'RX-8',
    year: '2012',
    engine: '1.3 Wankel',
    power: '250 HP',
    doors: '4',
    colors: 'black',
    drive_wheel: 'rear',
    category: 'Sport',
    price: '25000$',
    quantity: 10,
    city: 'San Francisco',
    address: 'Veruca Salt 22',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Mazda_RX-8_on_freeway.jpg',
    description: "The Mazda RX-8 is a sports car manufactured by the Japanese automaker Mazda between 2002 and 2012. " +
    "It was first shown in 2001 at the North American International Auto Show. It is the successor to the RX-7 and, " +
    "like its predecessors in the RX range, it is powered by a Wankel engine. The RX-8 began North American sales in the 2003 model year."
  }, {
    id: 'bmw-x-6',
    title: 'BMW X6',
    brand: 'BMW',
    model: 'X6',
    year: '2017',
    engine: 'V8',
    power: '576 HP',
    doors: '5',
    colors: 'white',
    drive_wheel: 'AWD',
    category: 'Sport',
    price: '55000$',
    quantity: 5,
    city: 'Chicago',
    address: 'Freedom Salt 12',
    image: 'https://www.bmwusa.com/content/dam/bmwusa/XModels/X6/2018/BMW_MY18_XSeries_X6_DP_Design_01.png',
    description: "The BMW X6 is a mid-size luxury crossover by German automaker BMW." +
    " It was first shown in 2001 at the North American International Auto Show. high performance rear-engined classic German sports"
  }, {
    id: 'porsche-911',
    title: 'Porsche 911',
    brand: 'Porsche',
    model: '911',
    engine: '3.8',
    power: '540 HP',
    doors: '2',
    colors: 'white',
    drive_wheel: 'rear',
    category: 'Sport',
    price: '85000$',
    quantity: 2,
    city: 'Los Angeles',
    address: 'Green Park 212',
    image: 'https://st.motortrend.com/uploads/sites/5/2017/05/2018-Porsche-911-Carrera-4-GTS-rear-three-quarer.jpg',
    description: "The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door," +
    " 2+2 high performance rear-engined classic German sports car made since 1963"
  }
  ]
};

app.get('/api/cars', function(req, res) {
  if(req.query.brand !== undefined) {
    let car = data.car.filter(function(i) {
      return i.car.toLowerCase().indexOf(req.query.car.toLowerCase()) !== -1;
    });
    res.send({car: car});
  } else {
    res.send(data);
  }
});

app.get('/api/cars/:id', function (req, res) {
  let car = data.car.find((car) => req.params.id === car.id);
  res.send({car: car});
});

app.put('/api/cars/:id', function (req, res) {
  let item = data.car.find(function(item) {
    return item.id === req.params.id;
  });
  const index = data.car.indexOf(item);
  item = req.body.car;
  item.id = req.params.id;
  data.car[index] = item;
  res.send({ status: 'SUCCESS' });
});

app.post('/api/cars/', function (req, res) {
  data.car.push(req.body.car);
  res.send({ status: 'SUCCESS' });
});

app.delete('/api/cars/:id', function (req, res) {
  const item = data.car.find(function(item) {
    return item.id === req.params.id;
  });
  const index = data.car.indexOf(item);
  data.car.splice(index, 1);
  res.send({ status: 'SUCCESS' });
});

app.listen(3000, () => console.log('App listening on port 3000!'));
