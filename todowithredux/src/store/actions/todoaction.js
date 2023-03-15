export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        payload: text,
    }
}

export const delTodo = (index) => {
    return {
        type: "DEL_TODO",
        payload: index
    }
}

export const delAll = () => {
    return {
        type: "DEL_ALL"
    }
}

export const editTodo = (index, itext) => {
    return {
        type: "EDIT_TODO",
        payload: {
            id: index,
            text: itext,
        }
    }
}

export const inc = () => {
    return {
        type: "INC"
    }
}

export const dec = () => {
    return {
        type: "DEC"
    }
}