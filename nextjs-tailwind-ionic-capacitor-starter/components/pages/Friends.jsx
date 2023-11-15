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
import { notificationsCircle, notificationsOutline, chatbubbleEllipsesOutline, close, trash} from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import IndivPost from './IndivPost';
import Image from 'next/Image';
import { manjari } from '../../pages/_app';
import { majormono } from '../../pages/_app';

export const FriendCard = ({ title, type, text, author, authorAvatar, image, time}) => (
    <IonCard className=' bg-black mx-3 mt-3'>
        <div className={manjari.className}>
            <div className="flex space-x-3 mb-2 mx-2 h-fit">
              
              <div style={{width: '235px'}} className="flex items-center">
                <div className="mr-2 w-7 h-7 relative">
                    <img src={authorAvatar} className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full mt-1" alt="" />
                </div>
                <h3 className="text-white dark:text-gray-200 text-sm font-bold pt-1">{author}</h3>
              </div>
              
              <div className="w-5 h-5 relative my-auto">
                  <IonIcon icon={trash} color="light" className='object-cover min-w-full min-h-full max-w-full max-h-full'/>
              </div>

            </div>
        </div>
    </IonCard>
);

const Friends = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <IonPage>
      <IonContent>
        <label>
          Frieds feed!
        </label>
      </IonContent>
    </IonPage>
  );
};

export default Friends;

