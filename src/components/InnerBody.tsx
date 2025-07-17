import { useReducer } from "react";
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton";



export const ACTIONS =
{
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate'
}



interface Actions
{
    type: string;
    payload?: any;
}

function reducer(state : any, {type , payload} : Actions )  {

  switch(type) {
      case ACTIONS.ADD_DIGIT:
        if (state.overWrite) {
          return {
            ...state,
            overWrite: false,
            currentOperand: payload.digit
          }
        }
        if(payload.digit === '0' && state.currentOperand ==='0')
            return state;
        if (payload.digit ==='.' && state.currentOperand?.includes('.'))
            return state;
            return {
              ...state ,
              currentOperand: `${state.currentOperand || ""}${payload.digit}`
          }

          
      case ACTIONS.CLEAR:
            return {};

      case ACTIONS.DELETE_DIGIT:
        if (state.overWrite) return {
          ...state,
          overWrite: false,
          currentOperand: null
        }
        if (state.currentOperand == null) return state;
        if (state.currentOperand.length === 1) {
          return {
            ...state,
            currentOperand: null
          }
        }
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1)
        }




      case ACTIONS.EVALUATE:
        if (state.currentOperand == null || state.previousOperand == null || state.operation == null)
          return state;
        if (state.operation === "/" && state.currentOperand === "0")
          return {
            ...state,
            currentOperand: "Error: Division by zero",
            previousOperand: null,
            operation: null
          }

        return{
          ...state,
          overWrite: true,
          previousOperand: null,
          operation: null,
          currentOperand: evaluate(state)
        }
        


    

      case ACTIONS.CHOOSE_OPERATION:
        const unaryOperations = ["√"];
        if (unaryOperations.includes(payload.operation)) {
          if (state.currentOperand != null) {
            let num = parseFloat(state.currentOperand);
            if (!isNaN(num)) {
              let result = 0;
              switch (payload.operation) {
                case "√":
                  result = Math.sqrt(num);
                  break;
              }
              return { ...state, currentOperand: result.toString() };
            }
          }
          return state;
        } else {
          // Existing logic for binary operations
  if (state.currentOperand == null && state.previousOperand == null)
    return state;
  if (state.currentOperand == null) {
    return {
      ...state,
      operation: payload.operation,
    };
  }
  if (state.previousOperand == null)
    return {
      ...state,
      operation: payload.operation,
      previousOperand: state.currentOperand,
      currentOperand: null,
    };
  return {
    ...state,
    previousOperand: evaluate(state),
    operation: payload.operation,
    currentOperand: null,
  };
}

      
  }
}


function evaluate({currentOperand , previousOperand , operation} : any) {

  const prev = parseFloat(previousOperand );
  const current = parseFloat(currentOperand );
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = null;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    case "√":
      computation = Math.sqrt(current);
      break;

    default:
      return "";
    
  }
  return computation?.toString();
}

const IntegerFormat = new Intl.NumberFormat("en-us", { maximumFractionDigits: 0});

function formatOperand(operand : any) {
  if (operand == null) return "";
  const [integer, decimal] = operand.split(".");
  if (decimal == null) {
    return IntegerFormat.format(parseFloat(operand));
  }
  return `${IntegerFormat.format(parseFloat(integer))}.${decimal}`;
}



const InnerBody = () => {

  const [{currentOperand , previousOperand , operation} , dispatch] = useReducer(reducer , {});




 
    

  return (
    <div className="grid grid-rows-10 grid-cols-1 place-items-center w-full h-full">


      <div className='row-span-2 w-full h-full mb-2 bg-black rounded-t-md flex flex-col justify-around font-jetbrains text-white p-2 overflow-hidden'>
        <div className="  h-full text-xs 2xl:text-3xl xl:text-xl max-sm:text-[10px] break-words ">{previousOperand} {operation}</div>
        <div className="  h-full text-xl 2xl:text-5xl xl:text-3xl max-sm:text-sm font-bold break-words">{formatOperand(currentOperand)}</div>
    </div>
    
    <div className='row-span-8 row-start-3 grid grid-cols-4 grid-rows-5 gap-1 font-jetbrains font-bold text-2xl 2xl:text-5xl xl:text-3xl max-sm:text-sm w-full h-full place-items-center '>
        <button className='w-full h-full bg-Fourth text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5' onClick={()=>dispatch({type: ACTIONS.CLEAR})}>AC</button>
        <button className='w-full h-full bg-Fourth text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5' onClick={()=>dispatch({type: ACTIONS.DELETE_DIGIT})} >DEL</button>
        <OperationButton operation="√" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />        
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="/" dispatch={dispatch} />
        <DigitButton  digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5 rounded-br-md col-span-2'  onClick={()=>dispatch({type: ACTIONS.EVALUATE})}>=</button> 
    </div>


    </div>
  )
}

export default InnerBody