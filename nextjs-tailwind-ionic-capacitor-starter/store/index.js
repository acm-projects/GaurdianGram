import { Store as PullStateStore } from 'pullstate';

import { lists, homeItems, profileItems, profileItems, notifications, users } from '../mock';

const Store = new PullStateStore({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  notificationsOpen: false,
  currentPage: null,
  homeItems,
  profileItems,
  profileItems,
  lists,
  notifications,
  users,
  settings: {
    enableNotifications: true,
  },
});

export default Store;
