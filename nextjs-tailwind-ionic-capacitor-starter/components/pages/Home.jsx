import React from 'react';
import { motion } from "framer-motion"
import {IonAlert, IonList, IonItem, IonPage, IonHeader, IonToggle, IonToolbar, IonButtons, IonButton, IonIcon, IonBackButton, IonMenuButton, IonTitle, IonContent } from '@ionic/react';

import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsOutline, settings } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';

function Home() {
  const [showNotifications, setShowNotifications] = useState(false);

  const [showActiveSOS, setShowActiveSOS] = useState(false);

  const [isSOSClicked, setIsSOSClicked] = useState(false);

  const [isAlfrescoModeOn, setAlfrescoModeOn]= useState(false);

  const handleSOSClick = () => {
    // ti will change when the button is clicked
    setIsSOSClicked(!isSOSClicked);
  };

  const handleAlfrescoMode = () => {
    // ti will change when the button is clicked
    setAlfrescoModeOn(!isAlfrescoModeOn);
    if (isAlfrescoModeOn){
      
    }
  };



  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar className = 'font-weight-500'>
            <IonTitle>GuardianGram</IonTitle>
            <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons>
              <IonButtons slot="end">
                <IonButton fill = 'clear' onClick={() => setShowNotifications(true)}>
                  <IonIcon style={{ color: 'white' }} icon={notificationsOutline} />
                </IonButton>

              <IonButton href="/tabs/settings" >
                <IonIcon style={{ color: 'white' }} icon={settings} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader> 

        <div id="elementToChange" className="w-full h-full bg-gradient-to-b from-[from-[#073e7e] to-red-500] to-[#00052B]">

          <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />

          <div className=' text-[20px] mx-4 py-4 flex items-center justify-center'>
            <IonToggle id="present-alert" labelPlacement="start" color="warning" 
              className={` ${
                isAlfrescoModeOn ? ""  : ""
              }`}
              onClick={handleAlfrescoMode}
            >
              Alfresco Mode 
              {isAlfrescoModeOn ? " ON" : " OFF"}
            
              
            </IonToggle>
            <IonAlert
              trigger="present-alert"
              header="Alfresco Mode ON"
              message="Your friends received a notification that you turned on Alfresco Mode."
              buttons={[
                {
                  text: 'OK',
                  cssClass: 'alfresco-mode-on',
                },
              ]}
            ></IonAlert>
          </div>


          
          <div className="flex h-4/5 items-center justify-center">
            <motion.button
              whileTap={{ scale: 0.8 }}
              className={`text-[50px] p-1 h-80 w-80 font-bold border-solid border-4 text-white font-16 rounded-full ${
                isSOSClicked ? "bg-green-500" : "bg-gradient-to-b from-red-300 to-red-500"
              }`}
              onClick={handleSOSClick}
            >
              {isSOSClicked ? "Help is on the way" : "SOS"}
            </motion.button>
            <span className="relative flex h-3 w-3 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
        </div>
        


      </IonContent>
    </IonPage>
  );
}

export default Home;