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
    IonButton
  } from '@ionic/react';
import { majormono } from '../../pages/_app';
import { manjari } from '../../pages/_app';

const SignUp = () => {
    return(
        <div class = "box">
            <IonCard className='bg-black rounded-md m-5 mt-3 h-[px]'>
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

                        <IonCardSubtitle className='text-xs'>
                            Sign Up to see all that Guardian Gram has to offer!
                        </IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonInput color = "light" class = "" helperText="" placeholder = "First Name" 
                        className='mb-4 mt-3 h-8 bg-black border-b'></IonInput>
                        <IonInput color = "light" class = "" helperText="" placeholder = "Last Name" 
                        className='mb-4 mt-3 h-8 bg-black border-b'></IonInput>
                        <IonInput color = "light" class = "" helperText="" placeholder = "Username" 
                        className='mb-4 mt-3 h-8 bg-black border-b'></IonInput>
                        <IonInput color = "light" class = "" helperText="" type="password" placeholder = "Password" 
                        className='mb-4 mt-3 h-8 bg-black border-b'></IonInput>
                        <IonInput color = "light" class = "" helperText="" placeholder = "Email or Phone Number" 
                        className='h-8 bg-black border-b'></IonInput>
                        
                    </IonCardContent>
                    <br />
                    <ion-button href = '/tabs' class = "custom" style = {{width: '175px'}} disabled = "false" expand = "block">
                        <IonLabel>
                            <div>Sign Up</div>
                        </IonLabel>
                    </ion-button>
                </div>
                <ion-row class="ion-justify-content-center">
                    <div className='text-xs mt-6 mb-0 text-white'>
                        Already have an account?</div>
                    <ion-button href = '/login' class = "text" disabled = "false" expand = "block">
                        <IonLabel className='text-white px-20'>
                            <div className='text-xs font-bold'>Login</div>
                        </IonLabel>
                    </ion-button>
                </ion-row>
            </IonCard>
        </div>
    );
};

export default SignUp;
/*
<ion-button class = "custom" href = "/login">
                    <div className='text-xs'>Login</div>
                </ion-button>
*/