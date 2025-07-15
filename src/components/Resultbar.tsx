interface ResultbarProps {
  currentOperand?: string;
  previousOperand?: string;
  operation?: any;
}

const Resultbar = ({ currentOperand, previousOperand, operation }: ResultbarProps) => {
  return (
    
    <div className='row-span-2 w-full h-full mb-2 bg-black rounded-t-md flex flex-col justify-around font-jetbrains text-white p-2 overflow-hidden'>
        <div className="  h-full text-xs break-words ">{currentOperand} {operation}</div>
        <div className="  h-full text-xl font-bold break-words">{previousOperand}</div>
    </div>
  )
}

export default Resultbar
