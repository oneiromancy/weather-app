# Weather Haze

### Description

This weather app is an original design of mine. The app contains features such as user geolocation, an autocomplete search engine, insertion/deletion of forecast locations in menu and a detailed five-days ahead forecast view mode.

![](demo.gif)

### Software Design

The ReactJS portion of the codebase was structured somewhat unusually, that is, I attempted to organise components based on their features.
The folder structure is listed below:

* Menu
  * Forecast Selection 
    * Forecast Preview
  * Place Search
    * Autocomplete
    * Search Form

* Detailed Forecast
  * Days Ahead
    * Forecast Instance
  * Live Weather
  
### Observation

Unfortunately, Yahoo has recently terminated its Yahoo Weather API and YQL services. Alternative weather/location APIs arrangements will be explored in due course. 

## Built With

* HTML
* CSS/SASS
* ReactJS
