import { handleDelete} from "../redux.js/actions"
import { handleComplete } from "../redux.js/actions"
import { handleEdit } from "../redux.js/actions"
import { useDispatch, useSelector } from 'react-redux';  
import Modal from 'react-modal';
import { useState } from "react";
import React from "react";
import './StyleSheet.css';

const Task = ({action}) => {

// MODAL import//////////////////////////////////////////////////////////////////////////////////////////
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const [modalIsOpen, setIsOpen] = React.useState(false);
 function openModal() {
  setIsOpen(true);
}

function closeModal() {
  setIsOpen(false);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////



  const dispatch = useDispatch()
  const {task1} = useSelector(state=>state)
  // const description = useSelector(state=>state.task1)
  console.log(task1)

  const  [desc, setDesc] =useState(action.description)
  
  const handleSubmit=(e)=>{ e.preventDefault() 
                           let EditToDo ={ 
                           id:action.id,
                           description: desc, 
                           status:action.status   } 
                           dispatch(handleEdit(EditToDo))
                           closeModal()
    }


  return (
    <div>
     <div className="ActionContainer">
     <h3 className="colorAction"> {action.description} {action.status? "✓ ":" × " }</h3>
     <button className="Btn"   nClick={()=>dispatch(handleDelete(action.id))}> Delete </button> 
     <button className="Btn" onClick={()=>dispatch(handleComplete(action.id))}> DONE  </button> 
     <button className="Btn"  onClick={openModal}> Edit </button> 
     </div>

     <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          >
         <div >
             
            <h3 > EDIT TasK </h3>
            <form onSubmit={handleSubmit}  >
                   
            <input   type="text" value={desc}  onChange={(e)=>setDesc(e.target.value)}  placeholder="Modify your task"/>  
                   
            <input   type="submit" value="Change"/>  
            </form>   
        </div>
          
        </Modal>



    </div>
  )
}

export default Task