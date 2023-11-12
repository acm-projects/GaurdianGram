import { IonApp, IonLabel, IonRouterOutlet, setupIonicReact, IonTabs, IonTabBar, IonTabButton, IonIcon  } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';


import Tabs from './pages/Tabs';
import Home from './pages/Button';
import Feed from './pages/Feed';
import Map from './pages/Map';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import IndivPost from './pages/IndivPost';
import Camera from './pages/camera';
//import POST from './pages/api/signup';
import Friends from './pages/Friends';
import Settings from './pages/Settings';
import Comments from './pages/Comments';
import WelcomePage from './pages/WelcomePage';
import GeoSettings from './pages/GeoLocSettings';

setupIonicReact({});

window.matchMedia("(prefers-color-scheme: dark)").addListener(async (status) => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {}
});

const AppShell = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/tabs" render={() => <Tabs />} />
          <Route path="/" render={() => <WelcomePage />} exact={true} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route path="/tabs/feed/friends" render={() => <Friends />} />
          <Route path="/friends" render={() => <Friends />} />
          <Route path="/settings/geo" render={() => <GeoSettings />} />

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;