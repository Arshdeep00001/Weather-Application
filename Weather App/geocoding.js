const { response } = require('express')
const express = require ('express')
const request = require('request')
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJzaGRlZXAwMSIsImEiOiJja3k3MzU2OGkxMW9hMnhvamVyYmZlcnlwIn0.aVJzJEHaJsPv0IdFMHmbUQ'
request({ url : geocodeURL, json : true }, (error,response) => {
    const latitude= response.body.features[0].center[1]
    const longitude= response.body.features[0].center[0]
    console.log(latitude,longitude)
})