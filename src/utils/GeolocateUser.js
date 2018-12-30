function GeolocateUser(){
    
    return new Promise( (resolve, reject) => {

        if ('geolocation' in navigator) {

            navigator.geolocation.getCurrentPosition( position => {

                resolve(position.coords);

            }, error => {

                if(error.code === error.PERMISSION_DENIED) {
                    console.error("Error detecting location.");
                }
                
            });
        }

    });

}

export default GeolocateUser;