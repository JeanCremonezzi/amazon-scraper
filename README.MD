
# Amazon Scrapper

Simple project that fetch products data from Amazon search list.


## Tech Stack

**FRONTEND:** HTML, CSS, Bootstrap, JavaScript, JQuery

**API:** Node, Express, Cheerio


## Run Locally

Clone the project
```bash
  git clone https://github.com/JeanCremonezzi/amazon-scraper/tree/main/api
```

Go to the API directory
```bash
  cd amazon-scraper/api
```

Install dependencies
```bash
  yarn install
```

Run API
```bash
  yarn start
```

Open HTML file at **amazon-scraper/frontend/index.html**
## API Reference

#### Get products

```http
  GET /api/scrape/?keyword=yourKeyword
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `keyword` | `string` | **Required**. Products name|

