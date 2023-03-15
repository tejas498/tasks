import { todoreducer , chngNumber } from "./todoreducer";

import { combineReducers} from "redux";

const rootReducer = combineReducers( {
    todoreducer,
    chngNumber,
})

export default rootReducer;