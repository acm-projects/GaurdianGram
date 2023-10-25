
// importing in neccesary ionic componenets in orrder to build tabs.jsx
// the file creates the visuals and routing for the nav bar
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, navigate, calendar, people, settings} from 'ionicons/icons';

// importing in function calls from tab pages 
import Home from './Home';
import Map from './Map';
import Settings from './Set';
import Calendar from './Calendar';
import Friends from "./Friends"

const Tabs = () => {
  return (

    // setting up routing for each tab when user clicks 
    // setting tab bar to bottom of the page
    // setting style of icons to white and icons to ionic ones

    // tab1: home
    // tab2: map
    // tab3: friends feed
    // tab4: calendar/user memories
    // tab5: user settings

    <IonTabs>
        
        <IonRouterOutlet>
            <Route path="/tabs/home" render={() => <Home />} exact={true} />
            <Route path="/tabs/map" render={() => <Map/>} exact={true} />
            <Route path="/tabs/Settings" render={() => <Settings />} exact={true} />
            <Route path="/tabs/Calendar" render={() => <Calendar />} exact={true} />
            <Route path="/tabs/Friends" render={() => <Friends />} exact={true} />
            <Route path="/tabs" render={() => <Redirect to="/tabs/home" />} exact={true} />
        </IonRouterOutlet>


        <IonTabBar slot="bottom">

            <IonTabButton tab="tab1" href="/tabs/home">
                <IonIcon style={{ color: 'white' }} icon={home} />
            </IonTabButton>


            <IonTabButton tab = "tab2" href="/tabs/map">
                <IonIcon style={{ color: 'white' }} icon={navigate} />
            </IonTabButton>

            <IonTabButton tab="tab3" href="/tabs/friends">
                <IonIcon style={{ color: 'white' }} icon={people} />
            </IonTabButton>

            <IonTabButton tab="tab4" href="/tabs/calendar"> 
                <IonIcon style={{ color: 'white' }} icon={calendar} />
            </IonTabButton>

            <IonTabButton tab="tab5" href="/tabs/set">
                <IonIcon style={{ color: 'white' }} icon={settings} />
            </IonTabButton>

        </IonTabBar>


    </IonTabs>



  );
};

// exporting the page in var tabs
export default Tabs;
