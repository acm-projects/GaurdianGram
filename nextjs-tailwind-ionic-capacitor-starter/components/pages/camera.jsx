import React, { useRef, useEffect, useState } from 'react';
import { IonButton } from '@ionic/react';


function camera() {
 const videoRef = useRef(null);
 const photoRef = useRef(null);
 const [hasPhoto, setHasPhoto] = useState(false);


 const videoConstraints = {
   width: 414,
   height: 200, // Adjust the height as needed
 };


 const getStream = () => {
   if (navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices
       .getUserMedia({ video: videoConstraints, audio: false })
       .then(function (stream) {
         let video = videoRef.current;
         video.srcObject = stream;
         video.play();
       })
       .catch(function (error) {
         console.log('Something went wrong!');
         ErrorHandler(error);
       });
   }
 };


 function ErrorHandler(error) {
   return {
     status: 0,
     message: error,
   };
 }


 const takePhoto = () => {
   const width = 414;
   const height = width / (16 / 9);


   let video = videoRef.current;
   let photo = photoRef.current;


   photo.width = width;
   photo.height = height;


   let ctx = photo.getContext('2d');
   ctx.drawImage(video, 0, 0, width, height);


   setHasPhoto(true);
 };


 const closePhoto = () => {
   let photo = photoRef.current;
   let ctx = photo.getContext('2d');
    // Use the width and height set in the takePhoto function to clear the canvas
   ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
 };


 useEffect(() => {
   getStream();
 }, [videoRef]);




 return (
   <div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
     <video ref={videoRef} style={{ width: '100%', height: 'auto' }}></video>
     <IonButton onClick={takePhoto} expand="full" size="large"> Snap!</IonButton>
     </div>
       <div className={'result ' + (hasPhoto ?
           'hasPhoto' : '')}>
         <canvas ref={photoRef} style={{ width: '100%', height: 'auto' }}></canvas>
         <IonButton onClick={closePhoto}>
           Close
           </IonButton>
       </div>
   </div>
 );
}


export default camera;