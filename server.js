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

app.get("/hurghada/luxor-economic", (req, res) =>{
    res.render("layouts/hurghada/luxor-economic.ejs")
})

app.get("/hurghada/cairo", (req, res) =>{
    res.render("layouts/hurghada/cairo.ejs")
})

app.get("/hurghada/safari-oasis", (req, res) =>{
    res.render("layouts/hurghada/safari-oasis.ejs")
})

app.get("/hurghada/luxor-valea-reginelor", (req, res) =>{
    res.render("layouts/hurghada/luxor-valea-reginelor.ejs")
})

app.get("/hurghada/cairo-economic", (req, res) =>{
    res.render("layouts/hurghada/cairo-economic.ejs")
})

app.get("/hurghada/super-luxor", (req, res) =>{
    res.render("layouts/hurghada/super-luxor.ejs")
})

app.get("/hurghada/super-luxor", (req, res) =>{
    res.render("layouts/hurghada/super-luxor.ejs")
})

app.get("/hurghada/super-safari", (req, res) =>{
    res.render("layouts/hurghada/super-safari.ejs")
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

app.get("/hurghada/batiskaf", (req, res) =>{
    res.render("layouts/hurghada/batiskaf.ejs")
})

app.get("/hurghada/dolphin-show", (req, res) =>{
    res.render("layouts/hurghada/dolphin-show.ejs")
})

app.get("/hurghada/acvariu", (req, res) =>{
    res.render("layouts/hurghada/acvariu.ejs")
})

app.get("/hurghada/aswan-abu-sibel", (req, res) =>{
    res.render("layouts/hurghada/aswan-abu-sibel.ejs")
})

app.get("/hurghada/manastirea-sfantul-pavel-si-antonie", (req, res) =>{
    res.render("layouts/hurghada/manastirea-sfantul-pavel-si-antonie.ejs")
})

app.get("/hurghada/excursie-privata", (req, res) =>{
    res.render("layouts/hurghada/excursie-privata.ejs")
})

app.get("/hurghada/vizitarea-orasului-hurghada", (req, res) =>{
    res.render("layouts/hurghada/vizitarea-orasului-hurghada.ejs")
})

app.get("/hurghada/abu-dabbab", (req, res) =>{
    res.render("layouts/hurghada/abu-dabbab.ejs")
})

app.get("/hurghada/excursie-cu-avionul-din-hurghada-la-cairo", (req, res) =>{
    res.render("layouts/hurghada/excursie-cu-avionul-din-hurghada-la-cairo.ejs")
})

                                                        //Sharm el sheikh

app.get("/sharm-el-sheikh/home", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/home.ejs")
})

app.get("/sharm-el-sheikh/cairo-alexandria", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/cairo-alexandria.ejs")
})

app.get("/sharm-el-sheikh/aqua-park", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/aqua-park.ejs")
})

app.get("/sharm-el-sheikh/dolphin-show", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/dolphin-show.ejs")
})

app.get("/sharm-el-sheikh/petra", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/petra.ejs")
})

app.get("/sharm-el-sheikh/hammam", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/hammam.ejs")
})

app.get("/sharm-el-sheikh/parasailing", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/parasailing.ejs")
})

app.get("/sharm-el-sheikh/glass-boat", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/glass-boat.ejs")
})


app.get("/sharm-el-sheikh/sea-scope", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/sea-scope.ejs")
})

app.get("/sharm-el-sheikh/tiran", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/tiran.ejs")
})

app.get("/sharm-el-sheikh/moses-mountain", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/moses-mountain.ejs")
})

app.get("/sharm-el-sheikh/cairo-by-plane", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/cairo-by-plane.ejs")
})

app.get("/sharm-el-sheikh/cairo-by-bus", (req, res) =>{
    res.render("layouts/sharm-el-sheikh/cairo-by-bus.ejs")
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

app.get("/marsalam/mega-nefertari", (req, res) =>{
    res.render("layouts/marsalam/mega-nefertari.ejs")
})

//                                      contact us
app.get("/contact-us", (req, res) =>{
    res.render("layouts/contact-us.ejs")
})


app.set("view engine", "ejs")
app.set("views", __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)
console.log('The server is running on port 3000')