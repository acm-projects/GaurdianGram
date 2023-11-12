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
import Notifications from '../pages/Notifications';
import { useState } from 'react';
import { notificationsCircle, notificationsOutline, chatbubbleEllipsesOutline } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import FeedCard from './Feed';

const Post = ({FeedCard}) => (
  <div className='mb-10 mx-5'>
    <div className="flex items-center space-x-3 mb-2 mx-2">
      <div className="w-7 h-7 relative">
        <img src={FeedCard.authorAvatar} className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
      </div>
      <h3 className="text-white dark:text-gray-200 m-l-8 text-sm font-bold">{FeedCard.author}</h3>
    </div>
    <div className="h-80 w-full relative rounded">
      <img src={FeedCard.image} className="rounded-md object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
    </div>
    <div class='grid grid-cols-7'> 
      <div style={{width: '240px'}} className="pt-1 dark:bg-gray-900">
        <p className="sm:text-sm text-xs text-white mx-2 mt-3 dark:text-gray-400">{FeedCard.text}</p>
        <p className="sm:text-sm text-xs text-gray-400 mx-2 dark:text-gray-400">X day(s) ago</p>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <IonIcon className = 'mt-3' style={{ color: 'white' , height: '35px', width: '35px'}} href = '/IndivPost' icon={chatbubbleEllipsesOutline}/>
      </div>
    </div>
  </div>
);

const IndivPost = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar className = 'font-weight-500'>
          <IonTitle>User Feed</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton fill = 'clear' onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding-0" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
        {homeItems.map((i, index) => (
          <FeedCard {...i} key={index} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default IndivPost;

