import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// reducers
import justiceRoom from "./application/redux-duck";

const persistJusticeRoomConfig = {
  key: "justiceRoom",
  storage,
};

export default combineReducers({
  justiceRoom: persistReducer(persistJusticeRoomConfig, justiceRoom),
});
