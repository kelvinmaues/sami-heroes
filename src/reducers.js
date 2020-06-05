import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// reducers
import justiceRoom from "./reducers_and_actions/justiceRoom";
import request from "./reducers_and_actions/request";

const persistJusticeRoomConfig = {
  key: "justiceRoom",
  storage,
};

export default combineReducers({
  justiceRoom: persistReducer(persistJusticeRoomConfig, justiceRoom),
  request,
});
