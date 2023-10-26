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


const SignUp = () => {
    return(
        <div class = "box">
            <IonCard className='rounded-md m-5 h-[450px]'>
                <div className='px-4'>
                    <IonCardHeader>
                        <IonCardTitle className='p-2 text-3xl font-bold place-self-center'>
                            Sign Up
                        </IonCardTitle>
                        <IonCardSubtitle className='text-xs'>
                            let GG = Fun * Safety;
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonInput class = "custom" helperText="" placeholder = "First Name" 
                        className='rounded-md mb-5 mt-3 h-8'></IonInput>
                        <IonInput class = "custom" helperText="" placeholder = "Last Name" 
                        className='rounded-md mb-5 mt-3 h-8'></IonInput>
                        <IonInput class = "custom" helperText="" placeholder = "Username" 
                        className='rounded-md mb-5 mt-3 h-8'></IonInput>
                        <IonInput class = "custom" helperText="" placeholder = "Password" 
                        className='rounded-md mb-5 mt-3 h-8'></IonInput>
                        <IonInput class = "custom" helperText="" placeholder = "Email or Phone Number" 
                        className='rounded-md h-8'></IonInput>
                        
                    </IonCardContent>
                    <br />
                    <ion-button class = "custom" style = {{width: '175px'}} disabled = "false" expand = "block">
                        <IonLabel>
                            <div>Sign Up</div>
                        </IonLabel>
                    </ion-button>
                </div>
            </IonCard>
        </div>
    );
};

export default SignUp;