import React from 'react';
import { IonPage, IonContent, IonTabButton } from '@ionic/react';
import { terminal } from 'ionicons/icons';
import handleClick from './nav';
import GeoLocation from './nav';
import location from './nav'

function Map() {

  return (
    <IonPage>
      <IonContent>
        <IonTabButton id="share" onClick={GeoLocation()}>
          Share My Location
        </IonTabButton>
      </IonContent>
    </IonPage>
  );
}

export default Map;
