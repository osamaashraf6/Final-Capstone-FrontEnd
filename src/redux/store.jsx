import { configureStore } from '@reduxjs/toolkit';
import swimClassesRedux from './swimClass/swimClass';
import bookingsRedux from './bookings/bookings';

const store = configureStore({
  reducer: {
    swimClasses: swimClassesRedux,
    bookings: bookingsRedux,
  },
});

export default store;
