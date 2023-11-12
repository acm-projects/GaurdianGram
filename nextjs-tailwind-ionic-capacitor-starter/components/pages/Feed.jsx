import Image from 'next/Image';
import Card from '../ui/Card';

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
  IonCard
} from '@ionic/react';
import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsCircle, notificationsOutline, chatbubbleEllipsesOutline, person } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import { majormono } from '../../pages/_app';
import { manjari } from '../../pages/_app';

export const FeedCard = ({ title, type, text, author, authorAvatar, image, time}) => (
  <IonCard className='border border-white bg-black mx-3 mt-3'> 
    <div className='mb-10 mx-5'>
      <div className="mt-3 flex items-center space-x-3 mb-2 mx-2">
        <div className="w-7 h-7 relative">
          <img src={authorAvatar} className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
        </div>
        <div className={manjari.className}>
          <h3 className="text-white dark:text-gray-200 m-l-8 text-sm font-bold">{author}</h3>
        </div>
      </div>
      <div className="h-85 w-full relative rounded">
        <img src={image} className="rounded-md object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
      </div>
      <div class='grid grid-cols-7'> 
        <div style={{width: '205px'}} className="pt-1 dark:bg-gray-900">
          <div className={manjari.className}>
            <p className="sm:text-sm text-xs text-white mx-2 mt-4 dark:text-gray-400">{text}</p>
            <p className="sm:text-sm text-xs text-gray-400 mx-2 dark:text-gray-400">X day(s) ago</p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
            <IonButton class="empty" className='bg-black -mx-4 mt-4' href = '/tabs/comments'>
              <IonIcon slot = "icon-only" className = 'mt-3' style={{ color: 'white' , height: '33px', width: '33px'}} icon={chatbubbleEllipsesOutline}/>
            </IonButton>
        </div>
      </div>
    </div>
  </IonCard>
);

const Feed = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <IonPage>

      <IonHeader className='border-b border-white bg-black'>
        <IonCard>
          <IonToolbar class="custom" className = 'bg-black font-weight-500'>
            
            <IonTitle className={majormono.className}>Your Feed</IonTitle>
            
            <IonButtons slot="end">
              <IonButton fill = 'clear' href = "/tabs/feed/friends">
                <IonIcon icon={person}/>
              </IonButton>
            </IonButtons>
          
          </IonToolbar>
        </IonCard>
      </IonHeader>

      <IonContent className="ion-padding-0" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} /> 
          <div>
            {homeItems.map((i, index) => (
              <FeedCard {...i} key={index} />
            ))}
          </div>
      </IonContent>

    </IonPage>
  );
};

export default Feed;

