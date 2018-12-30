import tornado from "../images/icons/weather/tornado.png";
import atmosphere from "../images/icons/weather/atmosphere.png" ;
import storm from "../images/icons/weather/storm.png";
import snow from "../images/icons/weather/snow.png";
import hail from "../images/icons/weather/hail.png"; 
import haze from "../images/icons/weather/haze.png"; 
import rainSnow from "../images/icons/weather/rain-snow.png"; 
import lightRain from "../images/icons/weather/light-rain.png";
import moderateRain from "../images/icons/weather/moderate-rain.png";
import clouds from "../images/icons/weather/clouds.png";
import night from "../images/icons/weather/night.png";
import partlyCloudy from "../images/icons/weather/partly-cloudy.png";
import sun from "../images/icons/weather/sun.png";
import missing from "../images/icons/weather/missing.png";

const DecodeWeatherIcon = {
    0: tornado,
    1: atmosphere,
    2: tornado,
    3: storm,
    4: storm,
    5: rainSnow,
    6: rainSnow,
    7: rainSnow,
    8: rainSnow,
    9: lightRain,
    10: hail,
    11: moderateRain,
    12: moderateRain,
    13: snow,
    14: snow,
    15: snow,
    16: snow,
    17: hail,
    18: hail,
    19: atmosphere,
    20: haze,
    21: haze,
    22: haze,
    23: atmosphere,
    24: atmosphere,
    25: atmosphere,
    26: clouds,
    27: night,
    28: clouds,
    29: night,
    30: partlyCloudy,
    31: night,
    32: sun,
    33: night,
    34: sun,
    35: rainSnow,
    36: sun,
    37: storm,
    38: storm,
    39: storm,
    40: lightRain,
    41: snow,
    42: snow,
    43: snow,
    44: partlyCloudy,
    45: storm,
    46: snow,
    47: moderateRain,
    3200: missing,
};

export default DecodeWeatherIcon;