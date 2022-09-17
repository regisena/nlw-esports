import express from 'express';

const app = express();

// www.minhaapi.com/ads
// localhost:3333/ads

app.get('/ads', (req, res) => { 
   return res.send('Acessou Ads!'); 
});

app.listen(3333);