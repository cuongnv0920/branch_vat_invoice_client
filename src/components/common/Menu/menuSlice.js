import { createSlice } from "@reduxjs/toolkit";

const toogleMenu = createSlice({
  name: "toogleMenu",
  initialState: true,
  reducers: {
    openMenu(state) {
      return (state = true);
    },

    closeMenu(state) {
      return (state = false);
    },
  },
});

const { actions, reducer } = toogleMenu;
export const { openMenu, closeMenu } = actions;
export default reducer;
