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

                                                        //Hurghada

app.get("/hurghada/home", (req, res) =>{
    res.render("layouts/hurghada/home.ejs")
})

app.get("/hurghada/cairo", (req, res) =>{
    res.render("layouts/hurghada/cairo.ejs")
})

app.get("/hurghada/super-luxor", (req, res) =>{
    res.render("layouts/hurghada/super-luxor.ejs")
})

app.get("/hurghada/super-luxor", (req, res) =>{
    res.render("layouts/hurghada/super-luxor.ejs")
})


app.get("/hurghada/express-safari-5-ore", (req, res) =>{
    res.render("layouts/hurghada/express-safari-5-ore.ejs")
})

app.get("/hurghada/moto-safari-3-ore", (req, res) =>{
    res.render("layouts/hurghada/moto-safari-3-ore.ejs")
})

app.get("/hurghada/insula-orange-bay", (req, res) =>{
    res.render("layouts/hurghada/insula-orange-bay.ejs")
})

app.get("/hurghada/insula-paradise", (req, res) =>{
    res.render("layouts/hurghada/insula-paradise.ejs")
})

app.get("/hurghada/casa-delfinilor", (req, res) =>{
    res.render("layouts/hurghada/casa-delfinilor.ejs")
})

app.get("/hurghada/paraseling", (req, res) =>{
    res.render("layouts/hurghada/paraseling.ejs")
})

app.get("/hurghada/scufundari", (req, res) =>{
    res.render("layouts/hurghada/scufundari.ejs")
})

app.get("/hurghada/submarin-sindbad", (req, res) =>{
    res.render("layouts/hurghada/submarin-sindbad.ejs")
})

                                                        //Sharm el sheikh

app.get("/sharm-el-sheikh/home", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/home.ejs")
})

                                                        //Marsalam
app.get("/marsalam/home", (req, res) =>{
    res.render("layouts/marsalam/home.ejs")
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

app.get("/marsalam/mega-city-tour", (req, res) =>{
    res.render("layouts/marsalam/mega-city-tour.ejs")
})


app.get("/marsalam/super-safari", (req, res) =>{
    res.render("layouts/marsalam/super-safari.ejs")
})


app.get("/marsalam/moto-safari", (req, res) =>{
    res.render("layouts/marsalam/moto-safari.ejs")
})


app.get("/marsalam/seascope-glass-boat", (req, res) =>{
    res.render("layouts/marsalam/seascope-glass-boat.ejs")
})


app.get("/marsalam/hammata-islands", (req, res) =>{
    res.render("layouts/marsalam/hammata-islands.ejs")
})


app.get("/marsalam/marsa-imbarak", (req, res) =>{
    res.render("layouts/marsalam/marsa-imbarak.ejs")
})


app.get("/marsalam/satayeh", (req, res) =>{
    res.render("layouts/marsalam/satayeh.ejs")
})



app.set("view engine", "ejs")
app.set("views", __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)
console.log('The server is running on port 3000')