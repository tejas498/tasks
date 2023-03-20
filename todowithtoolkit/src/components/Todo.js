import React, { useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { addTodo , delAllTodo , delTodo ,editTodo } from '../store/slices/todoSlice'
import { useDispatch , useSelector } from 'react-redux'

const Todo = () => {

  const [ input , setInput ] = useState("");
  const [ edit , setEdit ] = useState(false);
  const [ editid , setEditid ] = useState(null);
  const todos = useSelector( state => state.todos)

  const dispatch = useDispatch();
  const handleAdd = ( ) => {
    dispatch(addTodo(input))
    setInput("")
  }

  const del = ( index ) => {
    dispatch(delTodo(index))
  }

  const dAll = () =>{
    dispatch(delAllTodo());
  }

  const handleEdit = () => {
    dispatch(editTodo({
      id: editid,
      text: input,
    }))
    setEdit(false)
    setEditid(null)
    setInput("")
  }
  return (

    <>
        <h1 className='text-primary mt-4'>TODO WITH REDUX-TOOLKIT</h1>
        <input type="text"
               placeholder='Add data here'
               value={input}
               onChange={(e) => setInput(e.target.value)}
               className="mt-3 "
        ></input>
        {
          edit ? <button className='btn btn-primary ms-2' onClick={handleEdit}>SAVE</button> 
          : <button className='btn btn-primary ms-2' onClick={handleAdd}>ADD</button>
        }
        {
                todos.map((ele) => {
                    return (
                        <div className='container shadow-sm d-flex justify-content-around mt-3 bg-light'>
                            <h3>{ele.text}</h3>
                            <button className=' btn btn-primary text-white' onClick={() => {setInput(ele.text); setEdit(true); setEditid(ele.id)}}>EDIT</button>
                            <button className=' btn btn-primary text-white' onClick={() => del(ele.id)}>DELETE</button>
                        </div>
                    )
                })
            }

        <div>
          <button className='btn btn-primary mt-3' onClick={dAll}>DELETE ALL</button>
        </div>
    </>
  )
}

export default Todo