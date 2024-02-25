const cheerio = require('cheerio');
const axios = require('axios');

const fetchData = async (keyword) => {
   return await axios.get(`https://www.amazon.com/s?k=${keyword}`, {
      headers: {
         'User-Agent': 'axios 1.6.7'
      }
   })
   .then(({data}) => {
      const $ = cheerio.load(data);
      const products = []

      $('[data-component-type=s-search-result]').each((_idx, el) => {
         const row = $(el)
         let data = {}

         data["title"] = row.find('h2').text().trim()
         data["rating"] = row.find('span.a-icon-alt').html()
         data["reviews"] = row.find('[data-component-type=s-client-side-analytics]').text().trim()
         data["img"] = row.find('img.s-image').attr("src")

         data["price"] = row.find('span.a-price-whole').text() + row.find('span.a-price-fraction').text().trim() || undefined
         data["link"] = `https://www.amazon.com${row.find('h2').find('a').attr("href")}`

         products.push(data)
      })

      return products
   })
}

module.exports = { fetchData }