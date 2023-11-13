import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import GeoLocation from './nav';


function Map() {


   const location = GeoLocation();
   const { isLoaded } = useLoadScript({
   });


   return (
       <IonPage>
           <IonContent>
               {location.status === 1 ? (
                       <GoogleMap
                           zoom={15}
                           center={{ lat: location.coordinates.lat, lng: location.coordinates.long }}
                           mapContainerStyle={{ width: "100%", height: "100%" }}
                       >


                           <Marker
                               position={{ lat: location.coordinates.lat, lng: location.coordinates.long }}
                           ></Marker>


                       </GoogleMap>
                   ) : (
                       <div>
                           <label>
                               <middle>
                                   Loading...
                               </middle>
                           </label>
                       </div>
                   )}
           </IonContent>
       </IonPage>
   );
}


export default Map;

