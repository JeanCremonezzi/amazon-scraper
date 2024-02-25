const express = require('express');
const app = express();
var cors = require('cors')

const { fetchData } = require('./utils/dataFetcher');
const { checkKeyword } = require('./middleware');

app.use(express.json());
app.use(cors())

app.listen('3000', () => {
   console.log(`\nApp running on port 3000\n`)
})

// ROUTE TO GET PRODUCTS DATA
app.get('/api/scrape', checkKeyword, async (req, res) => {
   try {
      res.json(await fetchData(req.query.keyword))
   } catch ({response}) {
      res.sendStatus(response.status)
   }
})