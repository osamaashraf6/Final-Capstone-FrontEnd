/* eslint-disable no-param-reassign */
/* eslint camelcase: "off" */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const classURL = 'http://127.0.0.1:3000/swim_classes';

export const getSwim_classes = createAsyncThunk(
  'swim_classes/getSwim_classes',
  async () => {
    const response = await fetch(classURL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    });
    const swim_classes = await response.json();
    return swim_classes;
  },
);

export const deleteClass = createAsyncThunk(
  'swim_classes/deleteClass',
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
  'swim_classes/postClass',
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
  'swim_classes/updateClass',
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

export const swim_classesSlice = createSlice({
  name: 'swim_classes',
  initialState: {
    cswim_classes: [],
    status: null,
    postStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteClass.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      swim_classes: state.swim_classes.filter(
        (swim_class) => swim_class.id !== action.payload,
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
      swim_classes: [...state.swim_classes, action.payload],
    }));
    builder.addCase(postClass.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(postClass.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(getSwim_classes.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      swim_classes: action.payload,
    }));
    builder.addCase(getSwim_classes.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(getSwim_classes.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
  },
});

export const { swim_classesReducer } = swim_classesSlice.actions;

export default swim_classesSlice.reducer;
