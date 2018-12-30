function FetchWeatherData(url){

    return fetch(url).then(response => 

        response.json()
    
    ).then(data => {

        return data.query.results

    })

}

export default FetchWeatherData;