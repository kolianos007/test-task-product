import { combineReducers } from "redux";
import products from "./productsReducer";

const rootReducer = combineReducers({products});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export default rootReducer;
