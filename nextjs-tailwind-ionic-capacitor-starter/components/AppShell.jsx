import { IonApp, IonLabel, IonRouterOutlet, setupIonicReact, IonTabs, IonTabBar, IonTabButton, IonIcon  } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';


import Tabs from './pages/Tabs';
import Home from './pages/Home';
import Friends from './pages/Friends';
import Map from './pages/Map';
import Set from './pages/Set';
import Calendar from './pages/Calendar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from "./pages/Profile";
import IndivPost from './pages/IndivPost';


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
          <Route path="/" render={() => <Redirect to="/tabs/home" />} exact={true} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route path="/indivPost" render={() => <IndivPost />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;