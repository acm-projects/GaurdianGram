import { createSelector } from 'reselect';

const getState = state => state;

export const getHomeItems = createSelector(getState, state => state.homeItems);
export const getLists = createSelector(getState, state => state.lists);
export const getNotifications = createSelector(getState, state => state.notifications);
export const getSettings = createSelector(getState, state => state.settings);
export const getProfile = createSelector(getState, state => state.profile);
export const getUsers = createSelector(getState, state => state.users);