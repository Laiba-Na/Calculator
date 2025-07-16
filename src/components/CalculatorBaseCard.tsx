import React from 'react'

interface Prop
{
    children: React.ReactNode;
}

const CalculatorBaseCard = ({children} :Prop) => {
  return (
    <div className='bg-First  rounded-lg shadow-lg p-6 w-[400px] h-[500px] m-20 justify-self-center '>
        {children}
    </div>
  )
}

export default CalculatorBaseCard