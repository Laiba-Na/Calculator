import { ACTIONS } from "./InnerBody"

interface Prop
{
    dispatch : React.Dispatch<{type: string, payload?: any}>
    operation: string
}

const OperationButton = ( {dispatch , operation} :Prop) => {
  return (
    <button  className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'
     onClick={
        () => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})
    }>{operation}</button>
  )
}

export default OperationButton