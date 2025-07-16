
import CalculatorBaseCard from "./components/CalculatorBaseCard"
import Navbar from "./components/Navbar"

import InnerBody from "./components/InnerBody";


function App() {


  

  return (
    
    <div className=" Main w-full">
      <Navbar/>
      <CalculatorBaseCard>
        <InnerBody/>
      </CalculatorBaseCard>
    </div>
    
  )
}

export default App
