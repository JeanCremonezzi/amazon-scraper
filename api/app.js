const express = require('express');
const app = express();
var cors = require('cors')

const { fetchData } = require('./utils/dataFetcher');

app.use(express.json());
app.use(cors())

app.listen('3000', () => {
   console.log(`\nApp running on port 3000\n`)
})

app.get('/api/scrape', async (req, res) => {
   res.json(await fetchData(req.query.keyword))
})