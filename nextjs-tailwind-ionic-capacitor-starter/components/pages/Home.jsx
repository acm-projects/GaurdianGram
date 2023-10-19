import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react';

import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';

function Home() {

  return (
    <IonPage>
      <IonContent>
        <label>
            Home!
        </label>
      </IonContent>
    </IonPage>
  );
}

export default Home;