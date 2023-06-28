import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import notificationReducer from './notification-slice'





const store = configureStore({
    reducer: {

        notification: notificationReducer,

    },

});


export {store}