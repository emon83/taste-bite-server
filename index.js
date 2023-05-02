const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

const allData = require('./data/chefData.json')
const recipeData = require('./data/recipeData.json')
const sectionData1 = require('./data/section1Data.json')
const sectionData2 = require('./data/section2Data.json')

app.get('/', (req, res) => {
    res.json({message: "testibite server is running!"})
})

app.get('/allData', (req, res) =>{
    res.send(allData);
})

app.get('/sectionData1', (req, res) =>{
    res.send(sectionData1);
})

app.get('/sectionData2', (req, res) =>{
    res.send(sectionData2);
})

app.get('/recipeData', (req, res) =>{
    res.send(recipeData);
})
app.get('/recipeData/:id', (req, res) =>{
    const id = req.params.id;
    const selectedData1 = recipeData.find(data => data.id == id);
    res.send(selectedData1);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })