if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")

const indexRouter = require('./routes/index')

app.get("/", (req, res) =>{
    res.render("layouts/layout.ejs")
})

app.get("/hurghada/home", (req, res) =>{
    res.render("layouts/hurghada/home.ejs")
})

app.get("/marsalam/luxor", (req, res) =>{
    res.render("layouts/marsalam/luxor.ejs")
})

app.get("/marsalam/asuan", (req, res) =>{
    res.render("layouts/marsalam/asuan.ejs")
})

app.get("/marsalam/asuan-abu-simbel", (req, res) =>{
    res.render("layouts/marsalam/asuan-abu-simbel.ejs")
})

app.get("/marsalam/home", (req, res) =>{
    res.render("layouts/marsalam/home.ejs")
})


app.get("/marsalam/home", (req, res) =>{
    res.render("layouts/marsalam/home.ejs")
})


app.get("/marsalam/home", (req, res) =>{
    res.render("layouts/marsalam/home.ejs")
})


app.get("/marsalam/home", (req, res) =>{
    res.render("layouts/marsalam/home.ejs")
})


app.get("/marsalam/home", (req, res) =>{
    res.render("layouts/marsalam/home.ejs")
})


app.get("/marsalam/home", (req, res) =>{
    res.render("layouts/marsalam/home.ejs")
})


app.get("/marsalam/home", (req, res) =>{
    res.render("layouts/marsalam/home.ejs")
})



app.set("view engine", "ejs")
app.set("views", __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)
console.log('The server is running on port 3000')