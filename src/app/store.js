import { configureStore } from "@reduxjs/toolkit";
import toogleMenuReducer from "../components/common/Menu/menuSlice";
import categoryReducer from "../features/Category/categorySlice";
import roomReducer from "../features/Rooms/roomSlice";
import linkReducer from "../features/Links/linkSlice";

const rootReducer = {
  toogleMenu: toogleMenuReducer,
  category: categoryReducer,
  room: roomReducer,
  link: linkReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
