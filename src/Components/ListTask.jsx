import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Filtred } from '../redux.js/actions';
import './StyleSheet.css';
import Task from './Task';



const ListTask = ( ) => {
  
  const {task1,FiltredAction} = useSelector(state=>state)
  // const description = useSelector(state=>state.task1)
  console.log(task1)
  const dispatch=useDispatch()

  
  return (
     <div> 
     {FiltredAction? 
                              <div>
                                                                  
                                 {task1.filter(task1=>task1.status).map( el =>
                                  <div key={el.id}> 
                                    <Task action={el}/>
                                  </div> 
                                  )}
                                
                              </div>

                              :
                              <div>
                              {task1.map( el =>
                                  <div key={el.id}> 
                                    <Task action={el}/>
                                   </div> 
                              )}
                             
                              </div>
     }
     <br />
     <div className='FilterContainer'>
     <button className='ListBtn'  onClick={()=>dispatch(Filtred())}> {FiltredAction? "All":"List done Actions"} </button>
     <h4 className='colorAction'> Done Actions : {task1.filter(task1=>task1.status).length} </h4>
     <h4 className='colorAction'> UnDone Actions : {task1.filter(task1=>!task1.status).length} </h4> 
     </div>

     </div>
  )
}

export default ListTask