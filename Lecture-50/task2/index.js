
const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


let todoList = ['had breakfast', 'code', 'had coffee']

app.get('/todolist', (req, res)=>{
  res.render('todolist', {todoList})
})

app.listen(8080, ()=>{
  console.log("Server connected at Port: 8080")
})













