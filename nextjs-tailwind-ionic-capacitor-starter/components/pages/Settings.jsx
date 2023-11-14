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
  IonInput
} from '@ionic/react';

import Store from '../../store';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';
import { getHomeItems } from '../../store/selectors';
import { getUsers } from '../../store/selectors';
import biarFace from '../../public/img/biar.jpg';
import users from '../../mock/index';
import Image from 'next/Image';
import {chevronForward, search} from 'ionicons/icons';
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
const Settings = ({displayName, username}) => {
  const users = Store.useState(getUsers);
  const settings = Store.useState(selectors.getSettings);

  return (
    <IonPage>

      <IonHeader className='border-b border-white bg-black py'>
        <IonCard>
          <IonToolbar class="custom" className = 'bg-black font-weight-500'>
            <IonTitle className={majormono.className}>Your Settings</IonTitle>
          </IonToolbar>
        </IonCard>
      </IonHeader>
      
      <IonContent>
        <IonCard className='bg-black mx-3 rounded-md border border-white'>
          
          <IonRow className='ion-justify-content-center mt-5 mb-1'>
            <div>
              <Image className='rounded-full w-fit' style={{height: '100px'}} src={biarFace}/>
            </div>
          </IonRow>

          <div className={manjari.className}>
            <div class='mb-4 flex flex-row justify-center items-center text-white font-bold'>@Biar_Fekry</div>
          </div>


          <div className={manjari.className}>

            <div className='text-white items-center relative flex px-1 rounded-md mb-4 mt-3 mx-10 h-7 border border-white'>
              <IonInput className='text-white' slot="start" class = "settings" helperText="" placeholder = "Search Settings"></IonInput>
              <IonIcon color="light" slot = "end" icon={search}/>
            </div>
            
            <div className='ml-1 text-white text-xs mt-10'>Privacy Settings</div>
            
            <div class = "border-t border-grey mt-1">
              <div className='items-center flex relative text-white px-1 h-10'>
                <div style={{width: '300px'}}>Geolocation Settings</div>
                <IonButton class="empty" className='bg-black -mx-4 mt-3' href='/settings/geo'>
                  <IonIcon slot = "icon-only" color="light" icon={chevronForward} className='h-8 w-8'/>
                </IonButton>
              </div>
              
              <div className='items-center flex relative text-white px-1 h-10'>
                <div style={{width: '300px'}}>Discoverability</div>
                <IonButton class="empty" className='bg-black -mx-4 mt-3' href='/friends'>
                  <IonIcon slot = "icon-only" color="light" icon={chevronForward} className='h-8 w-8'/>
                </IonButton>
              </div>
              
              <div className='items-center flex relative text-white px-1 h-10'>
                <div style={{width: '300px'}}>Password and Personal Details</div>
                <IonButton class="empty" className='bg-black -mx-4 mt-3' href='/friends'>
                  <IonIcon slot = "icon-only" color="light" icon={chevronForward} className='h-8 w-8'/>
                </IonButton>
              </div>
              
              <div className='items-center flex relative text-white px-1 h-10'>
                <div style={{width: '300px'}}>App Permissions</div>
                <IonButton class="empty" className='bg-black -mx-4 mt-3' href='/friends'>
                  <IonIcon slot = "icon-only" color="light" icon={chevronForward} className='h-8 w-8'/>
                </IonButton>
              </div>
              
            </div>

            <div className='ml-1 text-white text-xs mt-10'>Circle Settings</div>
            
            <div class = "border-t border-grey mt-1" href="/friends">
              
              <div className='items-center flex relative text-white px-1 h-10'>
                <div style={{width: '300px'}}>Friends</div>
                <IonButton class="empty" className='bg-black -mx-4 mt-3' href='/friends'>
                  <IonIcon slot = "icon-only" color="light" icon={chevronForward} className='h-8 w-8'/>
                </IonButton>
              </div>
            
            </div>

          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
/*
<IonLabel>Enable Notifications</IonLabel>
<IonToggle
  checked={settings.enableNotifications}
  onIonChange={e => {
    setSettings({
      ...settings,
      enableNotifications: e.target.checked,
    });
  }}
/>
*/