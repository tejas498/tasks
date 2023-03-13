import React, { useReducer, useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const Todo = () => {

    const ADD_TODO = "ADD_TODO"
    const DEL_TODO = "DEL_TODO"
    const EDIT_TODO = "EDIT_TODO"
    const DELALL_TODO = "DELALL_TODO"

    const [input , setInput] = useState("");
    const reducer = (state , action) => {
        // console.log(state , action.type);
        switch(action.type){
            case ADD_TODO:
                setInput("")
                return [
                    ...state,
                    {
                        id: new Date().getTime().toString(),
                        text: action.payload
                    },
                ];
            case EDIT_TODO:
                setInput(action.payload.text)
                return state.map((ele) => {
                    if( ele.id === action.payload.id){
                        setInput("")
                        return { ...ele , text: action.payload.text}
                    }
                    else{
                        setInput("")
                        return ele;
                    }
                })
            case DEL_TODO:
                return state.filter((ele) => ele.id !== action.payload);   
            case DELALL_TODO:
                state = []
                return state
            default:
                return state;
        }
    }

    const handleEdit = () => {
        dispatch( { type: EDIT_TODO , payload : { id: editid , text: input}})
        setEdit(false)
        setEditid(null)
    }

    const [ state , dispatch] = useReducer(reducer , []);
    const [ edit , setEdit] = useState(false)
    const [ editid , setEditid ] = useState(null)
    return (
        <>
            <h1 className='text-primary mt-5'>Todo List </h1>
            <input type="text" 
                placeholder='add data here'
                className='mt-3'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></input>
            {
                edit ? <button className=' btn btn-primary text-white' onClick={handleEdit}>SAVE</button> :
                <button className=' btn btn-primary text-white' onClick={() => dispatch( { type: "ADD_TODO" , payload: input})}>ADD</button> 
            }
            {/* <button className=' btn btn-primary text-white' onClick={() => dispatch( { type: "ADD_TODO" , payload: input})}>ADD</button>  */}

            {
                state.map((ele) => {
                    return (
                        <div className='container shadow-sm d-flex justify-content-around mt-3 bg-light'>
                            <h3>{ele.text}</h3>
                            <button className=' btn btn-primary text-white' onClick={() => {setInput(ele.text); setEdit(true); setEditid(ele.id)}}>EDIT</button>
                            <button className=' btn btn-primary text-white' onClick={() => dispatch( { type: "DEL_TODO" , payload: ele.id})}>DELETE</button>
                        </div>
                    )
                })
            }
            <div className='mt-3'>
                <button className=' btn btn-primary text-white' onClick={() => dispatch({type: "DELALL_TODO"})}>DELETE All</button>
            </div>     
        </>
    )
}

export default Todo