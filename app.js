const express = require('express');
const indexRouter = require('./routers/index.js')

const app = express();

app.use(express.json())
app.use('/', indexRouter)

const port = 8000;

app.get('/',(req, res) => {
    res.send('Welcome to doorstep backend')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})