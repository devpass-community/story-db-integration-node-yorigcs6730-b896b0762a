const express = require('express')
const service = require('./src/service/productService');

const app = express()
const port = 3000

app.get('/', async(request, response) => {
  const result = await service.getProducts();
  response.json({ info: `I want an ${result.rows[0].name}` })
})

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`)
})