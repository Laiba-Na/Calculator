import Buttons from "./components/Buttons"
import CalculatorBaseCard from "./components/CalculatorBaseCard"
import Navbar from "./components/Navbar"
import Resultbar from "./components/Resultbar"


function App() {


  return (
    <div className=" Main w-full">
      <Navbar/>
      <CalculatorBaseCard>
        <Resultbar/>
        <Buttons/>
      </CalculatorBaseCard>
    </div>
  )
}

export default App
