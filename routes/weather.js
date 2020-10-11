const router = require('express').Router();
const fetch = require('node-fetch')
require('dotenv').config()
router.get('/', (req, res) => {
    res.render('index', {
        city: null,
        des: null,
        icon: null,
        temp: null
    })
})
router.post('/', async (req, res) => {
    const city = req.body.city;
    console.log(city)
    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=637974300193b6510a4cb3c283bb984b`

    try {

        await fetch(url_api)
            .then(res => res.json())
            .then(data => {
                if (data.message === ' city not fond ') {
                    res.render('index', {
                        city: data.message,
                        des: null,
                        icon: null,
                        temp: null
                    })
                } else {
                    const city = data.name;
                    const des = data.weather[0].description;
                    const icon = data.weather[0].icon;
                    const temp = data.main.temp;

                    res.render('index', {
                        city, des, icon, temp
                    })
                }
            })



    } catch (err) {
        res.render('index', {
            city: 'somthing wrong',
            des: null,
            icon: null,
            temp: null
        })
    }


})


module.exports = router;