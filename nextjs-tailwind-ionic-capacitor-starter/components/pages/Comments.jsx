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
  IonCard,
  IonRow,
  IonInput,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonRouterOutlet,
  Route
} from '@ionic/react';
import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsCircle, notificationsOutline, chatbubbleEllipsesOutline, person, sendOutline, chevronBack } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import { majormono } from '../../pages/_app';
import { manjari } from '../../pages/_app';
import biarFace from '../../public/img/biar.jpg';

export const Comment = ({commentText1, commentAuthor1, commentAuthorAvatar1}) => (
    <div className='mx-3 mt-3'>
        <div className={manjari.className}>
            <div className="flex space-x-3 mx-2 h-fit">
              
              <div style={{}} className="w-full flex items-center">
                <div className="mr-2 w-7 h-7 relative">
                    <img src={commentAuthorAvatar1} className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
                </div>

                <h3 className="text-white dark:text-gray-200 text-sm font-bold">{commentAuthor1}</h3>

                <div className='ml-auto'>X day(s) ago</div>
              </div>

            </div>

            <div className='ml-5 text-white'>{commentText1}</div>
        </div>
    </div>
);

const Comments = () =>{
    const homeItems = Store.useState(getHomeItems);
    
    return(
        <IonPage className='h-screen'>

            <IonHeader className='border-b border-white bg-black'>
                <IonCard className=''>
                    <IonToolbar class="custom" className = 'bg-black font-weight-500'>
                        
                        <IonRow className='flex ml-2'>
                            <div>
                                <Image className='rounded-full w-9 h-9 mr-3' src={biarFace}/>
                            </div>
                            
                            <div>
                                <IonInput color = "light" helperText="" placeholder = "Reply" 
                                className='w-full h-5 mt-3 bg-black border-b'></IonInput>
                            </div>

                            <IonIcon className='ml-auto mr-2 h-5 w-5 place-self-center' src={sendOutline}/>
                        </IonRow>
                    
                    </IonToolbar>
                </IonCard>
            </IonHeader>

            <IonContent className="" >
                <IonCard className='pb-3 bg-black min-h-[490px] h-fit'>
                    {homeItems.map((i, index) => (
                    <Comment {...i} key={index} />
                    ))}
                </IonCard>
            </IonContent>

        </IonPage>
    );
};

export default Comments;

/*
<IonContent> 
    <IonCard className='bg-black'>
        <IonCardContent className="px-0 ion-padding-0" fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Feed</IonTitle>
                </IonToolbar>
            </IonHeader>
            <div className='pb-3 bg-black'>
                {homeItems.map((i, index) => (
                <Comment {...i} key={index} />
                ))}
            </div>
        </IonCardContent>
    </IonCard>
</IonContent>

<IonTitle className={majormono.className}>Comments</IonTitle>

className='ion-justify-content-center'

<IonIcon src={sendOutline}/>

<IonTabs>
    <IonRouterOutlet>
        <Route path="/tabs/feed" render={() => <Feed />} exact={true}/>
    </IonRouterOutlet>
    <IonTabBar slot="bottom" className='border-t bg-black'>
        <IonTabButton href='/tabs/feed'>

            <IonIcon style={{ color: 'white' }} icon={chevronBack} />
        
        </IonTabButton>
    </IonTabBar>
</IonTabs>

<IonRow slot="bottom" className='bg-black border-t border-white'>
    <IonIcon className='h-[40px] w-[40px] my-[5px]' color='light' src={chevronBack}/>
    <div className='text-white my-auto'>
        <div className={manjari.className}>Back to Feed</div>
    </div>
</IonRow>
*/