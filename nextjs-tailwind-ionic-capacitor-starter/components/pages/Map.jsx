import React from 'react';
import { IonPage, IonContent, IonTabButton } from '@ionic/react';
import GeoLocation from './nav'; 
function Map() {

    var location = GeoLocation(); 
    var latitude = location.coordinates.lat;
    var longitude = location.coordinates.long;
    console.log('latitude', latitude)

    return (
        <IonPage>
            <IonContent>
                <IonTabButton id="share" onClick={GeoLocation}>
                    Share My Location
                    <br></br>
                    latitude {latitude}
                    <br></br>
                    Longitude: {longitude}
                    
                </IonTabButton>
            </IonContent>
        </IonPage>
    );

}

export default Map;
