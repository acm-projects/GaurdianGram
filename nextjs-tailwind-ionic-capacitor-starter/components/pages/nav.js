import { useEffect, useState } from 'react';

const GeoLocation = () => {

    const [location, setLocation] = useState({
        coordinates : {lat: '', long: ''},
        status: null

    });

    function GetPosition(location){

        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;
        setLocation({
            coordinates: {
                lat: latitude, 
                long: longitude
            },
            status: 1
        });

        return location;
    }

    function ErrorHandler(error){
        return({
            status: 0,
            message: error
        })

    }

    useEffect(() => {

        if(!('geolocation' in navigator)){
            ErrorHandler('Unable to access geolocation services');
        }
        else{
            console.log('loading')
            navigator.geolocation.getCurrentPosition(GetPosition, ErrorHandler);
        }
        
    }, []);

    return location;
}

export default GeoLocation;




















