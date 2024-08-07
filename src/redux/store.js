import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/authSlice";
import { spinerEl } from "./slice/spinerSlice";
import { tokenSlice } from "./slice/token";
import { cartReducer } from "./slice/cartSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  debug: true,
};

const rootReducer = combineReducers({
  authLogin: loginSlice.reducer,
  onSpiner: spinerEl.reducer,
  setToken: tokenSlice.reducer,
  cartReducer:cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
