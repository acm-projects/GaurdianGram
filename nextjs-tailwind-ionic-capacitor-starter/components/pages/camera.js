import {camera} from 'ionicons/icons';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonIcon } from '@ionic/react';
import { useRef, useEffect, useState } from 'react';



function Camera() {

    const videoRef = useRef(null);

    const videoConstraints = {
        width: 1920,
        height: 1080

    };


    const getStream = () => {

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: {videoConstraints}, audio: false })
            .then(function (stream) {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(function (error) {
                console.log("Something went wrong!");
                ErrorHandler(error);
            });
        }


    }


    function ErrorHandler(error){
        return({
            status: 0,
            message: error
        })
    }

    useEffect(() => {
        getStream();
    }, [videoRef])




  return (

    <IonContent>
        <video className='h-full w-fit object-cover' ref={videoRef}></video>
        <div className='text-white'>your mom</div>
        <div>
            <IonIcon classname = '' icon = {camera}/>
        </div>
    </IonContent>
  );

}

export default Camera;