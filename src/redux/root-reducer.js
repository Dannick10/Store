import { combineReducers } from "redux";

import productsReduce from "./products/productsReduce";

const rootReducer = combineReducers({ productsReduce })

export default rootReducer