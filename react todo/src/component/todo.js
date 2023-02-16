import React, {useState , useEffect} from "react";
import '../App.css'

const Todo = () => {

    const getLocalData = () => {
        let list = localStorage.getItem('lists');

        if(list){
            return JSON.parse(localStorage.getItem('lists'));
        }else{
            return [];
        }
    }


    const [inputdata , setInputdata] = useState('');
    const [items, setItems] = useState(getLocalData());
    const [toggle , setToggle] = useState(true);
    const [iseditItem , setIsedititem] = useState(null);
    
    useEffect(() => {
        localStorage.setItem('lists' , JSON.stringify(items))
    },[items])

    const addItem = () => {
        if(!inputdata){

        }else if(inputdata && !toggle){
            setItems(
                items.map((ele) => {
                    if(ele.id === iseditItem){
                        return { ...ele,name:inputdata}
                    }
                    return ele;
                })
            )
            setInputdata("");
            setToggle(true)
            setIsedititem(null);
        }
        else{
            const allInputData = { id:new Date().getTime().toString() , name: inputdata}
            setItems([...items,allInputData]);
            setInputdata("");
        }
    }

    const delItem = (index) => {
        // console.log(id);
        const updatedItem = items.filter((ele) => {
            return index != ele.id;
        })
        setItems(updatedItem);
    }

    const delAll = () => {
        setItems([]);
    }

    const editItem = (id) => {
        let editItem = items.find((ele) => {
            return ele.id === id
        })
        setToggle(false);

        setInputdata(editItem.name);
        setIsedititem(id);
        
    }

    return (
        <>  
            {toggle ? <h1 style={{ textAlign: "center"}}>Todo List</h1> : <h1 style={{    textAlign: "center"}}>Editing</h1>
            }
            <div className="todo">
                <input type="text" 
                    placeholder="Add Data" 
                    value={inputdata}
                    onChange={(e) => setInputdata(e.target.value)}
                />
                {
                    toggle ? <button onClick={addItem}>ADD</button> : <button onClick={addItem}>UPDATE</button>
                }
                
            </div>
            
                {
                    items.map((ele) => {
                        return(
                            <div className="item" key={ele.id}>
                                <h3>{ele.name}</h3>
                                <button onClick={() => delItem(ele.id)}>Delete</button>
                                <button onClick={() => editItem(ele.id)}>Edit</button>
                            </div>
                        );
                    })
                }
                
            <div className="container">
                <button className="center" onClick={delAll}>Delete All</button>    
            </div>  
        </>
    );
}

export default Todo;