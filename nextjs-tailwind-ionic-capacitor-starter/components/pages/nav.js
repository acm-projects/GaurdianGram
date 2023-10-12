
import { IonPage, IonContent, IonTabButton } from '@ionic/react';
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






const GeoLocation = () => {


    const [location, setLocation] = useState({
        coordinates : {lat: '', long: ''},
        status: null

    });

    function GetPosition(location){
            
        var latitude = location.coords.latitude;
        var longitude = location.coords.longitude;
        setLocation({
            coordinates: {
                lat: latitude, 
                long: longitude
            },
            status: 1
        });

        console.log('location: ', latitude, longitude);
        console.log('success')
            
    }

    function ErrorHandler(error){
        return({
            status: 0,
            message: error
        })

    }

    useEffect(() => {


        const handleClick = () => {

            if(!('geolocation' in navigator)){
                ErrorHandler('Unable to access geolocation services');
            }
            else{
                navigator.geolocation.getCurrentPosition(GetPosition, ErrorHandler);
            }
            

        };
        
        document.querySelector("#share").addEventListener("click", handleClick);
    
    }, []);
}


export default GeoLocation;



