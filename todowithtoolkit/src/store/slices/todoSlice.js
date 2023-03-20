import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "Todo",
    initialState: [],
    reducers: {
        addTodo(state,action){
            return [ 
                ...state,
                {
                    id: new Date().getTime().toString(),
                    text: action.payload
                }
            ]
         },
        delTodo(state,action){
            return state.filter((ele) => ele.id !== action.payload)
         },
        editTodo(state,action){
            return state.map((ele) => {
                if ( ele.id === action.payload.id) {
                    return { ...ele , text: action.payload.text}
                }
                else{
                    return ele;
                }
            })
         },
        delAllTodo(state,action){
            return state = [];
         },
    }
})


export const { addTodo , delAllTodo , delTodo , editTodo} = userSlice.actions;
export default userSlice.reducer;