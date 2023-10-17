
// // check if location services is turned on
// // if location servies are allowed we fetch for user longitude and latitude
// // else if location services doesn't work or the user declines the program wont run
import { useEffect, useState } from 'react';

// import { terminal } from "ionicons/icons";


// const handleClick = () => {
//     document.querySelector("#share").addEventListener
//     ("click", () => {
//     console.log('backend worked');
//     });
// };

// export default handleClick; 

// AIzaSyClcFS24hcWrXCA0PciBNd97GpvZyednvY

// calback to the inbuilt function innit map
// google maps function

// function initMap(){

//     var settings = {
//         zoom: 4,
//         center: location
//     }
//     var map  = new google.maps.Map(document.getElementById('map'), settings);
// }

// intitMap();


// linking api key
//https://maps.googleapis.com/maps/api/js?key=AIzaSyClcFS24hcWrXCA0PciBNd97GpvZyednvY&callback=initMap";

// opening it in google maps




const GeoLocation = () => {

    console.log(1)
    const [location, setLocation] = useState({
        coordinates : {lat: '', long: ''},
        status: null

    });

    function GetPosition(location){
        console.log(2)
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;
        setLocation({
            coordinates: {
                lat: latitude, 
                long: longitude
            },
            status: 1
        });
        




        console.log('location: ', latitude, longitude);
        console.log('success');

        return location;
            
    }

    function ErrorHandler(error){
        return({
            status: 0,
            message: error
        })

    }
    console.log(3)
    useEffect(() => {

        console.log(4)
        const handleClick = () => {

            if(!('geolocation' in navigator)){
                console.log('100100000')
                ErrorHandler('Unable to access geolocation services');
            }
            else{
                console.log('loading')
                navigator.geolocation.getCurrentPosition(GetPosition, ErrorHandler);
            }
            

        };
        
        console.log()
        document.querySelector("#share").addEventListener("click", handleClick);
    
    }, []);

    return location;

}


export default GeoLocation;



