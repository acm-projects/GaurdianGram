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

/*const routingyourmom = () =>{
    <Route path="/SignUp" render={() => <SignUp />} exact={true} />
}*/

import SignUp from './SignUp';
import Tabs from './Tabs';
import Feed from './Feed';

const Login = () => {
    return(
        <div class = "box">
            <IonCard className='rounded-md m-5 h-[350px]'>
                <div className='px-4'>
                    <IonCardHeader>
                        <IonCardTitle className='p-2 text-3xl font-bold place-self-center'>
                            Login
                        </IonCardTitle>
                        <IonCardSubtitle className='text-xs'>
                            Welcome back to GuardianGram! Please sign in to access your account.
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonInput class = "custom" helperText="Username or Email" 
                        placeholder = "Enter Username" className='rounded-md mb-5 mt-3 h-8'></IonInput>
                        <IonInput class = "custom" helperText="Username or Email" 
                        placeholder = "Enter Password" className='rounded-md h-8'></IonInput>
                    </IonCardContent>
                    <br />
                    <ion-button href = "/tabs" disabled = "false" expand = "block">
                        <IonLabel>
                            <div>Sign In</div>
                        </IonLabel>
                    </ion-button>
                </div>
            </IonCard>
            <ion-row class="ion-justify-content-center">
                <div className='text-xs mt-10 mb-4 px-12 text-white'>
                    Don't have an account? Sign up here:</div>
                <ion-button href = "/signup">
                    <div className='text-xs'>Sign Up</div>
                </ion-button>
            </ion-row>
        </div>
    );
};

export default Login;