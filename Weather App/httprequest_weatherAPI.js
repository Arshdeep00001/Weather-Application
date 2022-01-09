const request = require ('request')
const wurl = "https://api.openweathermap.org/data/2.5/weather?q=Florida&appid=730e60646afb87dca9a1892c6aef5452"

//request({ url:wurl }, (error,response)=>{
//    const data=JSON.parse(response.body)// Parse the response body from JSON string into JavaScript object
//    console.log(data.main.temp) // Prints the current temperature to the console
//})
request({ url:wurl, json : true }, (error,response) => {
        console.log(response.body.weather[0].description+". It is currently "+response.body.main.temp+" degrees out there.")
})