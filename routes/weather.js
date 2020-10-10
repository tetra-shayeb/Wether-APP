const router = require('express').Router();
const fetch = require ('node-fetch')

router.post('/', (req, res) => {
    const city = req.body.city;
    console.log(city)
    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=637974300193b6510a4cb3c283bb984b`
    console.log(process.env.API_KEY)
    fetch(url_api)
    .then(res => res.json())
    .then(data => console.log(data));

})


module.exports = router;