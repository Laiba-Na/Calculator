import {ACTIONS} from './ACTIONS';

interface Prop
{
    dispatch : React.Dispatch<any>
    digit: string
}

const DigitButton = ( {dispatch , digit} :Prop) => {
  return (
    <button  className='w-full h-full bg-white/10 text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'
     onClick={
        () => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})
    }>{digit}</button>
  )
}

export default DigitButton