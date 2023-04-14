/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBookings = createAsyncThunk(
  'bookings/getBookings',
  async () => {
    const response = await fetch('https://rails-wout.onrender.com/bookings', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    });
    const bookings = await response.json();
    return bookings;
  },
);
export const postBooking = createAsyncThunk(
  'bookings/postBooking',
  async (data) => {
    const response = await fetch('https://rails-wout.onrender.com/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(data.booking),
    });
    const reservations = await response.json();
    return reservations;
  },
);

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    status: null,
  },
  reducers: {
    setStatus(state) {
      state.status = null;
    },
  },
  extraReducers: {
    [postBooking.fulfilled]: (state, action) => {
      state.bookings = [...state.bookings, action.payload];
      state.status = 'success';
    },
    [postBooking.pending]: (state) => {
      state.status = 'loading';
    },
    [postBooking.rejected]: (state) => {
      state.status = 'failed';
    },
    [getBookings.pending]: (state) => {
      state.status = 'loading';
    },
    [getBookings.fulfilled]: (state, action) => {
      const bookings = action.payload.map((booking) => {
        const {
          id: bookingId,
          start_time: bookingDate,
          end_time: bookingDateEnd,
          user_id: bookingUserId,
          swim_class_id: bookingClassId,
        } = booking;
        return {
          bookingId,
          bookingDate,
          bookingDateEnd,
          bookingUserId,
          bookingClassId,
        };
      });
      state.bookings = bookings;
      state.status = 'success';
    },
    [getBookings.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { bookingsReducer, setStatus } = bookingsSlice.actions;

export default bookingsSlice.reducer;
