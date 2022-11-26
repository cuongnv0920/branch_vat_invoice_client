import { configureStore } from "@reduxjs/toolkit";
import toogleMenuReducer from "../components/common/Menu/menuSlice";
import categoryReducer from "../features/Category/categorySlice";

const rootReducer = {
  toogleMenu: toogleMenuReducer,
  category: categoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
