import { DISPLAY,DELETE,COMPLETE,EDIT,TODO,FILTRED} from "./actionTypes"




const tasks={
   task1:[ {id:Math.random(),
            description: 'Call Mum',
            status: false},
          {id:Math.random(),
            description: 'Make breakfast',
            status: false},
          {id:Math.random(),
            description: 'Take the kids',
            status: false}
        ],
   FiltredAction:true

}
const reducer=(state=tasks,{type,payload})=> {
    switch (type) {
        case  DELETE:
          return {
           ...state,task1: state.task1.filter(el=>el.id!==payload)
          } 
          case  COMPLETE:
            return {
             ...state,task1: state.task1.map(el=>el.id==payload? 
                             {...el,status: !el.status} :el  )

            } 
           case  EDIT:
            return {
             ...state,task1: state.task1.map(el=>el.id===payload.id?
                                              payload:el)
                             
            } 
          case  TODO:
            return {
             ...state,task1: [...state.task1,payload]

            }   
          case  FILTRED:
            return {
             ...state, FiltredAction: !state.FiltredAction
            } 
    
        default:
          return state
    }
}
export default reducer