import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react';
import { useRef, useEffect, useState } from 'react';


// make camera the whole screen
// flip camera


function Friends() {
    const videoRef = useRef(null);

    const videoConstraints = {
        width: self.width,
        height: self.height
    };

    const getStream = () => {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
            .getUserMedia({ 
            video: videoConstraints, audio: true, 
            facingMode: {
                exact: 'user'
            }
            })
            .then((stream) => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(function (error) {
                ErrorHandler(error);
            });
        }
    };


    function ErrorHandler(error) {
        return {
            status: 0,
            message: error
        };
    }

    useEffect(() => {
        getStream();
    }, [videoRef]);


    // function fullScreen(videoRef){
    //     const vid = document.getElementById('videoRef')
    //     if (vid && vid.requestFullscreen) {
    //         vid.requestFullscreen();
    //     }

    // }

    // if(videoRef){
    //     fullScreen(videoRef);
    // }

    // const switchCamera = () => {


    //     if (facingMode == 'user'){
    //         mode = 'enviornment'
    //     }
    //     else{
    //         mode = 'user'
    //     }

    //     navigator.mediaDevices
    //         .getUserMedia({ 
    //         video: videoConstraints, audio: true, 
    //         facingMode: {
    //             exact: mode
    //         }
    //         });
    // }

    // addEventListener.onClick('click', switchCamera());

    const biar = () => {
        console.log('BIAR FEKY')
    }

    return (
        // <div>
        //   {videoRef ? (
        //     <video ref={videoRef} autoPlay={true}></video>
        //   ) : (
        //     <IonPage>
        //       <IonContent class='bottom'>
        //         Unable to load camera
        //       </IonContent>
        //     </IonPage>
        //   )}
        //   <div className="floor">
        //     Your Text Here
        //   </div>
        // </div>je nekecnmhu ba ei si azin 

        <IonPage>
              <IonContent>
                <video ref={videoRef}></video>
              </IonContent>

            <IonContent className = 'grid grid-cols-1'> 
                <button onClick={() => biar()}>nice</button>
            </IonContent>
        </IonPage>

        );

      
    
}

export default Friends;
