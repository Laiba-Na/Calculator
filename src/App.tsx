import { useReducer } from "react";
import Buttons from "./components/Buttons"
import CalculatorBaseCard from "./components/CalculatorBaseCard"
import Navbar from "./components/Navbar"
import Resultbar from "./components/Resultbar"
import { reducer } from "./components/CalculatorFuntion";


function App() {

  const [{currentOperand , previousOperand , operation}, dispatch] = useReducer(reducer , {});
  

  return (
    
    <div className=" Main w-full">
      <Navbar/>
      <CalculatorBaseCard>
        <Resultbar currentOperand={currentOperand} previousOperand={previousOperand}  operation={operation} />
        <Buttons  dispatch={dispatch}/>
      </CalculatorBaseCard>
    </div>
    
  )
}

export default App
