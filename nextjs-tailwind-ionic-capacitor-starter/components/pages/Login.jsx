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
    IonRouterOutlet
  } from '@ionic/react';

import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { manjari } from '../../pages/_app';
import { majormono } from '../../pages/_app';

/*const routingyourmom = () =>{
    <Route path="/SignUp" render={() => <SignUp />} exact={true} />
}*/

import SignUp from './SignUp';
import Tabs from './Tabs';

const Login = () => {
    return(
        <div class = "box">
            <IonCard className='bg-black rounded-md m-4 mt-3 h-[px] pb-5'>
                
                <div className='px-4'>

                    <IonCardHeader>

                        <div className='mx-auto mt-3 mb-4'>
                            <div className={majormono.className}>
                                <IonCardTitle className='flex rounded-full border border-white text-white p-3 text-4xl font-bold text-center h-[80px] w-[80px]'>
                                    <div className='place-self-center'>
                                        GG
                                    </div>
                                </IonCardTitle>
                            </div>
                        </div>

                        <div className={manjari.className}>
                            <IonCardSubtitle style = {{width: '225px'}} className='place-self-center text-xs px-2'>
                                Welcome back to GuardianGram! Please sign in to access your account.
                            </IonCardSubtitle>
                        </div>

                    </IonCardHeader>
                    
                    <IonCardContent>

                        <IonInput color = "light" placeholder = "Enter Username" className='mb-4 mt-3 h-8 border-b'></IonInput>
                        <IonInput color = "light" placeholder = "Enter Password" type="password" className='h-8 border-b'></IonInput>
                    
                    </IonCardContent>
                    
                    <br />
                    
                    <div>
                        <ion-button class = "custom" style = {{width: '175px'}} href = "/tabs" disabled = "false" expand = "block">
                            <IonLabel>
                                <div>Sign In</div>
                            </IonLabel>
                        </ion-button>
                    </div>

                </div>

                <ion-row className={manjari.className} class="ion-justify-content-center">
                    
                    <div className={manjari.className}>    
                        <div className='text-xs mt-10 mb-0 px-12 text-white'>
                            Don't have an account?
                        </div>
                    </div>
                    
                    <ion-button class = "text" href = "/signup" >
                        <div className={manjari.className}>
                            <div className='text-xs px-10 font-bold'>Sign Up!</div>
                        </div>
                    </ion-button>
                
                </ion-row>

            </IonCard>
        </div>
    );
};

export default Login;