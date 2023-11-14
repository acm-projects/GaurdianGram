// import React, { useState, useEffect } from 'react';
// // import ImageCard from './ImageCard';
// import IndivPost from './IndivPost';
// import { Link } from 'react-router-dom';
// import { notificationsCircle, notificationsOutline, chatbubbleEllipsesOutline, settings } from 'ionicons/icons';
// import {
//   IonPage, 
//   IonHeader, 
//   IonToolbar, 
//   IonButtons, 
//   IonButton,
//   IonBackButton, 
//   IonTitle, 
//   IonContent,
//   IonIcon,
//   IonMenuButton,
//   IonCard,
//   IonCardContent, 
//   IonCardHeader, 
//   IonCardSubtitle, 
//   IonCardTitle
// } from '@ionic/react';

// import Notifications from '../pages/Notifications';
// import { getHomeItems } from '../../store/selectors';
// import Store from '../../store';




// const ImageCard = ({ image }) => {
// 	const tags = image.tags.split(',');
// 	return (
//     <div className="bg-[#05316a] max-w-sm rounded-lg overflow-hidden shadow-lg">
      
// 			<Link to="/indivPost">
// 				<img src={image.webformatURL} alt="" className="w-full aspect-square object-cover"/>
// 			</Link>

//       <div className="px-4 py-3">
//         <div className="font-bold text-white-90 mb-2">
//           <strong>@ {image.user}</strong>
//         </div>
//       </div>
      
//     </div>
//   )
// }






// function Profile() {
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [term, setTerm] = useState('');
//   const [showNotifications, setShowNotifications] = useState(false);

//   useEffect(() => {
//     // Copy this line from GG Pixabay API
//     .then(res => res.json())
//     .then(data => {
//       setImages(data.hits);
//       setIsLoading(false);
//     })
//     .catch(err => console.log(err));
    
//   }, [term]);





//   return (
//     <IonPage>
//       <IonContent>
//         <IonHeader>
//           <IonToolbar className = 'font-weight-500'>
//             <IonTitle>GuardianGram</IonTitle>
//               <IonButtons slot="start">
//                 <IonMenuButton />
//               </IonButtons>
//               <IonButtons slot="end">
//                 <IonButton fill = 'clear' onClick={() => setShowNotifications(true)}>
//                   <IonIcon style={{ color: 'white' }} icon={notificationsOutline} />
//                 </IonButton>

//               <IonButton href="/tabs/settings" >
//                 <IonIcon style={{ color: 'white' }} icon={settings} />
//               </IonButton>
//             </IonButtons>
//           </IonToolbar>
//         </IonHeader> 
//         <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />


//         <div className=' px-4 py-4'>
//           <img className="  rounded-full object-cover w-1/3 aspect-square object-cover"
//             src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
//             alt="A guy"              
//           />  
//           <p className=' font-bold mx-8 py-2'>@John</p>
          
//         </div>
        
//         <label>
//           <div className="container mx-auto">
        

//             {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

//             {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-2 px-4 gap-4">
//               {images.map(image => (
//                 <ImageCard key={image.id} image={image} />
//               ))}
//             </div>}
//           </div>
//         </label>
//       </IonContent>
//     </IonPage>
    
//   );
// }

// export default Profile;



















import React, { useState, useEffect } from 'react';
// import ImageCard from './ImageCard';
import IndivPost from './IndivPost';
import { Link } from 'react-router-dom';
import { notificationsCircle, notificationsOutline, chatbubbleEllipsesOutline, settings } from 'ionicons/icons';
import {
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonButtons, 
  IonButton,
  IonBackButton, 
  IonTitle, 
  IonContent,
  IonIcon,
  IonMenuButton,
  IonCard,
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle
} from '@ionic/react';

import Notifications from '../pages/Notifications';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';


function Profile() {
  

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar className = 'font-weight-500'>
            <IonTitle>GuardianGram</IonTitle>
              
          </IonToolbar>
        </IonHeader> 
        
      </IonContent>
    </IonPage>
    
  );
}

export default Profile;