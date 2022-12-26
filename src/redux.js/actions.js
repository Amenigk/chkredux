import { DISPLAY,DELETE,COMPLETE,EDIT,TODO, FILTRED} from "./actionTypes"
 

export const diplay = (x) => {
    return {
        type: DISPLAY,
        payload:x
    }
}
export const handleDelete = (x) => {
    return {
        type: DELETE,
        payload:x
    }
}
export const handleComplete = (x) => {
    return {
        type: COMPLETE,
        payload:x
    }
}
export const handleEdit = (x) => {
        return {
            type: EDIT,
            payload:x
        }  
    }
export const AddToDo = (x) => {
            return {
                type: TODO,
                payload:x
            }  
}
export const Filtred = (x) => {
    return {
        type: FILTRED
        
    }  
}

