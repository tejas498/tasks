import React , { useState} from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useSelector , useDispatch } from 'react-redux';
import { addTodo, dec, delAll, delTodo, editTodo, inc } from './store/actions/todoaction';

const Todos = () => {

    const [ input , setInput] = useState("")
    const [ edit , setEdit] = useState(false)
    const [ edititem , setEdititem] = useState(null)
    const data = useSelector((state) => state.todoreducer)
    const number = useSelector( state => state.chngNumber)
    const dispatch = useDispatch()

    const handleEdit = ( ) => {
        dispatch(editTodo(edititem,input));
        setEdit(false); 
        setEdititem(null)
        setInput("")
    }

    return (
        <>
            <h1 className='text-primary mt-4'>TODO WITH REDUX</h1>
            <input type="text"
                   placeholder='add data here'
                   className='mt-3'
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
            ></input>
            {
                edit ? <button className='btn btn-primary ms-2' onClick={handleEdit}> SAVE </button>
                : <button className='btn btn-primary ms-2' onClick={() => {dispatch(addTodo(input)); setInput("")}}> ADD </button>
            }

            {
                data.map((ele) => {
                    return (
                        <div className='container shadow-sm d-flex justify-content-around mt-3 bg-light'>
                            <h3>{ele.text}</h3>
                            <button className=' btn btn-primary text-white' onClick={() => { setInput(ele.text); setEdit(true); setEdititem(ele.id)}}>EDIT</button>
                            <button className=' btn btn-primary text-white' onClick={ () => dispatch(delTodo(ele.id))}>DELETE</button>
                        </div>
                    )
                })
            }
            <div className='mt-3'>
                <button className=' btn btn-primary text-white' onClick={() => dispatch(delAll())}>DELETE All</button>
            </div>
            
            <h1 className='mt-4 text-primary'>Inc/Dec</h1>
            
            <button className=' btn btn-primary text-white me-2 mt-1' onClick={() => dispatch(dec())}>DEC</button>
            <input type="text" value={number} className="mt-4"></input>
            <button className=' btn btn-primary text-white ms-2 mt-1' onClick={() => dispatch(inc())}>INC</button>
        </>
    )
}

export default Todos