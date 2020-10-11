const router = require('express').Router();
const fetch = require('node-fetch')
router.get('/', (req, res) => {
    res.render({
        city: null,
        des: null,
        icon: null,
        temp: null
    })
})
router.post('/', (req, res) => {
    const city = req.body.city;
    console.log(city)
    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=637974300193b6510a4cb3c283bb984b`

    try {

        async function weatherapp() { 
             await fetch(url_api)
                .then(res => res.json())
                .then(data => {
                    if (data.message === ' city not fond ') {
                        res.render({
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

            res.render({
                city, des, icon, temp
            })
        }
    })}
          

    } catch (err) {

}


})


module.exports = router;