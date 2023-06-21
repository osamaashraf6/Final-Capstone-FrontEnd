/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const classURL = 'https://rails-i4jr.onrender.com/swim_classes';

export const getSwimClasses = createAsyncThunk(
  'swimClasses/getSwimClasses',
  async () => {
    const response = await fetch(classURL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    });
    const swimClasses = await response.json();
    return swimClasses;
  },
);

export const deleteClass = createAsyncThunk(
  'swimClasses/deleteClass',
  async (id) => {
    try {
      const response = await fetch(`${classURL}/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
      });
      return response.ok ? id : null;
    } catch (e) {
      return e.errors;
    }
  },
);

export const postClass = createAsyncThunk(
  'swimClasses/postClass',
  async (classData) => {
    await fetch(classURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(classData),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    });
  },
);
export const updateClass = createAsyncThunk(
  'swimClasses/updateClass',
  async (classData) => {
    await fetch(`${classURL}/${classData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(classData),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    });
  },
);

export const swimClassesSlice = createSlice({
  name: 'swim_classes',
  initialState: {
    swimClasses: [],
    status: null,
    postStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteClass.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      swimClasses: state.swimClasses.filter(
        (swimClass) => swimClass.id !== action.payload,
      ),
    }));
    builder.addCase(deleteClass.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(deleteClass.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(postClass.fulfilled, (state, action) => ({
      ...state,
      postStatus: 'success',
      swimClasses: [...state.swimClasses, action.payload],
    }));
    builder.addCase(postClass.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(postClass.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(getSwimClasses.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      swimClasses: action.payload,
    }));
    builder.addCase(getSwimClasses.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(getSwimClasses.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
  },
});

export const { swimClassesReducer } = swimClassesSlice.actions;

export default swimClassesSlice.reducer;
