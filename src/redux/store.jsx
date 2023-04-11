/* eslint camelcase: "off" */
import { configureStore } from '@reduxjs/toolkit';
import swim_classesRedux from './swim_class/swim_class';
import bookingsRedux from './bookings/bookings';

const store = configureStore({
  reducer: {
    swim_classes: swim_classesRedux,
    bookings: bookingsRedux,
  },
});

export default store;
