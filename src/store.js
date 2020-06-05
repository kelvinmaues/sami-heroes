import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore } from "redux-persist";
import loggerMiddleware from "./middlewares/LoggerMiddleware";
import reducers from "./reducers";

const middlewares = [thunkMiddleware];
middlewares.push(loggerMiddleware);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

export const store = createStore(reducers, enhancer);
export const persistor = persistStore(store);
