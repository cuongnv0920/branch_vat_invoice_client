import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import drawerReducer from "../components/Drawer/drawerSlice";
import incoiceReducer from "../features/Invoices/invoiceSlice";

const rootReducer = {
  auth: authReducer,
  drawer: drawerReducer,
  invoice: incoiceReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
