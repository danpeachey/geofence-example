const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  // We will add the client region to the http header via the load balancer, if running locally it will not be available
  message = (req.header('X-Client-Geo-Location') != null ? 'You are viewing from ' + req.header('X-Client-Geo-Location') : '')
  res.render('index', { title: 'Geofenced Service', message: 'Welcome! ' + message })
})
  
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`geofenceservice: listening on port ${port}`);
});


