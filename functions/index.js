const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe=require("stripe")(
 'sk_test_51KFx4sLpJzYnNWI5ThoqTK9SxtReae9VrSPM1hpa7lFZHHYVESRzVkLAKQpvgDcQDUlgnVOvalVda5Tj9H0sQwNx00rj4fqvci'
);
// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.get('/', (request, response) => response.status(200).send('hello world'));
// app.get('/aschu24', (request, response) => response.status(200).send('selam new aschu!'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
  
    console.log('Payment Request Recieved for this amount >>> ', total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: 'usd',
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });




// - Listen command
exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-b5c4f/us-central1/api
