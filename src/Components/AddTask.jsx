import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddToDo } from '../redux.js/actions'
import './StyleSheet.css';

const AddTask = () => {
   
  const[toDo, setToDo] = useState('')

  const handleChange=(e)=>{setToDo(e.target.value)}

  const dispatch=useDispatch()


  const handleAdd = (x) => {
    let newToDo ={ 
      id:Math.random(),
      description: x, 
      status:false   } 
    dispatch(AddToDo(newToDo)) 
 
    }

    const handleSubmit=(e)=>{ e.preventDefault() 
                               handleAdd(toDo)
                               setToDo('')
                               }

 

  return (
    <div > 
           <div className='InputContainer'> 
           <h3 className='colorAction'> Add to list </h3> 
           <form onSubmit={handleSubmit}>
            <input   type="text" value={toDo} onChange={handleChange}  placeholder="Add new to do "/>   
            <button   type="submit" value="Add">  ADD  </button> 
            </form> 
            
            </div>
    </div>
  )
}

export default AddTask