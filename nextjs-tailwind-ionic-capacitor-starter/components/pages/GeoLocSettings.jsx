import {
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonButtons,
IonButton,
IonIcon,
IonContent,
IonMenuButton,
IonCard,
IonRow,
IonInput,
IonToggle,
IonItem
} from '@ionic/react';

import Store from '../../store';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';
import { getHomeItems } from '../../store/selectors';
import { getUsers } from '../../store/selectors';
import biarFace from '../../public/img/biar.jpg';
import users from '../../mock/index';
import Image from 'next/Image';
import {chevronBack, chevronForward, search} from 'ionicons/icons';
import { majormono } from '../../pages/_app';
import { manjari } from '../../pages/_app';

/*
export const settingsItem ({title}) => (
<IonItem>
    <IonLabel>{title}</IonLabel>
    <IonToggle/>
</IonItem>
)
*/
const GeoSettings = ({displayName, username}) => {
    const users = Store.useState(getUsers);
    const settings = Store.useState(selectors.getSettings);

    return (
        <IonPage>

            <IonHeader className='border-b border-white bg-black'>
                <IonCard>
                    <IonToolbar class="custom" className = 'bg-black font-weight-500'>
                        
                        <IonTitle className={majormono.className}>Geolocation</IonTitle>
                        
                        <IonButtons slot="end">
                            <IonButton fill = 'clear' href = "/tabs/settings">
                                <IonIcon className="-mr-1 h-7 w-7" icon={chevronBack}/>
                            </IonButton>
                        </IonButtons>
                    
                    </IonToolbar>
                </IonCard>
            </IonHeader>
            
            <IonContent>
                <IonCard className='bg-black mx-3 rounded-md border border-white min-h-[400px] h-fit'>
                    <IonItem>
                        <IonToggle></IonToggle>
                    </IonItem>
                </IonCard>
            </IonContent>
            
        </IonPage>
    );
};

export default GeoSettings;