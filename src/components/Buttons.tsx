import DigitButton from "./DigitButton"

interface Props
{
  dispatch: React.Dispatch<any>
}

const Buttons = ({dispatch} :Props) => {
  return (
    <div className='row-span-8 row-start-3 grid grid-cols-4 grid-rows-5 gap-1 font-jetbrains font-bold text-2xl w-full h-full place-items-center '>

        <button className='w-full h-full bg-Fourth text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>AC</button>
        <button className='w-full h-full bg-Fourth text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>DEL</button>
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>√</button>
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>+</button>
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>-</button>
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>*</button>
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5'>/</button>
        <DigitButton  digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button className='w-full h-full bg-Second text-white shadow-sm hover:bg-gradient-to-bl from-Second/10 via-Third/10 to-Fourth/5 rounded-br-md col-span-2'>=</button>
       
        
    </div>
  )
}

export default Buttons