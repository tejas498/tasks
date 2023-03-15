const initialstate = [];

const todoreducer = (state = initialstate , action ) => {
    switch(action.type){
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: new Date().getTime().toString(),
                    text: action.payload,
                    complete: false
                },
            ];
        case "EDIT_TODO":
            return state.map((ele) => {
                if( ele.id === action.payload.id){
                    return { ...ele , text: action.payload.text}
                }
                else{
                    return ele;
                }
            })
        case "DEL_TODO":
            return state.filter((ele) => ele.id !== action.payload);
        case "DEL_ALL":
            return state = []; 
        default:
            return state;
    }
}

export default todoreducer