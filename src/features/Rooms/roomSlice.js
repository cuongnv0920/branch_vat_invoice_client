import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import roomApi from "../../api/roomApi";

export const create = createAsyncThunk("room/create", async (payload) => {
  const data = await roomApi.create(payload);

  return data;
});

export const edit = createAsyncThunk("room/edit", async (payload) => {
  const data = await roomApi.update(payload);

  return data;
});

export const deleted = createAsyncThunk("room/delete", async (payload) => {
  const data = await roomApi.delete(payload);

  return data;
});

const roomSlice = createSlice({
  name: "room",
  initialState: {},
  reducers: {
    selected(state, action) {
      return (state = action.payload);
    },

    removeSelected(state) {
      return (state = {});
    },
  },
  extraReducers: {
    [create.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [edit.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [deleted.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = roomSlice;
export const { selected, removeSelected } = actions;
export default reducer;
