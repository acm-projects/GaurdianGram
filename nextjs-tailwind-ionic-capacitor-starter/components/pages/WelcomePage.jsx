import {
    IonPage,
    IonHeader,
    IonItem,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonToggle,
    IonLabel,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonInput,
    IonButton,
    Route
  } from '@ionic/react';
import { majormono } from '../../pages/_app';
import { manjari } from '../../pages/_app';
import Login from './Login';

const WelcomePage = () => {
    return(
        <IonPage class="gradient" onClick={() => <Route render={() => <Login />} exact={true} />}>
                <div className='mx-auto mt-[100px]'>
                    <div className={majormono.className}>
                        <div className='text-white text-2xl font-bold'>Guardian Gram</div>
                    </div>
                </div>
                <div className='mx-auto text-white'>
                    <div className={manjari.className}>Click Anywhere to Continue</div>
                </div>
        </IonPage>
    );
};

export default WelcomePage;
/*
<ion-button class = "custom" href = "/login">
                    <div className='text-xs'>Login</div>
                </ion-button>
*/