import React from 'react';
import { IonPage, IonIcon, IonHeader, IonMenuButton, IonToolbar, IonButton, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react';
import { caretBack, notificationsCircle, notificationsOutline, chatbubbleEllipsesOutline, settings } from 'ionicons/icons';

import { Link } from 'react-router-dom';

import Card from '../ui/Card';



function IndivPost() {

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar className = 'font-weight-500'>
            <IonTitle>GuardianGram</IonTitle>
            <IonButtons slot="start">
              <IonButton href="/tabs/profile" >
                <IonIcon text="Previous" style={{ color: 'white' }} icon={caretBack} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

      <Card className="bg-clear px-4 py-4 my-4 w-5/8"> 
        <div className="h-4/5 w-full relative">
          <img className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full" src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_640.jpg" alt="" />
        </div>
        <div className="px-4 py-2 bg-[#00053B] shadow rounded-b-xl">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 relative">
              <img 
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
            </div>
            <h3 className="text-gray-100 m-l-8 text-s font-bold">@John</h3> 
          </div>
          <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">2 day ago</p>
          <p className="sm:text-sm text-lg text-gray-100 mr-1 my-3"> Check out this bird!</p>
        </div>
      </Card>
      </IonContent>
    </IonPage>
  );
}

export default IndivPost;